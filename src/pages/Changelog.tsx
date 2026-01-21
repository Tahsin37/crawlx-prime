import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Zap, Bug, Star, ArrowRight } from "lucide-react";

const changelog = [
  {
    version: "2.4.0",
    date: "January 15, 2026",
    type: "feature",
    title: "Advanced AI Extraction",
    description: "Introducing our new LLM-powered extraction engine with automatic schema detection and entity recognition.",
    changes: [
      "Auto-detect content structure from any webpage",
      "Entity recognition for people, companies, products",
      "Semantic search across crawled content",
      "50% faster extraction speeds"
    ]
  },
  {
    version: "2.3.2",
    date: "January 8, 2026",
    type: "fix",
    title: "Webhook Reliability Improvements",
    description: "Fixed several edge cases with webhook delivery and added automatic retries.",
    changes: [
      "Fixed webhook timeout issues for slow endpoints",
      "Added automatic retries with exponential backoff",
      "Improved webhook payload compression",
      "Added webhook delivery logs in dashboard"
    ]
  },
  {
    version: "2.3.0",
    date: "December 20, 2025",
    type: "feature",
    title: "LinkedIn Crawling Support",
    description: "Full support for crawling LinkedIn profiles, companies, and job postings.",
    changes: [
      "Crawl public LinkedIn profiles",
      "Extract company information",
      "Job posting extraction",
      "Automatic rate limiting for LinkedIn"
    ]
  },
  {
    version: "2.2.1",
    date: "December 12, 2025",
    type: "improvement",
    title: "Dashboard Performance",
    description: "Major performance improvements to the dashboard and real-time crawl monitoring.",
    changes: [
      "3x faster dashboard loading",
      "Real-time crawl progress updates",
      "Improved search and filtering",
      "New keyboard shortcuts"
    ]
  },
  {
    version: "2.2.0",
    date: "December 1, 2025",
    type: "feature",
    title: "Custom Extraction Schemas",
    description: "Define your own extraction schemas to get exactly the data you need.",
    changes: [
      "Visual schema builder",
      "JSON schema import/export",
      "Template library with 50+ presets",
      "Schema versioning and rollback"
    ]
  }
];

const TypeBadge = ({ type }: { type: string }) => {
  const config = {
    feature: { icon: Star, color: "bg-primary/10 text-primary", label: "Feature" },
    fix: { icon: Bug, color: "bg-warning/10 text-warning", label: "Fix" },
    improvement: { icon: Zap, color: "bg-success/10 text-success", label: "Improvement" }
  }[type] || { icon: Star, color: "bg-muted text-muted-foreground", label: type };

  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
};

const Changelog = () => {
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
                Changelog
              </h1>
              <p className="text-xl text-muted-foreground">
                All the latest updates, improvements, and fixes to CrawlX.
              </p>
            </div>
          </div>
        </section>

        {/* Changelog List */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {changelog.map((entry, index) => (
                <div key={entry.version} className="relative">
                  {/* Timeline line */}
                  {index < changelog.length - 1 && (
                    <div className="absolute left-[11px] top-12 w-0.5 h-[calc(100%-24px)] bg-border" />
                  )}
                  
                  <div className="flex gap-6 pb-12">
                    {/* Timeline dot */}
                    <div className="w-6 h-6 rounded-full bg-card border-2 border-primary flex-shrink-0 mt-1" />
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-sm font-mono text-primary">v{entry.version}</span>
                        <span className="text-sm text-muted-foreground">{entry.date}</span>
                        <TypeBadge type={entry.type} />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {entry.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {entry.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {entry.changes.map((change) => (
                          <li key={change} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {change}
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
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
