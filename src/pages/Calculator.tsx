import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  FileText, 
  Download, 
  CheckCircle, 
  Languages, 
  Clock,
  Shield,
  Star,
  Github,
  ExternalLink
} from "lucide-react";

const Calculator = () => {
  const reportFeatures = [
    "Detailed 2025 SARS-compliant PDF report",
    "Complete breakdown of deductions & rebates",
    "Accurate refund estimate calculation",
    "Available in English, Afrikaans, or isiZulu",
    "Instant download after payment",
    "Professional format for SARS submission",
    "Step-by-step filing instructions",
    "Expert tax tips included"
  ];

  const handleGenerateReport = () => {
    // PayFast integration would go here
    window.open('https://www.payfast.co.za', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              🧮 2025 Tax Calculator
            </Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Calculate Your 2025 Tax Return
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Use our professional-grade calculator to estimate your tax liability, 
              refund amount, and available deductions for the 2025 tax year.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Embed Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="shadow-large border-0 overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://taxeasy-za-2025.onrender.com?campaign=calculator_page"
                width="100%"
                height="1000"
                style={{ border: 0, background: 'transparent' }}
                title="TaxEasy ZA 2025 Tax Calculator"
                className="w-full"
                allowFullScreen
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upsell Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-accent border-accent">
                💼 Professional Report
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Download Your Personalized Tax Report
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a professional, SARS-compliant PDF report based on your calculations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Features List */}
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  What You Get:
                </h3>
                <div className="space-y-4 mb-8">
                  {reportFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-background rounded-lg border">
                    <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium">SARS Compliant</div>
                  </div>
                  <div className="p-3 bg-background rounded-lg border">
                    <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium">Instant Download</div>
                  </div>
                  <div className="p-3 bg-background rounded-lg border">
                    <Languages className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium">Multilingual</div>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <Card className="shadow-large border-accent/20 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold">
                    Professional Tax Report
                  </CardTitle>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-4xl font-bold text-primary">R99</span>
                    <span className="text-lg text-muted-foreground">once-off</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9/5 rating)</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="w-full text-lg font-semibold mb-4"
                    onClick={handleGenerateReport}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Generate My R99 Report
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p className="mb-2">✅ Secure payment via PayFast</p>
                    <p className="mb-2">✅ Instant PDF download</p>
                    <p>✅ 30-day money-back guarantee</p>
                  </div>

                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-center text-accent font-semibold">
                      💰 Save hundreds in missed deductions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="mt-12 space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Why Choose Our Professional Report?</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Our reports are created by qualified South African tax professionals and are 
                    designed to help you maximize your refund while ensuring full SARS compliance. 
                    Over 10,000 South Africans have successfully used our reports to file their taxes.
                  </p>
                </CardContent>
              </Card>

              {/* Open Source Notice */}
              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Github className="w-5 h-5 text-accent" />
                    <h4 className="text-lg font-semibold text-foreground">Open Source Calculator</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our tax calculator is open source and available on GitHub. 
                    Transparency in tax calculations you can trust.
                  </p>
                  <a 
                    href="https://github.com/TaxEasy-ZA/taxeasy-za-2025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    <span>View Source Code</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculator;