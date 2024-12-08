import { HeroSection } from '@/components/automated-solutions/HeroSection';
import { Features } from '@/components/automated-solutions/Features';
import { IndustrySolutions } from '@/components/automated-solutions/IndustrySolutions';
import { Benefits } from '@/components/automated-solutions/Benefits';
import { ContactCTA } from '@/components/automated-solutions/ContactCTA';

export function AutomatedSolutions() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features />
      <IndustrySolutions />
      <Benefits />
      <ContactCTA />
    </div>
  );
}