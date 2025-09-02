import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#shop" },
    { name: "Calculator", href: "/calculator" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleSmoothScroll = (href: string) => {
    if (href.includes('#')) {
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-heading font-bold text-primary">
              TaxEasy<span className="text-accent">_ZA</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleSmoothScroll(item.href)}
                    className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/10"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              variant="accent" 
              size="sm"
              onClick={() => handleSmoothScroll("/#shop")}
              className="hover:scale-105 transition-transform"
            >
              Get Toolkit - R129
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navigationItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleSmoothScroll(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left hover:bg-accent/10"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="accent" 
                  className="w-full"
                  onClick={() => {
                    handleSmoothScroll("/#shop");
                    setIsMenuOpen(false);
                  }}
                >
                  Get Toolkit - R129
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};