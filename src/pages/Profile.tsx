import { Settings, ChevronRight, Package, Heart, CreditCard, HelpCircle, LogOut, Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

const menuItems = [
  { icon: Package, label: "My Orders", path: "/orders" },
  { icon: Heart, label: "Wishlist", path: "/wishlist" },
  { icon: Star, label: "Reviews", path: "/reviews" },
  { icon: CreditCard, label: "Payment Methods", path: "/payments" },
  { icon: ShoppingBag, label: "Become a Seller", path: "/seller" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help & Support", path: "/help" },
];

const Profile = () => (
  <AppLayout>
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* User Card */}
      <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl p-6 mb-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xl font-bold">
          JD
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold">Jane Doe</h1>
          <p className="text-sm text-muted-foreground">@janedoe • Member since 2024</p>
        </div>
        <Link to="/settings" className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Orders", value: "12" },
          { label: "Wishlist", value: "24" },
          { label: "Reviews", value: "8" },
        ].map(stat => (
          <div key={stat.label} className="bg-card rounded-2xl p-4 text-center border border-border/50">
            <p className="text-2xl font-bold text-secondary">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
        {menuItems.map((item, i) => (
          <Link key={item.label} to={item.path} className={`flex items-center gap-4 px-5 py-4 hover:bg-muted/50 transition-colors ${i > 0 ? "border-t border-border/30" : ""}`}>
            <item.icon className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 text-sm font-medium">{item.label}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <Button variant="ghost" className="w-full mt-6 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full">
        <LogOut className="w-4 h-4 mr-2" /> Log Out
      </Button>
    </div>
  </AppLayout>
);

export default Profile;
