import { Globe, Search, ShoppingCart, Users, Clock, LineChart } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const benefits = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: '24/7 Elérhetőség',
    description: 'Weboldala a nap 24 órájában fogadja az érdeklődőket, akkor is amikor Ön pihen.'
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Google Találatok',
    description: 'Keresőoptimalizált weboldal, hogy ügyfelei könnyen megtalálják vállalkozását.'
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: 'Online Értékesítés',
    description: 'Webshop funkciókkal bővíthető weboldal a közvetlen online értékesítéshez.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Szélesebb Ügyfélkör',
    description: 'Érje el a potenciális ügyfeleket az online térben, növelje vállalkozása ismertségét.'
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Mérhető Eredmények',
    description: 'Részletes statisztikák és elemzések a weboldal teljesítményéről és látogatottságáról.'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Nemzetközi Piac',
    description: 'Többnyelvű weboldalakkal új piacokat érhet el és nemzetközi ügyfeleket szerezhet.'
  }
];

export function WhyOnlinePresence() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Miért fontos az online jelenlét?
            </span>
            <h2 className="text-4xl font-bold">
              Növelje Vállalkozása <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Versenyképességét</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A modern vállalkozások sikerének kulcsa a hatékony online jelenlét. 
              Ismerje meg, milyen előnyöket nyújt egy professzionális weboldal!
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <SlideIn key={index} delay={0.1 * index} direction="up">
              <div className="group p-8 bg-white rounded-xl shadow-sm border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}