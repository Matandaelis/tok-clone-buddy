import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Grid3X3, LayoutList, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/AppLayout";

const categories = ["All", "Fashion", "Electronics", "Beauty", "Home", "Sports", "Toys", "Collectibles"];

const products = [
  { id: 1, name: "Designer Handbag", price: 89.99, originalPrice: 149.99, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400", seller: "LuxStyle", rating: 4.8, isLive: true, viewers: 234 },
  { id: 2, name: "Wireless Earbuds Pro", price: 34.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400", seller: "TechDeals", rating: 4.6, isLive: false, viewers: 0 },
  { id: 3, name: "Organic Skincare Set", price: 45.00, originalPrice: 75.00, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", seller: "GlowUp", rating: 4.9, isLive: true, viewers: 567 },
  { id: 4, name: "Vintage Sneakers", price: 120.00, originalPrice: 200.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", seller: "KickzKing", rating: 4.7, isLive: false, viewers: 0 },
  { id: 5, name: "Handmade Jewelry", price: 28.50, originalPrice: 55.00, image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=400", seller: "CraftedGems", rating: 4.5, isLive: true, viewers: 89 },
  { id: 6, name: "Smart Watch Band", price: 19.99, originalPrice: 39.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", seller: "WatchWorld", rating: 4.3, isLive: false, viewers: 0 },
  { id: 7, name: "Yoga Mat Premium", price: 32.00, originalPrice: 60.00, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400", seller: "FitLife", rating: 4.8, isLive: false, viewers: 0 },
  { id: 8, name: "Scented Candle Set", price: 24.99, originalPrice: 45.00, image: "https://images.unsplash.com/photo-1602607688066-20ede98b3105?w=400", seller: "CozyHome", rating: 4.6, isLive: true, viewers: 312 },
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [gridView, setGridView] = useState(true);

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-b from-secondary/10 to-background">
        {/* Search Bar */}
        <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-lg border-b border-border/50 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search products, sellers, shows..." className="pl-10 bg-muted/50 border-0 rounded-full" />
            </div>
            <Button variant="outline" size="icon" className="rounded-full shrink-0">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="shrink-0" onClick={() => setGridView(!gridView)}>
              {gridView ? <LayoutList className="w-4 h-4" /> : <Grid3X3 className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 py-3 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                className="rounded-full whitespace-nowrap shrink-0"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Live Shows Banner */}
        <div className="px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
              Live Now
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {products.filter(p => p.isLive).map((product) => (
                <Link key={product.id} to={`/show/${product.id}`} className="shrink-0 w-32">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0.5">
                        LIVE • {product.viewers}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs font-medium mt-1.5 truncate">{product.seller}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-4 pb-8">
          <div className={`max-w-7xl mx-auto grid ${gridView ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-4`}>
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/50">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <Heart className="w-4 h-4" />
                    </button>
                    {product.isLive && (
                      <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-[10px]">LIVE</Badge>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-muted-foreground">{product.seller}</p>
                    <h3 className="font-medium text-sm mt-0.5 truncate">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-primary">${product.price}</span>
                      <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Marketplace;
