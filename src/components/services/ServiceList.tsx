import { FadeIn } from '@/components/ui/motion';
import { ServiceCard } from './ServiceCard';
import { useNavigate } from 'react-router-dom';
import { serviceData } from './service-data';

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
  );
}