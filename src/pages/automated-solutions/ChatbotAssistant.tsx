import { ArrowRight, MessageSquare, Brain, Globe, Clock, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Mesterséges Intelligencia',
    description: 'Fejlett AI technológia az ügyfelek kérdéseinek megértéséhez és megválaszolásához.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Többnyelvű Támogatás',
    description: 'Automatikus nyelvfelismerés és válaszadás több nyelven.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: '24/7 Elérhetőség',
    description: 'Non-stop ügyfélszolgálat, azonnali válaszokkal.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Biztonságos Működés',
    description: 'GDPR kompatibilis, titkosított kommunikáció.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Gyors Integráció',
    description: 'Egyszerű beállítás, azonnali használatbavétel.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Személyre Szabható',
    description: 'Testre szabható válaszok és kommunikációs stílus.',
    gradient: 'from-pink-500 to-rose-500'
  }
];

const benefits = [
  {
    title: 'Válaszidő',
    value: '<1mp',
    description: 'azonnali válaszadás'
  },
  {
    title: 'Hatékonyság',
    value: '85%',
    description: 'megválaszolt kérdés'
  },
  {
    title: 'Megtakarítás',
    value: '60%',
    description: 'ügyfélszolgálati költség'
  }
];

export function ChatbotAssistant() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold">
                AI Chatbot <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Asszisztens</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Mesterséges intelligenciával működő chatbot, amely 24 órában válaszol az ügyfelek kérdéseire.
                Tehermentesítse ügyfélszolgálatát és növelje az ügyfélelégedettséget!
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
                  <span className="mr-2">+36 30 355 1793</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text group-hover:opacity-80">
                    Azonnali Kapcsolat
                  </span>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                    {benefit.value}
                  </div>
                  <div className="mt-2 text-xl font-semibold">{benefit.title}</div>
                  <div className="mt-1 text-gray-600">{benefit.description}</div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                Chatbot <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Funkciók</span>
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Fejlett funkciók az automatizált ügyfélszolgálat hatékony működéséhez
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="group bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold">
                  Próbálja Ki <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Élőben</span>
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  Tesztelje chatbotunkat valós környezetben! 14 napos ingyenes próbaidőszak,
                  hogy megtapasztalhassa az automatizált ügyfélszolgálat előnyeit.
                </p>
                <div className="mt-8">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                  >
                    Chatbot Kipróbálása <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>
            <SlideIn direction="up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl transform -rotate-2" />
                <div className="relative bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1614729939124-032d1e6c9945?auto=format&fit=crop&q=80&w=800&h=600"
                    alt="Chatbot Demo"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  );
}