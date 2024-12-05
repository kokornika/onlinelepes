import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const marketingProjects = [
  {
    title: 'Social Media Kampány',
    description: 'Átfogó közösségi média kampány egy vezető divatmárkának.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Social Media', 'Branding', 'Content Creation'],
    metrics: {
      reach: '500K+',
      engagement: '15%',
      conversion: '8.5%'
    }
  },
  {
    title: 'Email Marketing Stratégia',
    description: 'Személyre szabott email marketing kampány egy e-commerce vállalkozásnak.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Email Marketing', 'Automation', 'Analytics'],
    metrics: {
      openRate: '35%',
      clickRate: '12%',
      roi: '320%'
    }
  },
  {
    title: 'Google Ads Kampány',
    description: 'Célzott PPC kampány egy ingatlanközvetítő cégnek.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['PPC', 'Analytics', 'Conversion'],
    metrics: {
      impressions: '1M+',
      ctr: '4.2%',
      conversionRate: '3.8%'
    }
  }
];

export function MarketingProjects() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {marketingProjects.map((project, index) => (
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
                    Esettanulmány <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              
              {/* Metrics Grid */}
              <div className="mt-4 grid grid-cols-3 gap-2 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                {Object.entries(project.metrics).map(([key, value], i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold text-purple-600">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

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
  );
}