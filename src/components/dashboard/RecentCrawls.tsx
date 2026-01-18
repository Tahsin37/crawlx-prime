import { Link } from "react-router-dom";
import { ExternalLink, MoreHorizontal, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const crawls = [
  {
    id: "1",
    url: "stripe.com",
    status: "completed",
    pages: 847,
    time: "2.4s",
    createdAt: "2 min ago",
  },
  {
    id: "2",
    url: "vercel.com/docs",
    status: "completed",
    pages: 312,
    time: "1.1s",
    createdAt: "15 min ago",
  },
  {
    id: "3",
    url: "linear.app/features",
    status: "running",
    pages: 156,
    time: "0.8s",
    createdAt: "23 min ago",
  },
  {
    id: "4",
    url: "notion.so/product",
    status: "completed",
    pages: 523,
    time: "1.9s",
    createdAt: "1 hour ago",
  },
  {
    id: "5",
    url: "github.com/trending",
    status: "failed",
    pages: 0,
    time: "-",
    createdAt: "2 hours ago",
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-4 h-4 text-success" />;
    case "running":
      return <Loader2 className="w-4 h-4 text-primary animate-spin" />;
    case "failed":
      return <XCircle className="w-4 h-4 text-destructive" />;
    default:
      return null;
  }
};

export const RecentCrawls = () => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-medium text-foreground">Recent Crawls</h3>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/dashboard/crawls">View all</Link>
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary/30">
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                URL
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Pages
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Time
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Created
              </th>
              <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {crawls.map((crawl) => (
              <tr key={crawl.id} className="hover:bg-secondary/20 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{crawl.url}</span>
                    <a
                      href={`https://${crawl.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <StatusIcon status={crawl.status} />
                    <span
                      className={`text-sm capitalize ${
                        crawl.status === "completed"
                          ? "text-success"
                          : crawl.status === "running"
                          ? "text-primary"
                          : "text-destructive"
                      }`}
                    >
                      {crawl.status}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-muted-foreground">{crawl.pages}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-muted-foreground">{crawl.time}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-muted-foreground">{crawl.createdAt}</span>
                </td>
                <td className="px-5 py-4 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
