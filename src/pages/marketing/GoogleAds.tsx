import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

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

  return (
    <div className="min-h-screen pt-32">
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold">
                Google <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Hirdetések</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                A Google hirdetések a keresési találatok tetején jelennek meg, és a következő elemekből állnak:
              </p>
            </div>
          </FadeIn>

          {/* Google Ads Preview */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border p-6">
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <div key={index} className={`text-left ${index > 0 ? 'border-t pt-4' : ''} ${result.style || ''}`}>
                    {result.isAd && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#1A73E8] text-sm font-medium px-1 border border-[#1A73E8] rounded">
                          Hirdetés
                        </span>
                        <span className="text-sm text-gray-600">·</span>
                        <span className="text-sm text-gray-600">{result.url}</span>
                      </div>
                    )}
                    <h3 className={`text-xl ${result.isAd ? 'text-[#1A73E8]' : 'text-gray-500'} hover:underline cursor-pointer font-medium`}>
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

          {/* Benefits Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                +156%
              </div>
              <div className="mt-2 text-xl font-semibold">Több látogató</div>
              <div className="mt-1 text-gray-600">az első 30 napban</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                2.5x
              </div>
              <div className="mt-2 text-xl font-semibold">Több megjelenés</div>
              <div className="mt-1 text-gray-600">az organikussal szemben</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                98%
              </div>
              <div className="mt-2 text-xl font-semibold">Célzott forgalom</div>
              <div className="mt-1 text-gray-600">valódi érdeklődők</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Ingyenes Konzultáció <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}