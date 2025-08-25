import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Calculator, Book, Star, Shield } from "lucide-react";

export const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "Complete Tax Toolkit 2025",
      price: "R129",
      originalPrice: "R199",
      description: "Everything you need for a stress-free tax season",
      features: [
        "SARS return guide",
        "Home office calculator",
        "Solar tax benefits",
        "Multilingual support",
        "Expert email support",
        "Lifetime updates"
      ],
      popular: true,
      icon: <Download className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Tax Calculator Pro",
      price: "Free",
      originalPrice: "",
      description: "Calculate your tax obligations instantly",
      features: [
        "Income tax calculator",
        "VAT calculator",
        "Capital gains calculator",
        "Real-time SARS rates",
        "Export results",
        "Mobile optimized"
      ],
      popular: false,
      icon: <Calculator className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Expert Tax Guides",
      price: "R89",
      originalPrice: "R149",
      description: "Professional insights and strategies",
      features: [
        "Tax planning strategies",
        "Deduction optimization",
        "SARS audit preparation",
        "Business tax guide",
        "Investment tax tips",
        "Q&A sessions"
      ],
      popular: false,
      icon: <Book className="w-6 h-6" />
    }
  ];

  return (
    <section id="shop" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Digital Products
          </Badge>
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your Tax Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade tax tools and guides designed specifically for South African taxpayers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className={`relative transition-all duration-300 hover:shadow-large hover:-translate-y-2 ${
                product.popular ? 'ring-2 ring-accent shadow-medium' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                  {product.icon}
                </div>
                <CardTitle className="text-xl font-heading font-semibold">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={product.popular ? "hero" : "default"} 
                  className="w-full"
                >
                  {product.price === "Free" ? "Access Free Calculator" : "Get Instant Access"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};