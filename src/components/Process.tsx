import { CheckCircle2, CircleDot, Laptop, MessageSquare, Rocket } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Konzultáció',
      description: 'Megismerjük igényeit és céljait egy személyes beszélgetés során.',
    },
    {
      icon: <CircleDot className="h-8 w-8" />,
      title: 'Tervezés',
      description: 'Kidolgozzuk a projekt részleteit és a vizuális koncepciót.',
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: 'Fejlesztés',
      description: 'Megvalósítjuk a tervet modern technológiák használatával.',
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: 'Tesztelés',
      description: 'Alapos tesztelés és optimalizálás minden platformon.',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Indulás',
      description: 'A weboldal élesítése és az utolsó simítások elvégzése.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Hogyan Dolgozunk?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Átlátható folyamat, hatékony együttműködés
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Progress line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border w-full mb-8 md:mb-0 relative z-10">
                  <div className="text-purple-600">{step.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {/* Circle indicator */}
                <div className="hidden md:flex absolute top-full md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 mt-4 md:mt-0">
                  <div className="w-8 h-8 rounded-full bg-white p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}