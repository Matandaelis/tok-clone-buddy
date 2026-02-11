import { Link, useLocation } from "react-router-dom";
import { Home, Search, PlayCircle, ShoppingBag, User, Mic } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Browse", path: "/marketplace" },
  { icon: PlayCircle, label: "Live", path: "/shows" },
  { icon: ShoppingBag, label: "Cart", path: "/cart" },
  { icon: User, label: "Profile", path: "/profile" },
];

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="relative w-9 h-9 rounded-full border-2 border-secondary flex items-center justify-center">
      <Mic className="w-4 h-4 text-secondary" />
    </div>
    <span className="font-bold text-lg hidden md:inline">TokShop</span>
  </Link>
);

const TopNav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/90 backdrop-blur-lg border-b border-border/50 flex items-center justify-between px-4 md:px-8">
    <Logo />
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          {item.label}
        </Link>
      ))}
    </nav>
    <div className="flex items-center gap-3">
      <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">Log in</Link>
      <Link to="/signup" className="text-sm font-medium bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
        Sign up
      </Link>
    </div>
  </header>
);

const BottomNav = () => {
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-lg border-t border-border/50 flex items-center justify-around py-2 px-2">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
        return (
          <Link key={item.path} to={item.path} className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors ${isActive ? "text-secondary" : "text-muted-foreground"}`}>
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <TopNav />
    <main className="pt-16 pb-20 md:pb-0">{children}</main>
    <BottomNav />
  </div>
);

export default AppLayout;
