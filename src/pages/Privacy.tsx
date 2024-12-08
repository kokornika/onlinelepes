import { FadeIn } from '@/components/ui/motion';

export function Privacy() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Adatvédelmi <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Tájékoztató</span>
            </h1>

            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 space-y-8">
              {/* 1. Bevezetés */}
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Bevezetés</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Az Onlinelepes elkötelezett a személyes adatok védelme iránt, és mindent megtesz 
                    azok biztonságos kezeléséért. Jelen adatvédelmi tájékoztató részletesen ismerteti 
                    adatkezelési gyakorlatunkat.
                  </p>
                  <p>
                    <strong>Adatkezelő adatai:</strong><br />
                    Név: Onlinelepes<br />
                    E-mail: info@onlinelepes.hu<br />
                    Telefonszám: +36 30 355 1793
                  </p>
                </div>
              </section>

              {/* 2. Kezelt adatok köre */}
              <section>
                <h2 className="text-xl font-semibold mb-4">2. Kezelt adatok köre</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Az alábbi személyes adatokat kezeljük:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Név</li>
                    <li>E-mail cím</li>
                    <li>Telefonszám</li>
                    <li>Cégnév (opcionális)</li>
                    <li>Weboldal címe (opcionális)</li>
                    <li>IP cím és böngészési adatok</li>
                  </ul>
                </div>
              </section>

              {/* 3. Adatkezelés célja */}
              <section>
                <h2 className="text-xl font-semibold mb-4">3. Adatkezelés célja</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Adatait az alábbi célokból kezeljük:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Kapcsolatfelvételi kérések kezelése</li>
                    <li>Ajánlatkérések feldolgozása</li>
                    <li>Szerződéses kötelezettségek teljesítése</li>
                    <li>Számlázás</li>
                    <li>Ügyfélszolgálat</li>
                    <li>Marketing kommunikáció (hozzájárulás esetén)</li>
                  </ul>
                </div>
              </section>

              {/* 4. Adatkezelés jogalapja */}
              <section>
                <h2 className="text-xl font-semibold mb-4">4. Adatkezelés jogalapja</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Adatkezelésünk az alábbi jogalapokon nyugszik:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Az Ön hozzájárulása</li>
                    <li>Szerződés teljesítése</li>
                    <li>Jogi kötelezettség teljesítése</li>
                    <li>Jogos érdek</li>
                  </ul>
                </div>
              </section>

              {/* 5. Adatkezelés időtartama */}
              <section>
                <h2 className="text-xl font-semibold mb-4">5. Adatkezelés időtartama</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Személyes adatait csak a szükséges ideig tároljuk:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Kapcsolatfelvételi adatok: 1 év</li>
                    <li>Szerződéses adatok: 8 év (számviteli törvény)</li>
                    <li>Marketing célú adatok: hozzájárulás visszavonásáig</li>
                  </ul>
                </div>
              </section>

              {/* 6. Adatbiztonság */}
              <section>
                <h2 className="text-xl font-semibold mb-4">6. Adatbiztonság</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Az Ön adatainak védelme érdekében megfelelő technikai és szervezési 
                    intézkedéseket alkalmazunk:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>SSL titkosítás</li>
                    <li>Tűzfal védelem</li>
                    <li>Rendszeres biztonsági mentések</li>
                    <li>Hozzáférés korlátozás</li>
                  </ul>
                </div>
              </section>

              {/* 7. Az Ön jogai */}
              <section>
                <h2 className="text-xl font-semibold mb-4">7. Az Ön jogai</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Az adatvédelmi jogszabályok szerint Önt az alábbi jogok illetik meg:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hozzáférési jog</li>
                    <li>Helyesbítéshez való jog</li>
                    <li>Törléshez való jog</li>
                    <li>Adatkezelés korlátozásához való jog</li>
                    <li>Adathordozhatósághoz való jog</li>
                    <li>Tiltakozáshoz való jog</li>
                  </ul>
                </div>
              </section>

              {/* 8. Kapcsolat */}
              <section>
                <h2 className="text-xl font-semibold mb-4">8. Kapcsolat</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Adatvédelemmel kapcsolatos kérdéseivel forduljon hozzánk bizalommal az alábbi 
                    elérhetőségeken:
                  </p>
                  <p>
                    E-mail: info@onlinelepes.hu<br />
                    Telefon: +36 30 355 1793
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