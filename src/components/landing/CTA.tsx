import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-soft mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">No credit card required</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Start crawling
            <br />
            <span className="gradient-text">in minutes.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of developers who trust CrawlX for reliable web data extraction.
            Get 500 free pages every month.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Start Crawling Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
          
          {/* Trust Stats */}
          <div className="flex flex-wrap items-center justify-center gap-12 mt-16 pt-16 border-t border-border">
            {[
              { value: "10M+", label: "Pages crawled daily" },
              { value: "5,000+", label: "Happy developers" },
              { value: "99.9%", label: "Uptime guarantee" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-semibold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
