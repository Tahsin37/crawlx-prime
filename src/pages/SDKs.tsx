import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ExternalLink, Copy, Check, Terminal, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const sdks = [
  {
    name: "JavaScript / TypeScript",
    package: "@crawlx/sdk",
    install: "npm install @crawlx/sdk",
    status: "stable",
    github: "https://github.com/crawlx/crawlx-js",
    docs: "/docs/sdks/javascript",
    example: `import CrawlX from '@crawlx/sdk';

const client = new CrawlX({
  apiKey: process.env.CRAWLX_API_KEY
});

const result = await client.crawl({
  url: 'https://example.com',
  depth: 2
});`
  },
  {
    name: "Python",
    package: "crawlx",
    install: "pip install crawlx",
    status: "stable",
    github: "https://github.com/crawlx/crawlx-python",
    docs: "/docs/sdks/python",
    example: `from crawlx import CrawlX

client = CrawlX(api_key=os.environ["CRAWLX_API_KEY"])

result = client.crawl(
    url="https://example.com",
    depth=2
)`
  },
  {
    name: "Go",
    package: "github.com/crawlx/crawlx-go",
    install: "go get github.com/crawlx/crawlx-go",
    status: "stable",
    github: "https://github.com/crawlx/crawlx-go",
    docs: "/docs/sdks/go",
    example: `import "github.com/crawlx/crawlx-go"

client := crawlx.NewClient(os.Getenv("CRAWLX_API_KEY"))

result, err := client.Crawl(&crawlx.CrawlOptions{
    URL:   "https://example.com",
    Depth: 2,
})`
  },
  {
    name: "Ruby",
    package: "crawlx",
    install: "gem install crawlx",
    status: "beta",
    github: "https://github.com/crawlx/crawlx-ruby",
    docs: "/docs/sdks/ruby",
    example: `require 'crawlx'

client = CrawlX::Client.new(
  api_key: ENV['CRAWLX_API_KEY']
)

result = client.crawl(
  url: 'https://example.com',
  depth: 2
)`
  },
  {
    name: "PHP",
    package: "crawlx/crawlx-php",
    install: "composer require crawlx/crawlx-php",
    status: "beta",
    github: "https://github.com/crawlx/crawlx-php",
    docs: "/docs/sdks/php",
    example: `use CrawlX\\Client;

$client = new Client(getenv('CRAWLX_API_KEY'));

$result = $client->crawl([
    'url' => 'https://example.com',
    'depth' => 2
]);`
  },
  {
    name: "REST API",
    package: "api.crawlx.io",
    install: "curl https://api.crawlx.io/v1/crawl",
    status: "stable",
    github: null,
    docs: "/docs/api",
    example: `curl -X POST https://api.crawlx.io/v1/crawl \\
  -H "Authorization: Bearer $CRAWLX_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com", "depth": 2}'`
  }
];

const SDKCard = ({ sdk }: { sdk: typeof sdks[0] }) => {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText(sdk.install);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-medium transition-all">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">{sdk.name}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            sdk.status === 'stable' 
              ? 'bg-success/10 text-success' 
              : 'bg-warning/10 text-warning'
          }`}>
            {sdk.status}
          </span>
        </div>

        {/* Install Command */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border mb-4">
          <Terminal className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <code className="text-sm text-foreground font-mono flex-1 truncate">{sdk.install}</code>
          <button 
            onClick={copyInstall}
            className="p-1.5 rounded hover:bg-secondary transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
          </button>
        </div>

        {/* Code Example */}
        <div className="rounded-xl border border-border bg-slate-900 overflow-hidden mb-4">
          <div className="p-4 overflow-x-auto">
            <pre className="text-xs leading-relaxed">
              <code className="text-slate-300 font-mono">{sdk.example}</code>
            </pre>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <Link 
            to={sdk.docs}
            className="flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <BookOpen className="w-4 h-4" />
            Docs
          </Link>
          {sdk.github && (
            <a 
              href={sdk.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SDKs = () => {
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
                Official
                <span className="gradient-text"> SDKs</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Client libraries for every major programming language.
                <br />
                Get started in minutes.
              </p>
            </div>
          </div>
        </section>

        {/* SDK Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sdks.map((sdk) => (
                <SDKCard key={sdk.name} sdk={sdk} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Need a different language?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our REST API works with any HTTP client. Or let us know what SDK you need.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Request SDK</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SDKs;
