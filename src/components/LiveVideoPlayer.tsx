import { useEffect, useRef } from "react";
import { ConnectionState } from "livekit-client";
import { Loader2, WifiOff } from "lucide-react";

interface LiveVideoPlayerProps {
  videoTrack: MediaStreamTrack | null;
  audioTrack: MediaStreamTrack | null;
  connectionState: ConnectionState;
  fallbackImage?: string;
  error?: string | null;
}

const LiveVideoPlayer = ({
  videoTrack,
  audioTrack,
  connectionState,
  fallbackImage,
  error,
}: LiveVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (videoTrack && videoRef.current) {
      const stream = new MediaStream([videoTrack]);
      videoRef.current.srcObject = stream;
    }
  }, [videoTrack]);

  useEffect(() => {
    if (audioTrack && audioRef.current) {
      const stream = new MediaStream([audioTrack]);
      audioRef.current.srcObject = stream;
    }
  }, [audioTrack]);

  const isConnecting = connectionState === ConnectionState.Connecting;
  const isConnected = connectionState === ConnectionState.Connected;
  const hasVideo = isConnected && videoTrack;

  return (
    <div className="absolute inset-0 bg-black">
      {hasVideo ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted={false}
            className="w-full h-full object-cover"
          />
          <audio ref={audioRef} autoPlay />
        </>
      ) : (
        <>
          {fallbackImage && (
            <img
              src={fallbackImage}
              alt="Stream preview"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            {error ? (
              <div className="text-center">
                <WifiOff className="w-10 h-10 text-white/50 mx-auto mb-2" />
                <p className="text-white/60 text-sm">{error}</p>
              </div>
            ) : isConnecting ? (
              <div className="text-center">
                <Loader2 className="w-10 h-10 text-white/50 mx-auto mb-2 animate-spin" />
                <p className="text-white/60 text-sm">Connecting to stream…</p>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default LiveVideoPlayer;
