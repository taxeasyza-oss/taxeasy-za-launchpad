import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Mail, Phone, MapPin, Clock, MessageCircle, CreditCard, CheckCircle } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { formData, updateField, validateForm, resetForm, isSubmitting, setIsSubmitting } = useFormValidation({
    firstName: { value: "", error: "", rules: { required: true, minLength: 2 } },
    lastName: { value: "", error: "", rules: { required: true, minLength: 2 } },
    email: { value: "", error: "", rules: { required: true, email: true } },
    subject: { value: "", error: "", rules: { required: true, minLength: 5 } },
    message: { value: "", error: "", rules: { required: true, minLength: 20, maxLength: 1000 } }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      details: "support@taxeasyza.co.za",
      description: "Get expert answers within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+27 (0) 82 123 4567",
      description: "Quick questions and support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "Cape Town, South Africa",
      description: "Serving clients nationwide"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support Hours",
      details: "Mon-Fri: 8AM-6PM SAST",
      description: "Extended hours during tax season"
    }
  ];

  const paymentMethods = [
    { name: "PayFast", description: "Secure ZA payments" },
    { name: "PayPal", description: "Global payments" },
    { name: "Stripe", description: "Card payments" },
    { name: "EFT", description: "Bank transfers" }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Get in Touch
          </Badge>
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Simplify Your Taxes?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Need support? Our South African tax experts are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-heading">
                <MessageCircle className="w-6 h-6 text-accent" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name"
                        value={formData.firstName.value}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className={formData.firstName.error ? "border-destructive" : ""}
                      />
                      {formData.firstName.error && (
                        <p className="text-destructive text-sm mt-1">{formData.firstName.error}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name"
                        value={formData.lastName.value}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className={formData.lastName.error ? "border-destructive" : ""}
                      />
                      {formData.lastName.error && (
                        <p className="text-destructive text-sm mt-1">{formData.lastName.error}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      value={formData.email.value}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={formData.email.error ? "border-destructive" : ""}
                    />
                    {formData.email.error && (
                      <p className="text-destructive text-sm mt-1">{formData.email.error}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?"
                      value={formData.subject.value}
                      onChange={(e) => updateField("subject", e.target.value)}
                      className={formData.subject.error ? "border-destructive" : ""}
                    />
                    {formData.subject.error && (
                      <p className="text-destructive text-sm mt-1">{formData.subject.error}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message * <span className="text-muted-foreground text-xs">({formData.message.value.length}/1000)</span>
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your tax needs or questions..."
                      className={`min-h-[120px] ${formData.message.error ? "border-destructive" : ""}`}
                      value={formData.message.value}
                      onChange={(e) => updateField("message", e.target.value)}
                      maxLength={1000}
                    />
                    {formData.message.error && (
                      <p className="text-destructive text-sm mt-1">{formData.message.error}</p>
                    )}
                  </div>

                  <Button 
                    type="submit"
                    variant="hero" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-soft transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                        <p className="text-primary font-medium mb-1">{method.details}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Payment Methods */}
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-heading">
                  <CreditCard className="w-6 h-6 text-accent" />
                  Secure Payment Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="text-center p-3 bg-background rounded-lg border">
                      <div className="font-semibold text-foreground">{method.name}</div>
                      <div className="text-sm text-muted-foreground">{method.description}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-center text-muted-foreground mt-4">
                  All payments are processed securely and include a 30-day money-back guarantee
                </p>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Quick Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.location.href = '/calculator'}
                    className="block w-full text-left text-primary hover:text-accent transition-colors hover:bg-accent/5 p-2 rounded"
                  >
                    → How do I claim home office deductions?
                  </button>
                  <button 
                    onClick={() => window.location.href = '/calculator'}
                    className="block w-full text-left text-primary hover:text-accent transition-colors hover:bg-accent/5 p-2 rounded"
                  >
                    → What are the 2025 tax year changes?
                  </button>
                  <button 
                    onClick={() => window.location.href = '/calculator'}
                    className="block w-full text-left text-primary hover:text-accent transition-colors hover:bg-accent/5 p-2 rounded"
                  >
                    → How does the solar tax benefit work?
                  </button>
                  <button 
                    onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full text-left text-primary hover:text-accent transition-colors hover:bg-accent/5 p-2 rounded"
                  >
                    → Is the toolkit updated for 2025?
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};