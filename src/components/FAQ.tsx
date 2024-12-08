import { useState } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    category: 'Weboldal Fejlesztés',
    questions: [
      {
        question: 'Mennyi idő alatt készül el egy weboldal?',
        answer: 'Egy egyszerűbb weboldal 2-3 hét alatt elkészül, míg egy összetettebb webáruház vagy egyedi funkciókkal rendelkező oldal 4-8 hetet vesz igénybe. A pontos időtartamot a projekt követelményei határozzák meg.'
      },
      {
        question: 'Mennyibe kerül egy weboldal?',
        answer: 'Az árak a projekt méretétől és komplexitásától függnek. Egy bemutatkozó oldal már 80.000 Ft-tól elérhető. Kérjen egyedi ajánlatot és találjuk meg az Ön igényeinek és költségvetésének megfelelő megoldást!'
      },
      {
        question: 'Mobiltelefonon is jól fog működni a weboldal?',
        answer: 'Igen, minden weboldalunkat mobilbarát, reszponzív dizájnnal készítjük. Ez azt jelenti, hogy a weboldal automatikusan alkalmazkodik minden képernyőmérethez (mobiltelefon, tablet, laptop).'
      },
      {
        question: 'Kapok támogatást a weboldal elkészülte után?',
        answer: 'Igen! Minden weboldalhoz 3 hónap ingyenes támogatást biztosítunk, amely magában foglalja a technikai segítségnyújtást és a kisebb módosításokat.'
      },
      {
        question: 'Milyen technológiákat használnak?',
        answer: 'Modern és megbízható technológiákat használunk, mint például React, Next.js, Node.js. Ezek biztosítják a gyors betöltődést és a stabil működést.'
      },
      {
        question: 'Lesz saját domain nevem és email címem?',
        answer: 'Igen, segítünk a domain regisztrációban és beállítjuk a professzionális email címeket az Ön domain nevével (pl. info@vallalkozasa.hu).'
      }
    ]
  },
  {
    category: 'Marketing',
    questions: [
      {
        question: 'Mennyibe kerül egy marketing kampány?',
        answer: 'A marketing kampányok havi 100.000 Ft-tól indulnak, amely tartalmazza a hirdetések kezelését és optimalizálását. A pontos költségvetést az Ön céljai és a választott platformok határozzák meg.'
      },
      {
        question: 'Mennyi idő alatt lesznek eredmények?',
        answer: 'A Google Ads és Facebook hirdetéseknél már az első héten láthatók az eredmények. A keresőoptimalizálás (SEO) hosszabb távú folyamat, itt 3-6 hónap alatt várhatók jelentős eredmények.'
      },
      {
        question: 'Milyen platformokon hirdetnek?',
        answer: 'Elsősorban Google Ads és Facebook/Instagram hirdetéseket kezelünk, mivel ezek a leghatékonyabb platformok a magyar piacon. Igény esetén más platformokon is tudunk hirdetni.'
      },
      {
        question: 'Hogyan mérik a kampányok sikerességét?',
        answer: 'Részletes analitikai eszközöket használunk, amelyek mérik a látogatottságot, konverziókat, ROI-t és egyéb fontos metrikákat. Havi riportokban részletesen bemutatjuk az eredményeket.'
      },
      {
        question: 'Van elköteleződési idő a marketing szolgáltatásoknál?',
        answer: 'Nincs hosszútávú elköteleződés, a szolgáltatásokat havi szinten lehet igénybe venni. Azonban a legjobb eredmények érdekében minimum 3 hónapos együttműködést javaslunk.'
      }
    ]
  },
  {
    category: 'Technikai Kérdések',
    questions: [
      {
        question: 'Biztonságos lesz a weboldalam?',
        answer: 'Igen, minden weboldalt SSL titkosítással és modern biztonsági megoldásokkal védünk. Rendszeres biztonsági frissítéseket és mentéseket készítünk.'
      },
      {
        question: 'Mi történik, ha technikai probléma merül fel?',
        answer: 'Ügyfélszolgálatunk gyorsan reagál a felmerülő problémákra. A karbantartási szolgáltatással rendelkező ügyfelek kiemelt prioritást élveznek.'
      },
      {
        question: 'Milyen gyakran készül biztonsági mentés?',
        answer: 'A karbantartási csomagtól függően napi vagy heti rendszerességgel készítünk teljes biztonsági mentést a weboldalról és az adatbázisról.'
      },
      {
        question: 'Hogyan történik a weboldal frissítése?',
        answer: 'Rendszeresen elvégezzük a szükséges biztonsági és teljesítmény frissítéseket. A tartalmi frissítéseket a karbantartási csomag keretein belül végezzük.'
      }
    ]
  }
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Weboldal Fejlesztés');
  const [showAll, setShowAll] = useState(false);

  const currentCategory = faqCategories.find(cat => cat.category === activeCategory);
  const visibleQuestions = showAll ? currentCategory?.questions : currentCategory?.questions.slice(0, 3);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Gyakori Kérdések
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Amit Gyakran{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Kérdeznek
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Válaszok a leggyakrabban felmerülő kérdésekre
          </p>
        </div>
      </FadeIn>

      {/* Category Selector */}
      <div className="flex justify-center gap-2 mb-8">
        {faqCategories.map((cat) => (
          <Button
            key={cat.category}
            variant={activeCategory === cat.category ? 'default' : 'outline'}
            onClick={() => {
              setActiveCategory(cat.category);
              setShowAll(false);
            }}
            className={activeCategory === cat.category ? 'bg-gradient-to-r from-purple-600 to-blue-500' : ''}
          >
            {cat.category}
          </Button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {visibleQuestions?.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-white border rounded-lg hover:border-purple-200 transition-all duration-300"
            >
              <AccordionTrigger className="px-4 sm:px-6 text-left hover:no-underline group">
                <span className="text-base sm:text-lg font-medium group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {currentCategory?.questions.length > 3 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="w-full sm:w-auto border-2"
            >
              {showAll ? 'Kevesebb kérdés' : 'További kérdések'}{' '}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}