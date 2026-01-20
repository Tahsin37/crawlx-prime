import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Download, 
  Check, 
  ArrowUpRight,
  Zap,
  Globe,
  Users,
  Building
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For exploring CrawlX",
    features: ["100 pages/month", "2 concurrent crawls", "Basic output formats", "Community support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For developers and small teams",
    features: ["10,000 pages/month", "10 concurrent crawls", "All output formats", "API access", "Priority support"],
    current: true,
    popular: true,
  },
  {
    name: "Scale",
    price: "$199",
    period: "/month",
    description: "For growing businesses",
    features: ["100,000 pages/month", "50 concurrent crawls", "AI extraction", "Custom proxies", "SLA guarantee"],
    current: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: ["Unlimited pages", "Unlimited crawls", "Dedicated support", "Custom integrations", "On-premise option"],
    current: false,
  },
];

const invoices = [
  { id: "INV-001", date: "Feb 1, 2024", amount: "$49.00", status: "Paid" },
  { id: "INV-002", date: "Jan 1, 2024", amount: "$49.00", status: "Paid" },
  { id: "INV-003", date: "Dec 1, 2023", amount: "$49.00", status: "Paid" },
  { id: "INV-004", date: "Nov 1, 2023", amount: "$49.00", status: "Paid" },
];

const Billing = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Billing</h1>
              <p className="text-muted-foreground mt-1">
                Manage your subscription and billing details.
              </p>
            </div>

            {/* Current Plan & Usage */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Current Plan */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground">Current Plan</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Pro
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-semibold text-foreground">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Your next billing date is March 1, 2024
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">Change Plan</Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">Cancel</Button>
                </div>
              </div>

              {/* Usage */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-sm font-medium text-muted-foreground mb-6">Usage This Month</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">Pages Crawled</span>
                      <span className="text-sm font-medium text-foreground">7,234 / 10,000</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "72%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">API Requests</span>
                      <span className="text-sm font-medium text-foreground">45,231 / 100,000</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: "45%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">AI Extractions</span>
                      <span className="text-sm font-medium text-foreground">892 / 5,000</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-success rounded-full" style={{ width: "18%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plans */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-6">Available Plans</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`p-6 rounded-xl border ${
                      plan.current 
                        ? "bg-primary/5 border-primary/30" 
                        : "bg-card border-border"
                    } relative`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        Current
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-2xl font-semibold text-foreground">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-success" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.current ? "outline" : "default"} 
                      className="w-full"
                      disabled={plan.current}
                    >
                      {plan.current ? "Current Plan" : plan.name === "Enterprise" ? "Contact Sales" : "Upgrade"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Payment Method</h3>
                <Button variant="outline" size="sm">Update</Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">•••• •••• •••• 4242</p>
                  <p className="text-xs text-muted-foreground">Expires 12/2026</p>
                </div>
              </div>
            </div>

            {/* Invoices */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="px-6 py-4 border-b border-border">
                <h3 className="text-lg font-semibold text-foreground">Invoices</h3>
              </div>
              <div className="divide-y divide-border">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">{invoice.id}</p>
                        <p className="text-xs text-muted-foreground">{invoice.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground">{invoice.amount}</span>
                      <span className="px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                        {invoice.status}
                      </span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Billing;