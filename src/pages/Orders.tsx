import { Package, ChevronRight, Truck, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/AppLayout";

const orders = [
  { id: "ORD-2847", date: "Feb 8, 2026", status: "Delivered", statusIcon: CheckCircle, statusColor: "text-green-500", items: 2, total: 124.98, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200" },
  { id: "ORD-2831", date: "Feb 3, 2026", status: "In Transit", statusIcon: Truck, statusColor: "text-secondary", items: 1, total: 34.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=200" },
  { id: "ORD-2795", date: "Jan 22, 2026", status: "Processing", statusIcon: Clock, statusColor: "text-yellow-500", items: 3, total: 189.50, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200" },
  { id: "ORD-2760", date: "Jan 10, 2026", status: "Delivered", statusIcon: CheckCircle, statusColor: "text-green-500", items: 1, total: 59.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" },
];

const Orders = () => (
  <AppLayout>
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <div className="space-y-3">
        {orders.map(order => (
          <div key={order.id} className="bg-card rounded-2xl p-4 border border-border/50 flex gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-muted">
              <img src={order.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">{order.id}</p>
                <div className={`flex items-center gap-1 text-xs font-medium ${order.statusColor}`}>
                  <order.statusIcon className="w-3.5 h-3.5" />
                  {order.status}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{order.date} • {order.items} item{order.items > 1 ? "s" : ""}</p>
              <p className="text-sm font-bold text-secondary mt-1">${order.total.toFixed(2)}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground self-center shrink-0" />
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Orders;
