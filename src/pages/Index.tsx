import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Users, TrendingUp, CheckCircle, Sparkles, Bot } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const packages = [
    {
      name: "Starter Pack",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI automation",
      features: [
        "5 AI Workflow Templates",
        "Lead Generation Tools",
        "Email Automation",
        "Basic Analytics",
        "24/7 Support"
      ],
      icon: <Zap className="w-6 h-6" />,
      popular: false
    },
    {
      name: "Growth Pack",
      price: "$299",
      period: "/month",
      description: "Designed for growing companies ready to scale with advanced AI",
      features: [
        "25 AI Workflow Templates",
        "Advanced Lead Generation",
        "Multi-channel Automation",
        "Custom Integrations",
        "Priority Support",
        "Analytics Dashboard"
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Automation Pack",
      price: "$599",
      period: "/month",
      description: "Enterprise-grade AI automation for teams that demand excellence",
      features: [
        "Unlimited AI Workflows",
        "Enterprise Lead Generation",
        "Custom AI Models",
        "White-label Solutions",
        "Dedicated Success Manager",
        "Advanced Security"
      ],
      icon: <Bot className="w-6 h-6" />,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
          <img 
            src={heroImage} 
            alt="AI Automation Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Built for the future of business automation
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
              AI Automation
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Transform your business with plug-and-play AI workflows. 
              Generate leads, automate processes, and scale effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button size="xl" variant="hero" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="ghost-premium">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-16 text-muted-foreground text-sm animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                No setup required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Instant deployment
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Growth Path
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startup to enterprise, we have the perfect AI automation solution for your business needs.
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`relative p-8 ${pkg.popular ? 'border-primary/40 bg-gradient-to-b from-primary/5 to-transparent' : ''} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="p-0 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {pkg.icon}
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 mb-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "premium" : "ghost-premium"}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">Revnex</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-muted-foreground">
              <a 
                href="mailto:hello@revnex.ai" 
                className="hover:text-primary transition-colors duration-200"
              >
                hello@revnex.ai
              </a>
              <span>Built with ❤️ for modern businesses</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;