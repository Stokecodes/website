import { MobileNav } from "@/components/mobile-nav"
import { HeroSection } from "@/components/hero-section"
import { ProjectTimeline } from "@/components/project-timeline"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <MobileNav />
      <HeroSection />
      <ProjectTimeline />
    </main>
  )
}
