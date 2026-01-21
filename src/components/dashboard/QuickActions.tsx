import { Link } from "react-router-dom";
import { Plus, FileJson, Key, BookOpen, ArrowRight } from "lucide-react";

const actions = [
  {
    icon: Plus,
    label: "New Crawl",
    description: "Start crawling a new URL",
    href: "/dashboard/crawls/new",
    gradient: "from-primary to-primary/80",
    primary: true,
  },
  {
    icon: FileJson,
    label: "Create Extractor",
    description: "Define custom data schemas",
    href: "/dashboard/extractors",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
  },
  {
    icon: Key,
    label: "Generate API Key",
    description: "Create a new API key",
    href: "/dashboard/api-keys",
    iconBg: "bg-warning/15",
    iconColor: "text-warning",
  },
  {
    icon: BookOpen,
    label: "Read Docs",
    description: "Learn how to use CrawlX",
    href: "/docs",
    iconBg: "bg-success/15",
    iconColor: "text-success",
  },
];

export const QuickActions = () => {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <h3 className="font-semibold text-foreground">Quick Actions</h3>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            to={action.href}
            className={`group relative overflow-hidden p-5 rounded-xl border transition-all duration-300 ${
              action.primary
                ? "bg-gradient-to-br from-primary to-primary/90 border-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                : "border-border bg-card hover:border-primary/30 hover:bg-secondary/50"
            }`}
          >
            {/* Background glow for primary */}
            {action.primary && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            )}
            
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                  action.primary 
                    ? "bg-white/20" 
                    : action.iconBg
                }`}
              >
                <action.icon className={`w-6 h-6 ${action.primary ? "text-white" : action.iconColor}`} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-semibold mb-1 ${action.primary ? "text-white" : "text-foreground"}`}>
                    {action.label}
                  </p>
                  <p className={`text-xs ${action.primary ? "text-white/80" : "text-muted-foreground"}`}>
                    {action.description}
                  </p>
                </div>
                <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1 ${
                  action.primary ? "text-white" : "text-primary"
                }`} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
