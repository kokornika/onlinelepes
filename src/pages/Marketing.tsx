import { ArrowRight, Search, Target, LineChart, PieChart, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      icon: <Search className="h-6 w-6" />,
      title: 'Google Hirdetések',
      description: 'Jelenjen meg az első helyen, amikor szolgáltatását keresik. Azonnali láthatóság és több érdeklődő.',
      benefits: ['Azonnali megjelenés', 'Több látogató', 'Helyi vásárlók'],
      gradient: 'from-blue-500 to-cyan-500',
      path: '/szolgaltatasok/marketing/google-ads'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Facebook & Instagram',
      description: 'Érje el a potenciális vásárlóit a közösségi médiában. Látványos hirdetések, több követő.',
      benefits: ['Célzott közönség', 'Képes hirdetések', 'Márkaépítés'],
      gradient: 'from-purple-500 to-pink-500',
      path: '/szolgaltatasok/marketing/facebook-ads'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Keresőoptimalizálás',
      description: 'Kerüljön az első oldalra a Google keresőben. Folyamatos látogatók hirdetési költség nélkül.',
      benefits: ['Hosszútávú eredmény', 'Ingyenes látogatók', 'Erős márka'],
      gradient: 'from-orange-500 to-red-500',
      path: '/szolgaltatasok/marketing/seo'
    }
  ];

  const results = [
    {
      icon: <LineChart className="h-6 w-6" />,
      metric: '+156%',
      label: 'Több látogató',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      metric: '+85%',
      label: 'Több vásárló',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      metric: '98%',
      label: 'Célzott forgalom',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold">
                Online <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Marketing</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                A magyar vállalkozások 68%-a láthatatlan az interneten, így rengeteg vásárlót veszítenek el. 
                Ne hagyja, hogy versenytársai megszerezzék az Ön vásárlóit! Kezdje el most az online marketinget!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                >
                  Ingyenes Konzultáció <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="group border-2"
                >
                  <span className="mr-2">+36 30 123 4567</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text group-hover:opacity-80">
                    Azonnali Kapcsolat
                  </span>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
                Szolgáltatásaink
              </span>
              <h2 className="text-4xl font-bold">
                Online Marketing <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Megoldások</span>
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Egyszerű és hatékony megoldások, hogy vállalkozása több vásárlót szerezzen az internetről
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
                Valós Eredmények
              </span>
              <h2 className="text-4xl font-bold">
                Marketing <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Mutatók</span>
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Mérhető eredmények az online marketing kampányokból
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <SlideIn key={index} delay={0.2 * index} direction="up">
                <div className="group bg-white rounded-xl shadow-lg border p-8 text-center hover:border-purple-200 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                  {/* Gradient background that shows on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${result.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${result.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {result.icon}
                    </div>
                    <div className="mt-6 text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                      {result.metric}
                    </div>
                    <div className="mt-2 text-gray-600">{result.label}</div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}