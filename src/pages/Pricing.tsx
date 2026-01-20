import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Check, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Free",
    description: "For testing and small projects",
    price: "$0",
    period: "forever",
    features: [
      { text: "500 pages/month", tooltip: "Resets monthly" },
      { text: "Basic extraction", tooltip: null },
      { text: "JSON & Markdown output", tooltip: null },
      { text: "Community support", tooltip: "Discord community" },
      { text: "1 concurrent crawl", tooltip: null },
      { text: "7-day data retention", tooltip: null },
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams and projects",
    price: "$49",
    period: "/month",
    features: [
      { text: "50,000 pages/month", tooltip: "Overage: $0.001/page" },
      { text: "AI-powered extraction", tooltip: "Advanced ML models" },
      { text: "All output formats", tooltip: "8+ formats including custom" },
      { text: "Priority support", tooltip: "24-hour response time" },
      { text: "10 concurrent crawls", tooltip: null },
      { text: "Webhooks & API access", tooltip: null },
      { text: "Custom rate limiting", tooltip: null },
      { text: "30-day data retention", tooltip: null },
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Scale",
    description: "For enterprises with custom needs",
    price: "$299",
    period: "/month",
    features: [
      { text: "500,000 pages/month", tooltip: "Volume discounts available" },
      { text: "Everything in Pro", tooltip: null },
      { text: "Dedicated support", tooltip: "Slack channel + SLA" },
      { text: "100 concurrent crawls", tooltip: null },
      { text: "Custom integrations", tooltip: null },
      { text: "SLA guarantee", tooltip: "99.9% uptime" },
      { text: "SOC 2 compliance", tooltip: "Type II certified" },
      { text: "SSO & team management", tooltip: null },
      { text: "90-day data retention", tooltip: null },
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    popular: false,
  },
];

const faqs = [
  {
    question: "What counts as a page?",
    answer: "A page is any URL that our crawler visits and extracts data from. Redirects and errors don't count against your quota."
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle."
  },
  {
    question: "What happens if I exceed my page limit?",
    answer: "On the Free plan, crawls will pause until the next month. On paid plans, you'll be charged the overage rate per page."
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes, annual billing saves you 20%. Contact our sales team for annual pricing."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers for annual plans, and can invoice enterprise customers."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked."
  }
];

const Pricing = () => {
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
                Simple, transparent
                <br />
                <span className="gradient-text">pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Start for free. Scale as you grow. No hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TooltipProvider>
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative p-8 rounded-2xl border bg-card transition-all duration-300 ${
                      plan.popular
                        ? "border-primary shadow-glow scale-[1.02]"
                        : "border-border hover:border-primary/30 hover:shadow-medium"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <span className="text-5xl font-semibold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-success" />
                          </div>
                          <span className="text-sm text-muted-foreground flex-1">
                            {feature.text}
                          </span>
                          {feature.tooltip && (
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="w-4 h-4 text-muted-foreground/50" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </li>
                      ))}
                    </ul>

                    <Button variant={plan.variant} className="w-full" size="lg" asChild>
                      <Link to={plan.name === "Scale" ? "/contact" : "/signup"}>{plan.cta}</Link>
                    </Button>
                  </div>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-foreground text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="text-lg font-medium text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Still have questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team is here to help you find the right plan.
              </p>
              <Button variant="hero-secondary" size="xl" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
