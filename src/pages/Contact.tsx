import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Mail, MessageSquare, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6">Contact Us</h1>
                <p className="text-xl text-muted-foreground">We'd love to hear from you.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First name" />
                      <Input placeholder="Last name" />
                    </div>
                    <Input type="email" placeholder="Email" />
                    <Input placeholder="Company" />
                    <Textarea placeholder="Message" rows={5} />
                    <Button variant="hero" size="lg" className="w-full">Send Message</Button>
                  </form>
                </div>
                <div className="space-y-8">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Mail className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">support@crawlx.io</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <MessageSquare className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Discord</h3>
                    <p className="text-muted-foreground">Join our community</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Building2 className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Office</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
