import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown,
  Zap,
  Layers,
  GitCompare,
  Target,
  Book,
  Code2,
  Webhook,
  Terminal,
  Users,
  Newspaper,
  Briefcase,
  Mail,
  FileText,
  Shield,
  Activity
} from "lucide-react";

const menuItems = {
  product: {
    label: "Product",
    items: [
      { icon: Zap, label: "Features", description: "Powerful crawling capabilities", href: "/features" },
      { icon: Layers, label: "How It Works", description: "From URL to structured data", href: "/how-it-works" },
      { icon: Target, label: "Use Cases", description: "Real-world applications", href: "/use-cases" },
      { icon: GitCompare, label: "Compare", description: "CrawlX vs Firecrawl", href: "/compare" },
    ]
  },
  developers: {
    label: "Developers",
    items: [
      { icon: Book, label: "Documentation", description: "Full API reference", href: "/docs" },
      { icon: Code2, label: "API Reference", description: "Endpoints & schemas", href: "/docs/api" },
      { icon: Terminal, label: "SDKs", description: "Official client libraries", href: "/sdks" },
      { icon: Webhook, label: "Webhooks", description: "Real-time notifications", href: "/docs/webhooks" },
    ]
  },
  company: {
    label: "Company",
    items: [
      { icon: Users, label: "About", description: "Our mission & team", href: "/about" },
      { icon: Newspaper, label: "Blog", description: "News and updates", href: "/blog" },
      { icon: Briefcase, label: "Careers", description: "Join our team", href: "/careers" },
      { icon: Mail, label: "Contact", description: "Get in touch", href: "/contact" },
    ]
  },
  resources: {
    label: "Resources",
    items: [
      { icon: FileText, label: "Changelog", description: "Product updates", href: "/changelog" },
      { icon: Shield, label: "Security", description: "Trust & compliance", href: "/security" },
      { icon: Activity, label: "Status", description: "System status", href: "/status" },
    ]
  }
};

const MegaMenu = ({ menuKey, isOpen, onClose }: { menuKey: keyof typeof menuItems; isOpen: boolean; onClose: () => void }) => {
  const menu = menuItems[menuKey];
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="absolute top-full left-0 right-0 pt-2"
      onMouseLeave={onClose}
    >
      <div className="bg-card border border-border rounded-2xl shadow-large p-6 mx-auto max-w-4xl animate-fade-in">
        <div className="grid grid-cols-2 gap-2">
          {menu.items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={onClose}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<keyof typeof menuItems | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">CX</span>
          </div>
          <span className="font-semibold text-lg text-foreground">CrawlX</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 relative">
          {Object.entries(menuItems).map(([key, menu]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setActiveMenu(key as keyof typeof menuItems)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg transition-colors ${
                  activeMenu === key 
                    ? "text-primary bg-primary/5" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {menu.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === key ? "rotate-180" : ""}`} />
              </button>
              <MegaMenu 
                menuKey={key as keyof typeof menuItems} 
                isOpen={activeMenu === key}
                onClose={() => setActiveMenu(null)}
              />
            </div>
          ))}
          <Link 
            to="/pricing" 
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/signin">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/dashboard">Start Crawling</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 space-y-6">
            {Object.entries(menuItems).map(([key, menu]) => (
              <div key={key}>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {menu.label}
                </p>
                <div className="space-y-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              to="/pricing"
              className="block p-3 text-sm text-foreground hover:bg-secondary rounded-xl transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" asChild>
                <Link to="/signin" onClick={() => setMobileOpen(false)}>Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Start Crawling</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
