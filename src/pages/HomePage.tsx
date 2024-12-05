import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { BackgroundGradient } from '@/components/BackgroundGradient';

export function HomePage() {
  return (
    <>
      <BackgroundGradient />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
    </>
  );
}