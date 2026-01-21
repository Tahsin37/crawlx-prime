import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Link } from "react-router-dom";

const Legal = () => {
  const pages = [
    { title: "Privacy Policy", href: "/privacy", desc: "How we collect and use your data" },
    { title: "Terms of Service", href: "/terms", desc: "Terms and conditions for using CrawlX" },
    { title: "GDPR", href: "/gdpr", desc: "EU data protection compliance" },
    { title: "Data Processing Agreement", href: "/dpa", desc: "For enterprise customers" },
    { title: "Cookie Policy", href: "/cookies", desc: "How we use cookies" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 text-center">Legal</h1>
              <p className="text-xl text-muted-foreground text-center mb-12">Legal documents and policies.</p>
              <div className="space-y-4">
                {pages.map((page) => (
                  <Link key={page.href} to={page.href} className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                    <h3 className="font-semibold text-foreground mb-1">{page.title}</h3>
                    <p className="text-sm text-muted-foreground">{page.desc}</p>
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

export default Legal;
