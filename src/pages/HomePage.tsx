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
      
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <Hero />
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white/80 backdrop-blur-sm">
        <Services />
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-sm">
        <Process />
      </section>

      {/* Portfolio Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white/80 backdrop-blur-sm">
        <Portfolio />
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-sm">
        <SocialProof />
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white/80 backdrop-blur-sm">
        <FAQ />
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-sm">
        <Contact />
      </section>
    </div>
  );
}