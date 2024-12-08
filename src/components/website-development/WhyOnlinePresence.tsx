import { Globe, Search, ShoppingCart, Users, Clock, LineChart } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const benefits = [
  {
    icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: '24/7 Elérhetőség',
    description: 'Weboldala a nap 24 órájában fogadja az érdeklődőket, akkor is amikor Ön pihen.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Search className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Google Találatok',
    description: 'Keresőoptimalizált weboldal, hogy ügyfelei könnyen megtalálják vállalkozását.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Online Értékesítés',
    description: 'Webshop funkciókkal bővíthető weboldal a közvetlen online értékesítéshez.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Szélesebb Ügyfélkör',
    description: 'Érje el a potenciális ügyfeleket az online térben, növelje vállalkozása ismertségét.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: <LineChart className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Mérhető Eredmények',
    description: 'Részletes statisztikák és elemzések a weboldal teljesítményéről és látogatottságáról.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Nemzetközi Piac',
    description: 'Többnyelvű weboldalakkal új piacokat érhet el és nemzetközi ügyfeleket szerezhet.',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

export function WhyOnlinePresence() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <FadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Miért fontos az online jelenlét?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Növelje Vállalkozása <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Versenyképességét</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A modern vállalkozások sikerének kulcsa a hatékony online jelenlét. 
            Ismerje meg, milyen előnyöket nyújt egy professzionális weboldal!
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => (
          <SlideIn key={index} delay={0.1 * index} direction="up">
            <div className="group p-6 sm:p-8 bg-white rounded-xl shadow-sm border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}