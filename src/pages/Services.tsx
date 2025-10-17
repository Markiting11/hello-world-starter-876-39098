import { MapPin, Link2, FolderOpen, Search, BarChart3, FileText, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      id: "local-seo",
      icon: MapPin,
      title: "Local SEO Optimization",
      description: "Dominate local search results and attract more customers from your area with comprehensive local SEO strategies.",
      features: [
        "Google Business Profile optimization",
        "Local keyword research and targeting",
        "NAP consistency across all platforms",
        "Local citation building",
        "Review management strategies",
        "Local content optimization",
      ],
    },
    {
      id: "link-building",
      icon: Link2,
      title: "Link Building Services",
      description: "Build high-quality backlinks that improve your domain authority and boost your search engine rankings.",
      features: [
        "White-hat link building strategies",
        "Guest posting on authority sites",
        "Broken link building",
        "Resource page link building",
        "Competitor backlink analysis",
        "Monthly link building reports",
      ],
    },
    {
      id: "directory",
      icon: FolderOpen,
      title: "Directory Submissions",
      description: "Get your business listed on top directories to increase visibility, build citations, and improve local SEO.",
      features: [
        "Submission to 50+ top directories",
        "Industry-specific directory listings",
        "Local business directories",
        "Consistent NAP information",
        "Citation tracking and monitoring",
        "Detailed submission reports",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Search,
      title: "SEO Audit",
      description: "Comprehensive website analysis to identify SEO issues and opportunities for improvement.",
    },
    {
      icon: BarChart3,
      title: "Keyword Research",
      description: "In-depth keyword analysis to find the best opportunities for your business to rank.",
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description: "SEO-optimized content planning and creation that drives traffic and conversions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional SEO services designed to help your business rank higher, attract more customers, and grow online
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-20 animate-fade-in ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-8 md:p-12 hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="text-primary" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <Link to="/contact">
                        <Button size="lg">
                          Get Started
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        What's Included:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SEO solutions to support your digital marketing needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How I Work
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven process that delivers consistent results
              </p>
            </div>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "I start by understanding your business, goals, and current online presence. A thorough SEO audit identifies opportunities and challenges.",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Based on the analysis, I create a customized SEO strategy tailored to your specific needs and target audience.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "I execute the strategy with precision, focusing on quality over quantity and sustainable, white-hat techniques.",
                },
                {
                  step: "04",
                  title: "Monitoring & Optimization",
                  description: "Continuous tracking, analysis, and optimization ensure your rankings keep improving and your ROI stays strong.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-8 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl font-bold text-primary/30">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how my SEO services can help your business achieve its goals. Learn more about my work in the <Link to="/portfolio" className="text-primary hover:underline">portfolio section</Link> or get in touch today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/blog">
              <Button size="lg" variant="outline">
                Read SEO Tips on My Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
