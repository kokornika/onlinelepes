import { useState, useEffect } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Maximize2, X, ChevronDown } from 'lucide-react';

const creativeProjects = [
  {
    title: 'Modern Brand Identity',
    description: 'Komplett arculattervezés egy tech startupnak.',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Branding',
    fullImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1600&h=900'
  },
  {
    title: 'E-commerce Design System',
    description: 'Modern webáruház design rendszer és UI komponensek.',
    image: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'UI Design',
    fullImage: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?auto=format&fit=crop&q=80&w=1600&h=900'
  },
  {
    title: 'App Interface Design',
    description: 'Innovatív mobilalkalmazás felhasználói felülete.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Mobile Design',
    fullImage: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1600&h=900'
  },
  {
    title: 'Landing Page Design',
    description: 'Konverzióra optimalizált landing page design.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Web Design',
    fullImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1600&h=900'
  },
  {
    title: 'Social Media Kit',
    description: 'Egységes social media megjelenés tervezése.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Social Design',
    fullImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1600&h=900'
  },
  {
    title: 'Dashboard Design',
    description: 'Komplex admin felület és dashboard design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'UI Design',
    fullImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900'
  }
];

export function CreativeProjects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedProjects = showAll ? creativeProjects : creativeProjects.slice(0, 3);

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
                {!isMobile && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        variant="secondary"
                        className="w-full bg-white/90 hover:bg-white"
                        onClick={() => setSelectedImage(project.fullImage)}
                      >
                        <Maximize2 className="h-4 w-4 mr-2" /> Nagyítás
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-2 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>

      {creativeProjects.length > 3 && (
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

      {/* Lightbox - only shown on desktop */}
      {!isMobile && selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <img
              src={selectedImage}
              alt="Nagyított kép"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}