import { FadeIn, SlideIn } from '@/components/ui/motion';
import { 
  Scissors, 
  Car, 
  Stethoscope, 
  Utensils, 
  Hotel,
  Briefcase,
  Calendar,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const industries = [
  {
    icon: Scissors,
    title: 'Szépségipar',
    description: 'Fodrászatok, kozmetikák, szépségszalonok',
    benefits: [
      {
        icon: Calendar,
        title: '24/7 Foglalás',
        description: 'Online időpontfoglalási rendszer'
      },
      {
        icon: Clock,
        title: '-40% Admin',
        description: 'Kevesebb telefonálás'
      },
      {
        icon: Users,
        title: '+25% Ügyfél',
        description: 'Több vendég'
      }
    ],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Car,
    title: 'Autóipar',
    description: 'Autószerelők, gumisok, autómosók',
    benefits: [
      {
        icon: Calendar,
        title: 'Munkafelvétel',
        description: 'Automatizált munkalap'
      },
      {
        icon: TrendingUp,
        title: '+30% Hatékonyság',
        description: 'Gyorsabb átfutás'
      },
      {
        icon: Clock,
        title: '-70% Admin',
        description: 'Kevesebb papírmunka'
      }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Stethoscope,
    title: 'Egészségügy',
    description: 'Orvosi rendelők, magánklinikák',
    benefits: [
      {
        icon: Calendar,
        title: 'Előjegyzés',
        description: 'Online foglalás'
      },
      {
        icon: Users,
        title: 'Betegirányítás',
        description: 'Automatikus értesítés'
      },
      {
        icon: Clock,
        title: '+35% Kapacitás',
        description: 'Jobb időbeosztás'
      }
    ],
    gradient: 'from-green-500 to-emerald-500'
  }
];

export function IndustrySolutions() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Iparági Megoldások
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Automatizálás az <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Ön Iparágában</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ismerje meg, hogyan segítünk különböző iparágakban működő vállalkozásoknak 
            automatizálni a mindennapi folyamataikat
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((industry, index) => (
          <SlideIn key={index} delay={0.1 * index} direction="up">
            <div className="group bg-white rounded-xl shadow-lg border p-4 hover:border-purple-200 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="flex flex-wrap gap-2">
                {industry.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-gray-50 to-white flex-1 min-w-[120px]">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${industry.gradient} bg-opacity-10 flex items-center justify-center text-purple-600`}>
                      <benefit.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{benefit.title}</div>
                      <div className="text-xs text-gray-600">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}