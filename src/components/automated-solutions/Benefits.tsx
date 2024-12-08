import { Clock, TrendingUp, Users, Smile } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const benefits = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Több Szabadidő',
    description: 'Napi 3-4 óra adminisztratív munkát spórolhat meg az automatizálással.',
    stat: '+4 óra/nap'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Növekvő Bevétel',
    description: 'A felszabadult időben több ügyféllel tud foglalkozni, növelve bevételeit.',
    stat: '+45% bevétel'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Elégedett Ügyfelek',
    description: 'Az automatizált folyamatok gyorsabb és pontosabb kiszolgálást biztosítanak.',
    stat: '98% elégedettség'
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: 'Stresszmentes Munka',
    description: 'Nem kell többé az adminisztrációval foglalkoznia, koncentrálhat az értékteremtésre.',
    stat: '-70% stressz'
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Előnyök
            </span>
            <h2 className="text-4xl font-bold">
              Miért Válassza az <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Automatizálást?</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Az automatizálás nem csak időt és pénzt takarít meg, de stresszmentesebbé teszi a munkát
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <SlideIn key={index} delay={0.2 * index} direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  {benefit.stat}
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}