import { Store, TrendingUp, Package, Users, PlayCircle, DollarSign, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

const stats = [
  { icon: DollarSign, label: "Revenue", value: "$2,480", change: "+12%" },
  { icon: Package, label: "Products", value: "34", change: "+3" },
  { icon: Users, label: "Followers", value: "1.2K", change: "+89" },
  { icon: BarChart3, label: "Views", value: "8.5K", change: "+22%" },
];

const quickActions = [
  { icon: Package, label: "Add Product", desc: "List a new item for sale" },
  { icon: PlayCircle, label: "Go Live", desc: "Start a live shopping stream" },
  { icon: TrendingUp, label: "Analytics", desc: "View detailed performance" },
  { icon: Store, label: "Shop Settings", desc: "Customize your storefront" },
];

const Seller = () => (
  <AppLayout>
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <Store className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Seller Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage your shop & go live</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {stats.map(stat => (
            <div key={stat.label} className="bg-background/50 rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <stat.icon className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-xs text-green-500 font-medium">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="font-semibold mb-3">Quick Actions</h2>
      <div className="space-y-2">
        {quickActions.map(action => (
          <button key={action.label} className="w-full flex items-center gap-4 bg-card rounded-2xl p-4 border border-border/50 hover:bg-muted/50 transition-colors text-left">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
              <action.icon className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{action.label}</p>
              <p className="text-xs text-muted-foreground">{action.desc}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Seller;
