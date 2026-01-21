import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const Status = () => {
  const services = [
    { name: "API", status: "operational" },
    { name: "Dashboard", status: "operational" },
    { name: "Webhooks", status: "operational" },
    { name: "Crawl Engine", status: "operational" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">All Systems Operational</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">System Status</h1>
                <p className="text-muted-foreground">Current status of CrawlX services.</p>
              </div>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service.name} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                    <span className="font-medium text-foreground">{service.name}</span>
                    <span className="flex items-center gap-2 text-sm text-success">
                      <CheckCircle className="w-4 h-4" />
                      Operational
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">Uptime (Last 90 days)</h3>
                <div className="flex gap-0.5">
                  {Array.from({ length: 90 }).map((_, i) => (
                    <div key={i} className="flex-1 h-8 bg-success/80 rounded-sm" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">99.98% uptime</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Status;
