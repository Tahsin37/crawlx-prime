import { useState } from "react";
import { Check, X, ChevronDown, Zap, Shield, Layers, FileJson, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const comparisonCategories = [
  {
    icon: Globe,
    title: "Crawl Capabilities",
    description: "How deep and wide can you crawl",
    items: [
      { feature: "Maximum crawl depth", crawlx: "Unlimited", firecrawl: "10 levels", crawlxWins: true },
      { feature: "Concurrent pages", crawlx: "1000+", firecrawl: "100", crawlxWins: true },
      { feature: "Custom rate limiting", crawlx: true, firecrawl: "partial" },
      { feature: "Sitemap auto-discovery", crawlx: true, firecrawl: true },
    ]
  },
  {
    icon: Cpu,
    title: "JavaScript Rendering",
    description: "Handle dynamic content",
    items: [
      { feature: "Full JS rendering", crawlx: true, firecrawl: "partial" },
      { feature: "SPA support", crawlx: true, firecrawl: "partial" },
      { feature: "Custom wait conditions", crawlx: true, firecrawl: false },
      { feature: "Screenshot capture", crawlx: true, firecrawl: true },
    ]
  },
  {
    icon: Shield,
    title: "Anti-Bot Bypass",
    description: "Access protected content",
    items: [
      { feature: "CAPTCHA solving", crawlx: "Built-in", firecrawl: "External", crawlxWins: true },
      { feature: "Proxy rotation", crawlx: true, firecrawl: true },
      { feature: "Browser fingerprinting", crawlx: true, firecrawl: false },
      { feature: "LinkedIn / Social", crawlx: true, firecrawl: false },
    ]
  },
  {
    icon: Layers,
    title: "Output Control",
    description: "Get data how you need it",
    items: [
      { feature: "Output formats", crawlx: "8+", firecrawl: "4", crawlxWins: true },
      { feature: "Custom schemas", crawlx: true, firecrawl: "partial" },
      { feature: "Clean Markdown", crawlx: true, firecrawl: true },
      { feature: "Raw HTML access", crawlx: true, firecrawl: "partial" },
    ]
  },
  {
    icon: Zap,
    title: "AI Extraction",
    description: "Intelligent data parsing",
    items: [
      { feature: "LLM-powered extraction", crawlx: "Advanced", firecrawl: "Basic", crawlxWins: true },
      { feature: "Auto schema detection", crawlx: true, firecrawl: false },
      { feature: "Entity recognition", crawlx: true, firecrawl: "partial" },
      { feature: "Content classification", crawlx: true, firecrawl: false },
    ]
  },
  {
    icon: FileJson,
    title: "Reliability & Support",
    description: "Enterprise-grade service",
    items: [
      { feature: "Uptime SLA", crawlx: "99.9%", firecrawl: "None", crawlxWins: true },
      { feature: "Real-time webhooks", crawlx: true, firecrawl: false },
      { feature: "Priority support", crawlx: true, firecrawl: "partial" },
      { feature: "Dedicated instances", crawlx: true, firecrawl: false },
    ]
  }
];

const ValueDisplay = ({ value, highlight }: { value: boolean | string; highlight?: boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-success/15 flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-success" />
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
          <X className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
      </div>
    );
  }
  
  if (value === "partial") {
    return <span className="text-sm text-warning">Partial</span>;
  }
  
  return (
    <span className={`text-sm font-medium ${highlight ? "text-primary" : "text-muted-foreground"}`}>
      {value}
    </span>
  );
};

const ComparisonCard = ({ category, isExpanded, onToggle }: { 
  category: typeof comparisonCategories[0]; 
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const Icon = category.icon;
  
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-medium transition-all">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 animate-fade-in">
          <div className="rounded-xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Feature</div>
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
            
            {/* Rows */}
            {category.items.map((item, idx) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 gap-4 px-4 py-3 items-center ${
                  idx !== category.items.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-sm text-foreground">{item.feature}</div>
                <div className="flex justify-center">
                  <ValueDisplay value={item.crawlx} highlight={item.crawlxWins} />
                </div>
                <div className="flex justify-center">
                  <ValueDisplay value={item.firecrawl} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Comparison = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([0, 1]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="comparison" className="py-24 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground mb-6">
            <GitCompare className="w-4 h-4 text-primary" />
            Honest Comparison
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Built to outperform
          </h2>
          <p className="text-lg text-muted-foreground">
            See how CrawlX compares to Firecrawl across every dimension.
            <br className="hidden md:block" />
            No marketing fluff. Just facts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {comparisonCategories.map((category, index) => (
            <ComparisonCard
              key={category.title}
              category={category}
              isExpanded={expandedCards.includes(index)}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <Button variant="hero" size="xl" asChild>
            <Link to="/compare">View Full Comparison</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const GitCompare = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <path d="M6 9v12" />
  </svg>
);
