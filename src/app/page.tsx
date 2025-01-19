import HeroSection from '@/components/HeroSection'
import ServiceSection from '@/components/ServiceSection'
import ProjectSection from '@/components/ProjectSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}

