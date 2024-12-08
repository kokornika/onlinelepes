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
    answer: 'Igen, minden weboldalunkat mobilbarát, reszponzív dizájnnal készítjük. Ez azt jelenti, hogy a weboldal automatikusan alkalmazkodik minden képernyőmérethez.'
  },
  {
    question: 'Mennyi idő alatt készül el egy weboldal?',
    answer: 'Egy egyszerűbb bemutatkozó weboldal 2-3 hét alatt elkészül. Az összetettebb, egyedi funkciókkal rendelkező oldalak fejlesztése 4-8 hetet vesz igénybe. A pontos időtartamot a projekt követelményei határozzák meg.'
  }
];

export function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <FadeIn>
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Gyakori Kérdések
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Amit a Weboldal{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Készítésről Tudni Kell
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Válaszok a leggyakrabban felmerülő kérdésekre
          </p>
        </div>
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {visibleFaqs.map((faq, index) => (
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

        {faqs.length > 3 && (
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