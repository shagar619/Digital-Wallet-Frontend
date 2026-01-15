import Hero from "@/section/Hero";
import Features from "@/section/Features";
import { PartnersSection, PricingSection, SavingsSection, SecuritySection, TestimonialsSection } from "@/section/AdditionalFeatures";


const Home = () => {

  return (
    <div className="bg-background text-foreground min-h-screen">

      {/* Hero Section */}
      <Hero></Hero>

      {/* <Features></Features> */}

      {/* 1. Immediate Credibility */}
        <PartnersSection /> 
        
        {/* 2. Core Features Overview */}
        <Features /> 
        
        {/* 3. Deep Dive: A Specific User Benefit (Savings) */}
        <SavingsSection />
        
        {/* 4. Addressing Objections: Trust & Safety */}
        <SecuritySection />
        
        {/* 5. Social Proof: User reviews */}
        <TestimonialsSection />
        
        {/* 6. The "Ask": Pricing */}
        <PricingSection />

    </div>
  );
};

export default Home;
