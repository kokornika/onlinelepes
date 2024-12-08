import { HeroSection } from '@/components/marketing/HeroSection';
import { Services } from '@/components/marketing/Services';
import { CaseStudies } from '@/components/marketing/CaseStudies';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/marketing/FAQ';
import { ContactCTA } from '@/components/marketing/ContactCTA';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export function Marketing() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <Breadcrumb 
          items={[
            { label: 'Szolgáltatások', href: '/szolgaltatasok' },
            { label: 'Marketing' }
          ]} 
        />
      </div>
      <HeroSection />
      <div className="py-12 md:py-16 lg:py-24 bg-white">
        <Services />
      </div>
      <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-sm">
        <CaseStudies />
      </div>
      <div className="py-12 md:py-16 lg:py-24 bg-white">
        <Process />
      </div>
      <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-sm">
        <FAQ />
      </div>
      <div className="py-12 md:py-16 lg:py-24 bg-white">
        <ContactCTA />
      </div>
    </div>
  );
}