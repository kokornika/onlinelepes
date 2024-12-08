import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fashion Store',
    category: 'E-commerce',
    description: 'Modern webáruház egyedi design-nal és integrált fizetési rendszerrel.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600',
    metrics: {
      growth: '+250%',
      visitors: '15K+',
      conversion: '4.8%'
    }
  },
  {
    title: 'Local Restaurant',
    category: 'Vendéglátás',
    description: 'Éttermi weboldal online foglalási és rendelési rendszerrel.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=600',
    metrics: {
      growth: '+180%',
      visitors: '8K+',
      conversion: '5.2%'
    }
  },
  {
    title: 'Legal Office',
    category: 'Szolgáltatás',
    description: 'Ügyvédi iroda weboldala időpontfoglalási rendszerrel.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600',
    metrics: {
      growth: '+120%',
      visitors: '5K+',
      conversion: '3.9%'
    }
  },
  {
    title: 'Fitness Center',
    category: 'Egészség & Sport',
    description: 'Fitness központ weboldala órarend és foglalási rendszerrel.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=600',
    metrics: {
      growth: '+200%',
      visitors: '12K+',
      conversion: '4.5%'
    }
  }
];

export function ProjectGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Referencia Projektek
            </span>
            <h2 className="text-4xl font-bold">
              Legutóbbi <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Munkáink</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Minden projekt egyedi kihívásokat rejt, de mi mindig megtaláljuk a legjobb megoldást
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SlideIn key={index} delay={0.2 * index} direction="up">
              <div className="group bg-white rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        variant="secondary"
                        className="w-full bg-white/90 hover:bg-white"
                      >
                        Részletek <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Növekedés</div>
                      <div className="text-lg font-semibold text-purple-600">{project.metrics.growth}</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Látogatók</div>
                      <div className="text-lg font-semibold text-purple-600">{project.metrics.visitors}</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Konverzió</div>
                      <div className="text-lg font-semibold text-purple-600">{project.metrics.conversion}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}