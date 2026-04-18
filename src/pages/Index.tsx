import { ChevronDown, Mic, Search, ShoppingBag, User, Play, Pause, Volume2, Maximize, Heart, Star, Send, Grid3X3, ChevronRight, Users, Clock, Truck, CreditCard, Headphones, Package, MapPin, Zap, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FeaturedShowsHero, { type FeaturedShow } from "@/components/home/FeaturedShowsHero";
import LiveTicker from "@/components/home/LiveTicker";
import HotLotsRail from "@/components/home/HotLotsRail";
import LiveBiddingSidebar from "@/components/home/LiveBiddingSidebar";
import PersonalizedRail from "@/components/home/PersonalizedRail";
import MobileLiveFeed from "@/components/home/MobileLiveFeed";
import heroPhone1 from "@/assets/hero-phone1.jpeg";
import heroPhone2 from "@/assets/hero-phone2.jpeg";
import joinfunPhone from "@/assets/joinfun-phone.jpeg";
import gotitallPhone from "@/assets/gotitall-phone.jpeg";
import dealsPhone from "@/assets/deals-phone.jpeg";
import qrcode from "@/assets/qrcode.png";

/* ─── Animation helpers ─── */
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
};

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

const stats = [
  { value: "2M+", label: "Active Shoppers" },
  { value: "50K+", label: "Live Shows Daily" },
  { value: "10K+", label: "Verified Sellers" },
  { value: "98%", label: "Happy Customers" },
];

const testimonials = [
  { name: "Sarah J.", text: "TokShop completely changed how I shop. The live auctions are addictive — I scored a designer bag for 60% off!", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80", role: "Fashion Buyer" },
  { name: "Marcus T.", text: "As a seller, my revenue tripled after going live on TokShop. The community is incredible.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80", role: "Creator & Seller" },
  { name: "Priya K.", text: "The real-time interaction with sellers makes online shopping feel personal again. Love it!", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80", role: "Beauty Enthusiast" },
];

/* ──────────────────────────────────────────────────────────── */
/* ─── Mobile Landing ─── */
/* ──────────────────────────────────────────────────────────── */

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-12 h-12 rounded-full border-2 border-primary-foreground/80 flex items-center justify-center">
      <Mic className="w-6 h-6" />
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-3 border-2 border-primary-foreground/80 rounded-t-full border-b-0" />
    </div>
  </div>
);

const MobileNavbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
    <Logo />
    <div className="flex items-center gap-3">
      <Button variant="outline" className="border-primary-foreground/60 bg-foreground/10 backdrop-blur-sm hover:bg-foreground/20 text-primary-foreground rounded-full px-6">Log in</Button>
      <Button variant="outline" className="border-primary-foreground/60 bg-transparent hover:bg-foreground/10 text-primary-foreground rounded-full px-6">Sign up</Button>
    </div>
  </nav>
);

const PhoneMockup = ({ src, className = "" }: { src: string; className?: string }) => (
  <motion.div className={`relative ${className}`} variants={scaleIn}>
    <div className="w-[220px] sm:w-[240px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-foreground/10" style={{ boxShadow: "var(--shadow-glow)" }}>
      <img src={src} alt="App Screenshot" className="w-full h-auto" />
    </div>
  </motion.div>
);

const QRBlock = ({ label = "Download Tokshop live" }: { label?: string }) => (
  <motion.div variants={fadeUp}>
    <p className="text-sm font-medium mb-2 opacity-90">{label}</p>
    <div className="w-20 h-20 bg-primary-foreground rounded-lg overflow-hidden shadow-lg">
      <img src={qrcode} alt="QR Code" className="w-full h-full object-cover" />
    </div>
  </motion.div>
);

const MobileStats = () => (
  <AnimatedSection className="grid grid-cols-2 gap-4 px-6 py-12" >
    {stats.map((s, i) => (
      <motion.div key={i} variants={fadeUp} className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
        <p className="text-3xl font-black">{s.value}</p>
        <p className="text-sm opacity-80 mt-1">{s.label}</p>
      </motion.div>
    ))}
  </AnimatedSection>
);

const MobileTestimonials = () => (
  <AnimatedSection className="px-6 py-12">
    <motion.h2 variants={fadeUp} className="text-3xl font-bold text-center mb-8">What People Say</motion.h2>
    <div className="space-y-4">
      {testimonials.map((t, i) => (
        <motion.div key={i} variants={fadeUp} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs opacity-70">{t.role}</p>
            </div>
            <div className="ml-auto flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-3 h-3 text-accent fill-accent" />)}
            </div>
          </div>
          <p className="text-sm opacity-90 leading-relaxed">"{t.text}"</p>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

const MobileTrustBar = () => (
  <AnimatedSection className="px-6 py-10">
    <div className="grid grid-cols-3 gap-4 text-center">
      {[
        { icon: ShieldCheck, label: "Buyer Protection" },
        { icon: Truck, label: "Fast Shipping" },
        { icon: Zap, label: "Instant Deals" },
      ].map((item, i) => (
        <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-primary-foreground/15 flex items-center justify-center">
            <item.icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium opacity-90">{item.label}</span>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

const MobileLanding = () => (
  <div className="min-h-screen text-primary-foreground">
    <MobileNavbar />

    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <AnimatedSection className="container mx-auto px-6 pt-28 pb-16 flex flex-col items-center gap-10 relative z-10">
        <motion.div variants={fadeIn} className="relative flex items-end">
          <PhoneMockup src={heroPhone1} className="-rotate-6 z-10" />
          <PhoneMockup src={heroPhone2} className="rotate-3 -ml-16 mt-8" />
        </motion.div>
        <div className="flex-1 text-center">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.2em] opacity-70 mb-3 font-medium">Shop • Sell • Connect</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black leading-[1.1] mb-5">
            The Live Shopping<br />
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Marketplace</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg opacity-85 mb-8 max-w-md mx-auto leading-relaxed">
            Shop, sell, and connect around the things you love — all in real time.
          </motion.p>
          <QRBlock />
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-8">
            <Button className="rounded-full px-8 py-6 text-base border-2 border-primary-foreground/60 bg-transparent hover:bg-primary-foreground/10 transition-all hover:scale-105">Get Started</Button>
            <Button className="rounded-full px-8 py-6 text-base bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm border-0 transition-all hover:scale-105">Browse Shows</Button>
          </motion.div>
        </div>
      </AnimatedSection>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer">
        <ChevronDown className="w-5 h-5 animate-bounce" />
        <span className="text-sm font-medium opacity-70">Scroll to explore</span>
      </motion.div>
    </section>

    {/* Stats */}
    <section style={{ background: "linear-gradient(180deg, hsl(348, 75%, 52%) 0%, hsl(168, 45%, 55%) 100%)" }}>
      <MobileStats />
    </section>

    {/* Trust Bar */}
    <section style={{ background: "hsl(168, 45%, 55%)" }}>
      <MobileTrustBar />
    </section>

    {/* Join */}
    <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, hsl(168, 45%, 55%) 0%, hsl(200, 50%, 40%) 100%)" }}>
      <AnimatedSection className="container mx-auto flex flex-col items-center gap-12">
        <div className="text-center">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest opacity-70 mb-4">How it works</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black mb-5">Join In the Fun</motion.h2>
          <motion.p variants={fadeUp} className="text-lg opacity-90 mb-8 max-w-lg mx-auto leading-relaxed">
            Take part in fast-paced auctions, incredible flash sales, live show giveaways, and so much more.
          </motion.p>
          <QRBlock />
        </div>
        <PhoneMockup src={joinfunPhone} />
      </AnimatedSection>
    </section>

    {/* Got It All */}
    <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, hsl(200, 50%, 40%) 0%, hsl(220, 50%, 35%) 100%)" }}>
      <AnimatedSection className="container mx-auto flex flex-col items-center gap-12">
        <PhoneMockup src={gotitallPhone} />
        <div className="text-center">
          <motion.h2 variants={fadeUp} className="text-4xl font-black mb-5">We've Got It All</motion.h2>
          <motion.p variants={fadeUp} className="text-lg opacity-90 mb-8 max-w-lg mx-auto leading-relaxed">Search our marketplace to find the exact product you're looking for.</motion.p>
          <QRBlock />
        </div>
      </AnimatedSection>
    </section>

    {/* Deals */}
    <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, hsl(220, 50%, 35%) 0%, hsl(240, 40%, 25%) 100%)" }}>
      <AnimatedSection className="container mx-auto flex flex-col items-center gap-12">
        <div className="text-center">
          <motion.h2 variants={fadeUp} className="text-4xl font-black mb-5">
            Find Incredible Deals<br />on Name Brands
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg opacity-90 mb-8 max-w-lg mx-auto leading-relaxed">
            From the brands you love, to hard-to-find specialty products.
          </motion.p>
          <QRBlock />
          <motion.div variants={fadeUp}>
            <Button className="mt-8 rounded-full px-8 py-6 text-base border-2 border-primary-foreground/60 bg-transparent hover:bg-primary-foreground/10 transition-all hover:scale-105">Start Shopping</Button>
          </motion.div>
        </div>
        <PhoneMockup src={dealsPhone} />
      </AnimatedSection>
    </section>

    {/* Testimonials */}
    <section style={{ background: "linear-gradient(180deg, hsl(240, 40%, 25%) 0%, hsl(260, 40%, 22%) 100%)" }}>
      <MobileTestimonials />
    </section>

    {/* CTA */}
    <section className="py-16 px-6 text-center" style={{ background: "hsl(260, 40%, 22%)" }}>
      <AnimatedSection>
        <motion.h2 variants={fadeUp} className="text-3xl font-black mb-4">Ready to Start?</motion.h2>
        <motion.p variants={fadeUp} className="opacity-80 mb-8 max-w-md mx-auto">Join millions of shoppers and creators on the world's favorite live shopping platform.</motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
          <Link to="/signup">
            <Button className="rounded-full px-8 py-6 text-base bg-secondary text-secondary-foreground hover:opacity-90 transition-all hover:scale-105">
              Create Account <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link to="/shows">
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              Watch Live
            </Button>
          </Link>
        </motion.div>
      </AnimatedSection>
    </section>

    <footer className="py-8 px-6 text-center text-primary-foreground" style={{ background: "hsl(260, 40%, 18%)" }}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm opacity-70 hover:opacity-100 transition-opacity">↑ To the Top</button>
    </footer>
  </div>
);

/* ──────────────────────────────────────────────────────────── */
/* ─── Desktop Layout ─── */
/* ──────────────────────────────────────────────────────────── */

const DesktopNav = () => (
  <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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
        <span className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors"><MapPin className="w-4 h-4" /> Update Location</span>
        <Link to="/cart" className="flex items-center gap-1 hover:text-foreground transition-colors"><ShoppingBag className="w-4 h-4" /> Cart</Link>
        <Link to="/login" className="flex items-center gap-1 hover:text-foreground transition-colors"><User className="w-4 h-4" /> Sign In</Link>
      </div>
    </div>
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
  <AnimatedSection className="px-6 py-6">
    <motion.div variants={fadeIn} className="flex items-center gap-1 mb-4">
      {["Live", "Discover", "Following", "Browse"].map((tab, i) => (
        <button key={tab} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-foreground text-background" : i === 1 ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
          {tab}
        </button>
      ))}
    </motion.div>

    <div className="flex gap-4">
      <motion.div variants={fadeUp} className="flex-1">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/5 group">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" alt="Live Stream" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3">
            <button className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/30 transition-colors"><Pause className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/30 transition-colors"><Volume2 className="w-4 h-4" /></button>
            <Badge className="bg-destructive border-0 text-primary-foreground text-[10px] ml-1">🔴 LIVE</Badge>
            <div className="flex-1" />
            <button className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/30 transition-colors"><Grid3X3 className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/30 transition-colors"><Maximize className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">Best Deals of the Week</h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-secondary ring-offset-2 ring-offset-background">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60" alt="" className="w-full h-full object-cover" />
                </div>
                <span className="font-medium text-sm text-foreground">Arlene McCoy <span className="text-secondary">✓</span></span>
                <span className="text-xs text-muted-foreground">Live Streaming | Product</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-destructive font-medium flex items-center gap-1">👁 45.6k watching</span>
              <button className="p-2 rounded-full hover:bg-muted transition-colors"><Heart className="w-4 h-4 text-muted-foreground" /></button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground text-xs hover:opacity-90 transition-opacity">+ Follow</Button>
            <Button size="sm" variant="outline" className="rounded-full text-xs">Live Notifications ▾</Button>
          </div>
        </div>

        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {featuredProducts.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -2, boxShadow: "var(--shadow-card-hover)" }} className="flex gap-2 bg-card border border-border/50 rounded-xl p-2 min-w-[200px] shrink-0 transition-shadow cursor-pointer">
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0">
                <img src={p.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-foreground font-medium line-clamp-2">{p.name}</p>
                <p className="text-xs mt-1"><span className="font-bold text-foreground">${p.price.toFixed(2)}</span> <span className="text-muted-foreground line-through">${p.old}</span></p>
              </div>
              {i === 0 && <div className="shrink-0 self-end"><div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center"><ShoppingBag className="w-3 h-3 text-secondary-foreground" /></div></div>}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat */}
      <motion.div variants={fadeUp} className="w-[300px] shrink-0 bg-card border border-border/50 rounded-2xl flex flex-col">
        <div className="p-3 border-b border-border/50 flex items-center justify-between">
          <span className="font-semibold text-sm text-foreground">Live chat</span>
          <button className="text-muted-foreground hover:text-foreground transition-colors">•••</button>
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
          <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 hover:bg-muted/80 transition-colors"><Grid3X3 className="w-3.5 h-3.5 text-muted-foreground" /></button>
          <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"><Send className="w-3.5 h-3.5 text-secondary-foreground" /></button>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

const FeaturedCreators = () => (
  <AnimatedSection className="px-6 py-6">
    <motion.div variants={fadeUp} className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-foreground">Featured Creators</h2>
      <Link to="/shows" className="text-sm text-secondary hover:underline flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></Link>
    </motion.div>
    <motion.div variants={stagger} className="flex gap-6 overflow-x-auto pb-2">
      {creators.map((c, i) => (
        <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer">
          <div className={`relative w-16 h-16 rounded-full overflow-hidden ${c.isLive ? "ring-2 ring-destructive ring-offset-2 ring-offset-background" : ""}`}>
            <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
            {c.isLive && <Badge className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-destructive border-0 text-[8px] text-primary-foreground px-1.5 py-0">LIVE</Badge>}
          </div>
          <span className="text-xs text-foreground font-medium text-center w-16 truncate">{c.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

const LimitedCoupons = () => (
  <AnimatedSection className="px-6 py-6">
    <motion.div variants={fadeUp} className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-foreground">Limited-Time Coupon</h2>
      <Link to="/marketplace" className="text-sm text-secondary hover:underline flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></Link>
    </motion.div>
    <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
      {couponVideos.map((v, i) => (
        <motion.div key={i} variants={fadeUp} className="group">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
            <img src={v.image} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

const DesktopStats = () => (
  <AnimatedSection className="px-6 py-8">
    <motion.div variants={stagger} className="grid grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }} className="text-center p-6 rounded-2xl bg-card border border-border/50 transition-shadow hover:shadow-lg cursor-default">
          <p className="text-3xl font-black text-secondary">{s.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

const DesktopTestimonials = () => (
  <AnimatedSection className="px-6 py-8">
    <motion.div variants={fadeUp} className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-foreground">What Our Community Says</h2>
    </motion.div>
    <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
      {testimonials.map((t, i) => (
        <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }} className="bg-card border border-border/50 rounded-2xl p-6 transition-shadow hover:shadow-lg">
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 text-accent fill-accent" />)}
          </div>
          <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

const UpcomingEvents = () => (
  <motion.div variants={stagger} className="flex gap-4 mb-6">
    {upcomingEvents.map((e, i) => (
      <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.01 }} className={`flex-1 rounded-2xl p-6 bg-gradient-to-br ${e.gradient} text-primary-foreground relative overflow-hidden cursor-pointer transition-transform`}>
        <Badge className="bg-primary-foreground/20 border-0 text-primary-foreground text-[10px] mb-3">Upcoming {i === 0 ? "🔴 LIVE" : "🟢 LIVE"}</Badge>
        <h3 className="text-2xl font-bold leading-tight mb-2">{e.title}</h3>
        <p className="text-sm opacity-80 mb-3">{e.subtitle}</p>
        <div className="flex items-center gap-2 text-xs opacity-70">
          <span>📅 {e.date}</span>
          {e.time && <span>🕐 {e.time}</span>}
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary-foreground/10 rotate-12" />
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary-foreground/5" />
      </motion.div>
    ))}
  </motion.div>
);

const BrowseCreatorGrid = () => (
  <div>
    <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
      {browseCategories.map((cat, i) => (
        <button key={cat} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${i === 0 ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}>
          {cat}
        </button>
      ))}
    </div>
    <motion.div variants={stagger} className="grid grid-cols-5 gap-4">
      {browseCreators.map((c, i) => (
        <motion.div key={i} variants={fadeUp}>
          <Link to={`/show/${i + 1}`} className="group block">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {c.duration !== "—" && (
                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-destructive/90 text-primary-foreground text-[10px] px-1.5 py-0.5 rounded">
                  <Play className="w-2.5 h-2.5" /> {c.duration}
                </div>
              )}
            </div>
            <p className="text-xs font-medium text-foreground mt-1.5 truncate">{c.name}</p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
    <div className="flex justify-center mt-6">
      <Button variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform">Show More →</Button>
    </div>
  </div>
);

const BestSellersBanner = () => (
  <motion.div variants={fadeUp} whileHover={{ scale: 1.005 }} className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-muted to-muted/50 flex items-center cursor-pointer transition-transform">
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
      <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-1 hover:scale-105 transition-transform">
        <Play className="w-3.5 h-3.5" /> Watch
      </Button>
    </div>
  </motion.div>
);

const ServiceBar = () => (
  <motion.div variants={stagger} className="grid grid-cols-4 gap-4 mt-8 mb-8">
    {[
      { icon: MapPin, label: "Free in-store pick up", sub: "24/7 Amazing services" },
      { icon: Truck, label: "Free Shipping", sub: "24/7 Amazing services" },
      { icon: CreditCard, label: "Flexible Payment", sub: "24/7 Amazing services" },
      { icon: Headphones, label: "Convenient help", sub: "24/7 Amazing services" },
    ].map((s, i) => (
      <motion.div key={i} variants={fadeUp} whileHover={{ y: -2 }} className="flex items-center gap-3 bg-card border border-border/50 rounded-xl p-4 transition-shadow hover:shadow-md cursor-default">
        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
          <s.icon className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{s.label}</p>
          <p className="text-[10px] text-muted-foreground">{s.sub}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const DesktopFooter = () => (
  <footer className="border-t border-border bg-card px-6 py-10">
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
      {[
        { title: "About TokShop", links: ["Company Info", "News", "Investors", "Careers", "Policies"] },
        { title: "Order & Purchases", links: ["Check order Status", "Shipping, Delivery & Pickup", "Returns & Exchanges", "Price Match Guarantee"] },
        { title: "Popular Categories", links: ["Electronics", "Fashion", "Beauty", "Groceries"] },
        { title: "Support & Services", links: ["Seller Center", "Contact Us", "Help Center", "Return Policy"] },
      ].map((col, i) => (
        <div key={i}>
          <h4 className="font-semibold text-sm text-foreground mb-3">{col.title}</h4>
          <ul className="space-y-2">
            {col.links.map((link, j) => (
              <li key={j}><span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{link}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
      <p className="text-xs text-muted-foreground">© 2026 TokShop. All rights reserved.</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
        <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
        <span className="hover:text-foreground cursor-pointer transition-colors">Cookie Settings</span>
      </div>
    </div>
  </footer>
);

const featuredShows: FeaturedShow[] = [
  { id: 1, title: "Flash Sale Frenzy: Designer Steals", host: "LuxStyle", hostAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600", viewers: 12430, category: "Auction", endsInSec: 184, topBid: "$1,840" },
  { id: 2, title: "Sneaker Drop — Rare Grails Tonight", host: "KickzKing", hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600", viewers: 21040, category: "Live Bid", endsInSec: 92, topBid: "$620" },
  { id: 3, title: "Diamond Auction: Certified & Live", host: "CraftedGems", hostAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80", image: "https://images.unsplash.com/photo-1515562141589-67f0d14e5797?w=1600", viewers: 8760, category: "Premium", endsInSec: 312, topBid: "$2,150" },
];

const DesktopLayout = () => (
  <div className="min-h-screen bg-background text-foreground">
    <DesktopNav />
    <LiveTicker />
    <div className="max-w-[1480px] mx-auto px-6 pt-6 flex gap-6">
      <div className="flex-1 min-w-0">
        <PersonalizedRail />
        <FeaturedShowsHero shows={featuredShows} />
        <HotLotsRail />
        <FeaturedCreators />
        <DesktopStats />
        <LimitedCoupons />

        <AnimatedSection className="px-6 py-8 border-t border-border/50">
          <UpcomingEvents />
          <BrowseCreatorGrid />
          <BestSellersBanner />
        </AnimatedSection>

        <DesktopTestimonials />
        <ServiceBar />
      </div>
      <LiveBiddingSidebar />
    </div>
    <DesktopFooter />
  </div>
);

/* ─── Main ─── */
const Index = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileLiveFeed /> : <DesktopLayout />;
};

export default Index;
