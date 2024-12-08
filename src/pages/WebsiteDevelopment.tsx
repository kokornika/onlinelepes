import { HeroSection } from '@/components/website-development/HeroSection';
import { MultilingualShowcase } from '@/components/website-development/MultilingualShowcase';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/website-development/FAQ';
import { ContactCTA } from '@/components/website-development/ContactCTA';
import { MaintenanceService } from './WebsiteDevelopment/MaintenanceService';

export function WebsiteDevelopment() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-sm">
        <Process />
      </div>
      <MultilingualShowcase />
      <MaintenanceService />
      <FAQ />
      <ContactCTA />
    </div>
  );
}