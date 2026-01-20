import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { 
  Brain, 
  FileJson, 
  Shield, 
  Zap, 
  Code2, 
  Globe,
  Webhook,
  Lock,
  Settings,
  Database,
  RefreshCw,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuresData = [
  {
    icon: Brain,
    title: "AI-Powered Extraction",
    description: "Our machine learning models understand page structure and semantics, extracting exactly what you need without manual selectors.",
    details: ["Auto-detect content types", "Schema inference", "Semantic parsing"],
  },
  {
    icon: FileJson,
    title: "8+ Output Formats",
    description: "Get your data in the format you need: JSON, Markdown, HTML, plain text, CSV, images, PDFs, and custom schemas.",
    details: ["JSON with custom schemas", "Clean Markdown", "Structured CSV"],
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second crawl times with our distributed infrastructure. Parallel processing for bulk operations.",
    details: ["<300ms average", "Parallel execution", "Global CDN"],
  },
  {
    icon: Shield,
    title: "Anti-Bot Bypass",
    description: "Built-in stealth technology bypasses CAPTCHAs, rate limits, and anti-scraping measures automatically.",
    details: ["CAPTCHA solving", "Fingerprint rotation", "Residential proxies"],
  },
  {
    icon: Globe,
    title: "JavaScript Rendering",
    description: "Full headless browser support for SPAs, React, Vue, and any JavaScript-heavy websites.",
    details: ["Headless Chrome", "Wait for selectors", "Execute custom JS"],
  },
  {
    icon: Code2,
    title: "API-First Design",
    description: "RESTful API with comprehensive documentation, SDKs for every language, and OpenAPI specs.",
    details: ["REST + GraphQL", "SDKs for 6 languages", "OpenAPI 3.0"],
  },
  {
    icon: Webhook,
    title: "Real-time Webhooks",
    description: "Get instant notifications when crawls complete. Integrate with Slack, Discord, or your own endpoints.",
    details: ["Instant delivery", "Retry logic", "Signature verification"],
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. Data encrypted at rest and in transit. GDPR and CCPA compliant.",
    details: ["SOC 2 Type II", "AES-256 encryption", "GDPR ready"],
  },
  {
    icon: Settings,
    title: "Fine-Grained Control",
    description: "Control crawl depth, rate limits, proxy regions, headers, and more with our comprehensive API.",
    details: ["Custom headers", "Proxy selection", "Rate control"],
  },
  {
    icon: Database,
    title: "Persistent Storage",
    description: "Store and query your crawl results. Access historical data anytime with our built-in data warehouse.",
    details: ["90-day retention", "SQL queries", "Export anytime"],
  },
  {
    icon: RefreshCw,
    title: "Scheduled Crawls",
    description: "Set up recurring crawls on any schedule. Monitor changes and get notified of updates.",
    details: ["Cron expressions", "Change detection", "Delta updates"],
  },
  {
    icon: Eye,
    title: "Visual Debugging",
    description: "See exactly what our crawler sees with screenshots and video recordings of every crawl.",
    details: ["Full screenshots", "DOM snapshots", "Network logs"],
  },
];

const Features = () => {
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
                Powerful features for
                <br />
                <span className="gradient-text">serious developers</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to crawl, extract, and transform web data at any scale.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature) => (
                <div
                  key={feature.title}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Ready to see it in action?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start with 500 free pages every month. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/signup">Get Started Free</Link>
                </Button>
                <Button variant="hero-secondary" size="xl" asChild>
                  <Link to="/docs">Read Documentation</Link>
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

export default Features;
