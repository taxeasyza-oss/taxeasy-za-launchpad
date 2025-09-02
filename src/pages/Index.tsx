import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="TaxEasy_ZA - South African Tax Made Simple | SARS Compliant Tools"
        description="Professional South African tax services, calculators, and guides. Make tax season easier with expert tools in English, Afrikaans, and isiZulu. SARS compliant solutions starting at R129."
        keywords="south african tax, SARS tax return, tax calculator 2025, home office deduction, solar tax benefits, tax toolkit south africa, afrikaans tax help, isizulu tax guide"
        canonical="https://taxeasyza.co.za"
      />
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <ProductShowcase />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
