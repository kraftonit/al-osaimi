import Counter from "@/components/Counter";
import HeroSection from "@/components/HeroSection";
import HomeAbout from "@/components/HomeAbout";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomeAbout />
      <ServiceSection />
      <WhyChooseUs />
      <PortfolioSection />
      <Counter />
      <TestimonialSection />
    </main>
  );
}
