import { ArrowRight, Phone, Mail, Clock, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function Contact() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold">
                Vegye Fel Velünk a <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Kapcsolatot</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Segítünk vállalkozása digitális fejlődésében. Írjon nekünk, vagy hívjon minket bizalommal!
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideIn direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-8">
                <h3 className="text-2xl font-semibold mb-6">Küldjön Üzenetet</h3>
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
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Tárgy
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="Miben segíthetünk?"
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
            <div className="space-y-8">
              <SlideIn direction="up" delay={0.1}>
                <div className="bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300">
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
                <div className="bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">E-mail</div>
                      <a href="mailto:info@qrnevjegy.hu" className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                        info@qrnevjegy.hu
                      </a>
                    </div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.3}>
                <div className="bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">Kapcsolattartó</div>
                      <div className="text-xl font-semibold">Kovács Kornél</div>
                    </div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.4}>
                <div className="bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">Telefonos elérhetőség</div>
                      <div className="text-gray-600">Hétfő - Vasárnap: 08:00 - 20:30</div>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}