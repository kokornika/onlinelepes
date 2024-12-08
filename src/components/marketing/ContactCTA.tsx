import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function ContactCTA() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Kapcsolat
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Kezdjük El a <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Közös Munkát</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Írjon nekünk és segítünk megtalálni a legjobb marketing megoldást vállalkozása számára
            </p>
          </div>
        </FadeIn>

        <SlideIn direction="up">
          <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Név
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Az Ön neve"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="pelda@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefonszám
                </label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="+36 30 123 4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Melyik szolgáltatás érdekli?
                </label>
                <Input
                  type="text"
                  id="service"
                  placeholder="Pl.: Google Ads, Facebook hirdetések, SEO"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Üzenet
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Írja le projektje részleteit..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                Ajánlatkérés Küldése <ArrowRight className="ml-2" />
              </Button>
            </form>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}