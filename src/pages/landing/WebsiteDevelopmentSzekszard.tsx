import { ArrowRight, Globe, ShoppingCart, Users, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Link } from 'react-router-dom';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';

const localServices = [
  {
    title: 'Bemutatkozó Weboldal Készítés',
    description: 'Modern, professzionális bemutatkozó weboldalak szekszárdi vállalkozásoknak.',
    features: [
      'Reszponzív design',
      'SEO optimalizálás',
      'Kapcsolatfelvételi űrlap',
      'Google Térkép integráció'
    ]
  },
  {
    title: 'Webáruház Készítés',
    description: 'Online értékesítési felület kialakítása szekszárdi üzleteknek.',
    features: [
      'Termékkezelő rendszer',
      'Online fizetés',
      'Készletkezelés',
      'Automatikus számlázás'
    ]
  },
  {
    title: 'Egyedi Weboldal Fejlesztés',
    description: 'Speciális igényekre szabott weboldalak szekszárdi cégeknek.',
    features: [
      'Egyedi funkciók',
      'Integrációk',
      'Automatizációk',
      'Többnyelvű megoldások'
    ]
  }
];

const benefits = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Helyi Online Jelenlét',
    description: 'Erős online jelenlét Szekszárdon és környékén, hogy a helyi ügyfelek könnyen megtalálják vállalkozását.'
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: 'Növekvő Forgalom',
    description: 'Több helyi vásárló és ügyfél a professzionális weboldal segítségével.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Helyi Kapcsolatok',
    description: 'Személyes kapcsolattartás és támogatás Szekszárdon.'
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Mérhető Eredmények',
    description: 'Részletes statisztikák a weboldal teljesítményéről és a helyi látogatókról.'
  }
];

const localAreas = [
  {
    city: 'Szekszárd',
    description: 'Központi irodánk Szekszárdon található, személyes konzultációval.'
  },
  {
    city: 'Tolna',
    description: 'Weboldal készítés tolnai vállalkozásoknak, helyszíni egyeztetéssel.'
  },
  {
    city: 'Bátaszék',
    description: 'Modern weboldalak készítése bátaszéki cégeknek.'
  },
  {
    city: 'Decs',
    description: 'Webfejlesztés és támogatás decsi vállalkozásoknak.'
  },
  {
    city: 'Őcsény',
    description: 'Professzionális weboldalak őcsényi vállalkozóknak.'
  },
  {
    city: 'Sióagárd',
    description: 'Weboldal készítés és karbantartás Sióagárdon.'
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
              Professzionális weboldal készítés Szekszárdon és környékén. Modern, reszponzív weboldalak 
              tervezése és fejlesztése szekszárdi vállalkozásoknak. Személyes konzultáció helyben, 
              hogy az Ön igényeire szabott weboldalt készíthessünk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
              >
                Ingyenes Konzultáció Szekszárdon <ArrowRight className="ml-2" />
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

        {/* Main Content */}
        <div className="mt-16">
          <FadeIn>
            <div className="bg-white rounded-xl shadow-lg border p-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                Weboldal Készítés <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szekszárdi</span> Vállalkozásoknak
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Szekszárdi webfejlesztő csapatunk modern, reszponzív weboldalakat készít helyi 
                  vállalkozásoknak. A weboldal készítés Szekszárdon személyes egyeztetéssel kezdődik, 
                  ahol felmérjük az Ön egyedi igényeit és céljait.
                </p>
                <p>
                  Szekszárdi weboldal készítés szolgáltatásunk teljes körű megoldást nyújt: a tervezéstől 
                  a fejlesztésen át a karbantartásig mindent egy kézből biztosítunk. Helyi vállalkozásként 
                  értjük a szekszárdi piac sajátosságait és igényeit.
                </p>
                <p>
                  A weboldal készítés Szekszárdon nem csak egy szolgáltatás számunkra - küldetésünk, 
                  hogy a helyi vállalkozások modern és hatékony online jelenléttel rendelkezzenek, 
                  ami valódi üzleti eredményeket hoz.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Weboldal Készítés <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szolgáltatásaink</span> Szekszárdon
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localServices.map((service, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Weboldal Készítés <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Előnyei</span> Szekszárdon
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Weboldal Készítés <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Folyamata</span> Szekszárdon
              </h2>
              <p className="mt-4 text-gray-600">
                Átlátható folyamat, személyes egyeztetéssel Szekszárdon
              </p>
            </div>
          </FadeIn>
          <Process />
        </div>

        {/* Local Areas Section */}
        <div className="mt-16">
          <FadeIn>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Weboldal Készítés <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szekszárd</span> és Környéke
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {localAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold mb-2">{area.city}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-gray-600">
                <p className="mb-4">
                  Weboldal készítés Szekszárdon már 80.000 Ft-tól, amely tartalmazza a személyes 
                  konzultációt, modern dizájnt, mobilbarát megjelenést és 3 hónap ingyenes karbantartást.
                </p>
                <p>
                  Válassza a helyi weboldal készítést Szekszárdon, és építse vállalkozása online jelenlétét 
                  szakértő segítséggel!
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Contact />
        </div>
      </div>
    </div>
  );
}