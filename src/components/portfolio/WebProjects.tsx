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
  const displayedProjects = showAll ? webProjects : webProjects.slice(0, 3);

  return (
    <>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <SlideIn key={index} delay={0.2 * index} direction="up">
            <div className="group relative bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
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
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700"
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
      
      {webProjects.length > 3 && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="border-2"
          >
            {showAll ? 'Kevesebb Projekt' : 'További Projektek'}{' '}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      )}
    </>
  );
}