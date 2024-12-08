import { FadeIn } from '@/components/ui/motion';
import { ServiceCard } from './ServiceCard';
import { useNavigate } from 'react-router-dom';
import { serviceData } from './service-data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ServiceList() {
  const navigate = useNavigate();

  const handleServiceClick = (service: typeof serviceData[0]) => {
    if ('link' in service && service.link) {
      window.open(service.link, '_blank');
    } else if ('path' in service && service.path) {
      navigate(service.path);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {serviceData.map((service, index) => (
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

      <FadeIn delay={0.6}>
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            onClick={() => navigate('/szolgaltatasok')}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
          >
            Összes Szolgáltatásunk <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </FadeIn>
    </>
  );
}