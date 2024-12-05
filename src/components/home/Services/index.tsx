import { Code, Globe, Megaphone, QrCode } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion';
import { useNavigate } from 'react-router-dom';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: 'Weboldal Fejlesztés',
      description:
        'Modern, reszponzív és többnyelvű weboldalak tervezése és fejlesztése, amely tökéletesen működik minden eszközön.',
      path: '/szolgaltatasok/weboldal-fejlesztes'
    },
    {
      icon: Megaphone,
      title: 'Marketing Szolgáltatások',
      description:
        'Google és Facebook hirdetések kezelése, kampányok tervezése és optimalizálása a maximális hatékonyságért.',
      path: '/szolgaltatasok/marketing'
    },
    {
      icon: QrCode,
      title: 'Digitális Névjegykártya',
      description:
        'Modern, QR-kódos digitális névjegykártyák készítése egyedi designnal és funkcionalitással.',
      link: 'https://qrnevjegy.hu/',
      isExternal: true,
    },
    {
      icon: Globe,
      title: 'Egyedi Fejlesztés',
      description:
        'Személyre szabott megoldások és egyedi funkciók fejlesztése az Ön igényei szerint.',
      path: '/szolgaltatasok/egyedi-fejlesztes'
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if ('link' in service && service.link) {
      window.open(service.link, '_blank');
    } else if ('path' in service && service.path) {
      navigate(service.path);
    }
  };

  return (
    <section id="services" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
              Szolgáltatásaink
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Komplex megoldások az online sikerhez
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.2 * index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => handleServiceClick(service)}
                isExternal={'link' in service}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}