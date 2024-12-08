import { FadeIn } from '@/components/ui/motion';

export function FacebookAdsExample() {
  return (
    <div className="mt-16">
      <FadeIn>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">Hogyan jelenik meg a Facebook hirdetés?</h2>
          
          {/* Facebook Ad Example */}
          <div className="border rounded-lg overflow-hidden">
            {/* Page Info */}
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=40&h=40&fit=crop" 
                  alt="Onlinelepes.hu"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Onlinelepes.hu</div>
                <div className="text-xs text-gray-500">Szponzorált</div>
              </div>
            </div>

            {/* Ad Image */}
            <div className="aspect-[4/3] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Modern Weboldal Készítés"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ad Content */}
            <div className="p-4">
              <h3 className="text-xl font-medium">Modern Weboldal Készítés | Professzionális Megjelenés</h3>
              <p className="mt-2 text-gray-600">
                Növelje vállalkozása online jelenlétét modern, reszponzív weboldallal! ✓ SEO Optimalizálás ✓ 24/7 Support ➤ Kérjen Ajánlatot Most!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="px-4 pb-4 flex gap-2">
              <div className="flex-1 text-center py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                Tetszik
              </div>
              <div className="flex-1 text-center py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                Hozzászólás
              </div>
              <div className="flex-1 text-center py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                Megosztás
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}