import { ChevronDown, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhone1 from "@/assets/hero-phone1.jpeg";
import heroPhone2 from "@/assets/hero-phone2.jpeg";
import joinfunPhone from "@/assets/joinfun-phone.jpeg";
import gotitallPhone from "@/assets/gotitall-phone.jpeg";
import dealsPhone from "@/assets/deals-phone.jpeg";
import qrcode from "@/assets/qrcode.png";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-12 h-12 rounded-full border-2 border-primary-foreground/80 flex items-center justify-center">
      <Mic className="w-6 h-6" />
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-3 border-2 border-primary-foreground/80 rounded-t-full border-b-0" />
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
    <Logo />
    <div className="flex items-center gap-3">
      <span className="hidden md:inline text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity">
        Become a Seller
      </span>
      <Button
        variant="outline"
        className="border-primary-foreground/60 bg-foreground/10 backdrop-blur-sm hover:bg-foreground/20 text-primary-foreground rounded-full px-6"
      >
        Log in
      </Button>
      <Button
        variant="outline"
        className="border-primary-foreground/60 bg-transparent hover:bg-foreground/10 text-primary-foreground rounded-full px-6"
      >
        Sign up
      </Button>
    </div>
  </nav>
);

const PhoneMockup = ({ src, className = "" }: { src: string; className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="w-[240px] md:w-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-foreground/10">
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

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    {/* Decorative glass shapes */}
    <div className="absolute top-12 right-12 w-64 h-64 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm rotate-12 hidden lg:block" />
    <div className="absolute top-24 right-24 w-48 h-48 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm rotate-6 hidden lg:block" />

    <div className="container mx-auto px-6 md:px-12 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
      {/* Phone mockups */}
      <div className="relative flex items-end gap-[-20px] flex-shrink-0">
        <PhoneMockup src={heroPhone1} className="-rotate-6 z-10" />
        <PhoneMockup src={heroPhone2} className="rotate-3 -ml-16 mt-8" />
      </div>

      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          The Live Shopping Marketplace
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-8">
          Shop, sell, and connect around the things you love.
        </p>
        <QRBlock />
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="rounded-full px-8 py-6 text-base border-2 border-primary-foreground/60 bg-transparent hover:bg-primary-foreground/10">
            Get Started
          </Button>
          <Button className="rounded-full px-8 py-6 text-base bg-foreground/20 hover:bg-foreground/30 backdrop-blur-sm border-0">
            Browse Shows
          </Button>
        </div>
      </div>
    </div>

    {/* How it works indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
      <ChevronDown className="w-5 h-5 animate-bounce" />
      <span className="text-sm font-medium">How it works</span>
    </div>
  </section>
);

const JoinFunSection = () => (
  <section className="py-24 px-6 md:px-12" style={{ background: "linear-gradient(180deg, hsl(168, 45%, 55%) 0%, hsl(200, 50%, 40%) 100%)" }}>
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 text-center lg:text-left">
        <p className="text-sm uppercase tracking-widest opacity-70 mb-4">How it works</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join In the Fun</h2>
        <p className="text-lg opacity-90 mb-8 max-w-lg">
          Take part in fast-paced auctions, incredible flash sales, live show giveaways, and so much more.
        </p>
        <QRBlock />
      </div>
      <PhoneMockup src={joinfunPhone} />
    </div>
  </section>
);

const GotItAllSection = () => (
  <section className="py-24 px-6 md:px-12" style={{ background: "linear-gradient(180deg, hsl(200, 50%, 40%) 0%, hsl(220, 50%, 35%) 100%)" }}>
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
      <PhoneMockup src={gotitallPhone} />
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">We've Got It All</h2>
        <p className="text-lg opacity-90 mb-8 max-w-lg">
          Search our marketplace to find the exact product you're looking for.
        </p>
        <QRBlock />
      </div>
    </div>
  </section>
);

const DealsSection = () => (
  <section className="py-24 px-6 md:px-12" style={{ background: "linear-gradient(180deg, hsl(220, 50%, 35%) 0%, hsl(240, 40%, 25%) 100%)" }}>
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Find Incredible Deals<br />on Name Brands
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-lg">
          From the brands you love, to hard-to-find specialty products. There's a deal on whatever you're looking for.
        </p>
        <QRBlock />
        <Button className="mt-8 rounded-full px-8 py-6 text-base border-2 border-primary-foreground/60 bg-transparent hover:bg-primary-foreground/10">
          Start Shopping
        </Button>
        <p className="mt-6 text-xs uppercase tracking-widest opacity-60">Peace of Mind</p>
      </div>
      <PhoneMockup src={dealsPhone} />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 px-6 text-center" style={{ background: "hsl(240, 40%, 20%)" }}>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
    >
      ↑ To the Top
    </button>
  </footer>
);

const Index = () => (
  <div className="min-h-screen text-primary-foreground">
    <Navbar />
    <HeroSection />
    <JoinFunSection />
    <GotItAllSection />
    <DealsSection />
    <Footer />
  </div>
);

export default Index;
