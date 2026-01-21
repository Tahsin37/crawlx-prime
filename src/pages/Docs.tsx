import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Book, 
  Code2, 
  Zap, 
  FileJson, 
  Webhook, 
  Shield, 
  Settings,
  ArrowRight,
  ChevronRight,
  Search,
  Copy,
  Check,
  Terminal,
  Layers,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#introduction", active: true },
      { title: "Quick Start", href: "#quickstart" },
      { title: "Authentication", href: "#auth" },
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Crawl API", href: "#crawl-api" },
      { title: "Extraction API", href: "#extraction" },
      { title: "Output Formats", href: "#formats" },
    ]
  },
  {
    title: "Features",
    items: [
      { title: "JS Rendering", href: "#js-rendering" },
      { title: "Anti-Bot Bypass", href: "#anti-bot" },
      { title: "Webhooks", href: "#webhooks" },
      { title: "Rate Limits", href: "#rate-limits" },
    ]
  },
  {
    title: "Reference",
    items: [
      { title: "API Reference", href: "#api-reference" },
      { title: "Errors", href: "#errors" },
      { title: "SDKs", href: "/sdks" },
    ]
  }
];

const codeExamples = {
  javascript: `import CrawlX from '@crawlx/sdk';

const client = new CrawlX({
  apiKey: process.env.CRAWLX_API_KEY
});

// Start a crawl
const result = await client.crawl({
  url: 'https://example.com',
  depth: 2,
  formats: ['json', 'markdown'],
  options: {
    jsRendering: true,
    antiBot: true
  }
});

console.log(result.pages);`,
  python: `from crawlx import CrawlX

client = CrawlX(api_key=os.environ["CRAWLX_API_KEY"])

# Start a crawl
result = client.crawl(
    url="https://example.com",
    depth=2,
    formats=["json", "markdown"],
    options={
        "js_rendering": True,
        "anti_bot": True
    }
)

print(result.pages)`,
  curl: `curl -X POST https://api.crawlx.io/v1/crawl \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com",
    "depth": 2,
    "formats": ["json", "markdown"],
    "options": {
      "jsRendering": true,
      "antiBot": true
    }
  }'`
};

const Docs = () => {
  const [activeTab, setActiveTab] = useState<'javascript' | 'python' | 'curl'>('javascript');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CX</span>
              </div>
              <span className="font-semibold text-lg text-foreground">CrawlX</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium text-foreground">Documentation</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search docs..." 
                className="pl-10 w-64 bg-secondary/50 border-border"
              />
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-border bg-background-soft fixed top-16 bottom-0 overflow-y-auto">
          <nav className="p-6 space-y-8">
            {sidebarNav.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          item.active
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/docs" className="hover:text-foreground">Docs</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Introduction</span>
            </div>

            {/* Introduction Section */}
            <section id="introduction" className="mb-16">
              <h1 className="text-4xl font-semibold text-foreground mb-4">
                CrawlX Documentation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The most powerful AI-powered web crawling and extraction API. 
                Get started in minutes with our comprehensive documentation.
              </p>

              {/* Quick Links */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <a
                  href="#quickstart"
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all group"
                >
                  <Zap className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    Quick Start
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get up and running in 5 minutes
                  </p>
                </a>
                <a
                  href="#api-reference"
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all group"
                >
                  <Code2 className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    API Reference
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete endpoint documentation
                  </p>
                </a>
              </div>
            </section>

            {/* Quick Start Section */}
            <section id="quickstart" className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Quick Start
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get started with CrawlX in under 5 minutes. Follow these steps to make your first crawl.
              </p>

              {/* Step 1 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-semibold text-foreground">Install the SDK</h3>
                </div>
                <div className="rounded-xl border border-border bg-slate-900 overflow-hidden">
                  <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-400">Terminal</span>
                  </div>
                  <div className="p-4">
                    <code className="text-sm text-slate-300 font-mono">npm install @crawlx/sdk</code>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-semibold text-foreground">Make your first crawl</h3>
                </div>
                
                {/* Language Tabs */}
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="px-4 py-2 bg-secondary/50 border-b border-border flex items-center justify-between">
                    <div className="flex gap-1">
                      {(['javascript', 'python', 'curl'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === tab
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                          }`}
                        >
                          {tab === 'javascript' ? 'JavaScript' : tab === 'python' ? 'Python' : 'cURL'}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={copyCode}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="p-6 bg-slate-900 overflow-x-auto">
                    <pre className="text-sm leading-relaxed">
                      <code className="text-slate-300 font-mono">{codeExamples[activeTab]}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Get your API key</p>
                  <p className="text-sm text-muted-foreground">
                    You'll need an API key to make requests. Create one in your{" "}
                    <Link to="/dashboard/api-keys" className="text-primary hover:underline">
                      dashboard
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* API Reference Section */}
            <section id="api-reference" className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                API Reference
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complete reference for all CrawlX API endpoints.
              </p>

              <div className="space-y-4">
                {[
                  { method: "POST", endpoint: "/v1/crawl", description: "Start a new crawl job" },
                  { method: "GET", endpoint: "/v1/crawl/:id", description: "Get crawl status and results" },
                  { method: "POST", endpoint: "/v1/extract", description: "Extract data from a URL" },
                  { method: "GET", endpoint: "/v1/usage", description: "Get usage statistics" },
                ].map((api) => (
                  <a
                    key={api.endpoint}
                    href="#"
                    className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                        api.method === 'POST' ? 'bg-success/15 text-success' : 'bg-primary/15 text-primary'
                      }`}>
                        {api.method}
                      </span>
                      <code className="text-sm font-mono text-foreground">{api.endpoint}</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground hidden sm:block">{api.description}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Next Steps */}
            <section className="p-8 rounded-2xl bg-background-soft border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">What's next?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/sdks"
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <Layers className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Explore SDKs
                    </p>
                    <p className="text-xs text-muted-foreground">Official client libraries</p>
                  </div>
                </Link>
                <a
                  href="#webhooks"
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <Webhook className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Set up Webhooks
                    </p>
                    <p className="text-xs text-muted-foreground">Real-time notifications</p>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
