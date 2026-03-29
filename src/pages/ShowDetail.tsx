import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Send, ShoppingBag, Users, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useLiveKit } from "@/hooks/use-livekit";
import LiveVideoPlayer from "@/components/LiveVideoPlayer";

const chatMessages = [
  { user: "Sarah M.", text: "Love this color! 😍", time: "2m" },
  { user: "Jake R.", text: "How much for the bundle?", time: "1m" },
  { user: "Mia L.", text: "Just ordered! 🎉", time: "30s" },
];

const ShowDetail = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const {
    connectionState,
    videoTrack,
    audioTrack,
    participantCount,
    error,
    connect,
    isConnected,
  } = useLiveKit({
    roomName: `show-${id}`,
    isPublisher: false,
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Video area */}
      <div className="relative flex-1 min-h-[60vh]">
        <LiveVideoPlayer
          videoTrack={videoTrack}
          audioTrack={audioTrack}
          connectionState={connectionState}
          fallbackImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
          error={error}
        />

        {/* Overlay UI */}
        <div className="relative z-10 flex flex-col h-full p-4">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link to="/marketplace" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              {isConnected ? (
                <Badge className="bg-destructive text-white border-0 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                </Badge>
              ) : (
                <Button
                  size="sm"
                  onClick={connect}
                  className="rounded-full bg-destructive text-white border-0 flex items-center gap-1 h-7 text-xs"
                >
                  <Radio className="w-3 h-3" /> Join Stream
                </Button>
              )}
              <Badge className="bg-white/10 backdrop-blur-sm border-0 flex items-center gap-1">
                <Users className="w-3 h-3" /> {isConnected ? participantCount : "1.2k"}
              </Badge>
            </div>
          </div>

          {/* Seller info */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-sm">LS</div>
            <div>
              <p className="font-semibold text-sm">LuxStyle</p>
              <p className="text-[11px] text-white/60">Designer Accessories</p>
            </div>
            <Button size="sm" className="ml-auto rounded-full bg-secondary text-secondary-foreground text-xs h-8">Follow</Button>
          </div>

          <div className="flex-1" />

          {/* Chat */}
          <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
            {chatMessages.map((msg, i) => (
              <div key={i} className="flex items-start gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 w-fit max-w-[80%]">
                <span className="text-xs font-semibold text-secondary shrink-0">{msg.user}</span>
                <span className="text-xs text-white/90">{msg.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Product */}
      <div className="bg-zinc-900 px-4 py-3 flex items-center gap-3 border-t border-white/10">
        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-muted">
          <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200" alt="Product" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">Designer Handbag</p>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold">$89.99</span>
            <span className="text-xs text-white/40 line-through">$149.99</span>
          </div>
        </div>
        <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground shrink-0">
          <ShoppingBag className="w-4 h-4 mr-1" /> Buy
        </Button>
      </div>

      {/* Chat Input */}
      <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-t border-white/10">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something..."
          className="flex-1 bg-white/10 border-0 rounded-full text-white placeholder:text-white/40"
        />
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <Send className="w-4 h-4 text-secondary-foreground" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          <Heart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ShowDetail;
