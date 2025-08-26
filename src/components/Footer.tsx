import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              TaxEasy<span className="text-accent">_ZA</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Your tax, your language, made easy.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Professional South African tax services and digital toolkits for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="/#shop" className="text-primary-foreground/80 hover:text-accent transition-colors">Shop</a></li>
              <li><a href="/calculator" className="text-primary-foreground/80 hover:text-accent transition-colors">Calculator</a></li>
              <li><a href="/#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About</a></li>
              <li><a href="/#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services & GitHub */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 mb-6">
              <li><span className="text-primary-foreground/80">Tax Return Filing</span></li>
              <li><span className="text-primary-foreground/80">Home Office Deductions</span></li>
              <li><span className="text-primary-foreground/80">Solar Tax Benefits</span></li>
              <li><span className="text-primary-foreground/80">Tax Calculators</span></li>
              <li><span className="text-primary-foreground/80">Expert Support</span></li>
            </ul>
            
            <div className="border-t border-primary-foreground/20 pt-4">
              <h5 className="font-semibold mb-3 text-accent">Open Source</h5>
              <a 
                href="https://github.com/TaxEasy-ZA/taxeasy-za-2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Calculator Code</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">support@taxeasyza.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+27 (0) 82 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">Cape Town, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} TaxEasy_ZA. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                SARS Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};