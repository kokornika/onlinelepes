import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function Contact() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Kapcsolat
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Vegye Fel Velünk a{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Kapcsolatot
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Segítünk vállalkozása digitális fejlődésében. Írjon nekünk, vagy hívjon minket bizalommal!
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Form */}
        <SlideIn direction="up">
          <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Küldjön Üzenetet</h3>
            <form className="space-y-4 sm:space-y-6">
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
                  Üzenet
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Írja le kérését részletesen..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                Üzenet Küldése <ArrowRight className="ml-2" />
              </Button>
            </form>
          </div>
        </SlideIn>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6">
          <SlideIn direction="up" delay={0.1}>
            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-600">Telefonszám</div>
                  <a href="tel:+36303551793" className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                    +36 30 355 1793
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={0.2}>
            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-600">E-mail</div>
                  <a href="mailto:info@onlinelepes.hu" className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                    info@onlinelepes.hu
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={0.3}>
            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-600">Telefonos elérhetőség</div>
                  <div className="text-gray-600">H-V: 08:00 - 20:00</div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}