import { useState } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronDown } from 'lucide-react';

const webProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern webáruház egyedi funkciókkal és integrált fizetési rendszerrel.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Vállalati Weboldal',
    description: 'Elegáns, professzionális céges weboldal dinamikus tartalomkezeléssel.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Next.js', 'Tailwind CSS', 'Strapi'],
  },
  {
    title: 'Szolgáltatás Platform',
    description: 'Komplex foglalási rendszer időpontfoglalással és online fizetéssel.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Vue.js', 'Firebase', 'Stripe'],
  },
  {
    title: 'Oktatási Platform',
    description: 'Online oktatási platform videó streamingel és interaktív kvízekkel.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['React', 'AWS', 'GraphQL'],
  },
  {
    title: 'Ingatlan Portál',
    description: 'Ingatlan kereső és listázó platform térképes megjelenítéssel.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Next.js', 'PostgreSQL', 'MapBox'],
  },
];

export function WebProjects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? webProjects : webProjects.slice(0, 2);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {displayedProjects.map((project, index) => (
          <SlideIn key={index} delay={0.1 * index} direction="up">
            <div className="group bg-white rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      variant="secondary"
                      className="w-full bg-white/90 hover:bg-white text-sm sm:text-base"
                    >
                      Részletek <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-purple-50 text-purple-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
      
      {webProjects.length > 2 && (
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="w-full sm:w-auto border-2"
          >
            {showAll ? 'Kevesebb Projekt' : 'További Projektek'}{' '}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      )}
    </>
  );
}