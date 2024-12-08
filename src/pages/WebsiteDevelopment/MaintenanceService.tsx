import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const plans = [
  {
    name: 'Alapvető',
    price: '7.000 Ft',
    description: 'Alap karbantartási szolgáltatások kis weboldalakhoz',
    features: [
      'Weboldal teljes működésének biztosítása',
      'Havi 1 óra tartalomfrissítés',
      'Prioritási kezelés',
      'Biztonsági mentések',
      'Technikai támogatás',
      'Havi teljesítmény jelentés'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Profi',
    price: '11.000 Ft',
    description: 'Teljes körű karbantartás és támogatás',
    features: [
      'Minden Alapvető csomag szolgáltatása',
      'Havi 3 óra tartalomfrissítés',
      'Legnagyobb prioritás',
      'Napi biztonsági mentések',
      'Teljesítmény optimalizálás',
      'SEO monitoring és jelentés',
      'Havi 1 óra konzultáció',
      '0-24 órás sürgősségi támogatás'
    ],
    gradient: 'from-purple-600 to-blue-500',
    recommended: true
  }
];

const noPackageDisadvantages = [
  'Nincs garantált válaszidő',
  'Alacsony prioritású kezelés',
  'Nincs ingyenes tartalomfrissítés',
  'Nincs rendszeres biztonsági mentés',
  'Nincs teljesítmény monitoring',
  'Nincs SEO jelentés',
  'Nincs dedikált támogatás',
  'Eseti hibajavítás: 25.000 Ft / óra'
];

export function MaintenanceService() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Karbantartás
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Weboldal <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Karbantartás</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Gondoskodunk weboldala folyamatos és biztonságos működéséről, hogy Ön az üzletre koncentrálhasson
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* No Package Column */}
          <SlideIn delay={0} direction="up">
            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 hover:border-red-200 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Karbantartás Nélkül</h3>
                <div className="text-3xl font-bold text-red-500">
                  25.000 Ft
                </div>
                <div className="text-sm text-gray-600 mt-1">óránként</div>
                <p className="text-gray-600 mt-3">Eseti hibajavítás és karbantartás</p>
              </div>

              <div className="space-y-3">
                {noPackageDisadvantages.map((disadvantage, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="h-3 w-3 text-red-500" />
                    </div>
                    <span className="text-gray-600">{disadvantage}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button 
                  variant="outline"
                  className="w-full border-red-200 hover:bg-red-50"
                >
                  Nem Ajánlott <X className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </SlideIn>

          {/* Maintenance Plans */}
          {plans.map((plan, index) => (
            <SlideIn key={index} delay={0.1 * (index + 1)} direction="up">
              <div className={`relative bg-white rounded-xl shadow-lg border p-6 sm:p-8 hover:border-purple-200 transition-all duration-300 ${plan.recommended ? 'border-purple-300' : ''}`}>
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
                  <p className="text-gray-600 mt-3">{plan.description}</p>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
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
      </div>
    </section>
  );
}