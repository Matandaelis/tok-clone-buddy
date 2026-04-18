import { NavLink } from "@/components/NavLink";
import { Home, Search, PlayCircle, ShoppingBag, User } from "lucide-react";

const items = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Browse", path: "/marketplace" },
  { icon: PlayCircle, label: "Live", path: "/shows" },
  { icon: ShoppingBag, label: "Cart", path: "/cart" },
  { icon: User, label: "Profile", path: "/profile" },
];

const MobileBottomNav = () => (
  <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/85 backdrop-blur-xl border-t border-border/60 flex items-center justify-around px-2 pt-1.5 pb-[calc(env(safe-area-inset-bottom)+0.375rem)]">
    {items.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        end={item.path === "/"}
        className="group relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg text-muted-foreground transition-colors"
        activeClassName="text-primary"
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-[.text-primary]:opacity-100" />
        <item.icon className="w-5 h-5 transition-transform group-[.text-primary]:scale-110" />
        <span className="text-[10px] font-semibold">{item.label}</span>
      </NavLink>
    ))}
  </nav>
);

export default MobileBottomNav;
