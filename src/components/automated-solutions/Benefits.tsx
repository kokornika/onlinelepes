import { Clock, TrendingUp, Users, Smile } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const benefits = [
  {
    icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Több Szabadidő',
    description: 'Napi 3-4 óra adminisztratív munkát spórolhat meg az automatizálással.',
    stat: '+4 óra/nap',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Növekvő Bevétel',
    description: 'A felszabadult időben több ügyféllel tud foglalkozni, növelve bevételeit.',
    stat: '+45% bevétel',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Elégedett Ügyfelek',
    description: 'Az automatizált folyamatok gyorsabb és pontosabb kiszolgálást biztosítanak.',
    stat: '98% elégedettség',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: <Smile className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Stresszmentes Munka',
    description: 'Nem kell többé az adminisztrációval foglalkoznia, koncentrálhat az értékteremtésre.',
    stat: '-70% stressz',
    gradient: 'from-green-500 to-emerald-500'
  }
];

export function Benefits() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Előnyök
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Miért Válassza az{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Automatizálást?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Az automatizálás nem csak időt és pénzt takarít meg, de stresszmentesebbé teszi a munkát
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => (
          <SlideIn key={index} delay={0.1 * index} direction="up">
            <div className="group bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 mb-4`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                <div className="pt-2">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                    {benefit.stat}
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}