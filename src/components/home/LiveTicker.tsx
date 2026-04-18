import { Flame } from "lucide-react";

const items = [
  "🔨 Vintage Rolex sold for $4,200 in Watch Auction",
  "🔥 327 bidders just joined Sneaker Drop",
  "💎 Diamond Stud Earrings — 12 lots remaining",
  "⚡ Flash Sale: Beauty Deals Night ends in 18:42",
  "🎁 Free shipping on all auctions over $50",
  "🛍️ KickzKing just hit 2.1k viewers",
];

const LiveTicker = () => (
  <div className="w-full bg-foreground text-background overflow-hidden border-y border-border/30">
    <div className="flex items-center gap-3 py-2.5 px-4">
      <div className="flex items-center gap-1.5 shrink-0 pr-3 border-r border-background/20">
        <Flame className="w-4 h-4 text-accent" />
        <span className="text-[11px] font-black uppercase tracking-widest">Live Action</span>
      </div>
      <div className="flex-1 overflow-hidden relative">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-xs font-medium opacity-90">{item}</span>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

export default LiveTicker;
