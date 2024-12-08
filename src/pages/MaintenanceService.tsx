import { Check, X, ArrowRight, Settings, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn } from '@/components/ui/motion';

// Common features list to ensure consistency across all plans
const commonFeatures = [
  'Weboldal működésének biztosítása',
  'Tartalomfrissítés',
  'Prioritási szint',
  'Biztonsági mentések',
  'Teljesítmény monitoring',
  'Sürgősségi támogatás'
];

const plans = [
  {
    name: 'Alapvető',
    price: '7.000 Ft',
    description: 'Alap karbantartási szolgáltatások kis weboldalakhoz',
    features: [
      'Teljes működés biztosítva',
      'Havi 1 óra tartalomfrissítés',
      'Normál prioritás',
      'Heti biztonsági mentés',
      'Havi teljesítmény jelentés',
      'Munkaidőben'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Profi',
    price: '11.000 Ft',
    description: 'Teljes körű karbantartás és támogatás',
    features: [
      'Teljes működés biztosítva',
      'Havi 3 óra tartalomfrissítés',
      'Kiemelt prioritás',
      'Napi biztonsági mentés',
      'Heti teljesítmény jelentés',
      '0-24 órás elérhetőség'
    ],
    gradient: 'from-purple-600 to-blue-500',
    recommended: true
  }
];

const noPackageFeatures = [
  'Csak probléma esetén',
  'Óradíjas (25.000 Ft/óra)',
  'Legalacsonyabb prioritás',
  'Nincs automatikus mentés',
  'Nincs monitoring',
  'Csak munkaidőben'
];

const whyMaintenance = [
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Folyamatos Működés',
    description: 'A rendszeres karbantartás biztosítja weboldala zavartalan működését és megelőzi a technikai problémákat.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Biztonság',
    description: 'Naprakész biztonsági frissítések és rendszeres biztonsági mentések védik weboldalát és adatait.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Gyors Reagálás',
    description: 'Probléma esetén azonnali segítséget kap, így minimalizálható az esetleges üzleti kiesés.'
  }
];

export function MaintenanceService() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Karbantartás
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Weboldal <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Karbantartás</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Gondoskodunk weboldala folyamatos és biztonságos működéséről, hogy Ön az üzletre koncentrálhasson
            </p>
          </div>
        </FadeIn>

        {/* Why Maintenance Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
              Miért fontos a weboldal karbantartás?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {whyMaintenance.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
              <p className="text-center text-gray-700">
                <strong>Jó hír!</strong> Minden általunk készített weboldal mellé{' '}
                <span className="font-semibold text-purple-600">3 hónap ingyenes "Alapvető" karbantartási csomagot</span>{' '}
                biztosítunk, hogy gondtalanul indulhasson az online jelenlét.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mt-16 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 max-w-6xl mx-auto">
          {/* No Package Column */}
          <SlideIn delay={0} direction="up">
            <div className="bg-white rounded-xl shadow-lg border p-6 hover:border-red-200 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Karbantartás Nélkül</h3>
                <div className="text-3xl font-bold text-red-500">
                  25.000 Ft
                </div>
                <div className="text-sm text-gray-600 mt-1">óránként</div>
                <p className="text-gray-600 mt-3">Eseti hibajavítás és karbantartás</p>
              </div>

              <div className="space-y-3">
                {commonFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="h-3 w-3 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                      <span className="block text-sm text-gray-500">{noPackageFeatures[i]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>

          {/* Maintenance Plans */}
          {plans.map((plan, index) => (
            <SlideIn key={index} delay={0.1 * (index + 1)} direction="up">
              <div className={`relative bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300 ${plan.recommended ? 'border-purple-300' : ''}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Ajánlott
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">havonta</div>
                  <p className="text-gray-600 mt-3 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3">
                  {commonFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-600 text-sm font-medium">{feature}</span>
                        <span className="block text-sm text-gray-500">{plan.features[i]}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.gradient} text-white`}
                  >
                    Kapcsolatfelvétel <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 max-w-2xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Kérjen Ajánlatot</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Név
                    </label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Az Ön neve"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="pelda@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefonszám
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="+36 30 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Üzenet
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Írja le, melyik karbantartási csomag érdekli..."
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                  Ajánlatkérés Küldése <ArrowRight className="ml-2" />
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}