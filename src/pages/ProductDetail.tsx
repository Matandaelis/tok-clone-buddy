import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";

const ProductDetail = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const colors = ["bg-black", "bg-secondary", "bg-primary", "bg-accent"];

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/marketplace" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><Heart className="w-5 h-5" /></button>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><Share2 className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Image */}
        <div className="aspect-square bg-muted overflow-hidden">
          <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800" alt="Product" className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="px-4 py-5 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-[10px]">Best Seller</Badge>
              <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-accent text-accent" /><span className="text-sm text-muted-foreground">4.8 (1.2k reviews)</span></div>
            </div>
            <h1 className="text-2xl font-bold">Designer Handbag Collection</h1>
            <p className="text-sm text-muted-foreground mt-1">by <span className="text-secondary font-medium">LuxStyle</span></p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-secondary">$89.99</span>
            <span className="text-lg text-muted-foreground line-through">$149.99</span>
            <Badge className="bg-destructive/10 text-destructive border-0">-40%</Badge>
          </div>

          {/* Colors */}
          <div>
            <p className="text-sm font-medium mb-2">Color</p>
            <div className="flex gap-3">
              {colors.map((c, i) => (
                <button key={i} onClick={() => setSelectedColor(i)} className={`w-8 h-8 rounded-full ${c} ring-2 ring-offset-2 ${selectedColor === i ? "ring-secondary" : "ring-transparent"}`} />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div className="flex items-center gap-4 bg-muted rounded-full w-fit px-2">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center"><Minus className="w-4 h-4" /></button>
              <span className="font-semibold w-8 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center"><Plus className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-3 py-4 border-y border-border/50">
            {[
              { icon: Truck, label: "Free Shipping" },
              { icon: Shield, label: "Buyer Protection" },
              { icon: RotateCcw, label: "Easy Returns" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <Icon className="w-5 h-5 text-secondary" />
                <span className="text-[11px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium designer handbag crafted from genuine leather with gold-tone hardware. Features multiple compartments for optimal organization, adjustable shoulder strap, and a timeless silhouette perfect for any occasion.
            </p>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="sticky bottom-20 md:bottom-0 bg-background/90 backdrop-blur-lg border-t border-border/50 px-4 py-3 flex gap-3">
          <Button variant="outline" size="lg" className="rounded-full flex-1">
            <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
          </Button>
          <Button size="lg" className="rounded-full flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Buy Now
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProductDetail;
