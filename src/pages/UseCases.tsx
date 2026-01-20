import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { 
  TrendingUp, 
  Search, 
  ShoppingCart, 
  Building2, 
  Brain, 
  Database,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Extract contact information, company data, and prospect details from business directories, LinkedIn, and company websites.",
    benefits: [
      "Enrich your CRM automatically",
      "Find decision-maker contacts",
      "Build targeted prospect lists",
      "Monitor company updates"
    ],
    example: "Extract 10,000+ leads from industry directories in minutes"
  },
  {
    icon: Search,
    title: "Market Research",
    description: "Monitor competitor pricing, product catalogs, reviews, and market trends across multiple sources in real-time.",
    benefits: [
      "Track competitor prices",
      "Analyze market trends",
      "Monitor brand mentions",
      "Aggregate review data"
    ],
    example: "Monitor 500+ competitor products daily for price changes"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Data",
    description: "Scrape product information, prices, inventory, and reviews from any e-commerce platform at scale.",
    benefits: [
      "Price comparison feeds",
      "Product catalog sync",
      "Stock monitoring",
      "Review aggregation"
    ],
    example: "Sync 100,000+ product prices across marketplaces hourly"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Collect property listings, prices, and market data from real estate portals and MLS systems.",
    benefits: [
      "Aggregate listings",
      "Track price history",
      "Market analysis",
      "Lead capture"
    ],
    example: "Index 50,000+ property listings across 20 platforms"
  },
  {
    icon: Brain,
    title: "AI Training Data",
    description: "Build large-scale datasets for machine learning by crawling and structuring web content.",
    benefits: [
      "Clean structured data",
      "Consistent formatting",
      "Deduplication",
      "Custom schemas"
    ],
    example: "Generate 1M+ training samples from documentation sites"
  },
  {
    icon: Database,
    title: "Content Aggregation",
    description: "Build news feeds, content libraries, and knowledge bases from multiple web sources.",
    benefits: [
      "RSS alternatives",
      "News monitoring",
      "Content curation",
      "Archive building"
    ],
    example: "Aggregate content from 1,000+ news sources in real-time"
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[100px] opacity-50" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Built for your
                <br />
                <span className="gradient-text">use case</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                See how companies use CrawlX to power their data pipelines.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-sm text-foreground font-medium">
                      💡 {useCase.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Have a different use case?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Talk to our team about custom solutions for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button variant="hero-secondary" size="xl" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
