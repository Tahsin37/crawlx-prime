import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Globe, 
  Zap, 
  Database,
  ArrowUpRight,
  Calendar
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dailyUsage = [
  { day: "Mon", pages: 1234, requests: 4521 },
  { day: "Tue", pages: 2341, requests: 8234 },
  { day: "Wed", pages: 1892, requests: 6123 },
  { day: "Thu", pages: 3124, requests: 10234 },
  { day: "Fri", pages: 2567, requests: 8765 },
  { day: "Sat", pages: 892, requests: 3421 },
  { day: "Sun", pages: 1123, requests: 4567 },
];

const Usage = () => {
  const maxPages = Math.max(...dailyUsage.map(d => d.pages));

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-foreground">Usage & Limits</h1>
                <p className="text-muted-foreground mt-1">
                  Monitor your API usage and resource consumption.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Select defaultValue="7d">
                  <SelectTrigger className="w-40">
                    <Calendar className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">Last 24 hours</SelectItem>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">Export Report</Button>
              </div>
            </div>

            {/* Usage Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { 
                  label: "Pages Crawled", 
                  value: "7,234", 
                  limit: "10,000",
                  percentage: 72,
                  icon: Globe,
                  color: "primary"
                },
                { 
                  label: "API Requests", 
                  value: "45,231", 
                  limit: "100,000",
                  percentage: 45,
                  icon: Zap,
                  color: "accent"
                },
                { 
                  label: "AI Extractions", 
                  value: "892", 
                  limit: "5,000",
                  percentage: 18,
                  icon: Database,
                  color: "success"
                },
                { 
                  label: "Bandwidth", 
                  value: "2.4 GB", 
                  limit: "10 GB",
                  percentage: 24,
                  icon: BarChart3,
                  color: "warning"
                },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                      <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {stat.percentage}% used
                    </span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">of {stat.limit}</p>
                  <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${stat.color} rounded-full`}
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Daily Usage</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Pages Crawled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-muted-foreground">API Requests</span>
                  </div>
                </div>
              </div>
              
              <div className="h-64 flex items-end gap-3">
                {dailyUsage.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex gap-1 items-end h-48">
                      <div 
                        className="flex-1 bg-primary/80 rounded-t-md transition-all hover:bg-primary"
                        style={{ height: `${(day.pages / maxPages) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* By Endpoint */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6">By Endpoint</h3>
                <div className="space-y-4">
                  {[
                    { endpoint: "/crawl", requests: 23456, percentage: 52 },
                    { endpoint: "/extract", requests: 12345, percentage: 27 },
                    { endpoint: "/status", requests: 6789, percentage: 15 },
                    { endpoint: "/batch", requests: 2641, percentage: 6 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <code className="text-sm font-mono text-foreground">{item.endpoint}</code>
                        <span className="text-sm text-muted-foreground">{item.requests.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Domains */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6">Top Crawled Domains</h3>
                <div className="space-y-4">
                  {[
                    { domain: "stripe.com", pages: 847, percentage: 35 },
                    { domain: "vercel.com", pages: 512, percentage: 21 },
                    { domain: "github.com", pages: 423, percentage: 17 },
                    { domain: "docs.python.org", pages: 341, percentage: 14 },
                    { domain: "linear.app", pages: 312, percentage: 13 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                          <Globe className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.domain}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{item.pages} pages</p>
                        <p className="text-xs text-muted-foreground">{item.percentage}% of total</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Need more capacity?</h3>
                  <p className="text-sm text-muted-foreground">
                    Upgrade to Scale plan for 100,000 pages/month and 50 concurrent crawls.
                  </p>
                </div>
                <Button className="gap-2">
                  Upgrade Plan
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Usage;