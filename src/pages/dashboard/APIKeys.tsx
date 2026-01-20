import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Key, 
  Plus, 
  Copy, 
  RefreshCw, 
  Trash2, 
  Check, 
  Eye, 
  EyeOff,
  MoreHorizontal,
  Shield,
  Clock
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const apiKeys = [
  {
    id: "1",
    name: "Production API Key",
    key: "cx_live_sk_1234567890abcdef",
    permissions: ["read", "write", "crawl"],
    created: "Jan 15, 2024",
    lastUsed: "2 hours ago",
    usage: 12847,
  },
  {
    id: "2",
    name: "Development Key",
    key: "cx_test_sk_0987654321fedcba",
    permissions: ["read", "crawl"],
    created: "Jan 20, 2024",
    lastUsed: "5 mins ago",
    usage: 3421,
  },
  {
    id: "3",
    name: "CI/CD Pipeline",
    key: "cx_live_sk_abcdef1234567890",
    permissions: ["crawl"],
    created: "Feb 1, 2024",
    lastUsed: "1 day ago",
    usage: 892,
  },
];

const APIKeys = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const toggleVisibility = (id: string) => {
    setVisibleKeys(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const maskKey = (key: string) => {
    return key.slice(0, 12) + "•".repeat(16);
  };

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
                <h1 className="text-2xl font-semibold text-foreground">API Keys</h1>
                <p className="text-muted-foreground mt-1">
                  Manage your API keys for accessing the CrawlX API.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Create New Key
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create API Key</DialogTitle>
                    <DialogDescription>
                      Create a new API key to access the CrawlX API.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="keyName">Key Name</Label>
                      <Input id="keyName" placeholder="e.g., Production API Key" />
                    </div>
                    <div className="space-y-2">
                      <Label>Permissions</Label>
                      <div className="flex flex-wrap gap-2">
                        {["read", "write", "crawl", "admin"].map((perm) => (
                          <label
                            key={perm}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-secondary/50 cursor-pointer hover:bg-secondary"
                          >
                            <input type="checkbox" className="rounded" defaultChecked={perm !== "admin"} />
                            <span className="text-sm capitalize">{perm}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Key</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* API Keys List */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-secondary/50 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <span className="col-span-3">Name</span>
                <span className="col-span-4">Key</span>
                <span className="col-span-2">Permissions</span>
                <span className="col-span-2">Usage</span>
                <span className="col-span-1"></span>
              </div>
              
              {apiKeys.map((apiKey) => (
                <div key={apiKey.id} className="grid grid-cols-12 gap-4 px-6 py-5 border-t border-border items-center">
                  {/* Name & Created */}
                  <div className="col-span-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Key className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{apiKey.name}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {apiKey.created}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key */}
                  <div className="col-span-4">
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono bg-secondary px-3 py-1.5 rounded-md text-muted-foreground">
                        {visibleKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
                      </code>
                      <button
                        onClick={() => toggleVisibility(apiKey.id)}
                        className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground"
                      >
                        {visibleKeys.has(apiKey.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleCopy(apiKey.key)}
                        className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground"
                      >
                        {copiedKey === apiKey.key ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Permissions */}
                  <div className="col-span-2">
                    <div className="flex flex-wrap gap-1">
                      {apiKey.permissions.map((perm) => (
                        <span
                          key={perm}
                          className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-muted-foreground capitalize"
                        >
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Usage */}
                  <div className="col-span-2">
                    <p className="text-sm font-medium text-foreground">{apiKey.usage.toLocaleString()} requests</p>
                    <p className="text-xs text-muted-foreground">Last used {apiKey.lastUsed}</p>
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
                          <Shield className="w-4 h-4" />
                          Edit Permissions
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <RefreshCw className="w-4 h-4" />
                          Regenerate Key
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-destructive">
                          <Trash2 className="w-4 h-4" />
                          Revoke Key
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Notice */}
            <div className="p-4 rounded-xl bg-warning/10 border border-warning/20 flex items-start gap-3">
              <Shield className="w-5 h-5 text-warning mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground">Keep your API keys secure</p>
                <p className="text-muted-foreground mt-1">
                  Never share your API keys publicly or commit them to version control. 
                  Use environment variables for secure storage.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default APIKeys;