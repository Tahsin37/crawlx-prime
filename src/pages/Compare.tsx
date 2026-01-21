import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Check, X, Minus, ArrowRight, Shield, Zap, Globe, Cpu, Layers, FileJson } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fullComparison = [
  {
    category: "Crawl Capabilities",
    features: [
      { name: "Maximum crawl depth", crawlx: "Unlimited", firecrawl: "10 levels" },
      { name: "Concurrent pages", crawlx: "1000+", firecrawl: "100" },
      { name: "Custom rate limiting", crawlx: true, firecrawl: "partial" },
      { name: "Sitemap discovery", crawlx: true, firecrawl: true },
      { name: "robots.txt respect", crawlx: true, firecrawl: true },
      { name: "URL filtering", crawlx: true, firecrawl: "partial" },
    ]
  },
  {
    category: "JavaScript Rendering",
    features: [
      { name: "Full JS rendering", crawlx: true, firecrawl: "partial" },
      { name: "SPA support", crawlx: true, firecrawl: "partial" },
      { name: "Custom wait conditions", crawlx: true, firecrawl: false },
      { name: "Screenshot capture", crawlx: true, firecrawl: true },
      { name: "Headless Chrome", crawlx: true, firecrawl: true },
      { name: "Custom scripts", crawlx: true, firecrawl: false },
    ]
  },
  {
    category: "Anti-Bot & Security",
    features: [
      { name: "CAPTCHA solving", crawlx: "Built-in", firecrawl: "External" },
      { name: "Proxy rotation", crawlx: true, firecrawl: true },
      { name: "Browser fingerprinting", crawlx: true, firecrawl: false },
      { name: "LinkedIn crawling", crawlx: true, firecrawl: false },
      { name: "Social media support", crawlx: true, firecrawl: "partial" },
      { name: "Residential proxies", crawlx: true, firecrawl: "partial" },
    ]
  },
  {
    category: "Output & Extraction",
    features: [
      { name: "Output formats", crawlx: "8+", firecrawl: "4" },
      { name: "Clean Markdown", crawlx: true, firecrawl: true },
      { name: "Raw HTML", crawlx: true, firecrawl: "partial" },
      { name: "Structured JSON", crawlx: true, firecrawl: true },
      { name: "Custom schemas", crawlx: true, firecrawl: "partial" },
      { name: "Image extraction", crawlx: true, firecrawl: true },
    ]
  },
  {
    category: "AI Features",
    features: [
      { name: "LLM extraction", crawlx: "Advanced", firecrawl: "Basic" },
      { name: "Auto schema detection", crawlx: true, firecrawl: false },
      { name: "Entity recognition", crawlx: true, firecrawl: "partial" },
      { name: "Content classification", crawlx: true, firecrawl: false },
      { name: "Semantic search", crawlx: true, firecrawl: false },
      { name: "Summary generation", crawlx: true, firecrawl: "partial" },
    ]
  },
  {
    category: "Enterprise & Support",
    features: [
      { name: "Uptime SLA", crawlx: "99.9%", firecrawl: "None" },
      { name: "Real-time webhooks", crawlx: true, firecrawl: false },
      { name: "Priority support", crawlx: true, firecrawl: "partial" },
      { name: "Dedicated instances", crawlx: true, firecrawl: false },
      { name: "SOC 2 compliance", crawlx: true, firecrawl: "partial" },
      { name: "SSO/SAML", crawlx: true, firecrawl: false },
    ]
  }
];

const ValueCell = ({ value }: { value: boolean | string }) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="w-6 h-6 rounded-full bg-success/15 flex items-center justify-center mx-auto">
        <Check className="w-3.5 h-3.5 text-success" />
      </div>
    ) : (
      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mx-auto">
        <X className="w-3.5 h-3.5 text-muted-foreground" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-6 h-6 rounded-full bg-warning/15 flex items-center justify-center mx-auto">
        <Minus className="w-3.5 h-3.5 text-warning" />
      </div>
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
};

const Compare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[100px] opacity-50" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
                <span className="text-sm font-medium text-foreground">CrawlX vs Firecrawl</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Built to
                <span className="gradient-text"> outperform</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A comprehensive comparison. No marketing fluff, just facts.
              </p>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="py-16 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">2x</div>
                <p className="text-sm text-muted-foreground">Faster crawl speeds</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-4xl font-bold text-success mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime SLA guaranteed</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-4xl font-bold text-accent mb-2">8+</div>
                <p className="text-sm text-muted-foreground">Output formats supported</p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {fullComparison.map((section) => (
                <div key={section.category} className="mb-12">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{section.category}</h3>
                  <div className="rounded-xl border border-border overflow-hidden bg-card">
                    <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-secondary/50 border-b border-border">
                      <div className="text-sm font-medium text-muted-foreground">Feature</div>
                      <div className="text-center">
                        <span className="inline-flex px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                          CrawlX
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="inline-flex px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          Firecrawl
                        </span>
                      </div>
                    </div>
                    {section.features.map((feature, idx) => (
                      <div
                        key={feature.name}
                        className={`grid grid-cols-3 gap-4 px-6 py-4 items-center ${
                          idx !== section.features.length - 1 ? "border-b border-border" : ""
                        }`}
                      >
                        <div className="text-sm text-foreground">{feature.name}</div>
                        <div className="text-center">
                          <ValueCell value={feature.crawlx} />
                        </div>
                        <div className="text-center">
                          <ValueCell value={feature.firecrawl} />
                        </div>
                      </div>
                    ))}
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
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Ready to switch?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Migration is seamless. Our team will help you move over in minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button variant="hero-secondary" size="xl" asChild>
                  <Link to="/contact">Talk to Sales</Link>
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

export default Compare;
