import { ArrowRight, Rocket, Target, Users, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function LetsStart() {
  const benefits = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Gyors Megvalósítás',
      description: '2-4 hét alatt elkészülő projektek, hogy minél hamarabb elindulhasson az online térben.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Mérhető Eredmények',
      description: 'Részletes statisztikák és riportok a weboldal és marketing kampányok teljesítményéről.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Szakértő Csapat',
      description: 'Tapasztalt fejlesztők és marketing szakemberek segítik projektje sikerét.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: 'Folyamatos Támogatás',
      description: '3 hónap ingyenes támogatás minden projekthez a gondtalan indulásért.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
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
                Kezdjük El a <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Közös Munkát</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Ossza meg velünk elképzeléseit és segítünk megtalálni a legjobb megoldást vállalkozása számára.
                A konzultáció teljesen ingyenes!
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Form */}
            <SlideIn direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-8">
                <h3 className="text-2xl font-semibold mb-6">Projekt Részletek</h3>
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
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Cég neve
                      </label>
                      <Input
                        type="text"
                        id="company"
                        placeholder="Cég neve (opcionális)"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  <div>
                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">
                      Milyen szolgáltatás érdekli?
                    </label>
                    <Input
                      type="text"
                      id="services"
                      placeholder="Pl.: Weboldal fejlesztés, Marketing, stb."
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Tervezett költségkeret
                    </label>
                    <Input
                      type="text"
                      id="budget"
                      placeholder="Pl.: 200.000 - 500.000 Ft"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Projekt leírása
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Írja le projektje részleteit, céljait és elvárásait..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                    Ajánlatkérés Küldése <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </div>
            </SlideIn>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <SlideIn key={index} direction="up" delay={0.1 * index}>
                  <div className="group bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
                    {/* Gradient background that shows on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              ))}

              {/* Contact Info */}
              <SlideIn direction="up" delay={0.4}>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Azonnali Kapcsolat</h3>
                    <p className="text-gray-600 mb-4">
                      Ha sürgős, hívjon minket közvetlenül!
                    </p>
                    <a 
                      href="tel:+36303551793" 
                      className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
                    >
                      +36 30 355 1793
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Telefonos elérhetőség: Minden nap 08:00 - 20:30
                    </p>
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