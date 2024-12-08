import { FadeIn } from '@/components/ui/motion';

export function Terms() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Általános Szerződési <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Feltételek</span>
            </h1>

            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 space-y-8">
              {/* 1. Általános rendelkezések */}
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Általános rendelkezések</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Jelen Általános Szerződési Feltételek (továbbiakban: ÁSZF) tartalmazza az Onlinelepes.hu 
                    weboldal és szolgáltatásai használatának feltételeit.
                  </p>
                  <p>
                    <strong>Szolgáltató adatai:</strong><br />
                    Név: Onlinelepes<br />
                    Székhely: Magyarország<br />
                    E-mail: info@onlinelepes.hu<br />
                    Telefonszám: +36 30 355 1793
                  </p>
                </div>
              </section>

              {/* 2. Szolgáltatások */}
              <section>
                <h2 className="text-xl font-semibold mb-4">2. Szolgáltatások</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A Szolgáltató az alábbi szolgáltatásokat nyújtja:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Weboldal fejlesztés</li>
                    <li>Online marketing szolgáltatások</li>
                    <li>Weboldal karbantartás</li>
                    <li>Keresőoptimalizálás (SEO)</li>
                    <li>Google Ads és Facebook hirdetések kezelése</li>
                  </ul>
                </div>
              </section>

              {/* 3. Szerződéskötés */}
              <section>
                <h2 className="text-xl font-semibold mb-4">3. Szerződéskötés</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A szerződés a Megrendelő és a Szolgáltató között jön létre, amikor a Megrendelő 
                    elfogadja a Szolgáltató árajánlatát és írásban megrendeli a szolgáltatást.
                  </p>
                  <p>
                    A szerződés létrejöttének feltételei:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Írásos megrendelés</li>
                    <li>Árajánlat elfogadása</li>
                    <li>Jelen ÁSZF elfogadása</li>
                    <li>Előleg befizetése (amennyiben az árajánlat tartalmazza)</li>
                  </ul>
                </div>
              </section>

              {/* 4. Fizetési feltételek */}
              <section>
                <h2 className="text-xl font-semibold mb-4">4. Fizetési feltételek</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A fizetés az alábbi ütemezés szerint történik:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>50% előleg a szerződéskötéskor</li>
                    <li>50% a projekt átadásakor</li>
                    <li>Karbantartási díjak: havonta, előre fizetendők</li>
                  </ul>
                  <p>
                    Fizetési határidő: 8 nap a számla kiállításától számítva.
                  </p>
                </div>
              </section>

              {/* 5. Teljesítési határidők */}
              <section>
                <h2 className="text-xl font-semibold mb-4">5. Teljesítési határidők</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A teljesítési határidő az egyedi szerződésben kerül meghatározásra. A Szolgáltató 
                    vállalja, hogy:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Egyszerűbb weboldalak: 2-3 hét</li>
                    <li>Összetett weboldalak: 4-8 hét</li>
                    <li>Webáruházak: 6-12 hét</li>
                  </ul>
                </div>
              </section>

              {/* 6. Szerzői jogok */}
              <section>
                <h2 className="text-xl font-semibold mb-4">6. Szerzői jogok</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A weboldal teljes tartalma, a design, a forráskód a Szolgáltató szellemi tulajdonát 
                    képezi. A végfelhasználói licenc a teljes vételár kifizetése után száll át a Megrendelőre.
                  </p>
                </div>
              </section>

              {/* 7. Garancia */}
              <section>
                <h2 className="text-xl font-semibold mb-4">7. Garancia</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A Szolgáltató az elkészült weboldalra 3 hónap garanciát vállal, amely magában foglalja:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Technikai hibák javítása</li>
                    <li>Biztonsági frissítések</li>
                    <li>Kisebb módosítások</li>
                  </ul>
                </div>
              </section>

              {/* 8. Adatvédelem */}
              <section>
                <h2 className="text-xl font-semibold mb-4">8. Adatvédelem</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A Szolgáltató a személyes adatok kezelése során az EU GDPR rendeletének megfelelően 
                    jár el. Az adatkezelés részleteit az Adatvédelmi Tájékoztató tartalmazza.
                  </p>
                </div>
              </section>

              {/* 9. Záró rendelkezések */}
              <section>
                <h2 className="text-xl font-semibold mb-4">9. Záró rendelkezések</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Jelen ÁSZF 2024. január 1-től visszavonásig érvényes. A Szolgáltató fenntartja a 
                    jogot az ÁSZF egyoldalú módosítására.
                  </p>
                  <p>
                    Az ÁSZF-ben nem szabályozott kérdésekben a magyar jog, különösen a Polgári 
                    Törvénykönyv rendelkezései az irányadóak.
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