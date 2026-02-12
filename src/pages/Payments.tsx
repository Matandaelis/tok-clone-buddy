import { CreditCard, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

const cards = [
  { id: 1, type: "Visa", last4: "4829", expiry: "09/27", isDefault: true },
  { id: 2, type: "Mastercard", last4: "7163", expiry: "03/28", isDefault: false },
];

const Payments = () => (
  <AppLayout>
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Payment Methods</h1>
        <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground gap-1.5">
          <Plus className="w-4 h-4" /> Add
        </Button>
      </div>
      <div className="space-y-3">
        {cards.map(card => (
          <div key={card.id} className={`bg-card rounded-2xl p-5 border ${card.isDefault ? "border-secondary/50 bg-secondary/5" : "border-border/50"} flex items-center gap-4`}>
            <div className="w-12 h-8 rounded-lg bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{card.type} •••• {card.last4}</p>
              <p className="text-xs text-muted-foreground">Expires {card.expiry}</p>
            </div>
            {card.isDefault && (
              <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">Default</span>
            )}
            <button className="text-muted-foreground hover:text-destructive transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Payments;
