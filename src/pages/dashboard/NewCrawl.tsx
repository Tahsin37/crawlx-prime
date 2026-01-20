import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Globe, 
  Play, 
  Loader2, 
  CheckCircle2, 
  Clock, 
  FileJson, 
  FileText, 
  Code, 
  Link as LinkIcon,
  Image,
  Database,
  Shield,
  Zap
} from "lucide-react";

const outputFormats = [
  { id: "html", label: "Raw HTML", icon: Code },
  { id: "text", label: "Clean Text", icon: FileText },
  { id: "markdown", label: "Markdown", icon: FileText },
  { id: "json", label: "JSON", icon: FileJson },
  { id: "links", label: "Links", icon: LinkIcon },
  { id: "images", label: "Images", icon: Image },
  { id: "metadata", label: "Metadata", icon: Database },
];

const NewCrawl = () => {
  const [url, setUrl] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedFormats, setSelectedFormats] = useState<string[]>(["json", "markdown"]);
  const [jsRendering, setJsRendering] = useState(true);
  const [antiBot, setAntiBot] = useState(true);

  const toggleFormat = (id: string) => {
    setSelectedFormats(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-semibold text-foreground">New Crawl</h1>
              <p className="text-muted-foreground mt-1">
                Configure and run a new web crawl.
              </p>
            </div>

            {/* Main Form */}
            <div className="space-y-6">
              {/* URL Input */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <Label htmlFor="url" className="text-sm font-medium text-foreground mb-3 block">
                  Target URL
                </Label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="url"
                      placeholder="https://example.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="pl-10 h-12 text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Crawl Settings */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="p-6 rounded-xl bg-card border border-border space-y-6">
                  <h3 className="text-sm font-medium text-foreground">Crawl Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="depth" className="text-sm text-muted-foreground">
                        Crawl Depth
                      </Label>
                      <Select defaultValue="2">
                        <SelectTrigger id="depth" className="h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 level (single page)</SelectItem>
                          <SelectItem value="2">2 levels</SelectItem>
                          <SelectItem value="3">3 levels</SelectItem>
                          <SelectItem value="5">5 levels</SelectItem>
                          <SelectItem value="unlimited">Unlimited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rate" className="text-sm text-muted-foreground">
                        Rate Limit
                      </Label>
                      <Select defaultValue="10">
                        <SelectTrigger id="rate" className="h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 requests/sec</SelectItem>
                          <SelectItem value="10">10 requests/sec</SelectItem>
                          <SelectItem value="20">20 requests/sec</SelectItem>
                          <SelectItem value="50">50 requests/sec</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="proxy" className="text-sm text-muted-foreground">
                        Proxy Region
                      </Label>
                      <Select defaultValue="auto">
                        <SelectTrigger id="proxy" className="h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto (Best)</SelectItem>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="eu">Europe</SelectItem>
                          <SelectItem value="asia">Asia Pacific</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="p-6 rounded-xl bg-card border border-border space-y-6">
                  <h3 className="text-sm font-medium text-foreground">Advanced Options</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">JS Rendering</p>
                          <p className="text-xs text-muted-foreground">Execute JavaScript</p>
                        </div>
                      </div>
                      <Switch checked={jsRendering} onCheckedChange={setJsRendering} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-success" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Anti-Bot Mode</p>
                          <p className="text-xs text-muted-foreground">Bypass protection</p>
                        </div>
                      </div>
                      <Switch checked={antiBot} onCheckedChange={setAntiBot} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Database className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">AI Extraction</p>
                          <p className="text-xs text-muted-foreground">Smart data parsing</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              {/* Output Formats */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-sm font-medium text-foreground mb-4">Output Formats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {outputFormats.map((format) => (
                    <button
                      key={format.id}
                      onClick={() => toggleFormat(format.id)}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        selectedFormats.includes(format.id)
                          ? "bg-primary/10 border-primary/30 text-primary"
                          : "bg-secondary/50 border-border text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <format.icon className="w-5 h-5 mx-auto mb-2" />
                      <span className="text-xs font-medium">{format.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Run Button */}
              <Button 
                size="lg" 
                className="w-full h-14 text-base gap-2"
                onClick={handleRun}
                disabled={!url || isRunning}
              >
                {isRunning ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Running Crawl...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Start Crawl
                  </>
                )}
              </Button>

              {/* Progress UI (shown when running) */}
              {isRunning && (
                <div className="p-6 rounded-xl bg-card border border-border space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-foreground">Crawl Progress</h3>
                    <span className="text-xs text-muted-foreground">Estimated: 45s remaining</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all animate-pulse" style={{ width: "35%" }} />
                  </div>

                  {/* Steps */}
                  <div className="space-y-3">
                    {[
                      { label: "Initializing crawler", status: "done" },
                      { label: "Fetching pages", status: "running" },
                      { label: "Extracting content", status: "pending" },
                      { label: "Processing data", status: "pending" },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        {step.status === "done" ? (
                          <CheckCircle2 className="w-4 h-4 text-success" />
                        ) : step.status === "running" ? (
                          <Loader2 className="w-4 h-4 text-primary animate-spin" />
                        ) : (
                          <Clock className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span className={step.status === "pending" ? "text-muted-foreground" : "text-foreground"}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Logs */}
                  <div className="mt-4 p-4 rounded-lg bg-secondary/50 font-mono text-xs text-muted-foreground space-y-1 max-h-32 overflow-auto">
                    <p>[00:01] Starting crawl for {url}</p>
                    <p>[00:02] Discovered 12 pages</p>
                    <p>[00:03] Fetching page 1/12...</p>
                    <p className="text-primary">[00:04] Processing dynamic content...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewCrawl;