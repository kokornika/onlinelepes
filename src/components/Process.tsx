import { MessageSquare, CircleDot, Laptop, CheckCircle2, Rocket } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function Process() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Konzultáció',
      description: 'Megismerjük igényeit és céljait egy személyes beszélgetés során.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <CircleDot className="h-8 w-8" />,
      title: 'Tervezés',
      description: 'Kidolgozzuk a projekt részleteit és a vizuális koncepciót.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: 'Fejlesztés',
      description: 'Megvalósítjuk a tervet modern technológiák használatával.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: 'Tesztelés',
      description: 'Alapos tesztelés és optimalizálás minden platformon.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Indulás',
      description: 'A weboldal élesítése és az utolsó simítások elvégzése.',
      gradient: 'from-violet-500 to-purple-500'
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Hogyan Dolgozunk?
            </span>
            <h2 className="text-4xl font-bold">
              Átlátható <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Folyamat</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Hatékony együttműködés, kiszámítható eredmények
            </p>
          </div>
        </FadeIn>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <SlideIn key={index} delay={0.2 * index} direction="up">
                <div className="relative h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm z-20">
                    {index + 1}
                  </div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 transform -translate-y-1/2 z-0" />
                  )}

                  {/* Card */}
                  <div className="group bg-white p-6 rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300 relative z-10 h-full">
                    {/* Gradient background that shows on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
                    
                    <div className="relative flex flex-col h-full">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 mb-4`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 flex-grow">{step.description}</p>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}