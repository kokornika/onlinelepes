import { ServiceHeader } from './services/ServiceHeader';
import { ServiceList } from './services/ServiceList';

export function Services() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHeader />
        <ServiceList />
      </div>
    </div>
  );
}