import ContactSection from "@/components/ContactSection";
import Counter from "@/components/Counter";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import HomeAbout from "@/components/HomeAbout";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceSection from "@/components/ServiceSection";
import VideoSection from "@/components/VideoSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomeAbout />
      <ServiceSection />
      <VideoSection />
      <WhyChooseUs />
      <PortfolioSection />
      <Counter />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
