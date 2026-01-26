import Hero from "@/section/Hero";
import { PartnersSection, SavingsSection, SecuritySection, } from "@/section/AdditionalFeatures";
import Features from "@/section/Features";
import Testimonials from "@/section/Testimonials";
import EcosystemSection from "@/section/HomeExtraSections";


const Home = () => {

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <Hero></Hero>

      {/* 1. Immediate Credibility */}
        <PartnersSection /> 
        
        {/* 2. Core Features Overview */}
        <Features /> 
        
        {/* 3. Deep Dive: A Specific User Benefit (Savings) */}
        <SavingsSection />

        <EcosystemSection></EcosystemSection>
        
        {/* 4. Addressing Objections: Trust & Safety */}
        <SecuritySection />
        
        {/* 5. Social Proof: User reviews */}
        {/* <TestimonialsSection /> */}
        <Testimonials></Testimonials>
        
        {/* 6. The "Ask": Pricing */}
        {/* <PricingSection /> */}
        
    </div>
  );
};

export default Home;
