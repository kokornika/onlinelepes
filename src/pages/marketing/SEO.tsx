import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function SEO() {
  const searchResults = [
    {
      isAd: false,
      title: "Modern Weboldal Készítés | Professzionális Megjelenés",
      url: "www.onlinelepes.hu/weboldal-keszites",
      description: "Professzionális weboldal fejlesztés modern technológiákkal. ✓ Reszponzív Design ✓ SEO Optimalizálás ✓ 24/7 Support ➤ Kérjen Ajánlatot Most!",
      style: "text-[#1A73E8]"
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
                Keresőoptimalizálás <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">(SEO)</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                A keresőoptimalizálás (SEO) segítségével az organikus találatok között jelenik meg weboldala. 
                A Google hirdetésekkel ellentétben itt nem kell fizetni a kattintásokért:
              </p>
            </div>
          </FadeIn>

          {/* Search Results Preview */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border p-6">
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <div key={index} className={`text-left ${index > 0 ? 'border-t pt-4' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-600">{result.url}</span>
                    </div>
                    <h3 className={`text-xl ${result.style} hover:underline cursor-pointer font-medium`}>
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
                +312%
              </div>
              <div className="mt-2 text-xl font-semibold">Organikus forgalom</div>
              <div className="mt-1 text-gray-600">6 hónap után</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                85%
              </div>
              <div className="mt-2 text-xl font-semibold">Konverzió növekedés</div>
              <div className="mt-1 text-gray-600">a célzott forgalomból</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                0 Ft
              </div>
              <div className="mt-2 text-xl font-semibold">Hirdetési költség</div>
              <div className="mt-1 text-gray-600">hosszú távon</div>
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