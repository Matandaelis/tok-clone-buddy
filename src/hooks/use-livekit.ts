import { useState, useEffect, useCallback, useRef } from "react";
import {
  Room,
  RoomEvent,
  Track,
  RemoteTrackPublication,
  RemoteParticipant,
  ConnectionState,
} from "livekit-client";
import { supabase } from "@/integrations/supabase/client";

const LIVEKIT_URL = import.meta.env.VITE_LIVEKIT_URL || "";

interface UseLiveKitOptions {
  roomName: string;
  identity?: string;
  isPublisher?: boolean;
  autoConnect?: boolean;
}

export function useLiveKit({
  roomName,
  identity,
  isPublisher = false,
  autoConnect = false,
}: UseLiveKitOptions) {
  const [room] = useState(() => new Room());
  const [connectionState, setConnectionState] = useState<ConnectionState>(
    ConnectionState.Disconnected
  );
  const [videoTrack, setVideoTrack] = useState<MediaStreamTrack | null>(null);
  const [audioTrack, setAudioTrack] = useState<MediaStreamTrack | null>(null);
  const [participantCount, setParticipantCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const connectingRef = useRef(false);

  const fetchToken = useCallback(async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) throw new Error("Not authenticated");

    const { data, error } = await supabase.functions.invoke("livekit-token", {
      body: { roomName, identity, isPublisher },
    });

    if (error) throw new Error(error.message);
    return data.token as string;
  }, [roomName, identity, isPublisher]);

  const connect = useCallback(async () => {
    if (connectingRef.current) return;
    connectingRef.current = true;
    setError(null);

    try {
      const livekitUrl = LIVEKIT_URL;
      if (!livekitUrl) throw new Error("LiveKit URL not configured");

      const token = await fetchToken();
      await room.connect(livekitUrl, token);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Connection failed";
      setError(msg);
      console.error("LiveKit connect error:", err);
    } finally {
      connectingRef.current = false;
    }
  }, [room, fetchToken]);

  const disconnect = useCallback(() => {
    room.disconnect();
  }, [room]);

  useEffect(() => {
    const handleConnectionChange = (state: ConnectionState) => {
      setConnectionState(state);
    };

    const updateParticipants = () => {
      setParticipantCount(room.remoteParticipants.size + 1);
    };

    const handleTrackSubscribed = (
      track: RemoteTrackPublication["track"],
      _pub: RemoteTrackPublication,
      _participant: RemoteParticipant
    ) => {
      if (!track) return;
      if (track.kind === Track.Kind.Video) {
        setVideoTrack(track.mediaStreamTrack);
      } else if (track.kind === Track.Kind.Audio) {
        setAudioTrack(track.mediaStreamTrack);
      }
    };

    room.on(RoomEvent.ConnectionStateChanged, handleConnectionChange);
    room.on(RoomEvent.TrackSubscribed, handleTrackSubscribed);
    room.on(RoomEvent.ParticipantConnected, updateParticipants);
    room.on(RoomEvent.ParticipantDisconnected, updateParticipants);

    return () => {
      room.off(RoomEvent.ConnectionStateChanged, handleConnectionChange);
      room.off(RoomEvent.TrackSubscribed, handleTrackSubscribed);
      room.off(RoomEvent.ParticipantConnected, updateParticipants);
      room.off(RoomEvent.ParticipantDisconnected, updateParticipants);
    };
  }, [room]);

  useEffect(() => {
    if (autoConnect && roomName) {
      connect();
    }
    return () => {
      room.disconnect();
    };
  }, [autoConnect, roomName]);

  return {
    room,
    connectionState,
    videoTrack,
    audioTrack,
    participantCount,
    error,
    connect,
    disconnect,
    isConnected: connectionState === ConnectionState.Connected,
  };
}
