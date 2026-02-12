import { User, Bell, Shield, Palette, Globe, ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import AppLayout from "@/components/AppLayout";

const sections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Edit Profile", type: "link" as const },
      { icon: Shield, label: "Privacy & Security", type: "link" as const },
      { icon: Globe, label: "Language", value: "English", type: "link" as const },
    ],
  },
  {
    title: "Notifications",
    items: [
      { icon: Bell, label: "Push Notifications", type: "toggle" as const, defaultOn: true },
      { icon: Bell, label: "Email Notifications", type: "toggle" as const, defaultOn: false },
      { icon: Bell, label: "Live Stream Alerts", type: "toggle" as const, defaultOn: true },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Palette, label: "Dark Mode", type: "toggle" as const, defaultOn: true },
    ],
  },
];

const Settings = () => (
  <AppLayout>
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="space-y-6">
        {sections.map(section => (
          <div key={section.title}>
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">{section.title}</h2>
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              {section.items.map((item, i) => (
                <div key={item.label} className={`flex items-center gap-4 px-5 py-4 ${i > 0 ? "border-t border-border/30" : ""}`}>
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  {item.type === "toggle" ? (
                    <Switch defaultChecked={item.defaultOn} />
                  ) : (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      {"value" in item && <span className="text-xs">{item.value}</span>}
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Settings;
