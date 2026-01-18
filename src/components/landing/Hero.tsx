import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-primary/20 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Now 10x faster than before</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight tracking-tight mb-6 animate-slide-up">
            The most powerful
            <br />
            <span className="gradient-text">AI web crawler.</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Crawl any website. Extract anything. At scale.
            <br className="hidden md:block" />
            Faster, smarter, and cleaner than Firecrawl.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/dashboard" className="gap-2">
                Start Crawling
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/docs">View Docs</Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-warning" />
              <span>Sub-second latency</span>
            </div>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-large border border-border bg-card p-2">
            <div className="rounded-xl overflow-hidden bg-background-soft">
              {/* Mock Dashboard Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                    app.crawlx.io/dashboard
                  </div>
                </div>
              </div>
              
              {/* Mock Dashboard Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Total Crawls", value: "24,847" },
                    { label: "Pages Crawled", value: "1.2M" },
                    { label: "Success Rate", value: "99.8%" },
                    { label: "Avg. Speed", value: "0.3s" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-xl md:text-2xl font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
                
                {/* Mock Table */}
                <div className="rounded-xl border border-border overflow-hidden bg-card">
                  <div className="grid grid-cols-4 gap-4 px-4 py-3 bg-secondary/50 text-xs font-medium text-muted-foreground">
                    <span>URL</span>
                    <span>Status</span>
                    <span>Pages</span>
                    <span>Time</span>
                  </div>
                  {[
                    { url: "stripe.com", status: "Completed", pages: "847", time: "2.4s" },
                    { url: "vercel.com", status: "Completed", pages: "312", time: "1.1s" },
                    { url: "linear.app", status: "Running", pages: "156", time: "0.8s" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 px-4 py-3 border-t border-border text-sm">
                      <span className="text-foreground truncate">{row.url}</span>
                      <span className={row.status === "Completed" ? "text-success" : "text-primary"}>
                        {row.status}
                      </span>
                      <span className="text-muted-foreground">{row.pages}</span>
                      <span className="text-muted-foreground">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
