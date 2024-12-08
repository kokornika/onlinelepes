import { ArrowRight, Search, Target, Users, LineChart, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function GoogleAds() {
  const searchResults = [
    {
      isAd: true,
      title: "Modern Weboldal Készítés | Professzionális Megjelenés",
      url: "www.onlinelepes.hu/weboldal-keszites",
      description: "Professzionális weboldal fejlesztés modern technológiákkal. ✓ Reszponzív Design ✓ SEO Optimalizálás ✓ 24/7 Support ➤ Kérjen Ajánlatot Most!"
    },
    {
      isAd: false,
      title: "Konkurencia 1",
      url: "",
      description: "",
      style: "text-gray-500"
    },
    {
      isAd: false,
      title: "Konkurencia 2",
      url: "",
      description: "",
      style: "text-gray-500"
    }
  ];

  const benefits = [
    {
      title: "Azonnali Eredmények",
      value: "24 óra",
      description: "alatt az első oldalon",
      icon: <Search className="h-5 w-5" />
    },
    {
      title: "Célzott Hirdetések",
      value: "98%",
      description: "releváns látogató",
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Költséghatékony",
      value: "3.5x",
      description: "ROI átlagosan",
      icon: <DollarSign className="h-5 w-5" />
    }
  ];

  const process = [
    {
      title: "Kulcsszókutatás",
      description: "A legjobb kulcsszavak kiválasztása az Ön iparágában."
    },
    {
      title: "Hirdetésszövegek",
      description: "Figyelemfelkeltő és konverzióra optimalizált szövegek."
    },
    {
      title: "Célzás Beállítása",
      description: "Földrajzi és demográfiai célzás beállítása."
    },
    {
      title: "Konverziókövetés",
      description: "Eredmények mérése és folyamatos optimalizálás."
    }
  ];

  const pricingInfo = [
    {
      name: "Egyszeri beállítási díj",
      price: "49.900 Ft-tól"
    },
    {
      name: "Havi kezelési díj",
      price: "29.900 Ft-tól"
    },
    {
      name: "Hirdetési költségkeret",
      price: "Egyéni igények szerint"
    }
  ];

  const additionalInfo = [
    {
      title: "Miért érdemes Google Ads hirdetéseket indítani?",
      points: [
        "Azonnali láthatóság a Google keresőben",
        "Csak akkor fizet, ha rákattintanak a hirdetésére",
        "Pontosan mérhető eredmények és ROI",
        "Rugalmasan módosítható költségkeret",
        "Földrajzi és időbeli célzási lehetőségek",
        "Versenyelőny a konkurenciával szemben"
      ]
    },
    {
      title: "Mit tartalmaz a szolgáltatás?",
      points: [
        "Részletes piacelemzés és stratégia kidolgozása",
        "Kulcsszókutatás és versenyképesség-elemzés",
        "Hirdetési kampányok létrehozása és optimalizálása",
        "Konverziók követése és mérése",
        "Havi riportok és elemzések",
        "Folyamatos optimalizálás és finomhangolás"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Google <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Hirdetések</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Jelenjen meg az első helyen, amikor szolgáltatását keresik! A Google hirdetésekkel 
              azonnali láthatóságot és több vásárlót szerezhet vállalkozásának.
            </p>
          </div>
        </FadeIn>

        {/* Google Ads Preview */}
        <div className="mt-8 sm:mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border p-4 sm:p-6">
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div key={index} className={`text-left ${index > 0 ? 'border-t pt-4' : ''} ${result.style || ''}`}>
                  {result.isAd && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#1A73E8] text-xs font-medium px-1 border border-[#1A73E8] rounded">
                        Hirdetés
                      </span>
                      <span className="text-xs text-gray-600">·</span>
                      <span className="text-xs text-gray-600">{result.url}</span>
                    </div>
                  )}
                  <h3 className={`text-base sm:text-lg ${result.isAd ? 'text-[#1A73E8]' : 'text-gray-500'} hover:underline cursor-pointer font-medium`}>
                    {result.title}
                  </h3>
                  {result.description && (
                    <p className="text-sm text-gray-800 mt-1">
                      {result.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <SlideIn key={index} delay={0.1 * index} direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  {benefit.value}
                </div>
                <div className="mt-2 font-semibold text-lg">{benefit.title}</div>
                <div className="mt-1 text-sm text-gray-600">{benefit.description}</div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalInfo.map((info, index) => (
            <SlideIn key={index} delay={0.1 * index} direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                <ul className="space-y-3">
                  {info.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Process */}
        <div className="mt-16">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Hogyan Működik a <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Google Hirdetés?</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Professzionális Google Ads kampánykezelés, amely valódi eredményeket hoz
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {process.map((step, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl shadow-sm border p-6 hover:border-purple-200 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
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
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Nincsenek rejtett költségek, csak eredményes kampányok
              </p>
            </div>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border p-6">
              {pricingInfo.map((item, index) => (
                <div key={index} className={`flex justify-between items-center py-4 ${index > 0 ? 'border-t' : ''}`}>
                  <span className="text-gray-600">{item.name}</span>
                  <span className="font-semibold">{item.price}</span>
                </div>
              ))}
              <div className="mt-6 text-sm text-gray-500">
                * A hirdetési költségkeret az Ön igényei és céljai alapján kerül meghatározásra
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
          >
            Ingyenes Konzultáció <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}