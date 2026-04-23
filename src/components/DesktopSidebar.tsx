import { NavLink } from "@/components/NavLink";
import {
  Home,
  Search,
  PlayCircle,
  ShoppingBag,
  User,
  Heart,
  Package,
  Star,
  CreditCard,
  Store,
  Settings,
  HelpCircle,
  Mic,
  Radio,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

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

type Item = { icon: typeof Home; label: string; path: string };

const NavSection = ({ title, items, collapsed }: { title?: string; items: Item[]; collapsed: boolean }) => (
  <SidebarGroup>
    {title && !collapsed && (
      <SidebarGroupLabel className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
        {title}
      </SidebarGroupLabel>
    )}
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.path}>
            <SidebarMenuButton asChild tooltip={collapsed ? item.label : undefined}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                activeClassName="bg-primary/10 text-primary font-semibold"
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const DesktopSidebar = () => {
  const { user } = useAuth();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const initial = (user?.user_metadata?.first_name || user?.email || "U").charAt(0).toUpperCase();

  return (
    <Sidebar collapsible="icon" className="hidden lg:flex border-r border-border/60 bg-card/40 backdrop-blur-sm">
      <SidebarHeader className="border-b border-border/60">
        <Link to="/" className="flex items-center gap-2 px-2 py-2">
          <div className="w-9 h-9 rounded-full border-2 border-secondary flex items-center justify-center shrink-0">
            <Mic className="w-4 h-4 text-secondary" />
          </div>
          {!collapsed && <span className="font-black text-lg text-foreground">TokShop</span>}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavSection items={primary} collapsed={collapsed} />
        <NavSection title="Shopping" items={personal} collapsed={collapsed} />
        <NavSection title="Account" items={account} collapsed={collapsed} />
      </SidebarContent>

      <SidebarFooter className="border-t border-border/60">
        {user ? (
          <Link
            to="/profile"
            className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-muted transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shrink-0">
              {initial}
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {user.user_metadata?.first_name || user.email?.split("@")[0]}
                </p>
                <p className="text-[10px] text-muted-foreground truncate">View profile</p>
              </div>
            )}
          </Link>
        ) : !collapsed ? (
          <div className="flex flex-col gap-2 p-2">
            <Link
              to="/signup"
              className="text-center text-xs font-bold bg-primary text-primary-foreground rounded-full py-2.5 hover:bg-primary/90 transition-colors"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="text-center text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              Log in
            </Link>
          </div>
        ) : (
          <Link
            to="/signup"
            className="flex items-center justify-center w-9 h-9 mx-auto rounded-full bg-primary text-primary-foreground font-black"
            title="Sign up"
          >
            <User className="w-4 h-4" />
          </Link>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default DesktopSidebar;
