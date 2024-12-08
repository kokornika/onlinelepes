import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
                Kezdjük El Most
              </span>
              <h2 className="text-4xl font-bold">
                Ingyenes <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Konzultáció</span>
              </h2>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Beszéljük át vállalkozása céljait és találjuk meg együtt a legjobb megoldást az online sikerhez!
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border flex items-center justify-center text-purple-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">Telefonszám</div>
                    <a href="tel:+36301234567" className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                      +36 30 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border flex items-center justify-center text-purple-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">E-mail</div>
                    <a href="mailto:info@onlinelepes.hu" className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                      info@onlinelepes.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border flex items-center justify-center text-purple-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">Telefonos elérhetőség</div>
                    <div className="text-gray-600">Hétfő - Vasárnap: 08:00 - 20:30</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <div className="bg-white rounded-xl shadow-lg border p-8">
              <h3 className="text-2xl font-semibold mb-6">Kérjen Ajánlatot</h3>
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mit szeretne automatizálni?
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Írja le, milyen folyamatokat szeretne egyszerűsíteni..."
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
    </section>
  );
}