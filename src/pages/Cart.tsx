import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";

const initialItems = [
  { id: 1, name: "Designer Handbag", price: 89.99, qty: 1, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200", seller: "LuxStyle" },
  { id: 2, name: "Wireless Earbuds Pro", price: 34.99, qty: 2, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=200", seller: "TechDeals" },
  { id: 3, name: "Organic Skincare Set", price: 45.00, qty: 1, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200", seller: "GlowUp" },
];

const Cart = () => {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id: number, delta: number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const remove = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart ({items.length})</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link to="/marketplace">
              <Button className="rounded-full bg-secondary text-secondary-foreground">Browse Products</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 bg-card rounded-2xl p-3 border border-border/50">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-muted">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">{item.seller}</p>
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-secondary font-bold mt-1">${item.price}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-muted rounded-full px-1">
                        <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                        <span className="text-sm font-medium w-5 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                      </div>
                      <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-card rounded-2xl p-5 border border-border/50 space-y-3">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
              <div className="border-t border-border/50 pt-3 flex justify-between font-bold text-lg"><span>Total</span><span className="text-secondary">${total.toFixed(2)}</span></div>
              <Button className="w-full rounded-full bg-secondary text-secondary-foreground h-12 text-base mt-2">
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
};

export default Cart;
