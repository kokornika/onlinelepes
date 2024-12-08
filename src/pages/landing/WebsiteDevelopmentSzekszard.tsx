import { ArrowRight, Check, Globe, Rocket, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Helyi Vállalkozásoknak',
    description: 'Szekszárdi és környékbeli cégekre szabott weboldalak, hogy hatékonyan érje el a helyi ügyfeleket.'
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Gyors Megvalósítás',
    description: '2-3 hét alatt elkészülő, modern weboldalak, hogy minél hamarabb online lehessen vállalkozása.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Megbízható Partner',
    description: 'Helyi referenciákkal rendelkező csapat, személyes konzultációs lehetőséggel Szekszárdon.'
  }
];

const features = [
  'Modern, reszponzív design',
  'Mobilbarát megjelenés',
  'SEO optimalizálás',
  'Google Cégem integráció',
  'Közösségi média kapcsolat',
  '3 hónap ingyenes karbantartás'
];

const prices = [
  {
    name: 'Bemutatkozó Weboldal',
    price: '80.000 Ft-tól',
    features: [
      'Modern dizájn',
      'Mobilbarát megjelenés',
      'Kapcsolati űrlap',
      'Google térkép',
      'SEO beállítások',
      '3 hónap karbantartás'
    ]
  },
  {
    name: 'Üzleti Weboldal',
    price: '150.000 Ft-tól',
    features: [
      'Minden Bemutatkozó csomag',
      'Blog funkció',
      'Hírlevél feliratkozás',
      'Google Analytics',
      'Közösségi média integráció',
      'Egyedi funkciók'
    ],
    recommended: true
  }
];

export function WebsiteDevelopmentSzekszard() {
  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation */}
        <div className="text-center mb-8">
          <Link to="/" className="text-sm text-purple-600 hover:text-purple-700">
            ← Vissza a főoldalra
          </Link>
        </div>

        {/* Hero Section */}
        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Weboldal Készítés <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szekszárdon</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Modern weboldalak készítése szekszárdi vállalkozásoknak. Személyes egyeztetés, 
              gyors kivitelezés és folyamatos támogatás a siker érdekében.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
              >
                Ingyenes Konzultáció <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="group border-2"
              >
                <span className="mr-2">+36 30 355 1793</span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text group-hover:opacity-80">
                  Azonnali Kapcsolat
                </span>
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <SlideIn key={index} delay={0.1 * index} direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Amit Minden <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Weboldal Tartalmaz</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="flex items-center gap-3 bg-white rounded-lg border p-4 hover:border-purple-200 transition-all duration-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Átlátható <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Árazás</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {prices.map((price, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className={`relative bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300 ${price.recommended ? 'border-purple-300' : ''}`}>
                  {price.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Ajánlott
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">{price.name}</h3>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                      {price.price}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {price.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                      Ajánlatkérés <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <FadeIn>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Kezdjük El a <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Közös Munkát</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Személyes egyeztetés Szekszárdon vagy online konzultáció - Önre bízzuk a választást!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                >
                  Ingyenes Konzultáció <ArrowRight className="ml-2" />
                </Button>
                <Link to="/">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2"
                  >
                    Tovább a Főoldalra
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}