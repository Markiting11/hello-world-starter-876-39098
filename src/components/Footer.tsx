import { Link } from "react-router-dom";
import { Linkedin, Mail, MessageSquare, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-3">Anwar Ali</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Local SEO Expert & Digital Marketer helping businesses grow online with proven SEO strategies, link building, and directory submissions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/anwar-sehar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/arshad.ali.7146557"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:Arshad2097@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/923459842097"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#local-seo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link to="/services#link-building" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Link Building
                </Link>
              </li>
              <li>
                <Link to="/services#directory" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Directory Submissions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  SEO Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anwar Ali. All rights reserved. Built with expertise in Local SEO & Digital Marketing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
