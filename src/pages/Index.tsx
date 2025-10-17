import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, TrendingUp, Link2, FolderOpen, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroProfile from "@/assets/hero-profile.jpg";

const Index = () => {
  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Boost your local visibility and dominate Google Maps rankings with proven local SEO strategies.",
    },
    {
      icon: Link2,
      title: "Link Building",
      description: "High-quality backlinks that improve your domain authority and search engine rankings.",
    },
    {
      icon: FolderOpen,
      title: "Directory Submissions",
      description: "Get listed on top business directories to increase online presence and local citations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I'm <span className="text-primary">Anwar Ali</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Local SEO Expert & Digital Marketer Helping Businesses Grow Online 🚀
              </p>
              <p className="text-base text-muted-foreground mb-8">
                With proven expertise in Local SEO, Link Building, and Directory Submissions, I help businesses rank higher, attract more customers, and grow their online presence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                    Hire Me
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img
                  src={heroProfile}
                  alt="Anwar Ali - Local SEO Expert"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Can Do For You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized SEO services to help your business dominate local search results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link to="/services" className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Top 5%</div>
              <div className="text-sm text-muted-foreground">Fiverr Seller</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Boost Your Local Rankings?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to improve your local SEO, build quality backlinks, and grow your online presence.
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              Let's Work Together
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
