import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const codeExample = `// Start a crawl with CrawlX
const response = await fetch('https://api.crawlx.io/v1/crawl', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://example.com',
    depth: 2,
    format: ['json', 'markdown'],
    jsRendering: true,
    antiBot: true,
  }),
});

const { data } = await response.json();
console.log(data.pages); // Array of extracted pages`;

const jsonResponse = `{
  "success": true,
  "crawlId": "crwl_8x7k2m9p",
  "pages": 47,
  "data": [
    {
      "url": "https://example.com",
      "title": "Example Domain",
      "markdown": "# Example Domain...",
      "json": {
        "heading": "Example Domain",
        "paragraphs": ["..."]
      },
      "links": ["https://..."],
      "metadata": {
        "statusCode": 200,
        "crawledAt": "2024-01-15T10:30:00Z"
      }
    }
  ]
}`;

export const DevExperience = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'request' | 'response'>('request');

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === 'request' ? codeExample : jsonResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 md:py-40 bg-background-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Developer Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Simple API, powerful results
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes with our intuitive REST API. SDKs available for every major language.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-large">
            {/* Tab Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab('request')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'request'
                      ? 'bg-card text-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Request
                </button>
                <button
                  onClick={() => setActiveTab('response')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'response'
                      ? 'bg-card text-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Response
                </button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            {/* Code Content */}
            <div className="p-6 bg-[#0f172a] overflow-x-auto">
              <pre className="text-sm leading-relaxed">
                <code className="text-slate-300 font-mono">
                  {activeTab === 'request' ? codeExample : jsonResponse}
                </code>
              </pre>
            </div>
          </div>

          {/* Language Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {['JavaScript', 'Python', 'Go', 'Ruby', 'PHP', 'cURL'].map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors cursor-pointer"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
