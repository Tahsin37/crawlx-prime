import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, LayoutDashboard } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* Animated Floating Nodes */}
        <div className="mb-12 relative h-48">
          {/* Center broken node */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Floating connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              <path
                d="M100,100 L40,60"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity="0.2"
                fill="none"
                strokeDasharray="4 4"
                className="animate-pulse"
              />
              <path
                d="M100,100 L160,60"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity="0.2"
                fill="none"
                strokeDasharray="4 4"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <path
                d="M100,100 L60,150"
                stroke="hsl(var(--destructive))"
                strokeWidth="1"
                strokeOpacity="0.3"
                fill="none"
                strokeDasharray="4 4"
                className="animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
              <path
                d="M100,100 L140,150"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity="0.2"
                fill="none"
                strokeDasharray="4 4"
                className="animate-pulse"
                style={{ animationDelay: "0.8s" }}
              />
            </svg>
            
            {/* Floating small nodes */}
            <div 
              className="absolute w-4 h-4 rounded-lg bg-primary/20 border border-primary/30"
              style={{ 
                top: "20%", 
                left: "20%",
                animation: "float 4s ease-in-out infinite"
              }}
            />
            <div 
              className="absolute w-5 h-5 rounded-lg bg-primary/15 border border-primary/20"
              style={{ 
                top: "15%", 
                right: "20%",
                animation: "float 5s ease-in-out infinite",
                animationDelay: "1s"
              }}
            />
            <div 
              className="absolute w-3 h-3 rounded-lg bg-destructive/20 border border-destructive/30"
              style={{ 
                bottom: "20%", 
                left: "25%",
                animation: "float 4.5s ease-in-out infinite",
                animationDelay: "0.5s"
              }}
            />
            <div 
              className="absolute w-4 h-4 rounded-lg bg-primary/20 border border-primary/30"
              style={{ 
                bottom: "25%", 
                right: "25%",
                animation: "float 5.5s ease-in-out infinite",
                animationDelay: "1.5s"
              }}
            />
            
            {/* Main center node */}
            <div 
              className="w-20 h-20 rounded-2xl bg-card border-2 border-dashed border-muted-foreground/30 flex items-center justify-center shadow-large"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <span className="text-4xl font-bold text-muted-foreground/40">?</span>
            </div>
          </div>
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
          <span className="text-sm font-medium text-muted-foreground">Error 404</span>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Looks like this page doesn't exist.
          <br />
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="outline" size="lg" asChild>
            <Link to="/" className="gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link to="/dashboard" className="gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Go to Dashboard
            </Link>
          </Button>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
