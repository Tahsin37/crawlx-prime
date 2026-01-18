import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  { feature: "AI-Powered Extraction", crawlx: true, firecrawl: "partial" },
  { feature: "JavaScript Rendering", crawlx: true, firecrawl: true },
  { feature: "Anti-Bot Bypass", crawlx: true, firecrawl: "partial" },
  { feature: "LinkedIn Crawling", crawlx: true, firecrawl: false },
  { feature: "Dynamic Content Support", crawlx: true, firecrawl: "partial" },
  { feature: "Sub-second Latency", crawlx: true, firecrawl: false },
  { feature: "Structured JSON Output", crawlx: true, firecrawl: true },
  { feature: "Real-time Webhooks", crawlx: true, firecrawl: false },
  { feature: "99.9% Uptime SLA", crawlx: true, firecrawl: false },
  { feature: "Custom Rate Limiting", crawlx: true, firecrawl: "partial" },
];

const FeatureIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-success" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-6 h-6 rounded-full bg-warning/10 flex items-center justify-center">
        <Minus className="w-3.5 h-3.5 text-warning" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
      <X className="w-3.5 h-3.5 text-muted-foreground" />
    </div>
  );
};

export const Comparison = () => {
  return (
    <section className="py-20 md:py-32 bg-background-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Built to outperform
          </h2>
          <p className="text-lg text-muted-foreground">
            See how CrawlX compares to Firecrawl across key features
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-medium">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-secondary/50 border-b border-border">
              <div className="text-sm font-medium text-foreground">Feature</div>
              <div className="text-sm font-medium text-center">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">CrawlX</span>
              </div>
              <div className="text-sm font-medium text-center text-muted-foreground">Firecrawl</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 px-6 py-4 items-center ${
                  index !== comparisonData.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-sm text-foreground">{row.feature}</div>
                <div className="flex justify-center">
                  <FeatureIcon value={row.crawlx} />
                </div>
                <div className="flex justify-center">
                  <FeatureIcon value={row.firecrawl} />
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-success/10 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-success" />
              </div>
              <span>Full support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-warning/10 flex items-center justify-center">
                <Minus className="w-2.5 h-2.5 text-warning" />
              </div>
              <span>Partial support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                <X className="w-2.5 h-2.5 text-muted-foreground" />
              </div>
              <span>Not supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
