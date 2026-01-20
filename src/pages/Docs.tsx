import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { 
  Book, 
  Code2, 
  Zap, 
  FileJson, 
  Webhook, 
  Shield, 
  Settings,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const quickLinks = [
  {
    icon: Zap,
    title: "Quick Start",
    description: "Get up and running in 5 minutes",
    href: "#quickstart"
  },
  {
    icon: Code2,
    title: "API Reference",
    description: "Complete API documentation",
    href: "#api"
  },
  {
    icon: FileJson,
    title: "Output Formats",
    description: "JSON, Markdown, HTML, and more",
    href: "#formats"
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time notifications",
    href: "#webhooks"
  },
  {
    icon: Shield,
    title: "Authentication",
    description: "API keys and security",
    href: "#auth"
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Advanced crawl options",
    href: "#config"
  }
];

const codeExample = `// Install the SDK
npm install @crawlx/sdk

// Initialize the client
import CrawlX from '@crawlx/sdk';

const client = new CrawlX({
  apiKey: process.env.CRAWLX_API_KEY
});

// Start a crawl
const crawl = await client.crawl({
  url: 'https://example.com',
  depth: 2,
  formats: ['json', 'markdown'],
  options: {
    jsRendering: true,
    antiBot: true,
    waitFor: 2000
  }
});

// Get results
console.log(crawl.pages);`;

const sdks = [
  { name: "JavaScript/TypeScript", status: "stable" },
  { name: "Python", status: "stable" },
  { name: "Go", status: "stable" },
  { name: "Ruby", status: "beta" },
  { name: "PHP", status: "beta" },
  { name: "Java", status: "coming" },
];

const Docs = () => {
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
                <Book className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Documentation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to integrate CrawlX into your application.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="#quickstart">Get Started</a>
                </Button>
                <Button variant="hero-secondary" size="xl" asChild>
                  <a href="https://api.crawlx.io/openapi.json" target="_blank" rel="noopener noreferrer" className="gap-2">
                    OpenAPI Spec
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {quickLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <link.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Quick Start</h2>
              <p className="text-muted-foreground mb-8">
                Get started with CrawlX in under 5 minutes using our official SDK.
              </p>

              <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-medium mb-8">
                <div className="px-4 py-3 bg-secondary/50 border-b border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">JavaScript / TypeScript</span>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    Copy
                  </Button>
                </div>
                <div className="p-6 bg-slate-900 overflow-x-auto">
                  <pre className="text-sm leading-relaxed">
                    <code className="text-slate-300 font-mono">{codeExample}</code>
                  </pre>
                </div>
              </div>

              {/* SDKs */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Official SDKs</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sdks.map((sdk) => (
                    <div key={sdk.name} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 border border-border">
                      <span className="text-sm text-foreground">{sdk.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        sdk.status === 'stable' ? 'bg-success/10 text-success' :
                        sdk.status === 'beta' ? 'bg-warning/10 text-warning' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {sdk.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Need help with integration?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our developer support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/signup">Start Building</Link>
                </Button>
                <Button variant="hero-secondary" size="xl" asChild>
                  <a href="https://discord.gg/crawlx" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
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

export default Docs;
