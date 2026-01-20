import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative text-center max-w-lg">
        {/* Animated Crawl Node */}
        <div className="mb-10 relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Broken connection lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent absolute rotate-45 animate-pulse" />
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent absolute -rotate-45 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-destructive/30 to-transparent absolute rotate-12 translate-x-4 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
            
            {/* Main node */}
            <div className="absolute inset-0 flex items-center justify-center animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="w-20 h-20 rounded-2xl bg-card border-2 border-dashed border-destructive/40 flex items-center justify-center shadow-large">
                <Globe className="w-10 h-10 text-muted-foreground/60" />
              </div>
            </div>
            
            {/* Floating broken pieces */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-primary/40 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
            <div className="absolute bottom-4 left-0 w-2 h-2 bg-destructive/40 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
          <span className="text-sm font-medium text-destructive">Error 404</span>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          This page was not crawled.
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          The URL you're looking for doesn't exist or has been moved.
          <br className="hidden sm:block" />
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/" className="gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild>
            <Link to="/dashboard" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;