import { 
  Brain, 
  FileJson, 
  Shield, 
  Zap, 
  Code2, 
  Globe,
  Webhook,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Crawling",
    description: "Intelligent extraction that understands page structure and content semantics automatically.",
  },
  {
    icon: FileJson,
    title: "Structured Data Extraction",
    description: "Get clean JSON, Markdown, or raw HTML. Define custom schemas for precise data shapes.",
  },
  {
    icon: Zap,
    title: "JavaScript-Heavy Sites",
    description: "Full rendering support for SPAs, React, Vue, and dynamic content. No page left behind.",
  },
  {
    icon: Shield,
    title: "Anti-Bot Engine",
    description: "Bypass CAPTCHAs, rate limits, and anti-scraping measures with our stealth technology.",
  },
  {
    icon: Globe,
    title: "LinkedIn & Social Crawling",
    description: "Extract data from LinkedIn profiles, posts, and dynamic social content at scale.",
  },
  {
    icon: Code2,
    title: "API-First Design",
    description: "RESTful API with webhooks, SDKs for every language, and real-time streaming support.",
  },
  {
    icon: Webhook,
    title: "Real-time Webhooks",
    description: "Get instant notifications when crawls complete. Integrate with your workflow seamlessly.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant. Data encrypted at rest and in transit. GDPR ready.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Everything you need to crawl the web
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed for developers who demand the best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-medium hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
