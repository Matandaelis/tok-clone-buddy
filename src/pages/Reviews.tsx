import { Star, ThumbsUp } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const reviews = [
  { id: 1, product: "Designer Handbag", rating: 5, date: "Feb 5, 2026", text: "Absolutely love this bag! The quality is incredible and it looks even better in person.", likes: 12, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200" },
  { id: 2, product: "Wireless Earbuds Pro", rating: 4, date: "Jan 28, 2026", text: "Great sound quality and battery life. Noise cancellation could be a bit better.", likes: 8, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=200" },
  { id: 3, product: "Organic Skincare Set", rating: 5, date: "Jan 15, 2026", text: "My skin has never felt better! Will definitely be reordering.", likes: 23, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200" },
  { id: 4, product: "Smart Watch", rating: 3, date: "Jan 5, 2026", text: "Good watch but the app needs some work. Hardware is solid though.", likes: 4, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-3.5 h-3.5 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"}`} />
    ))}
  </div>
);

const Reviews = () => (
  <AppLayout>
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Reviews ({reviews.length})</h1>
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-card rounded-2xl p-4 border border-border/50">
            <div className="flex gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-muted">
                <img src={review.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{review.product}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <Stars count={review.rating} />
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{review.likes} found this helpful</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Reviews;
