import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { SocialProof } from '@/components/SocialProof';
import { FAQ } from '@/components/FAQ';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { BackgroundGradient } from '@/components/BackgroundGradient';

export function HomePage() {
  return (
    <div className="relative">
      <BackgroundGradient />
      
      {/* Hero Section - Full viewport height */}
      <section className="min-h-screen">
        <Hero />
      </section>

      {/* Services Section - Consistent padding and spacing */}
      <section className="py-24 bg-white">
        <Services />
      </section>

      {/* Process Section - Visual balance */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <Process />
      </section>

      {/* Portfolio Section - Showcase work */}
      <section className="py-24 bg-white">
        <Portfolio />
      </section>

      {/* Social Proof - Build trust */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <SocialProof />
      </section>

      {/* FAQ Section - Help users */}
      <section className="py-24 bg-white">
        <FAQ />
      </section>

      {/* Contact Section - Clear CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <Contact />
      </section>
    </div>
  );
}