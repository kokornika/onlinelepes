import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function FacebookAds() {
  const adPreview = {
    sponsoredBy: "Onlinelepes.hu",
    headline: "Modern Weboldal Készítés | Professzionális Megjelenés",
    description: "Növelje vállalkozása online jelenlétét modern, reszponzív weboldallal! ✓ Egyedi Design ✓ SEO Optimalizálás ✓ 24/7 Support",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=418",
    cta: "További Információ",
    engagement: {
      likes: "43",
      comments: "12",
      shares: "5"
    }
  };

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
                Facebook & Instagram <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Hirdetések</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                A Facebook és Instagram hirdetések a felhasználók hírfolyamában jelennek meg, és a következő elemekből állnak:
              </p>
            </div>
          </FadeIn>

          {/* Facebook Ad Preview */}
          <div className="mt-12 max-w-[500px] mx-auto">
            <div className="bg-[#F0F2F5] p-3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Ad Header */}
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      O
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-[#050505] text-[15px] leading-5 hover:underline cursor-pointer">
                        {adPreview.sponsoredBy}
                      </div>
                      <div className="text-[13px] text-[#65676B] flex items-center">
                        Szponzorált
                      </div>
                    </div>
                  </div>
                  <button className="w-8 h-8 hover:bg-[#F0F2F5] rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="#65676B"><path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                  </button>
                </div>

                {/* Ad Description */}
                <div className="px-3 pb-2">
                  <p className="text-[15px] leading-5 text-[#050505]">{adPreview.description}</p>
                </div>

                {/* Ad Image */}
                <div className="relative">
                  <img 
                    src={adPreview.image}
                    alt="Ad Preview"
                    className="w-full h-auto"
                  />
                </div>

                {/* Website Preview */}
                <div className="p-3 bg-[#F0F2F5]">
                  <div className="text-[12px] uppercase text-[#65676B] font-semibold tracking-wide">
                    onlinelepes.hu
                  </div>
                  <div className="text-[17px] font-semibold text-[#050505] leading-5 mt-1">
                    {adPreview.headline}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-3">
                  <button className="w-full bg-[#E7F3FF] text-[#0866FF] py-[7px] rounded-md font-semibold text-[15px] hover:bg-[#DBE7F2] transition-colors">
                    {adPreview.cta}
                  </button>
                </div>

                {/* Engagement */}
                <div className="px-3 pb-2">
                  <div className="flex items-center justify-between text-[#65676B] text-[15px]">
                    <div className="flex items-center gap-1">
                      <div className="flex -space-x-1">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#0866FF] flex items-center justify-center">
                          <span className="text-white text-[11px]">👍</span>
                        </div>
                        <div className="w-[18px] h-[18px] rounded-full bg-[#F0F2F5] flex items-center justify-center">
                          <span className="text-[11px]">❤️</span>
                        </div>
                      </div>
                      <span className="ml-1">{adPreview.engagement.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{adPreview.engagement.comments} hozzászólás</span>
                      <span>•</span>
                      <span>{adPreview.engagement.shares} megosztás</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex border-t border-[#CED0D4]">
                  <button className="flex-1 py-2 text-[#65676B] font-semibold text-[15px] hover:bg-[#F0F2F5] transition-colors flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#65676B"><path d="M16 2v17.582l-4-3.512-4 3.512V2h8zm2-2H6v24l6-5.269L18 24V0z"></path></svg>
                    Tetszik
                  </button>
                  <button className="flex-1 py-2 text-[#65676B] font-semibold text-[15px] hover:bg-[#F0F2F5] transition-colors flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#65676B"><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></svg>
                    Hozzászólás
                  </button>
                  <button className="flex-1 py-2 text-[#65676B] font-semibold text-[15px] hover:bg-[#F0F2F5] transition-colors flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#65676B"><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></svg>
                    Megosztás
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                +245%
              </div>
              <div className="mt-2 text-xl font-semibold">Márkaismertség</div>
              <div className="mt-1 text-gray-600">növekedés 3 hónap alatt</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                4.2x
              </div>
              <div className="mt-2 text-xl font-semibold">Több követő</div>
              <div className="mt-1 text-gray-600">havonta átlagosan</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                2.8x
              </div>
              <div className="mt-2 text-xl font-semibold">Magasabb engagement</div>
              <div className="mt-1 text-gray-600">az organikus posztokhoz képest</div>
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