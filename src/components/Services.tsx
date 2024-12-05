import { Code, Globe, Smartphone, Sparkles, Megaphone, QrCode } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Weboldal Fejlesztés',
      description:
        'Modern, reszponzív és többnyelvű weboldalak tervezése és fejlesztése, amely tökéletesen működik minden eszközön.',
      path: '/szolgaltatasok/weboldal-fejlesztes'
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'Marketing Szolgáltatások',
      description:
        'Google és Facebook hirdetések kezelése, kampányok tervezése és optimalizálása a maximális hatékonyságért.',
      path: '/szolgaltatasok/marketing'
    },
    {
      icon: <QrCode className="h-8 w-8" />,
      title: 'Digitális Névjegykártya',
      description:
        'Modern, QR-kódos digitális névjegykártyák készítése egyedi designnal és funkcionalitással.',
      link: 'https://qrnevjegy.hu/',
      isExternal: true,
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Egyedi Fejlesztés',
      description:
        'Személyre szabott megoldások és egyedi funkciók fejlesztése az Ön igényei szerint.',
      path: '/szolgaltatasok/egyedi-fejlesztes'
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.isExternal && service.link) {
      window.open(service.link, '_blank');
    } else if (service.path) {
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
              <div
                onClick={() => handleServiceClick(service)}
                className="group relative p-8 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-purple-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold flex items-center gap-2">
                    {service.title}
                    {service.isExternal && (
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                        Külső Link
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}