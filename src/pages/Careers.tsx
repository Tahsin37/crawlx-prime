import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { MapPin, ArrowRight, Heart, Zap, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const benefits = [
  "Competitive salary + equity",
  "Unlimited PTO",
  "Remote-first culture",
  "Health, dental, vision",
  "Home office stipend",
  "Learning budget",
  "Team offsites",
  "Parental leave"
];

const openings = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    slug: "senior-backend-engineer"
  },
  {
    title: "Staff Frontend Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    slug: "staff-frontend-engineer"
  },
  {
    title: "Machine Learning Engineer",
    department: "AI",
    location: "San Francisco / Remote",
    type: "Full-time",
    slug: "ml-engineer"
  },
  {
    title: "Product Designer",
    department: "Product",
    location: "Remote (US/EU)",
    type: "Full-time",
    slug: "product-designer"
  },
  {
    title: "Developer Advocate",
    department: "Marketing",
    location: "Remote (Worldwide)",
    type: "Full-time",
    slug: "developer-advocate"
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "San Francisco / New York",
    type: "Full-time",
    slug: "enterprise-ae"
  }
];

const values = [
  { icon: Heart, title: "Customer Obsession", description: "We exist to solve customer problems" },
  { icon: Zap, title: "Move Fast", description: "Ship quickly, iterate faster" },
  { icon: Users, title: "Radical Candor", description: "Direct feedback, genuine care" },
  { icon: Globe, title: "Think Global", description: "Build for developers everywhere" },
];

const Careers = () => {
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
                Join our team
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Help us build the infrastructure for the AI-powered web.
                <br />
                We're a small, fast-moving team solving hard problems.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Benefits & Perks</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="p-4 rounded-xl bg-card border border-border text-center">
                    <p className="text-sm font-medium text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Open Positions</h2>
              <div className="space-y-4">
                {openings.map((job) => (
                  <Link
                    key={job.slug}
                    to={`/careers/${job.slug}`}
                    className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <span className="text-sm text-muted-foreground">{job.department}</span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                          <span className="text-sm text-primary">{job.type}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Don't see a fit?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for exceptional people. Send us your resume and we'll be in touch.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:careers@crawlx.io">Send Resume</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
