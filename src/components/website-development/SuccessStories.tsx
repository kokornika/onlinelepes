import { FadeIn, SlideIn } from '@/components/ui/motion';
import { TrendingUp, Users, Clock } from 'lucide-react';

const benchmarks = [
  {
    title: 'Weboldal Teljesítmény',
    industry: 'Technológia',
    description: 'A modern weboldalak átlagos betöltési ideje kevesebb mint 3 másodperc, ami 32%-kal jobb felhasználói élményt eredményez.',
    metrics: [
      { label: 'Betöltési Idő', value: '< 3mp', icon: <Clock className="h-5 w-5" /> },
      { label: 'Mobilbarát', value: '100%', icon: <Users className="h-5 w-5" /> },
      { label: 'SEO Érték', value: '95/100', icon: <TrendingUp className="h-5 w-5" /> }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    title: 'Felhasználói Élmény',
    industry: 'UX Design',
    description: 'A felhasználóbarát navigáció és modern design átlagosan 27%-kal növeli az oldalon töltött időt.',
    metrics: [
      { label: 'Konverzió', value: '+27%', icon: <TrendingUp className="h-5 w-5" /> },
      { label: 'Visszatérés', value: '+45%', icon: <Users className="h-5 w-5" /> },
      { label: 'Interakció', value: '+60%', icon: <Clock className="h-5 w-5" /> }
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Teljesítmény Mutatók
            </span>
            <h2 className="text-4xl font-bold">
              Iparági <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Standardok</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A modern weboldalak teljesítménye és hatása a vállalkozások sikerére
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benchmarks.map((benchmark, index) => (
            <SlideIn key={index} delay={0.2 * index} direction="up">
              <div className="bg-white rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300 overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img 
                    src={benchmark.image}
                    alt={benchmark.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-2xl font-bold">{benchmark.title}</h3>
                      <span className="text-white/80">{benchmark.industry}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-lg mb-6">{benchmark.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {benchmark.metrics.map((metric, i) => (
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