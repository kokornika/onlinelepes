import { FadeIn } from '@/components/ui/motion';
import { HeroSection } from '@/components/website-development/HeroSection';
import { WhyOnlinePresence } from '@/components/website-development/WhyOnlinePresence';
import { MultilingualShowcase } from '@/components/website-development/MultilingualShowcase';
import { SuccessStories } from '@/components/website-development/SuccessStories';
import { FAQ } from '@/components/website-development/FAQ';
import { ContactCTA } from '@/components/website-development/ContactCTA';

export function WebsiteDevelopment() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyOnlinePresence />
      <MultilingualShowcase />
      <SuccessStories />
      <FAQ />
      <ContactCTA />
    </div>
  );
}