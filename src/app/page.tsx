import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HomeAbout from "@/components/HomeAbout";
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
      <ContactSection />
    </main>
  );
}
