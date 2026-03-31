import { Settings, ChevronRight, Package, Heart, CreditCard, HelpCircle, LogOut, Star, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";
import { useAuth } from "@/contexts/AuthContext";

const menuItems = [
  { icon: Package, label: "My Orders", path: "/orders" },
  { icon: Heart, label: "Wishlist", path: "/wishlist" },
  { icon: Star, label: "Reviews", path: "/reviews" },
  { icon: CreditCard, label: "Payment Methods", path: "/payments" },
  { icon: ShoppingBag, label: "Become a Seller", path: "/seller" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help & Support", path: "/help" },
];

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Sign in to view your profile</h1>
          <Link to="/login">
            <Button className="rounded-full">Log In</Button>
          </Link>
        </div>
      </AppLayout>
    );
  }

  const firstName = user.user_metadata?.first_name || "";
  const lastName = user.user_metadata?.last_name || "";
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || "U";

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl p-6 mb-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xl font-bold">
            {initials}
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{firstName} {lastName}</h1>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <Link to="/settings" className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>

        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          {menuItems.map((item, i) => (
            <Link key={item.label} to={item.path} className={`flex items-center gap-4 px-5 py-4 hover:bg-muted/50 transition-colors ${i > 0 ? "border-t border-border/30" : ""}`}>
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="flex-1 text-sm font-medium">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          ))}
        </div>

        <Button onClick={handleSignOut} variant="ghost" className="w-full mt-6 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full">
          <LogOut className="w-4 h-4 mr-2" /> Log Out
        </Button>
      </div>
    </AppLayout>
  );
};

export default Profile;
