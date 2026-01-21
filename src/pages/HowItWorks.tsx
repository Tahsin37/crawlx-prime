import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Globe, Cpu, FileJson, Webhook, ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Input URL",
    shortTitle: "Submit",
    description: "Enter any URL you want to crawl. Configure depth, output format, and extraction rules through our API or dashboard.",
    color: "primary",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Crawl Engine",
    shortTitle: "Crawl",
    description: "Our distributed crawlers fetch your pages with full JavaScript rendering, anti-bot bypass, and intelligent rate limiting.",
    color: "accent",
  },
  {
    number: "03",
    icon: FileJson,
    title: "AI Processing",
    shortTitle: "Extract",
    description: "AI models parse and structure your data according to your schema. Get clean, normalized output every time.",
    color: "success",
  },
  {
    number: "04",
    icon: Webhook,
    title: "Structured Output",
    shortTitle: "Deliver",
    description: "Receive data via webhooks, poll our API, or access through our dashboard. Integrate with your existing workflow.",
    color: "warning",
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[100px] opacity-50" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6">
                How CrawlX
                <br />
                <span className="gradient-text">works</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From URL to structured data in four simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Pipeline */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Pipeline Flow Diagram */}
              <div className="hidden lg:flex items-center justify-between mb-20 px-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-2xl bg-${step.color}/15 flex items-center justify-center border-2 border-${step.color}/30 transition-all hover:scale-110 hover:shadow-lg`}>
                        <step.icon className={`w-7 h-7 text-${step.color}`} />
                      </div>
                      <span className="mt-3 text-sm font-medium text-foreground">{step.shortTitle}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex items-center mx-6">
                        <div className="w-24 h-0.5 bg-gradient-to-r from-border to-primary/30" />
                        <ArrowRight className="w-5 h-5 text-primary/50 -ml-1" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Pipeline */}
              <div className="lg:hidden flex flex-col items-center mb-16 space-y-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-xl bg-${step.color}/15 flex items-center justify-center border-2 border-${step.color}/30`}>
                      <step.icon className={`w-6 h-6 text-${step.color}`} />
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowDown className="w-5 h-5 text-primary/50 my-2" />
                    )}
                  </div>
                ))}
              </div>

              {/* Detailed Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {steps.map((step) => (
                  <div 
                    key={step.number} 
                    className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-medium transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-xl bg-${step.color}/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <step.icon className={`w-7 h-7 text-${step.color}`} />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md">
                          Step {step.number}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground mt-3 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">
                  Simple API, powerful results
                </h2>
                <p className="text-lg text-muted-foreground">
                  Get started with just a few lines of code
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Request */}
                <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-medium">
                  <div className="px-4 py-3 bg-secondary/50 border-b border-border">
                    <span className="text-sm font-medium text-foreground">Request</span>
                  </div>
                  <div className="p-6 bg-slate-900">
                    <pre className="text-sm leading-relaxed overflow-x-auto">
                      <code className="text-slate-300 font-mono">{`POST /v1/crawl

{
  "url": "https://example.com",
  "depth": 2,
  "formats": ["json", "markdown"],
  "jsRendering": true,
  "antiBot": true
}`}</code>
                    </pre>
                  </div>
                </div>

                {/* Response */}
                <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-medium">
                  <div className="px-4 py-3 bg-secondary/50 border-b border-border flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-sm font-medium text-foreground">Response</span>
                  </div>
                  <div className="p-6 bg-slate-900">
                    <pre className="text-sm leading-relaxed overflow-x-auto">
                      <code className="text-slate-300 font-mono">{`{
  "id": "crawl_abc123",
  "status": "completed",
  "pages": 47,
  "data": [...],
  "markdown": "# Title..."
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start crawling in under 5 minutes. Free tier includes 500 pages/month.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/signup">Create Free Account</Link>
                </Button>
                <Button variant="hero-secondary" size="xl" asChild>
                  <Link to="/docs">View API Docs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
