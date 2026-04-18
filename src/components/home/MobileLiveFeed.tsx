import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Share2, Gavel, Users, ShoppingBag, ChevronUp, Mic, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type FeedShow = {
  id: number;
  title: string;
  host: string;
  hostAvatar: string;
  image: string;
  viewers: number;
  category: string;
  topBid: string;
  endsInSec: number;
  product: { name: string; price: string; image: string };
};

const feed: FeedShow[] = [
  {
    id: 1,
    title: "Designer Steals — Tonight Only",
    host: "LuxStyle",
    hostAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    viewers: 12430,
    category: "Auction",
    topBid: "$1,840",
    endsInSec: 184,
    product: { name: "Vintage Omega Speedmaster", price: "$1,840", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" },
  },
  {
    id: 2,
    title: "Sneaker Drop — Rare Grails",
    host: "KickzKing",
    hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800",
    viewers: 21040,
    category: "Live Bid",
    topBid: "$620",
    endsInSec: 92,
    product: { name: "Air Jordan 1 'Chicago'", price: "$620", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200" },
  },
  {
    id: 3,
    title: "Diamond Auction — Certified Live",
    host: "CraftedGems",
    hostAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=800",
    viewers: 8760,
    category: "Premium",
    topBid: "$2,150",
    endsInSec: 312,
    product: { name: "Diamond Tennis Bracelet", price: "$2,150", image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=200" },
  },
  {
    id: 4,
    title: "Beauty Deals Night",
    host: "GlowUp",
    hostAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",
    viewers: 5430,
    category: "Flash Sale",
    topBid: "$32",
    endsInSec: 540,
    product: { name: "Korean Skincare Bundle", price: "$32", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200" },
  },
];

const fmt = (s: number) => {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
};

const FeedSlide = ({ show, active }: { show: FeedShow; active: boolean }) => {
  const [countdown, setCountdown] = useState(show.endsInSec);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [active]);

  return (
    <div className="relative h-[100dvh] w-full snap-start snap-always overflow-hidden bg-foreground">
      {/* Background media */}
      <img src={show.image} alt={show.title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />

      {/* Top meta */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center gap-2 pt-[env(safe-area-inset-top)]">
        <Badge className="bg-destructive border-0 text-destructive-foreground text-[10px] font-black tracking-wider px-2 py-1">
          <span className="w-1.5 h-1.5 bg-destructive-foreground rounded-full mr-1 animate-pulse" />
          LIVE
        </Badge>
        <Badge variant="outline" className="border-foreground/30 bg-background/30 backdrop-blur-md text-foreground text-[10px] font-bold uppercase">
          {show.category}
        </Badge>
        <span className="ml-auto text-foreground text-xs font-semibold flex items-center gap-1 bg-background/30 backdrop-blur-md px-2 py-1 rounded-full">
          <Users className="w-3 h-3" /> {show.viewers.toLocaleString()}
        </span>
      </div>

      {/* Side action rail */}
      <div className="absolute right-3 bottom-44 z-10 flex flex-col items-center gap-5">
        <button onClick={() => setLiked((l) => !l)} className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center">
            <Heart className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
          </div>
          <span className="text-[10px] font-semibold text-foreground">{(2400 + (liked ? 1 : 0)).toLocaleString()}</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-foreground" />
          </div>
          <span className="text-[10px] font-semibold text-foreground">412</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center">
            <Share2 className="w-5 h-5 text-foreground" />
          </div>
          <span className="text-[10px] font-semibold text-foreground">Share</span>
        </button>
      </div>

      {/* Bottom content */}
      <div className="absolute left-0 right-0 bottom-0 z-10 px-4 pb-6 pt-16 space-y-3">
        {/* Host */}
        <div className="flex items-center gap-2">
          <img src={show.hostAvatar} alt={show.host} className="w-9 h-9 rounded-full object-cover ring-2 ring-secondary" />
          <span className="text-sm font-bold text-foreground">@{show.host}</span>
          <Button size="sm" className="h-7 rounded-full bg-primary text-primary-foreground text-[10px] font-bold px-3">+ Follow</Button>
        </div>

        <h2 className="text-xl font-black leading-tight text-foreground pr-12">{show.title}</h2>

        {/* Auction lot card */}
        <div className="bg-foreground/95 text-background rounded-2xl p-3 flex items-center gap-3 shadow-lg">
          <img src={show.product.image} alt={show.product.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Current lot</p>
            <p className="text-sm font-bold truncate">{show.product.name}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-base font-black text-accent">{show.topBid}</span>
              <span className={`text-[10px] font-black tabular-nums px-1.5 py-0.5 rounded ${countdown < 60 ? "bg-destructive text-destructive-foreground animate-pulse" : "bg-background/20"}`}>
                {fmt(countdown)}
              </span>
            </div>
          </div>
          <Link to={`/show/${show.id}`}>
            <Button size="sm" className="rounded-full bg-accent text-accent-foreground hover:opacity-90 font-black gap-1 shrink-0">
              <Gavel className="w-3.5 h-3.5" /> Bid
            </Button>
          </Link>
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Link to={`/show/${show.id}`} className="flex-1">
            <Button className="w-full rounded-full bg-primary text-primary-foreground font-bold gap-2">
              Watch Live
            </Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="outline" className="rounded-full bg-background/30 backdrop-blur-md border-foreground/30 text-foreground font-bold gap-1">
              <ShoppingBag className="w-4 h-4" /> Shop
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const MobileLiveFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollTop / el.clientHeight);
      setActiveIndex(i);
      if (i > 0) setShowHint(false);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-background text-foreground">
      {/* Top app bar */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 pt-[calc(env(safe-area-inset-top)+0.75rem)] pb-2 bg-gradient-to-b from-background/80 to-transparent">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full border-2 border-foreground/80 flex items-center justify-center bg-background/30 backdrop-blur-md">
            <Mic className="w-4 h-4 text-foreground" />
          </div>
          <span className="font-black text-foreground">TokShop</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/marketplace" className="w-9 h-9 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center">
            <Search className="w-4 h-4 text-foreground" />
          </Link>
          <Link to="/login">
            <Button size="sm" className="rounded-full h-9 px-4 bg-primary text-primary-foreground font-bold">Sign in</Button>
          </Link>
        </div>
      </header>

      {/* Vertical snap feed */}
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {feed.map((s, i) => (
          <FeedSlide key={s.id} show={s} active={i === activeIndex} />
        ))}
      </div>

      {/* Swipe hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
          >
            <ChevronUp className="w-5 h-5 text-foreground animate-bounce" />
            <span className="text-[10px] font-semibold text-foreground/80 bg-background/40 backdrop-blur-md px-2 py-0.5 rounded-full">
              Swipe for more
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide counter */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1">
        {feed.map((_, i) => (
          <div key={i} className={`w-1 rounded-full transition-all ${i === activeIndex ? "h-6 bg-primary" : "h-2 bg-foreground/30"}`} />
        ))}
      </div>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
};

export default MobileLiveFeed;
