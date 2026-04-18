import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Users, Flame, ChevronLeft, ChevronRight, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type FeaturedShow = {
  id: number | string;
  title: string;
  host: string;
  hostAvatar: string;
  image: string;
  viewers: number;
  category: string;
  endsInSec: number; // countdown for current auction lot
  topBid?: string;
};

const formatTime = (s: number) => {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
};

interface Props {
  shows: FeaturedShow[];
  autoplayMs?: number;
}

const FeaturedShowsHero = ({ shows, autoplayMs = 6000 }: Props) => {
  const [index, setIndex] = useState(0);
  const [countdown, setCountdown] = useState(shows[0]?.endsInSec ?? 0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % shows.length), autoplayMs);
    return () => clearInterval(id);
  }, [shows.length, autoplayMs]);

  useEffect(() => {
    setCountdown(shows[index]?.endsInSec ?? 0);
  }, [index, shows]);

  useEffect(() => {
    const t = setInterval(() => setCountdown((c) => (c > 0 ? c - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const current = shows[index];
  if (!current) return null;

  const go = (delta: number) => setIndex((i) => (i + delta + shows.length) % shows.length);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl border border-border/40 bg-card shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[21/9] md:aspect-[21/8]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end md:items-center px-6 md:px-12 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-destructive border-0 text-destructive-foreground text-[10px] font-bold tracking-wider px-2.5 py-1">
                  <span className="w-1.5 h-1.5 bg-destructive-foreground rounded-full mr-1.5 animate-pulse" />
                  LIVE NOW
                </Badge>
                <Badge variant="outline" className="border-accent/50 text-accent text-[10px] font-semibold uppercase tracking-wider">
                  <Flame className="w-3 h-3 mr-1" /> {current.category}
                </Badge>
                <span className="text-xs text-foreground/80 flex items-center gap-1 font-medium">
                  <Users className="w-3 h-3" /> {current.viewers.toLocaleString()} watching
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-[1.05] text-foreground mb-3">
                {current.title}
              </h2>

              <div className="flex items-center gap-3 mb-5">
                <img src={current.hostAvatar} alt={current.host} className="w-9 h-9 rounded-full object-cover ring-2 ring-secondary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{current.host}</p>
                  <p className="text-xs text-muted-foreground">Verified Auction Host</p>
                </div>
              </div>

              {/* Auction urgency block */}
              <div className="bg-foreground/95 text-background rounded-2xl p-4 mb-5 flex items-center gap-4 shadow-[var(--shadow-glow)]">
                <Gavel className="w-6 h-6 text-accent shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Lot ends in</p>
                  <p className="text-2xl font-black tabular-nums text-accent">{formatTime(countdown)}</p>
                </div>
                {current.topBid && (
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Top bid</p>
                    <p className="text-xl font-black">{current.topBid}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <Link to={`/show/${current.id}`}>
                  <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2 px-6">
                    <Play className="w-4 h-4 fill-current" /> Watch & Bid
                  </Button>
                </Link>
                <Link to="/shows">
                  <Button size="lg" variant="outline" className="rounded-full font-semibold px-6 bg-background/40 backdrop-blur-sm">
                    All Live Shows
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-border/50 hidden md:flex items-center justify-center hover:bg-background/90 transition"
          aria-label="Previous show"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-border/50 hidden md:flex items-center justify-center hover:bg-background/90 transition"
          aria-label="Next show"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {shows.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-1.5 bg-foreground/30 hover:bg-foreground/60"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowsHero;
