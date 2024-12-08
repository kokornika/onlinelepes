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
        description: 'Kevesebb telefonálás és adminisztráció'
      },
      {
        icon: Users,
        title: '+25% Ügyfél',
        description: 'Több vendég fogadása'
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
        description: 'Automatizált munkalap kezelés'
      },
      {
        icon: TrendingUp,
        title: '+30% Hatékonyság',
        description: 'Gyorsabb átfutási idő'
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
        description: 'Online időpontfoglalás'
      },
      {
        icon: Users,
        title: 'Betegirányítás',
        description: 'Automatikus emlékeztetők'
      },
      {
        icon: Clock,
        title: '+35% Kapacitás',
        description: 'Hatékonyabb időbeosztás'
      }
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Utensils,
    title: 'Vendéglátás',
    description: 'Éttermek, kávézók, bárok',
    benefits: [
      {
        icon: Calendar,
        title: 'Asztalfoglalás',
        description: 'Online foglalási rendszer'
      },
      {
        icon: Users,
        title: '+45% Vendég',
        description: 'Több foglalás'
      },
      {
        icon: Clock,
        title: '-60% Admin',
        description: 'Kevesebb telefonálás'
      }
    ],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Hotel,
    title: 'Szálláshelyek',
    description: 'Szállodák, panziók, apartmanok',
    benefits: [
      {
        icon: Calendar,
        title: 'Foglaláskezelés',
        description: 'Automatikus visszaigazolás'
      },
      {
        icon: Users,
        title: '+40% Foglalás',
        description: 'Több vendégéjszaka'
      },
      {
        icon: Clock,
        title: '24/7 Elérhetőség',
        description: 'Non-stop foglalás'
      }
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Briefcase,
    title: 'Szolgáltatók',
    description: 'Ügyvédek, könyvelők, tanácsadók',
    benefits: [
      {
        icon: Calendar,
        title: 'Konzultáció',
        description: 'Online időpontegyeztetés'
      },
      {
        icon: Users,
        title: 'Ügyfélkezelés',
        description: 'CRM integráció'
      },
      {
        icon: Clock,
        title: '-50% Admin',
        description: 'Automatizált folyamatok'
      }
    ],
    gradient: 'from-violet-500 to-purple-500'
  }
];

export function IndustrySolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Iparági Megoldások
            </span>
            <h2 className="text-4xl font-bold">
              Automatizálás az <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Ön Iparágában</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Ismerje meg, hogyan segítünk különböző iparágakban működő vállalkozásoknak 
              automatizálni a mindennapi folyamataikat
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <SlideIn key={index} delay={0.1 * index} direction="up">
              <div className="group bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{industry.title}</h3>
                <p className="mt-2 text-gray-600">{industry.description}</p>
                
                <div className="mt-8 space-y-4">
                  {industry.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${industry.gradient} bg-opacity-10 flex items-center justify-center text-purple-600`}>
                        <benefit.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{benefit.title}</div>
                        <div className="text-sm text-gray-600">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}