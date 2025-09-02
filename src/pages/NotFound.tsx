import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="text-8xl font-bold text-accent mb-6">404</div>
        <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Let's get you back to managing your taxes.
        </p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Return to Home
          </a>
          <br />
          <a 
            href="/calculator" 
            className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Try Our Calculator
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
