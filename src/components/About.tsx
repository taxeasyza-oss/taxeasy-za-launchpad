import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Expertise",
      description: "Deep understanding of South African tax laws and SARS requirements"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Services available in English, Afrikaans, and isiZulu"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Over 10,000 successful tax returns filed with maximum savings"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Focus",
      description: "Committed to making tax compliance accessible for all South Africans"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Tax Returns Filed" },
    { number: "R50M+", label: "Savings Unlocked" },
    { number: "5 Years", label: "Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            About TaxEasy_ZA
          </Badge>
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
            Making Tax Season Simple for Every South African
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded by South African tax professionals, TaxEasy_ZA understands the unique challenges 
            of navigating SARS requirements. We're here to simplify the process and maximize your returns.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                  {value.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TaxEasy_ZA was born from frustration with the complexity of South African tax requirements. 
                  Our founders, experienced chartered accountants, saw too many people missing out on legitimate 
                  deductions simply because the process was too complicated.
                </p>
                <p>
                  We believe that every South African deserves access to professional-grade tax guidance, 
                  regardless of their background or income level. That's why we've made our tools affordable, 
                  accessible, and available in multiple languages.
                </p>
                <p>
                  Today, we're proud to have helped over 10,000 South Africans navigate their tax obligations 
                  with confidence, saving millions in the process.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
                  <p className="text-primary-foreground/90">
                    To democratize access to professional tax guidance and ensure every South African 
                    can maximize their tax benefits with confidence.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
                  <p>
                    A South Africa where tax compliance is simple, accessible, and stress-free for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};