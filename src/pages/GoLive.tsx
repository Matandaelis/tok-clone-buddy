import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Radio,
  Users,
  Pin,
  X,
  Camera,
  SwitchCamera,
  ShoppingBag,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useLiveKit } from "@/hooks/use-livekit";
import { ConnectionState, createLocalVideoTrack, createLocalAudioTrack, LocalVideoTrack, LocalAudioTrack } from "livekit-client";

type GoLiveStep = "setup" | "live";

const sampleProducts = [
  { id: 1, name: "Designer Handbag", price: 89.99, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200" },
  { id: 2, name: "Vintage Watch", price: 149.99, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200" },
  { id: 3, name: "Sneakers Limited Ed.", price: 199.99, image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200" },
  { id: 4, name: "Gold Necklace", price: 59.99, image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=200" },
];

const GoLive = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<GoLiveStep>("setup");
  const [title, setTitle] = useState("");
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [pinnedProduct, setPinnedProduct] = useState<number | null>(null);
  const [showProducts, setShowProducts] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const localVideoTrackRef = useRef<LocalVideoTrack | null>(null);
  const localAudioTrackRef = useRef<LocalAudioTrack | null>(null);

  const roomName = `live-${Date.now()}`;

  const {
    room,
    connectionState,
    participantCount,
    error,
    connect,
    disconnect,
    isConnected,
  } = useLiveKit({
    roomName,
    isPublisher: true,
  });

  // Camera preview during setup
  useEffect(() => {
    let track: LocalVideoTrack | null = null;

    const startPreview = async () => {
      try {
        track = await createLocalVideoTrack({ resolution: { width: 720, height: 1280 } });
        localVideoTrackRef.current = track;
        if (previewVideoRef.current) {
          track.attach(previewVideoRef.current);
        }
      } catch (err) {
        console.error("Camera preview error:", err);
      }
    };

    if (step === "setup" && cameraOn) {
      startPreview();
    }

    return () => {
      if (track) {
        track.stop();
      }
    };
  }, [step, cameraOn]);

  // Elapsed time counter
  useEffect(() => {
    if (!isConnected) return;
    const interval = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [isConnected]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleGoLive = async () => {
    if (!title.trim()) return;

    try {
      await connect();

      // Only transition if connection succeeded
      if (room.state !== ConnectionState.Connected) {
        return;
      }

      setStep("live");

      // Publish local tracks
      if (cameraOn) {
        // Stop the preview track first
        localVideoTrackRef.current?.stop();
        const videoTrack = await createLocalVideoTrack({ resolution: { width: 720, height: 1280 } });
        localVideoTrackRef.current = videoTrack;
        await room.localParticipant.publishTrack(videoTrack);
      }
      if (micOn) {
        const audioTrack = await createLocalAudioTrack();
        localAudioTrackRef.current = audioTrack;
        await room.localParticipant.publishTrack(audioTrack);
      }
    } catch (err) {
      console.error("Go live error:", err);
    }
  };

  const handleEndStream = () => {
    localVideoTrackRef.current?.stop();
    localAudioTrackRef.current?.stop();
    disconnect();
    navigate("/shows");
  };

  const toggleCamera = useCallback(async () => {
    if (cameraOn && localVideoTrackRef.current) {
      await room.localParticipant.unpublishTrack(localVideoTrackRef.current);
      localVideoTrackRef.current.stop();
      localVideoTrackRef.current = null;
    } else if (!cameraOn && isConnected) {
      const track = await createLocalVideoTrack({ resolution: { width: 720, height: 1280 } });
      localVideoTrackRef.current = track;
      await room.localParticipant.publishTrack(track);
    }
    setCameraOn(!cameraOn);
  }, [cameraOn, room, isConnected]);

  const toggleMic = useCallback(async () => {
    if (micOn && localAudioTrackRef.current) {
      await room.localParticipant.unpublishTrack(localAudioTrackRef.current);
      localAudioTrackRef.current.stop();
      localAudioTrackRef.current = null;
    } else if (!micOn && isConnected) {
      const track = await createLocalAudioTrack();
      localAudioTrackRef.current = track;
      await room.localParticipant.publishTrack(track);
    }
    setMicOn(!micOn);
  }, [micOn, room, isConnected]);

  const currentPinned = sampleProducts.find((p) => p.id === pinnedProduct);

  // Setup screen
  if (step === "setup") {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Camera preview */}
        <div className="relative flex-1 min-h-[55vh]">
          {cameraOn ? (
            <video
              ref={previewVideoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover mirror"
              style={{ transform: "scaleX(-1)" }}
            />
          ) : (
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
              <VideoOff className="w-16 h-16 text-white/20" />
            </div>
          )}

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Camera controls overlay */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
            <button
              onClick={() => setCameraOn(!cameraOn)}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${cameraOn ? "bg-white/20 backdrop-blur-sm" : "bg-destructive"}`}
            >
              {cameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMicOn(!micOn)}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${micOn ? "bg-white/20 backdrop-blur-sm" : "bg-destructive"}`}
            >
              {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <SwitchCamera className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Setup form */}
        <div className="bg-zinc-900 p-6 space-y-4">
          <div>
            <Label className="text-white/70 text-sm">Stream Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What are you selling today?"
              className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl"
              maxLength={80}
            />
          </div>

          <Button
            onClick={handleGoLive}
            disabled={!title.trim() || connectionState === ConnectionState.Connecting}
            className="w-full h-12 rounded-xl bg-destructive hover:bg-destructive/90 text-white font-semibold text-base gap-2"
          >
            <Radio className="w-5 h-5" />
            {connectionState === ConnectionState.Connecting ? "Connecting…" : "Go Live"}
          </Button>

          {error && <p className="text-destructive text-sm text-center">{error}</p>}
        </div>
      </div>
    );
  }

  // Live broadcast screen
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Live video area */}
      <div className="relative flex-1 min-h-[60vh]">
        {cameraOn ? (
          <video
            ref={(el) => {
              if (el && localVideoTrackRef.current) {
                localVideoTrackRef.current.attach(el);
              }
            }}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "scaleX(-1)" }}
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
            <VideoOff className="w-16 h-16 text-white/20" />
          </div>
        )}

        {/* Top bar overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge className="bg-destructive text-white border-0 flex items-center gap-1 text-xs">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
            </Badge>
            <Badge className="bg-black/40 backdrop-blur-sm border-0 text-white text-xs flex items-center gap-1">
              <Users className="w-3 h-3" /> {participantCount}
            </Badge>
            <Badge className="bg-black/40 backdrop-blur-sm border-0 text-white text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> {formatTime(elapsedSeconds)}
            </Badge>
          </div>
          <Button
            size="sm"
            variant="destructive"
            onClick={handleEndStream}
            className="rounded-full h-8 text-xs"
          >
            End Stream
          </Button>
        </div>

        {/* Stream title */}
        <div className="absolute top-14 left-4 z-10">
          <p className="text-sm font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            {title}
          </p>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-3">
          <button
            onClick={toggleCamera}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${cameraOn ? "bg-white/20 backdrop-blur-sm" : "bg-destructive"}`}
          >
            {cameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
          </button>
          <button
            onClick={toggleMic}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${micOn ? "bg-white/20 backdrop-blur-sm" : "bg-destructive"}`}
          >
            {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setShowProducts(!showProducts)}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${showProducts ? "bg-secondary" : "bg-white/20 backdrop-blur-sm"}`}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Pinned product bar */}
      {currentPinned && (
        <div className="bg-zinc-900 px-4 py-3 flex items-center gap-3 border-t border-white/10">
          <Pin className="w-4 h-4 text-secondary shrink-0" />
          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
            <img src={currentPinned.image} alt={currentPinned.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{currentPinned.name}</p>
            <span className="text-secondary font-bold text-sm">${currentPinned.price}</span>
          </div>
          <button onClick={() => setPinnedProduct(null)} className="text-white/40 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Product picker panel */}
      {showProducts && (
        <div className="bg-zinc-900 border-t border-white/10 p-4 max-h-[35vh] overflow-y-auto">
          <p className="text-sm font-semibold mb-3">Pin a product</p>
          <div className="grid grid-cols-2 gap-3">
            {sampleProducts.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setPinnedProduct(p.id === pinnedProduct ? null : p.id);
                  setShowProducts(false);
                }}
                className={`flex items-center gap-2 p-2 rounded-xl text-left transition ${
                  p.id === pinnedProduct
                    ? "bg-secondary/20 border border-secondary"
                    : "bg-white/5 border border-white/10 hover:border-white/30"
                }`}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium truncate">{p.name}</p>
                  <span className="text-secondary text-xs font-bold">${p.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoLive;
