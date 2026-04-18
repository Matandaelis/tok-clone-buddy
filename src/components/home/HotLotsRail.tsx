import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Gavel, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Lot = {
  id: number;
  title: string;
  image: string;
  bid: number;
  bidders: number;
  endsInSec: number;
  hot?: boolean;
};

const initialLots: Lot[] = [
  { id: 1, title: "Vintage Omega Speedmaster", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", bid: 1840, bidders: 47, endsInSec: 184, hot: true },
  { id: 2, title: "Air Jordan 1 Retro 'Chicago'", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400", bid: 620, bidders: 89, endsInSec: 312, hot: true },
  { id: 3, title: "Diamond Tennis Bracelet 14K", image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=400", bid: 2150, bidders: 31, endsInSec: 92 },
  { id: 4, title: "Hermès Silk Scarf — Rare", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", bid: 380, bidders: 22, endsInSec: 521 },
  { id: 5, title: "Pokémon Charizard Holo PSA 9", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400", bid: 4200, bidders: 156, endsInSec: 47, hot: true },
  { id: 6, title: "Louis Vuitton Neverfull MM", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400", bid: 890, bidders: 18, endsInSec: 720 },
];

const fmt = (s: number) => {
  if (s <= 0) return "ENDED";
  const m = Math.floor(s / 60);
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
};

const HotLotsRail = () => {
  const [lots, setLots] = useState(initialLots);

  useEffect(() => {
    const t = setInterval(() => {
      setLots((prev) => prev.map((l) => ({ ...l, endsInSec: Math.max(0, l.endsInSec - 1) })));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="px-6 py-10">
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-1 flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" /> Ending Soon
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground">Hot Lots on the Block</h2>
        </div>
        <Link to="/marketplace" className="text-sm font-semibold text-secondary hover:underline">View All →</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {lots.map((lot, i) => {
          const ending = lot.endsInSec < 120;
          return (
            <motion.div
              key={lot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden cursor-pointer transition-shadow hover:shadow-[var(--shadow-card-hover)]"
            >
              <Link to={`/product/${lot.id}`}>
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img src={lot.image} alt={lot.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {lot.hot && (
                    <Badge className="absolute top-2 left-2 bg-primary border-0 text-primary-foreground text-[9px] font-black tracking-wider">
                      🔥 HOT
                    </Badge>
                  )}
                  <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-black tabular-nums ${ending ? "bg-destructive text-destructive-foreground animate-pulse" : "bg-background/90 text-foreground"}`}>
                    {fmt(lot.endsInSec)}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-foreground line-clamp-2 mb-2 min-h-[2rem]">{lot.title}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">Top bid</p>
                      <p className="text-base font-black text-foreground">${lot.bid.toLocaleString()}</p>
                    </div>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                      <Users className="w-2.5 h-2.5" /> {lot.bidders}
                    </span>
                  </div>
                  <Button size="sm" className="w-full mt-2 h-7 rounded-full bg-foreground text-background hover:bg-foreground/90 text-[10px] font-bold gap-1">
                    <Gavel className="w-3 h-3" /> Place Bid
                  </Button>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HotLotsRail;
