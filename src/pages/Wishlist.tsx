import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

const wishlistItems = [
  { id: 1, name: "Leather Crossbody Bag", price: 129.99, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300", seller: "LuxStyle", inStock: true },
  { id: 2, name: "Smart Watch Pro", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", seller: "TechDeals", inStock: true },
  { id: 3, name: "Vintage Sunglasses", price: 45.00, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300", seller: "RetroVibe", inStock: false },
  { id: 4, name: "Organic Face Serum", price: 38.50, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300", seller: "GlowUp", inStock: true },
  { id: 5, name: "Wireless Speaker", price: 79.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300", seller: "SoundWave", inStock: true },
  { id: 6, name: "Canvas Sneakers", price: 64.00, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300", seller: "KickStart", inStock: true },
];

const Wishlist = () => (
  <AppLayout>
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Wishlist ({wishlistItems.length})</h1>
      <div className="grid grid-cols-2 gap-3">
        {wishlistItems.map(item => (
          <div key={item.id} className="bg-card rounded-2xl border border-border/50 overflow-hidden group">
            <div className="relative aspect-square bg-muted">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center">
                <Heart className="w-4 h-4 text-secondary fill-secondary" />
              </button>
              {!item.inStock && (
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <span className="text-xs font-medium bg-muted px-3 py-1 rounded-full">Out of Stock</span>
                </div>
              )}
            </div>
            <div className="p-3">
              <p className="text-xs text-muted-foreground">{item.seller}</p>
              <p className="text-sm font-medium truncate">{item.name}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="font-bold text-secondary">${item.price}</p>
                {item.inStock && (
                  <button className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <ShoppingBag className="w-3.5 h-3.5 text-secondary" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Wishlist;
