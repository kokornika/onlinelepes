import { ArrowRight, Clock, Users, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function HeroSection() {
  const statistics = [
    {
      value: '70%',
      label: 'kevesebb adminisztratív munka'
    },
    {
      value: '24/7',
      label: 'automatizált ügyfélkezelés'
    },
    {
      value: '3x',
      label: 'több elvégzett munka'
    }
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
                Tehermentesítő Megoldások
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Szabadítsa Fel <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Idejét az Értékteremtésre</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Automatizálja vállalkozása mindennapi folyamatait! Időpontfoglalás, ügyfélkezelés, 
                számlázás és adminisztráció - minden egy helyen, hogy Ön a valódi értékteremtésre 
                koncentrálhasson.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                >
                  Ingyenes Konzultáció <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="group border-2"
                >
                  <span className="mr-2">+36 30 123 4567</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text group-hover:opacity-80">
                    Azonnali Kapcsolat
                  </span>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {statistics.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl transform rotate-2" />
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=600"
                    alt="Automatizált Folyamatok"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Megtakarított Idő</span>
                    </div>
                    <div className="text-green-500 font-medium">+4 óra/nap</div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Ügyfelek</div>
                      <div className="text-lg font-semibold text-purple-600">+45%</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Hatékonyság</div>
                      <div className="text-lg font-semibold text-purple-600">+70%</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Bevétel</div>
                      <div className="text-lg font-semibold text-purple-600">+85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}