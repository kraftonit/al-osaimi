import HeroSection from '@/components/HeroSection'
import ServiceSection from '@/components/ServiceSection'
import ProjectSection from '@/components/ProjectSection'
import ContactSection from '@/components/ContactSection'
import HomeAbout from '@/components/HomeAbout'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomeAbout />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}

