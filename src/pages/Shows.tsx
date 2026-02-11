import { Link } from "react-router-dom";
import { PlayCircle, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/AppLayout";

const shows = [
  { id: 1, title: "Flash Sale Frenzy", seller: "LuxStyle", viewers: 1243, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400", isLive: true },
  { id: 2, title: "Beauty Deals Night", seller: "GlowUp", viewers: 876, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", isLive: true },
  { id: 3, title: "Sneaker Drop", seller: "KickzKing", viewers: 2104, image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400", isLive: true },
  { id: 4, title: "Home Décor Haul", seller: "CozyHome", viewers: 0, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400", isLive: false, startsIn: "2h" },
  { id: 5, title: "Tech Gadgets Under $50", seller: "TechDeals", viewers: 0, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400", isLive: false, startsIn: "5h" },
  { id: 6, title: "Jewelry Auction", seller: "CraftedGems", viewers: 0, image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=400", isLive: false, startsIn: "Tomorrow" },
];

const Shows = () => (
  <AppLayout>
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Live Shows</h1>

      {/* Live Now */}
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" /> Live Now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {shows.filter(s => s.isLive).map(show => (
          <Link key={show.id} to={`/show/${show.id}`} className="group">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img src={show.image} alt={show.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge className="bg-destructive border-0 text-white text-[10px]">LIVE</Badge>
                <Badge className="bg-black/40 backdrop-blur-sm border-0 text-white text-[10px] flex items-center gap-1">
                  <Users className="w-3 h-3" /> {show.viewers.toLocaleString()}
                </Badge>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-semibold text-white text-sm">{show.title}</p>
                <p className="text-white/70 text-xs">{show.seller}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="w-12 h-12 text-white/90" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Upcoming */}
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <Clock className="w-4 h-4 text-muted-foreground" /> Coming Up
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shows.filter(s => !s.isLive).map(show => (
          <div key={show.id} className="group">
            <div className="relative rounded-2xl overflow-hidden aspect-video opacity-80">
              <img src={show.image} alt={show.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <Badge className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm border-0 text-white text-[10px] flex items-center gap-1">
                <Clock className="w-3 h-3" /> Starts in {show.startsIn}
              </Badge>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-semibold text-white text-sm">{show.title}</p>
                <p className="text-white/70 text-xs">{show.seller}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Shows;
