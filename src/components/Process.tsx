import { MessageSquare, CircleDot, Laptop, CheckCircle2, Rocket } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const steps = [
  {
    icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Konzultáció',
    description: 'Megismerjük igényeit és céljait egy személyes beszélgetés során.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <CircleDot className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Tervezés',
    description: 'Kidolgozzuk a projekt részleteit és a vizuális koncepciót.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Laptop className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Fejlesztés',
    description: 'Megvalósítjuk a tervet modern technológiák használatával.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Tesztelés',
    description: 'Alapos tesztelés és optimalizálás minden platformon.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Indulás',
    description: 'A weboldal élesítése és az utolsó simítások elvégzése.',
    gradient: 'from-violet-500 to-purple-500'
  }
];

export function Process() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Hogyan Dolgozunk?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Átlátható <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Folyamat</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Hatékony együttműködés, kiszámítható eredmények
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
        {steps.map((step, index) => (
          <SlideIn key={index} delay={0.1 * index} direction="up">
            <div className="relative">
              {/* Step number */}
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-xs z-20">
                {index + 1}
              </div>

              {/* Card */}
              <div className="group bg-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-sm border hover:border-purple-200 transition-all duration-300 relative z-10 h-full">
                {/* Gradient background that shows on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
                
                <div className="relative flex flex-col h-full">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3 lg:mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}