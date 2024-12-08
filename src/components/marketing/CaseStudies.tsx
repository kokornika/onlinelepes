import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const caseStudies = [
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

export function CaseStudies() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Esettanulmányok
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Marketing <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Sikertörténetek</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ismerje meg, hogyan segítettünk ügyfeleinknek növelni online jelenlétüket
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <SlideIn key={index} delay={0.2 * index} direction="up">
            <div className="bg-white rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img 
                  src={study.image}
                  alt={study.title}
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
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(study.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-lg font-semibold text-purple-600">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
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
    </div>
  );
}