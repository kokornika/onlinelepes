import { ArrowRight, Search, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function Marketing() {
  const navigate = useNavigate();

  const statistics = [
    {
      value: '68%',
      label: 'magyar vállalkozás nem található meg az interneten'
    },
    {
      value: '82%',
      label: 'vásárló először az interneten keres'
    },
    {
      value: '3x',
      label: 'több megrendelés célzott hirdetésekkel'
    }
  ];

  const services = [
    {
      icon: <Search className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Google Hirdetések',
      description: 'Jelenjen meg az első helyen, amikor szolgáltatását keresik. Azonnali láthatóság és több érdeklődő.',
      benefits: ['Azonnali megjelenés', 'Több látogató', 'Helyi vásárlók'],
      gradient: 'from-blue-500 to-cyan-500',
      path: '/szolgaltatasok/marketing/google-ads'
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Facebook & Instagram',
      description: 'Érje el a potenciális vásárlóit a közösségi médiában. Látványos hirdetések, több követő.',
      benefits: ['Célzott közönség', 'Képes hirdetések', 'Márkaépítés'],
      gradient: 'from-purple-500 to-pink-500',
      path: '/szolgaltatasok/marketing/facebook-ads'
    },
    {
      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Keresőoptimalizálás',
      description: 'Kerüljön az első oldalra a Google keresőben. Folyamatos látogatók hirdetési költség nélkül.',
      benefits: ['Hosszútávú eredmény', 'Ingyenes látogatók', 'Erős márka'],
      gradient: 'from-orange-500 to-red-500',
      path: '/szolgaltatasok/marketing/seo'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Online <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Marketing</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A magyar vállalkozások 68%-a láthatatlan az interneten, így rengeteg vásárlót veszítenek el. 
              Ne hagyja, hogy versenytársai megszerezzék az Ön vásárlóit! Kezdje el most az online marketinget!
            </p>
          </div>
        </FadeIn>

        {/* Marketing Introduction */}
        <div className="mt-12 bg-white rounded-xl shadow-lg border p-6 sm:p-8">
          <FadeIn>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Miért fontos az online marketing?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Az online marketing napjainkban már nem opció, hanem szükségszerűség. A vásárlók 82%-a először 
                az interneten keres információt, mielőtt döntést hozna egy termék vagy szolgáltatás megvásárlásáról.
              </p>
              <p>
                Egy jól felépített online marketing stratégia segítségével:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                  <span>Célzottan érheti el potenciális ügyfeleit</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                  <span>Mérhető és optimalizálható eredményeket érhet el</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                  <span>Költséghatékonyan növelheti vállalkozása bevételeit</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                  <span>Versenyelőnyre tehet szert a piacon</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Statistics */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                {stat.value}
              </div>
              <div className="mt-2 text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-16">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Marketing <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szolgáltatásaink</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Válassza ki az Ön vállalkozásához legjobban illő marketing megoldást
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <SlideIn key={index} delay={0.2 * index} direction="up">
                <div 
                  className="group bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl relative overflow-hidden cursor-pointer"
                  onClick={() => navigate(service.path)}
                >
                  {/* Gradient background that shows on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="mt-6 space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                      onClick={() => navigate(service.path)}
                    >
                      További információk <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Kezdjük El a <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Közös Munkát</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Vegye fel velünk a kapcsolatot és beszéljük át, hogyan tudunk segíteni vállalkozása online marketing stratégiájának kialakításában
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <SlideIn direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">Kérjen Ajánlatot</h3>
                <form className="space-y-4">
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
                      placeholder="Pl.: Google Hirdetések, Facebook Marketing, stb."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Üzenet
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Írja le projektjét és elvárásait..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                    Ajánlatkérés Küldése <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </div>
            </SlideIn>

            {/* Contact Info */}
            <div className="space-y-6">
              <SlideIn direction="up" delay={0.1}>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl font-semibold mb-6">Miért Válasszon Minket?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                        <Search className="h-4 w-4" />
                      </div>
                      <span>Szakértői tudás a digitális marketing területén</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                        <Target className="h-4 w-4" />
                      </div>
                      <span>Mérhető és optimalizált kampányok</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                        <Users className="h-4 w-4" />
                      </div>
                      <span>Személyre szabott marketing stratégiák</span>
                    </li>
                  </ul>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
                  <h3 className="text-xl font-semibold mb-4">Telefonos Elérhetőség</h3>
                  <p className="text-gray-600">H-V: 08:00 - 20:00</p>
                  <a href="tel:+36303551793" className="mt-2 text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text block">
                    +36 30 355 1793
                  </a>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}