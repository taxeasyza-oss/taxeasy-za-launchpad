import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Shield, Download, Calculator } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional South African tax services" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🇿🇦 Proudly South African
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
                Your tax, your language,{" "}
                <span className="text-accent">made easy</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Professional South African tax services and digital toolkits. 
                Make tax season easier with our expert guides, calculators, 
                and multilingual support.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8 py-4 group"
                onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Toolkit - R129
              </Button>
              <Button 
                variant="accent-outline" 
                size="lg" 
                className="text-lg px-8 py-4 group"
                onClick={() => window.location.href = '/calculator'}
              >
                <Calculator className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Free Calculator
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-sm text-primary-foreground/60">Happy Clients</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">5★</div>
                <div className="text-sm text-primary-foreground/60">Rating</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">SARS</div>
                <div className="text-sm text-primary-foreground/60">Compliant</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm text-primary-foreground/60">Updated</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features List */}
          <div className="animate-slide-up">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 shadow-large">
              <h3 className="text-2xl font-heading font-semibold mb-6">
                What's Included in Your Toolkit
              </h3>
              <div className="space-y-4">
                {[
                  "Step-by-step SARS tax return guide",
                  "Home office deduction calculator",
                  "Solar tax benefit §12B guide",
                  "Multilingual support (EN, AF, ZU)",
                  "2025 tax year updates",
                  "Expert email support",
                  "Mobile-friendly tools",
                  "Lifetime access"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-accent/20 rounded-lg">
                <p className="text-center text-accent font-semibold">
                  💰 Save R1000s in missed deductions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};