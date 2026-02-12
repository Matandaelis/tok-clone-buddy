import { MessageCircle, Mail, FileText, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

const faqs = [
  { q: "How do I track my order?", a: "Go to My Orders from your profile to see real-time tracking updates." },
  { q: "What is the return policy?", a: "You can return most items within 30 days of delivery for a full refund." },
  { q: "How do live shopping shows work?", a: "Sellers host live streams where you can see products in action and buy instantly with exclusive deals." },
  { q: "How do I become a seller?", a: "Visit the 'Become a Seller' section in your profile to apply and set up your shop." },
  { q: "Is my payment information secure?", a: "Yes, all transactions are encrypted and we never store your full card details." },
];

const contactOptions = [
  { icon: MessageCircle, label: "Live Chat", desc: "Chat with our support team", action: "Start Chat" },
  { icon: Mail, label: "Email Us", desc: "support@tokshop.com", action: "Send Email" },
];

const Help = () => (
  <AppLayout>
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Help & Support</h1>
      <p className="text-sm text-muted-foreground mb-6">How can we help you today?</p>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search for help..." className="pl-10 rounded-full bg-card border-border/50" />
      </div>

      <h2 className="font-semibold mb-3">Frequently Asked Questions</h2>
      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden mb-6">
        {faqs.map((faq, i) => (
          <details key={i} className={`group ${i > 0 ? "border-t border-border/30" : ""}`}>
            <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer list-none">
              <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="flex-1 text-sm font-medium">{faq.q}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
            </summary>
            <p className="px-5 pb-4 pl-12 text-sm text-muted-foreground">{faq.a}</p>
          </details>
        ))}
      </div>

      <h2 className="font-semibold mb-3">Contact Us</h2>
      <div className="space-y-3">
        {contactOptions.map(opt => (
          <div key={opt.label} className="flex items-center gap-4 bg-card rounded-2xl p-4 border border-border/50">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
              <opt.icon className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{opt.label}</p>
              <p className="text-xs text-muted-foreground">{opt.desc}</p>
            </div>
            <Button size="sm" variant="outline" className="rounded-full text-xs">{opt.action}</Button>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Help;
