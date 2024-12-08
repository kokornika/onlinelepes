import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Link } from 'react-router-dom';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';

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
                  vállalkozásoknak. Személyes egyeztetéssel, gyors kivitelezéssel és folyamatos 
                  támogatással segítjük vállalkozása online sikerét.
                </p>
                <p>
                  A weboldal készítés Szekszárdon nem csak egy szolgáltatás számunkra - küldetésünk, 
                  hogy a helyi vállalkozások modern és hatékony online jelenléttel rendelkezzenek.
                </p>
                <h3 className="text-xl font-semibold mt-8">
                  Miért válasszon minket weboldal készítéshez Szekszárdon?
                </h3>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Személyes konzultáció Szekszárdon</li>
                  <li>Modern weboldal fejlesztés</li>
                  <li>Mobilbarát, reszponzív design</li>
                  <li>SEO optimalizálás a helyi keresésekre</li>
                  <li>Google Cégem profil beállítása</li>
                  <li>Folyamatos támogatás és karbantartás</li>
                  <li>Szekszárdi referenciák</li>
                </ul>
              </div>
            </div>
          </FadeIn>
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

        {/* Local SEO Content */}
        <div className="mt-16">
          <FadeIn>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Weboldal Készítés <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szekszárd</span> és Környéke
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Szolgáltatási területünk kiterjed Szekszárd mellett a környező településekre is. 
                  Vállaljuk weboldal készítést Tolnán, Bátaszéken, Decsen és a környező településeken is.
                </p>
                <p>
                  Weboldal készítés Szekszárdon már 80.000 Ft-tól, amely tartalmazza a személyes 
                  konzultációt, modern dizájnt, mobilbarát megjelenést és 3 hónap ingyenes karbantartást.
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