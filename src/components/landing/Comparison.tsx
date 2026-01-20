import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  { feature: "JS-heavy sites", crawlx: "Full", firecrawl: "Partial" },
  { feature: "LinkedIn / Social", crawlx: "Yes", firecrawl: "No" },
  { feature: "Raw HTML access", crawlx: "Yes", firecrawl: "Limited" },
  { feature: "AI extraction", crawlx: "Advanced", firecrawl: "Basic" },
  { feature: "Crawl control", crawlx: "Full", firecrawl: "Limited" },
  { feature: "Output formats", crawlx: "8+", firecrawl: "4" },
  { feature: "Anti-bot bypass", crawlx: "Built-in", firecrawl: "External" },
  { feature: "Real-time webhooks", crawlx: "Yes", firecrawl: "No" },
  { feature: "Custom rate limits", crawlx: "Yes", firecrawl: "Partial" },
  { feature: "Uptime SLA", crawlx: "99.9%", firecrawl: "None" },
];

const StatusIcon = ({ value }: { value: string }) => {
  if (value === "Yes" || value === "Full" || value === "Built-in" || value === "Advanced" || value.includes("+") || value.includes("%")) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
          <Check className="w-3 h-3 text-success" />
        </div>
        <span className="text-sm text-foreground font-medium">{value}</span>
      </div>
    );
  }
  if (value === "No" || value === "None") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
          <X className="w-3 h-3 text-muted-foreground" />
        </div>
        <span className="text-sm text-muted-foreground">{value}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-warning/10 flex items-center justify-center">
        <Minus className="w-3 h-3 text-warning" />
      </div>
      <span className="text-sm text-muted-foreground">{value}</span>
    </div>
  );
};

export const Comparison = () => {
  return (
    <section id="comparison" className="py-24 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Built to outperform
          </h2>
          <p className="text-lg text-muted-foreground">
            An honest comparison. No marketing fluff.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-medium">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-8 py-5 bg-secondary/50 border-b border-border">
              <div className="text-sm font-semibold text-foreground">Feature</div>
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  CrawlX
                </span>
              </div>
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                  Firecrawl
                </span>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 px-8 py-5 items-center ${
                  index !== comparisonData.length - 1 ? "border-b border-border" : ""
                } hover:bg-secondary/30 transition-colors`}
              >
                <div className="text-sm text-foreground font-medium">{row.feature}</div>
                <div className="flex justify-center">
                  <StatusIcon value={row.crawlx} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon value={row.firecrawl} />
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 mt-8 text-xs text-muted-foreground">
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
              <span>Partial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                <X className="w-2.5 h-2.5 text-muted-foreground" />
              </div>
              <span>Not available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
