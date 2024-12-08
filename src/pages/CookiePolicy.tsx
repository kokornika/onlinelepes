import { FadeIn } from '@/components/ui/motion';

export function CookiePolicy() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Cookie <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szabályzat</span>
            </h1>

            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 space-y-8">
              {/* 1. Mi az a cookie? */}
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Mi az a cookie (süti)?</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A cookie-k (sütik) kis méretű szöveges fájlok, amelyeket a weboldal az Ön 
                    eszközén helyez el. Ezek segítenek minket abban, hogy jobb felhasználói 
                    élményt nyújthassunk és megérthessük, hogyan használja weboldalunkat.
                  </p>
                </div>
              </section>

              {/* 2. Milyen cookie-kat használunk? */}
              <section>
                <h2 className="text-xl font-semibold mb-4">2. Milyen cookie-kat használunk?</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="font-medium">Szükséges cookie-k:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Munkamenet azonosító</li>
                    <li>Biztonsági cookie-k</li>
                    <li>CSRF token</li>
                  </ul>

                  <h3 className="font-medium mt-6">Analitikai cookie-k:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Google Analytics</li>
                    <li>Látogatottsági statisztikák</li>
                    <li>Felhasználói viselkedés elemzése</li>
                  </ul>

                  <h3 className="font-medium mt-6">Marketing cookie-k:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Google Ads</li>
                    <li>Facebook Pixel</li>
                    <li>Remarketing cookie-k</li>
                  </ul>
                </div>
              </section>

              {/* 3. Cookie-k kezelése */}
              <section>
                <h2 className="text-xl font-semibold mb-4">3. Cookie-k kezelése</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Ön szabadon dönthet a cookie-k használatáról. A legtöbb böngésző az alábbi 
                    lehetőségeket kínálja:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cookie-k teljes tiltása</li>
                    <li>Cookie-k szelektív engedélyezése</li>
                    <li>Cookie-k törlése</li>
                  </ul>
                  <p className="mt-4">
                    A cookie beállítások módosításához kérjük, tekintse meg böngészője súgóját:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Google Chrome</li>
                    <li>Firefox</li>
                    <li>Safari</li>
                    <li>Microsoft Edge</li>
                  </ul>
                </div>
              </section>

              {/* 4. Cookie-k élettartama */}
              <section>
                <h2 className="text-xl font-semibold mb-4">4. Cookie-k élettartama</h2>
                <div className="space-y-4 text-gray-600">
                  <p>A cookie-k élettartama szerint megkülönböztetünk:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Munkamenet cookie-k: a böngésző bezárásával törlődnek</li>
                    <li>Állandó cookie-k: meghatározott ideig (pl. 1 év) tárolódnak</li>
                  </ul>
                </div>
              </section>

              {/* 5. Harmadik féltől származó cookie-k */}
              <section>
                <h2 className="text-xl font-semibold mb-4">5. Harmadik féltől származó cookie-k</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Weboldalunk harmadik féltől származó szolgáltatásokat is használ, amelyek 
                    saját cookie-kat helyezhetnek el:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Google Analytics: látogatottsági statisztikák</li>
                    <li>Google Ads: hirdetések személyre szabása</li>
                    <li>Facebook: közösségi funkciók és hirdetések</li>
                  </ul>
                </div>
              </section>

              {/* 6. Cookie-k és adatvédelem */}
              <section>
                <h2 className="text-xl font-semibold mb-4">6. Cookie-k és adatvédelem</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A cookie-k használata során összegyűjtött adatokat az Adatvédelmi 
                    Tájékoztatónkban foglaltak szerint kezeljük. Az adatkezelés célja a 
                    felhasználói élmény javítása és a weboldal funkcionalitásának biztosítása.
                  </p>
                </div>
              </section>

              {/* 7. Módosítások */}
              <section>
                <h2 className="text-xl font-semibold mb-4">7. Módosítások</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Fenntartjuk a jogot, hogy jelen Cookie Szabályzatot szükség esetén 
                    módosítsuk. A módosításokról weboldalunkon tájékoztatjuk látogatóinkat.
                  </p>
                  <p>
                    Utolsó módosítás: 2024. január 1.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}