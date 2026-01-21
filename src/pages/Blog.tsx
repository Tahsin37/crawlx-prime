import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Introducing Advanced AI Extraction",
    excerpt: "Our new LLM-powered extraction engine brings unprecedented accuracy and automatic schema detection to web scraping.",
    date: "January 15, 2026",
    category: "Product",
    slug: "introducing-advanced-ai-extraction",
    featured: true
  },
  {
    title: "How We Achieved 99.9% Uptime",
    excerpt: "A deep dive into our infrastructure, redundancy systems, and the engineering decisions that power CrawlX.",
    date: "January 8, 2026",
    category: "Engineering",
    slug: "how-we-achieved-99-uptime"
  },
  {
    title: "Web Scraping Best Practices in 2026",
    excerpt: "Everything you need to know about ethical web scraping, rate limiting, and building reliable data pipelines.",
    date: "December 28, 2025",
    category: "Guide",
    slug: "web-scraping-best-practices-2026"
  },
  {
    title: "CrawlX vs Firecrawl: An Honest Comparison",
    excerpt: "We compare features, pricing, and performance. The results might surprise you.",
    date: "December 15, 2025",
    category: "Comparison",
    slug: "crawlx-vs-firecrawl"
  },
  {
    title: "Building AI Agents with Web Data",
    excerpt: "How leading AI companies use CrawlX to feed their models with fresh, structured web data.",
    date: "December 5, 2025",
    category: "Use Case",
    slug: "building-ai-agents-with-web-data"
  },
  {
    title: "Announcing SOC 2 Type II Compliance",
    excerpt: "CrawlX is now SOC 2 Type II certified, meeting the highest standards for security and privacy.",
    date: "November 20, 2025",
    category: "Security",
    slug: "soc2-type2-compliance"
  }
];

const Blog = () => {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

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
                Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Product updates, engineering insights, and web scraping guides.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-8">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="block p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all group"
                >
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-4xl font-semibold text-foreground mt-4 mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                    <span className="text-sm text-primary group-hover:underline flex items-center gap-1">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all group"
                  >
                    <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
