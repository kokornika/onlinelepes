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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
      <FadeIn>
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Tehermentesítő Megoldások
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Szabadítsa Fel <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Idejét az Értékteremtésre</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Automatizálja vállalkozása mindennapi folyamatait! Időpontfoglalás, ügyfélkezelés, 
            számlázás és adminisztráció - minden egy helyen, hogy Ön a valódi értékteremtésre 
            koncentrálhasson.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Ingyenes Konzultáció <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto group border-2"
            >
              <span className="mr-2">+36 30 123 4567</span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text group-hover:opacity-80">
                Azonnali Kapcsolat
              </span>
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* Statistics */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              {stat.value}
            </div>
            <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}