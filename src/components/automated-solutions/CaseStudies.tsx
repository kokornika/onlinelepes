import { TrendingUp, Users, Clock } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const caseStudies = [
  {
    company: 'Fodrászat',
    industry: 'Szépségipar',
    description: 'Az online időpontfoglalási rendszer bevezetésével 40%-kal csökkent a telefonhívások száma, és 25%-kal több ügyfelet tudnak fogadni.',
    metrics: [
      { label: 'Kevesebb hívás', value: '-40%', icon: <TrendingUp className="h-5 w-5" /> },
      { label: 'Több ügyfél', value: '+25%', icon: <Users className="h-5 w-5" /> },
      { label: 'Spórolt idő', value: '2 óra/nap', icon: <Clock className="h-5 w-5" /> }
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    company: 'Autószerelő Műhely',
    industry: 'Autóipar',
    description: 'Az automatizált ügyfélkezelés és munkaidő nyilvántartás bevezetésével 30%-kal hatékonyabbá vált a műhely működése.',
    metrics: [
      { label: 'Hatékonyság', value: '+30%', icon: <TrendingUp className="h-5 w-5" /> },
      { label: 'Új ügyfelek', value: '+45%', icon: <Users className="h-5 w-5" /> },
      { label: 'Admin idő', value: '-70%', icon: <Clock className="h-5 w-5" /> }
    ],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Sikertörténetek
            </span>
            <h2 className="text-4xl font-bold">
              Ügyfeleink <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Eredményei</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Ismerje meg, hogyan segítettünk ügyfeleinknek automatizálni folyamataikat
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <SlideIn key={index} delay={0.2 * index} direction="up">
              <div className="bg-white rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300 overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img 
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-2xl font-bold">{study.company}</h3>
                      <span className="text-white/80">{study.industry}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-lg mb-6">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                        <div className="flex justify-center text-purple-600 mb-2">
                          {metric.icon}
                        </div>
                        <div className="font-bold text-xl text-purple-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
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