import { Link } from "react-router-dom";
import { Linkedin, Mail, MessageSquare, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">AA</span>
              </div>
              Anwar Ali
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Local SEO Expert & Digital Marketer helping businesses grow online with proven SEO strategies, link building, and directory submissions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/anwar-sehar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/arshad.ali.7146557"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
                aria-label="Facebook Profile"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/923459842097"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href="mailto:Arshad2097@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded"></div>
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#local-seo" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Local SEO
                </Link>
              </li>
              <li>
                <Link to="/services#link-building" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Link Building
                </Link>
              </li>
              <li>
                <Link to="/services#directory" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Directory Submissions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  SEO Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Anwar Ali. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Built with expertise in Local SEO & Digital Marketing 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
