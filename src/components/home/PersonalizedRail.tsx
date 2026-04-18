import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";

const continueWatching = [
  { id: 1, title: "Designer Steals", host: "LuxStyle", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400", progress: 68, isLive: true },
  { id: 2, title: "Sneaker Drop", host: "KickzKing", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400", progress: 23, isLive: true },
  { id: 3, title: "Beauty Favorites", host: "Papillon", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", progress: 92, isLive: false },
  { id: 4, title: "Diamond Auction", host: "CraftedGems", image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=400", progress: 45, isLive: true },
];

const followedHosts = [
  { name: "LuxStyle", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80", isLive: true },
  { name: "KickzKing", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80", isLive: true },
  { name: "GlowUp", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80", isLive: false },
  { name: "CraftedGems", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80", isLive: true },
  { name: "TechDeals", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80", isLive: false },
];

const PersonalizedRail = () => {
  const { user } = useAuth();
  if (!user) return null;

  const firstName = user.user_metadata?.first_name || user.email?.split("@")[0] || "there";

  return (
    <section className="px-6 pt-6 pb-2">
      <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/10 via-card to-primary/5 p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-1">Welcome back</p>
            <h2 className="text-2xl font-black text-foreground">Hey {firstName} 👋</h2>
          </div>
          <Link to="/profile" className="text-xs font-semibold text-secondary hover:underline">My account →</Link>
        </div>

        {/* Followed hosts */}
        <div className="mb-5">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Hosts you follow</p>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {followedHosts.map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-1 shrink-0 cursor-pointer"
              >
                <div className={`relative w-14 h-14 rounded-full overflow-hidden ${h.isLive ? "ring-2 ring-destructive ring-offset-2 ring-offset-card" : "ring-1 ring-border"}`}>
                  <img src={h.avatar} alt={h.name} className="w-full h-full object-cover" />
                  {h.isLive && (
                    <Badge className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-destructive border-0 text-[8px] text-destructive-foreground px-1.5 py-0 font-black">
                      LIVE
                    </Badge>
                  )}
                </div>
                <span className="text-[10px] font-semibold text-foreground w-16 text-center truncate">{h.name}</span>
              </motion.div>
            ))}
            <button className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-border flex items-center justify-center">
                <Bell className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground">Discover</span>
            </button>
          </div>
        </div>

        {/* Continue watching */}
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Continue watching</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {continueWatching.map((s) => (
              <Link key={s.id} to={`/show/${s.id}`} className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  {s.isLive && (
                    <Badge className="absolute top-2 left-2 bg-destructive border-0 text-destructive-foreground text-[9px] font-black">
                      LIVE
                    </Badge>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-10 h-10 text-foreground drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/20">
                    <div className="h-full bg-primary" style={{ width: `${s.progress}%` }} />
                  </div>
                </div>
                <p className="text-xs font-semibold text-foreground mt-1.5 truncate">{s.title}</p>
                <p className="text-[10px] text-muted-foreground">{s.host}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRail;
