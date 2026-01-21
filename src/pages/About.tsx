import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Target, Zap, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Developer First",
    description: "We build tools that developers love to use. Clean APIs, comprehensive docs, and thoughtful UX."
  },
  {
    icon: Zap,
    title: "Relentless Quality",
    description: "99.9% uptime isn't a goal, it's a promise. We obsess over reliability and performance."
  },
  {
    icon: Users,
    title: "Customer Obsession",
    description: "We succeed when our customers succeed. Every feature we build starts with a real customer need."
  },
  {
    icon: Globe,
    title: "Scale Sustainably",
    description: "We're building for the long term. Sustainable growth over vanity metrics."
  }
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", bio: "Previously at Stripe, Stanford CS" },
  { name: "Sarah Kim", role: "CTO & Co-founder", bio: "Previously at Google, MIT PhD" },
  { name: "Marcus Johnson", role: "Head of Engineering", bio: "Previously at Vercel, 15+ years" },
  { name: "Emily Zhang", role: "Head of Product", bio: "Previously at Notion, Figma" },
  { name: "David Park", role: "Head of AI", bio: "Previously at OpenAI, DeepMind" },
  { name: "Lisa Wang", role: "Head of Growth", bio: "Previously at Linear, Segment" },
];

const stats = [
  { value: "10M+", label: "Pages crawled daily" },
  { value: "5,000+", label: "Companies trust us" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50ms", label: "Median latency" },
];

const About = () => {
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
                About CrawlX
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're building the infrastructure for the AI-powered web.
                Our mission is to make web data accessible, structured, and useful for every developer.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-foreground mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  CrawlX was founded in 2024 by a team of engineers who were frustrated with the state of web scraping tools. 
                  We'd spent years building data pipelines at companies like Stripe, Google, and OpenAI, and we knew there had to be a better way.
                </p>
                <p>
                  The web is the world's largest database, but accessing it programmatically is still surprisingly hard. 
                  JavaScript rendering, anti-bot systems, rate limiting, data extraction—each problem requires specialized expertise.
                </p>
                <p>
                  We built CrawlX to solve these problems once, so developers can focus on building their products instead of fighting with web scraping infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value) => (
                  <div key={value.title} className="p-6 rounded-2xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member) => (
                  <div key={member.name} className="p-6 rounded-2xl bg-card border border-border text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Join our team
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented people who share our values.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/careers">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
