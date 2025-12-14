import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WhyChooseUs />
      <ServicesPreview />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Index;
