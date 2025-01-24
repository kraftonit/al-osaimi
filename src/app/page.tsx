import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HomeAbout from "@/components/HomeAbout";
import ServiceSection from "@/components/ServiceSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomeAbout />
      <ServiceSection />
      <VideoSection />
      <ContactSection />
    </main>
  );
}
