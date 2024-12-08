import { ArrowRight, Search, LineChart, Users, Globe, FileText, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Process } from '@/components/Process';
import { ContactCTA } from '@/components/marketing/ContactCTA';

const features = [
  {
    icon: Search,
    title: 'Kulcsszókutatás',
    description: 'Releváns kulcsszavak azonosítása és elemzése',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FileText,
    title: 'Tartalomoptimalizálás',
    description: 'SEO-barát tartalmak készítése',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Settings,
    title: 'Technikai SEO',
    description: 'Weboldal technikai optimalizálása',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Link Építés',
    description: 'Minőségi hivatkozások szerzése',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: LineChart,
    title: 'Pozíció Követés',
    description: 'Helyezések folyamatos monitorozása',
    gradient: 'from-violet-500 to-purple-500'
  }
];

export function SEO() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <Breadcrumb 
          items={[
            { label: 'Szolgáltatások', href: '/szolgaltatasok' },
            { label: 'Marketing', href: '/szolgaltatasok/marketing' },
            { label: 'Keresőoptimalizálás' }
          ]} 
        />

        {/* Hero Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Kereső<span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">optimalizálás</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Kerüljön az első oldalra a Google keresőben! SEO szolgáltatásainkkal hosszú távon 
                biztosíthatja weboldala láthatóságát és organikus forgalmát.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

          <SlideIn direction="up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl transform rotate-2" />
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="SEO"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Features */}
        <div className="mt-24">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold">
                SEO <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szolgáltatások</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Átfogó keresőoptimalizálási megoldások
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

        {/* Process Section */}
        <div className="mt-24">
          <Process />
        </div>

        {/* Contact Section */}
        <div className="mt-24">
          <ContactCTA />
        </div>
      </div>
    </div>
  );
}