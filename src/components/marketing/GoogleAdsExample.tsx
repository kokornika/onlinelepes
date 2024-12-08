import { FadeIn } from '@/components/ui/motion';

export function GoogleAdsExample() {
  return (
    <div className="mt-16">
      <FadeIn>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">Hogyan jelenik meg a Google hirdetés?</h2>
          
          {/* Google Ads Example */}
          <div className="border rounded-lg p-4 space-y-2">
            {/* Ad Label */}
            <div className="inline-block px-2 py-0.5 text-[11px] bg-white border rounded text-gray-600 mb-1">
              Hirdetés
            </div>
            
            {/* Ad Title */}
            <div className="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer">
              Modern Weboldal Készítés | Professzionális Megjelenés
            </div>
            
            {/* Ad URL */}
            <div className="text-[#006621] text-sm">
              www.onlinelepes.hu/weboldal-keszites
            </div>
            
            {/* Ad Description */}
            <div className="text-sm text-gray-600">
              Professzionális weboldal fejlesztés modern technológiákkal ✓ Reszponzív Design ✓ SEO Optimalizálás ✓ 24/7 Support ➤ Kérjen Ajánlatot Most!
            </div>
          </div>

          {/* Competitors */}
          <div className="mt-4 space-y-2 opacity-50">
            <div className="border rounded-lg p-4">
              <div className="text-[#1a0dab] text-xl font-medium">Konkurencia 1</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-[#1a0dab] text-xl font-medium">Konkurencia 2</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}