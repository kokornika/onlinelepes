import { Code, Globe, Megaphone, QrCode } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion';
import { useNavigate } from 'react-router-dom';
import { ServiceCard } from './home/Services/ServiceCard';

export function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: 'Digitális Megoldások',
      description:
        'Modern, reszponzív és többnyelvű weboldalak tervezése és fejlesztése, amely tökéletesen működik minden eszközön.',
      path: '/szolgaltatasok/weboldal-fejlesztes',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Megaphone,
      title: 'Online Marketing',
      description:
        'Google és Facebook hirdetések kezelése, kampányok tervezése és optimalizálása a maximális hatékonyságért.',
      path: '/szolgaltatasok/marketing',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: QrCode,
      title: 'Digitális Névjegykártya',
      description:
        'Modern, QR-kódos digitális névjegykártyák készítése egyedi designnal és funkcionalitással.',
      link: 'https://qrnevjegy.hu/',
      isExternal: true,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Automatizált Megoldások',
      description:
        'Személyre szabott megoldások és egyedi funkciók fejlesztése az Ön igényei szerint.',
      path: '/szolgaltatasok/egyedi-fejlesztes',
      gradient: 'from-green-500 to-emerald-500'
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
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Szolgáltatásaink
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Komplex Megoldások az <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Online Sikerhez</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Személyre szabott szolgáltatások, amelyek segítenek vállalkozása digitális növekedésében
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.2 * index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => handleServiceClick(service)}
                isExternal={'link' in service}
                gradient={service.gradient}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}