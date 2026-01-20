import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[120vh] flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-soft" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-primary/8 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-primary/20 shadow-soft mb-10 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-foreground">Now processing 10M+ pages daily</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8 animate-slide-up">
            The most powerful
            <br />
            <span className="gradient-text">AI web crawler</span>
            <br />
            <span className="text-foreground/70">ever built.</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Crawl any website. Extract exactly what you need.
            <br className="hidden md:block" />
            Faster, cleaner, and more reliable than Firecrawl.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Start Crawling
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/docs" className="gap-2">
                <Play className="w-4 h-4" />
                Read the Docs
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-10 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-warning" />
              <span>Sub-second latency</span>
            </div>
          </div>
        </div>
        
        {/* Large Dashboard Preview */}
        <div className="mt-20 md:mt-28 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-4 md:-left-12 z-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="p-4 rounded-xl bg-card border border-border shadow-large backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Crawl Speed</p>
                    <p className="text-lg font-semibold text-foreground">0.3s avg</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-4 md:-right-12 z-10 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="p-4 rounded-xl bg-card border border-border shadow-large backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                    <p className="text-lg font-semibold text-foreground">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Dashboard Card */}
            <div className="rounded-2xl overflow-hidden shadow-large border border-border bg-card p-2">
              <div className="rounded-xl overflow-hidden bg-background-soft">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-warning/60" />
                    <div className="w-3 h-3 rounded-full bg-success/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1.5 rounded-lg bg-secondary text-xs text-muted-foreground font-medium">
                      app.crawlx.io/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 md:p-10">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Total Crawls", value: "24,847", change: "+12%" },
                      { label: "Pages Crawled", value: "1.2M", change: "+8%" },
                      { label: "Success Rate", value: "99.8%", change: "+0.2%" },
                      { label: "Avg. Speed", value: "0.3s", change: "-15%" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-5 rounded-xl bg-card border border-border">
                        <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
                        <div className="flex items-end justify-between">
                          <p className="text-2xl md:text-3xl font-semibold text-foreground">{stat.value}</p>
                          <span className="text-xs text-success font-medium">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="mb-8 p-6 rounded-xl bg-card border border-border">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-sm font-medium text-foreground">Crawls Over Time</h3>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">7 days</span>
                        <span className="px-3 py-1 rounded-md text-muted-foreground text-xs">30 days</span>
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-md relative overflow-hidden">
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md transition-all"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent Crawls Table */}
                  <div className="rounded-xl border border-border overflow-hidden bg-card">
                    <div className="grid grid-cols-5 gap-4 px-5 py-4 bg-secondary/50 text-xs font-medium text-muted-foreground">
                      <span>URL</span>
                      <span>Status</span>
                      <span>Pages</span>
                      <span>Format</span>
                      <span>Time</span>
                    </div>
                    {[
                      { url: "stripe.com/docs", status: "Completed", pages: "847", format: "JSON", time: "2.4s" },
                      { url: "vercel.com/blog", status: "Completed", pages: "312", format: "Markdown", time: "1.1s" },
                      { url: "linear.app/features", status: "Running", pages: "156", format: "HTML", time: "0.8s" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-5 gap-4 px-5 py-4 border-t border-border text-sm">
                        <span className="text-foreground truncate font-medium">{row.url}</span>
                        <span className={row.status === "Completed" ? "text-success" : "text-primary"}>
                          {row.status}
                        </span>
                        <span className="text-muted-foreground">{row.pages}</span>
                        <span className="text-muted-foreground">{row.format}</span>
                        <span className="text-muted-foreground">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary/15 rounded-full blur-[60px] opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
