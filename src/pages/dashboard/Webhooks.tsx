import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Webhook, 
  Plus, 
  MoreHorizontal,
  Trash2,
  Edit,
  CheckCircle2,
  XCircle,
  Clock,
  ExternalLink
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

const webhooks = [
  {
    id: "1",
    url: "https://api.example.com/webhooks/crawlx",
    events: ["crawl.completed", "crawl.failed"],
    status: "active",
    lastDelivery: "2 mins ago",
    lastStatus: "success",
  },
  {
    id: "2",
    url: "https://hooks.slack.com/services/xxx",
    events: ["crawl.failed"],
    status: "active",
    lastDelivery: "1 hour ago",
    lastStatus: "success",
  },
  {
    id: "3",
    url: "https://webhook.site/test-endpoint",
    events: ["crawl.completed"],
    status: "inactive",
    lastDelivery: "3 days ago",
    lastStatus: "failed",
  },
];

const eventTypes = [
  { id: "crawl.started", label: "Crawl Started", description: "When a crawl begins" },
  { id: "crawl.completed", label: "Crawl Completed", description: "When a crawl finishes successfully" },
  { id: "crawl.failed", label: "Crawl Failed", description: "When a crawl encounters an error" },
  { id: "extraction.completed", label: "Extraction Completed", description: "When AI extraction finishes" },
  { id: "usage.limit", label: "Usage Limit Reached", description: "When approaching usage limits" },
];

const Webhooks = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-foreground">Webhooks</h1>
                <p className="text-muted-foreground mt-1">
                  Receive real-time notifications when events happen in CrawlX.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Webhook
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Create Webhook</DialogTitle>
                    <DialogDescription>
                      Configure a new webhook endpoint to receive events.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="webhookUrl">Endpoint URL</Label>
                      <Input id="webhookUrl" placeholder="https://your-server.com/webhook" />
                    </div>
                    <div className="space-y-3">
                      <Label>Events to Subscribe</Label>
                      <div className="space-y-2">
                        {eventTypes.map((event) => (
                          <label
                            key={event.id}
                            className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-secondary/50 cursor-pointer"
                          >
                            <Checkbox className="mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{event.label}</p>
                              <p className="text-xs text-muted-foreground">{event.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Webhook</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Webhooks List */}
            <div className="space-y-4">
              {webhooks.map((webhook) => (
                <div key={webhook.id} className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        webhook.status === "active" ? "bg-primary/10" : "bg-secondary"
                      }`}>
                        <Webhook className={`w-6 h-6 ${
                          webhook.status === "active" ? "text-primary" : "text-muted-foreground"
                        }`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-foreground font-mono">
                            {webhook.url}
                          </p>
                          <a href={webhook.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className={`flex items-center gap-1 ${
                            webhook.status === "active" ? "text-success" : ""
                          }`}>
                            {webhook.status === "active" ? (
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5" />
                            )}
                            {webhook.status === "active" ? "Active" : "Inactive"}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            Last delivery: {webhook.lastDelivery}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            webhook.lastStatus === "success"
                              ? "bg-success/10 text-success"
                              : "bg-destructive/10 text-destructive"
                          }`}>
                            {webhook.lastStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Switch checked={webhook.status === "active"} />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Edit className="w-4 h-4" />
                            Edit Webhook
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            Test Webhook
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

                  {/* Events */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Subscribed Events</p>
                    <div className="flex flex-wrap gap-2">
                      {webhook.events.map((event) => (
                        <span
                          key={event}
                          className="px-2.5 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                        >
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="p-5 rounded-xl bg-secondary/50 border border-border">
              <h3 className="text-sm font-medium text-foreground mb-2">Webhook Payload</h3>
              <p className="text-sm text-muted-foreground mb-4">
                All webhooks receive a JSON payload with event details. Here's an example:
              </p>
              <pre className="p-4 rounded-lg bg-card border border-border text-xs font-mono text-muted-foreground overflow-x-auto">
{`{
  "event": "crawl.completed",
  "timestamp": "2024-02-15T10:30:00Z",
  "data": {
    "crawl_id": "cx_abc123",
    "url": "https://example.com",
    "pages_crawled": 47,
    "duration_ms": 12340
  }
}`}
              </pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Webhooks;