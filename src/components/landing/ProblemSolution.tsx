import { AlertTriangle, CheckCircle, X, ArrowRight } from "lucide-react";

const problems = [
  "JavaScript-heavy sites fail to render",
  "Anti-bot measures block your requests",
  "Rate limiting kills your throughput",
  "Inconsistent data extraction",
  "No support for dynamic content",
];

const solutions = [
  "Full JS rendering with headless Chrome",
  "Built-in anti-detection & stealth mode",
  "Smart rate limiting & proxy rotation",
  "AI-powered structured extraction",
  "Real-time dynamic content support",
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Web scraping is broken.
            <br />
            <span className="text-muted-foreground">We fixed it.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional crawlers fail on modern websites. CrawlX was built from the ground up to handle the complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* Problems */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-destructive/10 rounded-full blur-2xl" />
            <div className="relative p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">The Problem</h3>
              </div>
              
              <div className="space-y-4">
                {problems.map((problem) => (
                  <div key={problem} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-success/10 rounded-full blur-2xl" />
            <div className="relative p-8 rounded-2xl bg-card border border-primary/20 shadow-glow">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">The CrawlX Solution</h3>
              </div>
              
              <div className="space-y-4">
                {solutions.map((solution) => (
                  <div key={solution} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex justify-center mt-12">
          <div className="p-4 rounded-full bg-card border border-border shadow-soft">
            <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
