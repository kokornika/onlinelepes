import { HeroSection } from '@/components/website-development/HeroSection';
import { MultilingualShowcase } from '@/components/website-development/MultilingualShowcase';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/website-development/FAQ';
import { ContactCTA } from '@/components/website-development/ContactCTA';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export function WebsiteDevelopment() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <Breadcrumb 
          items={[
            { label: 'Szolgáltatások', href: '/szolgaltatasok' },
            { label: 'Weboldal Fejlesztés' }
          ]} 
        />
      </div>
      <HeroSection />
      <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-sm">
        <Process />
      </div>
      <MultilingualShowcase />
      <FAQ />
      <ContactCTA />
    </div>
  );
}