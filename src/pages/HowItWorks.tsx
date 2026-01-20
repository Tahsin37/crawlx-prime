import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Globe, Cpu, FileJson, Webhook, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Submit Your URL",
    description: "Enter any URL you want to crawl. Configure depth, output format, and extraction rules through our API or dashboard.",
    details: [
      "Single URL or bulk upload",
      "Set crawl depth (1-10 levels)",
      "Choose output formats",
      "Define custom extraction schemas"
    ]
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI-Powered Crawling",
    description: "Our distributed crawlers fetch your pages with full JavaScript rendering, anti-bot bypass, and intelligent rate limiting.",
    details: [
      "Headless Chrome rendering",
      "Automatic CAPTCHA solving",
      "Smart proxy rotation",
      "Parallel page processing"
    ]
  },
  {
    number: "03",
    icon: FileJson,
    title: "Structured Extraction",
    description: "AI models parse and structure your data according to your schema. Get clean, normalized output every time.",
    details: [
      "Auto-detect content structure",
      "Custom JSON schemas",
      "Clean Markdown conversion",
      "Image and link extraction"
    ]
  },
  {
    number: "04",
    icon: Webhook,
    title: "Deliver & Integrate",
    description: "Receive data via webhooks, poll our API, or access through our dashboard. Integrate with your existing workflow.",
    details: [
      "Real-time webhooks",
      "REST API access",
      "S3/GCS export",
      "Dashboard downloads"
    ]
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

        {/* Steps */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[39px] top-[100px] w-0.5 h-[calc(100%-60px)] bg-border hidden md:block" />
                  )}
                  
                  <div className="flex gap-8 mb-16 group">
                    {/* Icon */}
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-soft flex items-center justify-center group-hover:border-primary/30 group-hover:shadow-medium transition-all">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-medium transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background-soft">
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
