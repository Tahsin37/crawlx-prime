import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Shield, Lock, Server, FileCheck, Eye, Key } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">SOC 2 Type II Certified</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6">Security & Compliance</h1>
              <p className="text-xl text-muted-foreground">Enterprise-grade security for your data.</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                { icon: Lock, title: "Encryption", desc: "AES-256 encryption at rest, TLS 1.3 in transit" },
                { icon: Server, title: "Infrastructure", desc: "Hosted on AWS with multi-region redundancy" },
                { icon: FileCheck, title: "Compliance", desc: "SOC 2 Type II, GDPR, CCPA compliant" },
                { icon: Eye, title: "Privacy", desc: "We never sell your data or crawl results" },
                { icon: Key, title: "Access Control", desc: "Role-based access, SSO/SAML support" },
                { icon: Shield, title: "Monitoring", desc: "24/7 security monitoring and incident response" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-card border border-border">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
