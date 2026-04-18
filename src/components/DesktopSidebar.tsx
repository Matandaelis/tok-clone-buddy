import { NavLink } from "@/components/NavLink";
import { Home, Search, PlayCircle, ShoppingBag, User, Heart, Package, Star, CreditCard, Store, Settings, HelpCircle, Mic, Radio } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const primary = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Browse", path: "/marketplace" },
  { icon: PlayCircle, label: "Live", path: "/shows" },
  { icon: Radio, label: "Go Live", path: "/go-live" },
];

const personal = [
  { icon: ShoppingBag, label: "Cart", path: "/cart" },
  { icon: Heart, label: "Wishlist", path: "/wishlist" },
  { icon: Package, label: "Orders", path: "/orders" },
  { icon: Star, label: "Reviews", path: "/reviews" },
  { icon: CreditCard, label: "Payments", path: "/payments" },
];

const account = [
  { icon: Store, label: "Seller Center", path: "/seller" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help", path: "/help" },
];

const Section = ({ title, items }: { title?: string; items: typeof primary }) => (
  <div className="px-3 py-2">
    {title && <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold px-3 mb-1">{title}</p>}
    <ul className="space-y-0.5">
      {items.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            end={item.path === "/"}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            activeClassName="bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-[10px]"
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const DesktopSidebar = () => {
  const { user } = useAuth();
  const initial = (user?.user_metadata?.first_name || user?.email || "U").charAt(0).toUpperCase();

  return (
    <aside className="hidden lg:flex sticky top-0 h-screen w-60 shrink-0 flex-col border-r border-border/60 bg-card/40 backdrop-blur-sm">
      <Link to="/" className="flex items-center gap-2 px-5 py-4 border-b border-border/60">
        <div className="w-9 h-9 rounded-full border-2 border-secondary flex items-center justify-center">
          <Mic className="w-4 h-4 text-secondary" />
        </div>
        <span className="font-black text-lg text-foreground">TokShop</span>
      </Link>

      <nav className="flex-1 overflow-y-auto py-2">
        <Section items={primary} />
        <div className="border-t border-border/40 my-2" />
        <Section title="Shopping" items={personal} />
        <div className="border-t border-border/40 my-2" />
        <Section title="Account" items={account} />
      </nav>

      <div className="border-t border-border/60 p-3">
        {user ? (
          <Link to="/profile" className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-muted transition-colors">
            <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black">
              {initial}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                {user.user_metadata?.first_name || user.email?.split("@")[0]}
              </p>
              <p className="text-[10px] text-muted-foreground truncate">View profile</p>
            </div>
          </Link>
        ) : (
          <div className="flex flex-col gap-2">
            <Link to="/signup" className="text-center text-xs font-bold bg-primary text-primary-foreground rounded-full py-2.5 hover:bg-primary/90 transition-colors">
              Sign up
            </Link>
            <Link to="/login" className="text-center text-xs font-semibold text-muted-foreground hover:text-foreground">
              Log in
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export default DesktopSidebar;
