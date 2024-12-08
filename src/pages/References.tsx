import { HeroSection } from '@/components/references/HeroSection';
import { ProjectGrid } from '@/components/references/ProjectGrid';
import { Testimonials } from '@/components/references/Testimonials';
import { ContactCTA } from '@/components/references/ContactCTA';

export function References() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectGrid />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}