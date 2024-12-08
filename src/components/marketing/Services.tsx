import { Search, Users, LineChart } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'Google Hirdetések',
    description: 'Jelenjen meg az első helyen, amikor szolgáltatását keresik',
    features: [
      'Kulcsszó alapú hirdetések',
      'Remarketing kampányok',
      'Shopping hirdetések',
      'YouTube hirdetések'
    ],
    path: '/szolgaltatasok/marketing/google-ads',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Facebook & Instagram',
    description: 'Érje el célközönségét a közösségi médiában',
    features: [
      'Célzott hirdetések',
      'Remarketing',
      'Instagram Stories',
      'Lead generálás'
    ],
    path: '/szolgaltatasok/marketing/facebook-ads',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: LineChart,
    title: 'Keresőoptimalizálás',
    description: 'Kerüljön az első oldalra a Google keresőben',
    features: [
      'Kulcsszókutatás',
      'On-page SEO',
      'Technikai optimalizálás',
      'Link építés'
    ],
    path: '/szolgaltatasok/marketing/seo',
    gradient: 'from-orange-500 to-red-500'
  }
];

export function Services() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Szolgáltatásaink
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Marketing <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Megoldások</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Átfogó online marketing szolgáltatások a növekedéshez
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <SlideIn key={index} delay={0.1 * index} direction="up">
            <div 
              className="group bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center text-purple-600 font-medium group-hover:translate-x-1 transition-transform">
                További információk <span className="ml-2">→</span>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </div>
  );
}