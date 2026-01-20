import { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Filter,
  MoreHorizontal,
  Globe,
  Clock,
  FileJson,
  Loader2,
  CheckCircle2,
  XCircle,
  Eye,
  Download,
  Trash2,
  RefreshCw
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const crawls = [
  {
    id: "cx_1",
    url: "https://stripe.com/docs/api",
    status: "completed",
    pages: 847,
    format: "JSON",
    startedAt: "2 hours ago",
    duration: "2m 34s",
  },
  {
    id: "cx_2",
    url: "https://vercel.com/blog",
    status: "completed",
    pages: 312,
    format: "Markdown",
    startedAt: "5 hours ago",
    duration: "1m 12s",
  },
  {
    id: "cx_3",
    url: "https://linear.app/features",
    status: "running",
    pages: 156,
    format: "HTML",
    startedAt: "2 mins ago",
    duration: "—",
  },
  {
    id: "cx_4",
    url: "https://github.com/trending",
    status: "completed",
    pages: 89,
    format: "JSON",
    startedAt: "1 day ago",
    duration: "45s",
  },
  {
    id: "cx_5",
    url: "https://news.ycombinator.com",
    status: "failed",
    pages: 0,
    format: "Text",
    startedAt: "1 day ago",
    duration: "—",
    error: "Rate limited by target",
  },
  {
    id: "cx_6",
    url: "https://docs.python.org",
    status: "completed",
    pages: 2341,
    format: "Markdown",
    startedAt: "2 days ago",
    duration: "8m 21s",
  },
];

const Crawls = () => {
  const [search, setSearch] = useState("");

  const getStatusIcon = (status: string) => {
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

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: "bg-success/10 text-success",
      running: "bg-primary/10 text-primary",
      failed: "bg-destructive/10 text-destructive",
    };
    return styles[status as keyof typeof styles] || "";
  };

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-foreground">Crawls</h1>
                <p className="text-muted-foreground mt-1">
                  View and manage all your web crawls.
                </p>
              </div>
              <Button className="gap-2" asChild>
                <Link to="/dashboard/crawls/new">
                  <Plus className="w-4 h-4" />
                  New Crawl
                </Link>
              </Button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search crawls by URL..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="running">Running</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="pages">Most Pages</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Crawls Table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-secondary/50 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <span className="col-span-4">URL</span>
                <span className="col-span-2">Status</span>
                <span className="col-span-1">Pages</span>
                <span className="col-span-2">Format</span>
                <span className="col-span-2">Started</span>
                <span className="col-span-1"></span>
              </div>

              {crawls.map((crawl) => (
                <div key={crawl.id} className="grid grid-cols-12 gap-4 px-6 py-5 border-t border-border items-center hover:bg-secondary/30 transition-colors">
                  {/* URL */}
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Globe className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{crawl.url}</p>
                      <p className="text-xs text-muted-foreground font-mono">{crawl.id}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(crawl.status)}`}>
                      {getStatusIcon(crawl.status)}
                      <span className="capitalize">{crawl.status}</span>
                    </span>
                  </div>

                  {/* Pages */}
                  <div className="col-span-1">
                    <p className="text-sm font-medium text-foreground">{crawl.pages.toLocaleString()}</p>
                  </div>

                  {/* Format */}
                  <div className="col-span-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground">
                      <FileJson className="w-3.5 h-3.5" />
                      {crawl.format}
                    </span>
                  </div>

                  {/* Started */}
                  <div className="col-span-2">
                    <p className="text-sm text-foreground">{crawl.startedAt}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {crawl.duration}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <Eye className="w-4 h-4" />
                          View Results
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Download className="w-4 h-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <RefreshCw className="w-4 h-4" />
                          Re-run Crawl
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-destructive">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing 1-6 of 24 crawls
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Crawls;