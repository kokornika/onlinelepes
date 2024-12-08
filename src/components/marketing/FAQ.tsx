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
    question: 'Mennyi idő alatt lesznek látható eredmények?',
    answer: 'A Google Ads és Facebook hirdetéseknél már az első héten láthatók az eredmények. A keresőoptimalizálás (SEO) hosszabb távú folyamat, itt 3-6 hónap alatt várhatók jelentős eredmények.'
  },
  {
    question: 'Mennyibe kerül egy marketing kampány?',
    answer: 'A marketing kampányok havi 100.000 Ft-tól indulnak, amely tartalmazza a hirdetések kezelését és optimalizálását. A pontos költségvetést az Ön céljai és a választott platformok határozzák meg.'
  },
  {
    question: 'Milyen platformokon hirdetnek?',
    answer: 'Elsősorban Google Ads és Facebook/Instagram hirdetéseket kezelünk, mivel ezek a leghatékonyabb platformok a magyar piacon. Igény esetén más platformokon is tudunk hirdetni.'
  },
  {
    question: 'Hogyan mérik a kampányok sikerességét?',
    answer: 'Részletes analitikai eszközöket használunk, amelyek mérik a látogatottságot, konverziókat, ROI-t és egyéb fontos metrikákat. Havi riportokban részletesen bemutatjuk az eredményeket.'
  }
];

export function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Gyakori Kérdések
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Marketing <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Tudástár</span>
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
    </div>
  );
}