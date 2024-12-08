import { ArrowRight, Users, Target, LineChart, MessageSquare, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Process } from '@/components/Process';
import { ContactCTA } from '@/components/marketing/ContactCTA';
import { FacebookAdsExample } from '@/components/marketing/FacebookAdsExample';

const features = [
  {
    icon: Users,
    title: 'Célközönség Építés',
    description: 'Pontos célzás érdeklődési kör és demográfia alapján',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Remarketing',
    description: 'Korábbi látogatók újbóli megszólítása',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Image,
    title: 'Instagram Stories',
    description: 'Kreatív történetek és hirdetések',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: MessageSquare,
    title: 'Messenger Hirdetések',
    description: 'Közvetlen kommunikáció az érdeklődőkkel',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: LineChart,
    title: 'Teljesítmény Követés',
    description: 'Részletes statisztikák és jelentések',
    gradient: 'from-violet-500 to-purple-500'
  }
];

const metrics = [
  {
    value: '2.1M+',
    label: 'Elért felhasználó',
    description: 'havonta átlagosan'
  },
  {
    value: '3.8%',
    label: 'Konverziós ráta',
    description: 'iparági átlag felett'
  },
  {
    value: '45%',
    label: 'Alacsonyabb CPC',
    description: 'versenytársakhoz képest'
  }
];

export function FacebookAds() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <Breadcrumb 
          items={[
            { label: 'Szolgáltatások', href: '/szolgaltatasok' },
            { label: 'Marketing', href: '/szolgaltatasok/marketing' },
            { label: 'Facebook & Instagram' }
          ]} 
        />

        {/* Hero Section */}
        <div className="mt-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Facebook & Instagram <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Hirdetések</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Érje el célközönségét a közösségi médiában! Facebook és Instagram hirdetéseinkkel 
                pontosan célozhatja meg potenciális ügyfeleit és építheti márkáját.
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

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl shadow-lg border p-6 text-center hover:border-purple-200 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                    {metric.value}
                  </div>
                  <div className="mt-2 font-semibold">{metric.label}</div>
                  <div className="mt-1 text-sm text-gray-600">{metric.description}</div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* Facebook Ads Example */}
        <FacebookAdsExample />

        {/* Features */}
        <div className="mt-24">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Facebook & Instagram <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szolgáltatások</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Átfogó közösségi média marketing megoldások
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="group bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24">
          <ContactCTA />
        </div>
      </div>
    </div>
  );
}