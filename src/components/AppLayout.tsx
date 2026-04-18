import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import DesktopSidebar from "@/components/DesktopSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

const TopBar = () => {
  const { user, signOut } = useAuth();
  return (
    <header className="sticky top-0 z-40 h-14 bg-background/85 backdrop-blur-xl border-b border-border/60 flex items-center justify-between px-4 lg:px-6">
      <Link to="/" className="lg:hidden font-black text-lg text-foreground">TokShop</Link>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <Link to="/profile" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {user.user_metadata?.first_name || "Profile"}
            </Link>
            <button onClick={signOut} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1">
              <LogOut className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">Log in</Link>
            <Link to="/signup" className="text-sm font-bold bg-primary text-primary-foreground px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors">
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground flex">
    <DesktopSidebar />
    <div className="flex-1 min-w-0 flex flex-col">
      <TopBar />
      <main className="flex-1 pb-[calc(env(safe-area-inset-bottom)+5rem)] lg:pb-0">{children}</main>
    </div>
    <MobileBottomNav />
  </div>
);

export default AppLayout;
