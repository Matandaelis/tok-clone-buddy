import { ChevronDown, Mic, Search, ShoppingBag, User, Play, Pause, Volume2, Maximize, Heart, Star, Send, Grid3X3, ChevronRight, Users, Clock, Truck, CreditCard, Headphones, Package, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import heroPhone1 from "@/assets/hero-phone1.jpeg";
import heroPhone2 from "@/assets/hero-phone2.jpeg";
import joinfunPhone from "@/assets/joinfun-phone.jpeg";
import gotitallPhone from "@/assets/gotitall-phone.jpeg";
import dealsPhone from "@/assets/deals-phone.jpeg";
import qrcode from "@/assets/qrcode.png";

/* ─── Shared data ─── */
const categories = ["All Categories", "Electronics", "Fashion", "Women's", "Kids' Fashion", "Healthy & Beauty", "Pharmacy", "Groceries", "Luxury Item", "Food"];

const chatMessages = [
  { user: "Kathryn Murphy", msg: "Outfit recs for Colombia in April", color: "bg-purple-500" },
  { user: "Kristin Watson", msg: "This looks lovely on you!", color: "bg-pink-500" },
  { user: "Robert Fox", msg: "Cute sets please!", color: "bg-blue-500" },
  { user: "Ralph Edwards", msg: "What do you think are in for earrings style?", color: "bg-orange-500" },
  { user: "Marvin McKinney", msg: "cute beach coverups for vacation?", color: "bg-green-500" },
  { user: "Ronald Richards", msg: "how are you?", color: "bg-red-500" },
  { user: "Robert Fox", msg: "Good night Arlene...", color: "bg-blue-500" },
  { user: "Theresa Webb", msg: "Hi from the eastern shore of Maryland!", color: "bg-teal-500" },
  { user: "Robert Fox", msg: "I like your Product sister 😍", color: "bg-blue-500" },
  { user: "Robert Fox", msg: "🥰🥰🥰", color: "bg-blue-500" },
  { user: "Marvin McKinney", msg: "Thanks! Welcome Arlene!", color: "bg-green-500" },
];

const featuredProducts = [
  { name: "MKJA Heartleaf Pore Control Cleansing Oil Korea...", price: 32.00, old: 45.99, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=120" },
  { name: "Yardley London Yardley Gentleman Legacy Luxury...", price: 32.00, old: 45.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120" },
  { name: "Dual Set of Liquid Foundation and Compact Powder", price: 32.00, old: 45.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120" },
  { name: "Diamond Stud Earrings in 14K White Yellow or Rose Gold", price: 32.00, old: 45.99, image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=120" },
];

const creators = [
  { name: "Cody Fisher", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80", isLive: true },
  { name: "Robertson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80", isLive: false },
  { name: "Arlene McCoy", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80", isLive: true },
  { name: "Jerome Bell", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80", isLive: false },
  { name: "Ralph Edwards", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80", isLive: false },
  { name: "Savannah", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80", isLive: false },
  { name: "Jacob Jones", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80", isLive: false },
  { name: "Bessie Cooper", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80", isLive: false },
  { name: "Theresa Webb", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80", isLive: true },
  { name: "Jenny Wilson", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80", isLive: false },
];

const couponVideos = [
  { title: "Best Deals of the Week", seller: "Ghudlah", date: "Jan 20, 25", duration: "24:30", rating: 5, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400" },
  { title: "Savannah Beauty Favorites", seller: "Papillon", date: "Feb 12, 25", duration: "08:34", rating: 5, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400" },
  { title: "My favorite products for a 8 minute face!", seller: "Nisa", date: "May 25, 25", duration: "14:00", rating: 4.5, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400" },
];

const upcomingEvents = [
  { title: "Mega Live Shopping Night!", subtitle: "Up to 70% OFF | Flash Deals | Special Host", date: "May 28, 25", gradient: "from-primary to-primary/80" },
  { title: "Exclusive Product Launch!", subtitle: "Special Discounts & Giveaways!", date: "May 28, 25", time: "11:07pm", gradient: "from-foreground/90 to-foreground/70" },
];

const browseCategories = ["All", "Electronics", "Fashion", "Women's", "Kids' Fashion", "Healthy & Beauty", "Pharmacy", "Groceries", "Luxury Item", "Food", "Daily Li..."];

const browseCreators = [
  { name: "Arlene McCoy", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300", duration: "04:35" },
  { name: "Robert Fox", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300", duration: "28:34" },
  { name: "Albert Flores", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300", duration: "25:39" },
  { name: "Kristin Watson", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300", duration: "40:18" },
  { name: "Brooklyn Simmons", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300", duration: "—" },
  { name: "Jacob Jones", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300", duration: "10:09" },
  { name: "Robert Flores", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300", duration: "—" },
  { name: "Darrell Steward", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300", duration: "—" },
  { name: "Dianne Russell", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300", duration: "—" },
  { name: "Ronald Richards", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300", duration: "04:18" },
  { name: "Courtney Henry", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300", duration: "09:09" },
  { name: "Floyd Miles", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300", duration: "40:32" },
  { name: "Ralph Edwards", image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=300", duration: "04:54" },
  { name: "Kristin Watson", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300", duration: "15:17" },
  { name: "Jane Cooper", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300", duration: "05:06" },
];

/* ─── Mobile Landing (original) ─── */
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-12 h-12 rounded-full border-2 border-primary-foreground/80 flex items-center justify-center">
      <Mic className="w-6 h-6" />
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-3 border-2 border-primary-foreground/80 rounded-t-full border-b-0" />
    </div>
  </div>
);

const MobileNavbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
    <Logo />
    <div className="flex items-center gap-3">
      <Button variant="outline" className="border-primary-foreground/60 bg-foreground/10 backdrop-blur-sm hover:bg-foreground/20 text-primary-foreground rounded-full px-6">Log in</Button>
      <Button variant="outline" className="border-primary-foreground/60 bg-transparent hover:bg-foreground/10 text-primary-foreground rounded-full px-6">Sign up</Button>
    </div>
  </nav>
);

const PhoneMockup = ({ src, className = "" }: { src: string; className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="w-[240px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-foreground/10">
      <img src={src} alt="App Screenshot" className="w-full h-auto" />
    </div>
  </div>
);

const QRBlock = ({ label = "Download Tokshop live" }: { label?: string }) => (
  <div>
    <p className="text-sm font-medium mb-2 opacity-90">{label}</p>
    <div className="w-20 h-20 bg-primary-foreground rounded-lg overflow-hidden">
      <img src={qrcode} alt="QR Code" className="w-full h-full object-cover" />
    </div>
  </div>
);

const MobileLanding = () => (
  <div className="min-h-screen text-primary-foreground">
    <MobileNavbar />
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-6 pt-24 pb-16 flex flex-col items-center gap-12">
        <div className="relative flex items-end">
          <PhoneMockup src={heroPhone1} className="-rotate-6 z-10" />
          <PhoneMockup src={heroPhone2} className="rotate-3 -ml-16 mt-8" />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-5xl font-bold leading-tight mb-6">The Live Shopping Marketplace</h1>
          <p className="text-xl opacity-90 mb-8">Shop, sell, and connect around the things you love.</p>
          <QRBlock />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button className="rounded-full px-8 py-6 text-base border-2 border-primary-foreground/60 bg-transparent hover:bg-primary-foreground/10">Get Started</Button>
            <Button className="rounded-full px-8 py-6 text-base bg-foreground/20 hover:bg-foreground/30 backdrop-blur-sm border-0">Browse Shows</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
        <ChevronDown className="w-5 h-5 animate-bounce" />
        <span className="text-sm font-medium">How it works</span>
      </div>
    </section>
    {/* Join */}
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, hsl(168, 45%, 55%) 0%, hsl(200, 50%, 40%) 100%)" }}>
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest opacity-70 mb-4">How it works</p>
          <h2 className="text-4xl font-bold mb-6">Join In the Fun</h2>
          <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">Take part in fast-paced auctions, incredible flash sales, live show giveaways, and so much more.</p>
          <QRBlock />
        </div>
        <PhoneMockup src={joinfunPhone} />
      </div>
    </section>
    {/* Got It All */}
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, hsl(200, 50%, 40%) 0%, hsl(220, 50%, 35%) 100%)" }}>
      <div className="container mx-auto flex flex-col items-center gap-16">
        <PhoneMockup src={gotitallPhone} />
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">We've Got It All</h2>
          <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">Search our marketplace to find the exact product you're looking for.</p>
          <QRBlock />
        </div>
      </div>
    </section>
    {/* Deals */}
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, hsl(220, 50%, 35%) 0%, hsl(240, 40%, 25%) 100%)" }}>
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Find Incredible Deals<br />on Name Brands</h2>
          <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">From the brands you love, to hard-to-find specialty products.</p>
          <QRBlock />
          <Button className="mt-8 rounded-full px-8 py-6 text-base border-2 border-primary-foreground/60 bg-transparent hover:bg-primary-foreground/10">Start Shopping</Button>
        </div>
        <PhoneMockup src={dealsPhone} />
      </div>
    </section>
    <footer className="py-8 px-6 text-center text-primary-foreground" style={{ background: "hsl(240, 40%, 20%)" }}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm opacity-70 hover:opacity-100 transition-opacity">↑ To the Top</button>
    </footer>
  </div>
);

/* ─── Desktop Layout ─── */
const DesktopNav = () => (
  <header className="sticky top-0 z-50 bg-background border-b border-border">
    {/* Top bar */}
    <div className="flex items-center gap-4 px-6 py-3">
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <div className="w-8 h-8 rounded-full border-2 border-secondary flex items-center justify-center">
          <Mic className="w-4 h-4 text-secondary" />
        </div>
        <span className="font-bold text-lg text-foreground">TokShop</span>
      </Link>
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search for any product or brand" className="pl-10 pr-10 rounded-full bg-muted border-border text-foreground" />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
            <Search className="w-3.5 h-3.5 text-secondary-foreground" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
        <span className="flex items-center gap-1 cursor-pointer hover:text-foreground"><MapPin className="w-4 h-4" /> Update Location</span>
        <Link to="/cart" className="flex items-center gap-1 hover:text-foreground"><ShoppingBag className="w-4 h-4" /> Cart</Link>
        <Link to="/login" className="flex items-center gap-1 hover:text-foreground"><User className="w-4 h-4" /> Sign In</Link>
      </div>
    </div>
    {/* Categories bar */}
    <div className="flex items-center gap-1 px-6 py-2 border-t border-border/50 overflow-x-auto scrollbar-none">
      {categories.map((cat, i) => (
        <button key={cat} className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${i === 0 ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
          {cat}
        </button>
      ))}
      <div className="ml-auto flex items-center gap-4 shrink-0 text-sm font-medium">
        <Link to="/marketplace" className="text-secondary hover:underline">Best Deals</Link>
        <Link to="/shows" className="text-primary hover:underline flex items-center gap-1"><span className="font-bold">TokShop</span> Live 🔴</Link>
      </div>
    </div>
  </header>
);

const LiveStreamSection = () => (
  <section className="px-6 py-6">
    {/* Tabs */}
    <div className="flex items-center gap-1 mb-4">
      {["Live", "Discover", "Following", "Browse"].map((tab, i) => (
        <button key={tab} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-foreground text-background" : i === 1 ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
          {tab}
        </button>
      ))}
    </div>

    {/* Stream + Chat */}
    <div className="flex gap-4">
      {/* Video */}
      <div className="flex-1">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/5">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" alt="Live Stream" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3">
            <button className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground"><Pause className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground"><Volume2 className="w-4 h-4" /></button>
            <Badge className="bg-destructive border-0 text-primary-foreground text-[10px] ml-1">🔴 LIVE</Badge>
            <div className="flex-1" />
            <button className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground"><Grid3X3 className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground"><Maximize className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Stream info */}
        <div className="mt-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">Best Deals of the Week</h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60" alt="" className="w-full h-full object-cover" />
                </div>
                <span className="font-medium text-sm text-foreground">Arlene McCoy <span className="text-secondary">✓</span></span>
                <span className="text-xs text-muted-foreground">Live Streaming | Product</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-destructive font-medium flex items-center gap-1">👁 45.6k watching</span>
              <button className="p-2 rounded-full hover:bg-muted"><Heart className="w-4 h-4 text-muted-foreground" /></button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground text-xs">+ Follow</Button>
            <Button size="sm" variant="outline" className="rounded-full text-xs">Live Notifications ▾</Button>
          </div>
        </div>

        {/* Products carousel */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {featuredProducts.map((p, i) => (
            <div key={i} className="flex gap-2 bg-card border border-border/50 rounded-xl p-2 min-w-[200px] shrink-0">
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0">
                <img src={p.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-foreground font-medium line-clamp-2">{p.name}</p>
                <p className="text-xs mt-1"><span className="font-bold text-foreground">${p.price.toFixed(2)}</span> <span className="text-muted-foreground line-through">${p.old}</span></p>
              </div>
              {i === 0 && <div className="shrink-0 self-end"><div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center"><ShoppingBag className="w-3 h-3 text-secondary-foreground" /></div></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="w-[300px] shrink-0 bg-card border border-border/50 rounded-2xl flex flex-col">
        <div className="p-3 border-b border-border/50 flex items-center justify-between">
          <span className="font-semibold text-sm text-foreground">Live chat</span>
          <button className="text-muted-foreground hover:text-foreground">•••</button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[400px]">
          {chatMessages.map((m, i) => (
            <div key={i} className="flex gap-2">
              <div className={`w-6 h-6 rounded-full ${m.color} shrink-0 flex items-center justify-center text-[8px] text-primary-foreground font-bold`}>
                {m.user.charAt(0)}
              </div>
              <div>
                <span className="text-xs font-medium text-foreground">{m.user}</span>
                <span className="text-xs text-muted-foreground ml-1">{m.msg}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-border/50 flex items-center gap-2">
          <Input placeholder="Send a message..." className="text-xs h-8 rounded-full bg-muted border-0" />
          <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0"><Grid3X3 className="w-3.5 h-3.5 text-muted-foreground" /></button>
          <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0"><Send className="w-3.5 h-3.5 text-secondary-foreground" /></button>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedCreators = () => (
  <section className="px-6 py-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-foreground">Featured Creators</h2>
      <Link to="/shows" className="text-sm text-secondary hover:underline flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></Link>
    </div>
    <div className="flex gap-6 overflow-x-auto pb-2">
      {creators.map((c, i) => (
        <div key={i} className="flex flex-col items-center gap-2 shrink-0">
          <div className={`relative w-16 h-16 rounded-full overflow-hidden ${c.isLive ? "ring-2 ring-destructive ring-offset-2 ring-offset-background" : ""}`}>
            <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
            {c.isLive && <Badge className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-destructive border-0 text-[8px] text-primary-foreground px-1.5 py-0">LIVE</Badge>}
          </div>
          <span className="text-xs text-foreground font-medium text-center w-16 truncate">{c.name}</span>
        </div>
      ))}
    </div>
  </section>
);

const LimitedCoupons = () => (
  <section className="px-6 py-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-foreground">Limited-Time Coupon</h2>
      <Link to="/marketplace" className="text-sm text-secondary hover:underline flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></Link>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {couponVideos.map((v, i) => (
        <div key={i} className="group">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
            <img src={v.image} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <Badge className="absolute top-3 left-3 bg-background/30 backdrop-blur-sm border-0 text-primary-foreground text-[10px]">{v.date}</Badge>
            <div className="absolute bottom-3 right-3 flex items-center gap-1 text-primary-foreground text-xs">
              <Play className="w-3 h-3" /> {v.duration}
            </div>
          </div>
          <div className="mt-2 flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-muted overflow-hidden shrink-0">
              <img src={creators[i]?.avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{v.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-muted-foreground">{v.seller}</span>
                <Button size="sm" variant="outline" className="h-5 text-[10px] px-2 rounded-full">+ Follow</Button>
              </div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-3 h-3 ${j < Math.floor(v.rating) ? "text-accent fill-accent" : "text-muted-foreground/30"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const UpcomingEvents = () => (
  <div className="flex gap-4 mb-6">
    {upcomingEvents.map((e, i) => (
      <div key={i} className={`flex-1 rounded-2xl p-6 bg-gradient-to-br ${e.gradient} text-primary-foreground relative overflow-hidden`}>
        <Badge className="bg-primary-foreground/20 border-0 text-primary-foreground text-[10px] mb-3">Upcoming {i === 0 ? "🔴 LIVE" : "🟢 LIVE"}</Badge>
        <h3 className="text-2xl font-bold leading-tight mb-2">{e.title}</h3>
        <p className="text-sm opacity-80 mb-3">{e.subtitle}</p>
        <div className="flex items-center gap-2 text-xs opacity-70">
          <span>📅 {e.date}</span>
          {e.time && <span>🕐 {e.time}</span>}
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary-foreground/10 rotate-12" />
      </div>
    ))}
  </div>
);

const BrowseCreatorGrid = () => (
  <div>
    <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
      {browseCategories.map((cat, i) => (
        <button key={cat} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${i === 0 ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}>
          {cat}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-5 gap-4">
      {browseCreators.map((c, i) => (
        <Link key={i} to={`/show/${i + 1}`} className="group">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
            <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {c.duration !== "—" && (
              <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-destructive/90 text-primary-foreground text-[10px] px-1.5 py-0.5 rounded">
                <Play className="w-2.5 h-2.5" /> {c.duration}
              </div>
            )}
          </div>
          <p className="text-xs font-medium text-foreground mt-1.5 truncate">{c.name}</p>
        </Link>
      ))}
    </div>
    <div className="flex justify-center mt-6">
      <Button variant="outline" className="rounded-full px-8">Show More →</Button>
    </div>
  </div>
);

const BestSellersBanner = () => (
  <div className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-muted to-muted/50 flex items-center">
    <div className="flex-1 p-8">
      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400" alt="" className="w-full h-48 object-cover rounded-xl" />
    </div>
    <div className="p-8">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full border-2 border-secondary flex items-center justify-center">
          <Mic className="w-4 h-4 text-secondary" />
        </div>
        <span className="font-bold text-foreground">TokShop</span>
        <Badge className="bg-destructive border-0 text-primary-foreground text-[10px]">🔴 LIVE</Badge>
      </div>
      <h3 className="text-3xl font-bold text-foreground mb-2">Best Sellers</h3>
      <p className="text-sm text-muted-foreground mb-4">Live on Tuesdays, Wednesdays, Thursdays</p>
      <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-1">
        <Play className="w-3.5 h-3.5" /> Watch
      </Button>
    </div>
  </div>
);

const ServiceBar = () => (
  <div className="grid grid-cols-4 gap-4 mt-8 mb-8">
    {[
      { icon: MapPin, label: "Free in-store pick up", sub: "24/7 Amazing services" },
      { icon: Truck, label: "Free Shipping", sub: "24/7 Amazing services" },
      { icon: CreditCard, label: "Flexible Payment", sub: "24/7 Amazing services" },
      { icon: Headphones, label: "Convenient help", sub: "24/7 Amazing services" },
    ].map((s, i) => (
      <div key={i} className="flex items-center gap-3 bg-card border border-border/50 rounded-xl p-4">
        <s.icon className="w-5 h-5 text-foreground shrink-0" />
        <div>
          <p className="text-sm font-semibold text-foreground">{s.label}</p>
          <p className="text-[10px] text-muted-foreground">{s.sub}</p>
        </div>
      </div>
    ))}
  </div>
);

const DesktopFooter = () => (
  <footer className="border-t border-border bg-card px-6 py-10">
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
      {[
        { title: "About TokShop", links: ["Company Info", "News", "Investors", "Careers", "Policies"] },
        { title: "Order & Purchases", links: ["Check order Status", "Shipping, Delivery & Pickup", "Returns & Exchanges", "Price Match Guarantee"] },
        { title: "Popular Categories", links: ["Check order Status", "Shipping, Delivery & Pickup", "Returns & Exchanges", "Price Match Guarantee"] },
        { title: "Support & Services", links: ["Seller Center", "Contact Us", "Help Center", "Return Policy"] },
      ].map((col, i) => (
        <div key={i}>
          <h4 className="font-semibold text-sm text-foreground mb-3">{col.title}</h4>
          <ul className="space-y-2">
            {col.links.map((link, j) => (
              <li key={j}><span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">{link}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border/50 text-center">
      <p className="text-xs text-muted-foreground">© 2026 TokShop. All rights reserved.</p>
    </div>
  </footer>
);

const DesktopLayout = () => (
  <div className="min-h-screen bg-background text-foreground">
    <DesktopNav />
    <div className="max-w-7xl mx-auto">
      {/* Left column: Live experience */}
      <LiveStreamSection />
      <FeaturedCreators />
      <LimitedCoupons />

      {/* Browse section (right side of wireframe — shown below on single-column desktop) */}
      <div className="px-6 py-8 border-t border-border/50">
        <UpcomingEvents />
        <BrowseCreatorGrid />
        <BestSellersBanner />
        <ServiceBar />
      </div>
    </div>
    <DesktopFooter />
  </div>
);

/* ─── Main ─── */
const Index = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileLanding /> : <DesktopLayout />;
};

export default Index;
