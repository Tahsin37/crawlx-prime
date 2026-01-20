import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search,
  MoreHorizontal,
  FileJson,
  Sparkles,
  Copy,
  Edit,
  Trash2,
  Play,
  Code
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
import { Textarea } from "@/components/ui/textarea";

const extractors = [
  {
    id: "1",
    name: "Product Details",
    description: "Extract product name, price, description, and images from e-commerce pages",
    fields: ["name", "price", "description", "image_url", "sku"],
    usedCount: 1234,
    lastUsed: "2 hours ago",
  },
  {
    id: "2",
    name: "Article Content",
    description: "Extract title, author, date, and main content from blog posts and news articles",
    fields: ["title", "author", "published_date", "content", "tags"],
    usedCount: 892,
    lastUsed: "1 day ago",
  },
  {
    id: "3",
    name: "Contact Information",
    description: "Extract emails, phone numbers, and addresses from any page",
    fields: ["email", "phone", "address", "company_name"],
    usedCount: 456,
    lastUsed: "3 days ago",
  },
  {
    id: "4",
    name: "Job Listings",
    description: "Extract job title, company, salary, and requirements from job postings",
    fields: ["job_title", "company", "salary_range", "location", "requirements"],
    usedCount: 234,
    lastUsed: "1 week ago",
  },
];

const Extractors = () => {
  const [search, setSearch] = useState("");

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
                <h1 className="text-2xl font-semibold text-foreground">Extractors</h1>
                <p className="text-muted-foreground mt-1">
                  Create AI-powered extractors to structure your crawled data.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    New Extractor
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create Extractor</DialogTitle>
                    <DialogDescription>
                      Define a schema to extract structured data from crawled pages.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="extractorName">Extractor Name</Label>
                      <Input id="extractorName" placeholder="e.g., Product Details" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="extractorDesc">Description</Label>
                      <Input id="extractorDesc" placeholder="What data does this extractor capture?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schema">Schema (JSON)</Label>
                      <Textarea 
                        id="schema" 
                        className="font-mono text-sm h-48"
                        placeholder={`{
  "name": "string",
  "price": "number",
  "description": "string",
  "image_url": "string"
}`}
                      />
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-foreground">AI-Powered Extraction</p>
                        <p className="text-muted-foreground mt-1">
                          Our AI will automatically identify and extract the fields you define, 
                          even if the page structure varies.
                        </p>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Extractor</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search extractors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Extractors Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {extractors.map((extractor) => (
                <div key={extractor.id} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{extractor.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          Used {extractor.usedCount.toLocaleString()} times
                        </p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <Play className="w-4 h-4" />
                          Run Extraction
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Edit className="w-4 h-4" />
                          Edit Schema
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Copy className="w-4 h-4" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Code className="w-4 h-4" />
                          View API
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-destructive">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {extractor.description}
                  </p>

                  {/* Fields */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {extractor.fields.map((field) => (
                      <span
                        key={field}
                        className="px-2 py-0.5 rounded-md bg-secondary text-xs font-mono text-muted-foreground"
                      >
                        {field}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      Last used {extractor.lastUsed}
                    </span>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Play className="w-3.5 h-3.5" />
                      Run
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State Helper */}
            <div className="p-8 rounded-xl bg-secondary/30 border border-dashed border-border text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileJson className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Need help getting started?
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-4">
                Extractors use AI to automatically structure data from any webpage. 
                Define your schema once and apply it to thousands of pages.
              </p>
              <Button variant="outline">View Documentation</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Extractors;