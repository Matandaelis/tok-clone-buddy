import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gavel, Users, TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Bid = { user: string; amount: number; ago: string; color: string };

const initialBids: Bid[] = [
  { user: "Marcus T.", amount: 1840, ago: "just now", color: "bg-primary" },
  { user: "Priya K.", amount: 1820, ago: "12s", color: "bg-secondary" },
  { user: "Sarah J.", amount: 1800, ago: "28s", color: "bg-accent" },
  { user: "Cody F.", amount: 1750, ago: "47s", color: "bg-destructive" },
  { user: "Jenny W.", amount: 1700, ago: "1m", color: "bg-primary" },
];

const names = ["Devon L.", "Mira P.", "Theo K.", "Aria M.", "Jordan B.", "Riya S.", "Alex H.", "Quinn T."];
const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-destructive"];

const LiveBiddingSidebar = () => {
  const [bid, setBid] = useState(1840);
  const [bids, setBids] = useState<Bid[]>(initialBids);
  const [endsInSec, setEndsInSec] = useState(184);
  const [pulse, setPulse] = useState(false);

  // Countdown
  useEffect(() => {
    const t = setInterval(() => setEndsInSec((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  // Simulated incoming bids
  useEffect(() => {
    const t = setInterval(() => {
      const newBid = bid + Math.floor(Math.random() * 80) + 10;
      const name = names[Math.floor(Math.random() * names.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      setBid(newBid);
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
      setBids((prev) => [{ user: name, amount: newBid, ago: "just now", color }, ...prev].slice(0, 6));
    }, 5500);
    return () => clearInterval(t);
  }, [bid]);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const ending = endsInSec < 60;

  return (
    <aside className="hidden xl:block sticky top-24 w-72 shrink-0 self-start">
      <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-[var(--shadow-card-hover)]">
        {/* Header */}
        <div className="bg-foreground text-background p-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">Live Auction</span>
          <Badge variant="outline" className="ml-auto border-background/30 text-background text-[9px]">
            <Users className="w-2.5 h-2.5 mr-1" /> 1.2k
          </Badge>
        </div>

        {/* Lot */}
        <div className="p-4 border-b border-border/50">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200"
              alt="Vintage Omega Speedmaster"
              className="w-16 h-16 rounded-xl object-cover shrink-0"
            />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Current lot</p>
              <p className="text-sm font-bold text-foreground line-clamp-2">Vintage Omega Speedmaster</p>
            </div>
          </div>

          {/* Top bid + countdown */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-muted p-2">
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Top bid</p>
              <motion.p
                animate={pulse ? { scale: [1, 1.08, 1], color: ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"] } : {}}
                transition={{ duration: 0.5 }}
                className="text-xl font-black text-foreground tabular-nums"
              >
                ${bid.toLocaleString()}
              </motion.p>
            </div>
            <div className={`rounded-xl p-2 ${ending ? "bg-destructive text-destructive-foreground" : "bg-foreground text-background"}`}>
              <p className="text-[9px] uppercase tracking-widest opacity-70 font-bold">Ends in</p>
              <p className={`text-xl font-black tabular-nums ${ending ? "animate-pulse" : ""}`}>{fmt(endsInSec)}</p>
            </div>
          </div>

          <Button className="w-full mt-3 rounded-full bg-primary text-primary-foreground font-black gap-2 hover:bg-primary/90">
            <Gavel className="w-4 h-4" /> Bid ${(bid + 50).toLocaleString()}
          </Button>
          <button className="w-full mt-1.5 text-xs text-muted-foreground hover:text-foreground flex items-center justify-center gap-1 py-1">
            <Plus className="w-3 h-3" /> Custom bid
          </button>
        </div>

        {/* Bid feed */}
        <div className="p-3">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Live bid feed
          </p>
          <div className="space-y-1.5 max-h-56 overflow-hidden">
            <AnimatePresence initial={false}>
              {bids.map((b, i) => (
                <motion.div
                  key={`${b.user}-${b.amount}`}
                  initial={{ opacity: 0, x: -10, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-xs"
                >
                  <div className={`w-6 h-6 rounded-full ${b.color} flex items-center justify-center text-[9px] font-black text-primary-foreground shrink-0`}>
                    {b.user.charAt(0)}
                  </div>
                  <span className="font-semibold text-foreground truncate">{b.user}</span>
                  <span className="ml-auto font-black tabular-nums text-foreground">${b.amount.toLocaleString()}</span>
                  <span className="text-[9px] text-muted-foreground w-10 text-right shrink-0">{i === 0 ? "now" : b.ago}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LiveBiddingSidebar;
