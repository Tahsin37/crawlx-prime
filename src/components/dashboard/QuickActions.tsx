import { Link } from "react-router-dom";
import { Plus, FileJson, Key, BookOpen } from "lucide-react";

const actions = [
  {
    icon: Plus,
    label: "New Crawl",
    description: "Start crawling a new URL",
    href: "/dashboard/crawls/new",
    primary: true,
  },
  {
    icon: FileJson,
    label: "Create Extractor",
    description: "Define custom data schemas",
    href: "/dashboard/extractors/new",
  },
  {
    icon: Key,
    label: "Generate API Key",
    description: "Create a new API key",
    href: "/dashboard/api-keys",
  },
  {
    icon: BookOpen,
    label: "Read Docs",
    description: "Learn how to use CrawlX",
    href: "/docs",
  },
];

export const QuickActions = () => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-medium text-foreground">Quick Actions</h3>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            to={action.href}
            className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${
              action.primary
                ? "border-primary/30 bg-primary/5 hover:bg-primary/10"
                : "border-border hover:border-primary/20 hover:bg-secondary"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                action.primary ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
              }`}
            >
              <action.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{action.label}</p>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
