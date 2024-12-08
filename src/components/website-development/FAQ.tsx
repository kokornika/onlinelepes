import { useState } from 'react';
import { FadeIn } from '@/components/ui/motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  // Alapvető kérdések
  {
    question: 'Miért van szükségem weboldalra?',
    answer: 'A mai digitális világban a weboldal az első számú kapcsolódási pont Ön és ügyfelei között. A vásárlók 82%-a először az interneten keres, mielőtt szolgáltatást vagy terméket venne igénybe. Weboldal nélkül ezeket a potenciális ügyfeleket elveszíti.'
  },
  {
    question: 'Mennyire bonyolult egy weboldal kezelése?',
    answer: 'Modern tartalomkezelő rendszerünkkel olyan egyszerű a weboldal kezelése, mint egy Word dokumentumé. Nem szükséges hozzá programozói tudás, és minden ügyfélnek részletes betanítást biztosítunk.'
  },
  {
    question: 'Mobiltelefonon is jól fog működni a weboldal?',
    answer: 'Igen, minden általunk készített weboldal reszponzív dizájnnal készül, ami azt jelenti, hogy automatikusan alkalmazkodik minden képernyőmérethez (mobiltelefon, tablet, laptop, asztali számítógép).'
  },
  {
    question: 'Mennyi idő alatt készül el egy weboldal?',
    answer: 'Egy egyszerűbb bemutatkozó weboldal 2-3 hét alatt elkészül. Az összetettebb, egyedi funkciókkal rendelkező oldalak fejlesztése 4-8 hetet vesz igénybe. A pontos időtartamot a projekt követelményei határozzák meg.'
  },
  // További kérdések
  {
    question: 'Mi történik, ha módosítani szeretnék valamit a weboldalon?',
    answer: 'Minden projekthez 3 hónap ingyenes támogatást biztosítunk, amely magában foglalja a kisebb módosításokat és technikai segítségnyújtást. Ezen felül kedvező áru karbantartási csomagokat kínálunk.'
  },
  {
    question: 'Hogyan fognak megtalálni az ügyfelek?',
    answer: 'Minden weboldalunkat alapszintű keresőoptimalizálással (SEO) készítjük, hogy jól szerepeljen a Google találatok között. Emellett igény szerint részletes marketing stratégiát dolgozunk ki a még jobb online láthatóságért.'
  },
  {
    question: 'Biztonságos lesz a weboldalam?',
    answer: 'Igen, minden weboldalunkat SSL titkosítással és modern biztonsági megoldásokkal védjük. Rendszeres biztonsági frissítéseket és mentéseket készítünk, hogy az Ön és ügyfelei adatai maximális biztonságban legyenek.'
  },
  {
    question: 'Lesz email címem a domain nevemmel?',
    answer: 'Igen, minden weboldalhoz professzionális email címeket biztosítunk az Ön domain nevével (pl. info@vallalkozasa.hu). Ez növeli a vállalkozása megbízhatóságát az ügyfelek szemében.'
  },
  {
    question: 'Milyen technológiákat használnak a fejlesztéshez?',
    answer: 'Modern, megbízható technológiákat használunk, mint például React, Next.js vagy Vue.js a frontend fejlesztéshez, és Node.js vagy Python a backend szolgáltatásokhoz. Minden projekthez a legmegfelelőbb technológiai stacket választjuk.'
  },
  {
    question: 'Van lehetőség többnyelvű weboldal készítésére?',
    answer: 'Igen, weboldalainkat úgy készítjük, hogy könnyen bővíthetőek legyenek több nyelvi verzióval. A többnyelvű megoldásaink professzionális fordítással és nyelvi lokalizációval készülnek.'
  }
];

export function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Gyakori Kérdések
            </span>
            <h2 className="text-4xl font-bold">
              Amit a Weboldal <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Készítésről Tudni Kell</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Válaszok a leggyakrabban felmerülő kérdésekre, közérthetően
            </p>
          </div>
        </FadeIn>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {visibleFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white border rounded-lg hover:border-purple-200 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 text-left hover:no-underline group">
                  <span className="text-lg font-medium group-hover:text-purple-600 transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {faqs.length > 4 && (
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-2"
              >
                {showAll ? 'Kevesebb kérdés' : 'További kérdések'}{' '}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}