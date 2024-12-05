import { ArrowRight, Globe, Code2, Zap, Monitor, Tablet, Smartphone, Lock, Gauge, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn } from '@/components/ui/motion';

export function WebsiteDevelopment() {
  const languages = [
    { code: 'gb', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'cn', name: '中文', flag: '🇨🇳' }
  ];

  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Modern Technológiák',
      description: 'A legújabb webes technológiák használata a maximális teljesítményért.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Többnyelvű Támogatás',
      description: 'Nemzetközi piacra lépés többnyelvű weboldalakkal és lokalizációval.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Gyors Betöltés',
      description: 'Optimalizált teljesítmény és villámgyors betöltési sebesség.'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Biztonságos Működés',
      description: 'SSL titkosítás és modern biztonsági megoldások.'
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: 'SEO Optimalizálás',
      description: 'Keresőbarát kódolás és technikai SEO beállítások.'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Folyamatos Támogatás',
      description: 'Technikai támogatás és rendszeres karbantartás.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block">Modern Weboldal</span>
                <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  Fejlesztés
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Professzionális weboldalak tervezése és fejlesztése modern technológiákkal.
                Személyre szabott megoldások minden igényre.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                >
                  Ingyenes Konzultáció <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
                >
                  Referenciák
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Miért Válasszon Minket?</h2>
              <p className="mt-4 text-xl text-gray-600">
                Modern technológiák és szakértelem
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <SlideIn key={index} delay={0.1 * index} direction="up">
                <div className="group p-8 bg-white rounded-xl shadow-sm border hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
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

      {/* Multilingual Support */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-3xl font-bold">Többnyelvű Weboldalak</h2>
                <p className="mt-4 text-xl text-gray-600">
                  Érje el nemzetközi ügyfeleit anyanyelvi szinten. Többnyelvű weboldalaink 
                  professzionális fordítással és lokalizációval készülnek.
                </p>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {languages.map((lang) => (
                    <div 
                      key={lang.code}
                      className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border hover:border-purple-200 transition-colors"
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Responsive Design Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Reszponzív Megjelenés</h2>
              <p className="mt-4 text-xl text-gray-600">
                Tökéletes megjelenés minden eszközön
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 flex justify-center items-end gap-8">
            <SlideIn direction="up" delay={0.2}>
              <div className="relative">
                <div className="w-[320px] h-[200px] bg-white rounded-lg shadow-lg border-2 border-purple-200 overflow-hidden">
                  <div className="h-8 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center px-4">
                    <Monitor className="h-4 w-4 text-white/80" />
                  </div>
                  <div className="p-4">
                    <div className="w-full h-4 bg-gray-100 rounded mb-3" />
                    <div className="w-2/3 h-4 bg-gray-100 rounded mb-6" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 bg-gray-100 rounded" />
                      <div className="h-20 bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-sm border text-sm font-medium">
                  Desktop
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.4}>
              <div className="relative">
                <div className="w-[200px] h-[260px] bg-white rounded-lg shadow-lg border-2 border-purple-200 overflow-hidden">
                  <div className="h-6 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center px-3">
                    <Tablet className="h-3 w-3 text-white/80" />
                  </div>
                  <div className="p-3">
                    <div className="w-full h-3 bg-gray-100 rounded mb-2" />
                    <div className="w-2/3 h-3 bg-gray-100 rounded mb-4" />
                    <div className="space-y-2">
                      <div className="h-16 bg-gray-100 rounded" />
                      <div className="h-16 bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-sm border text-sm font-medium">
                  Tablet
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.6}>
              <div className="relative">
                <div className="w-[140px] h-[240px] bg-white rounded-lg shadow-lg border-2 border-purple-200 overflow-hidden">
                  <div className="h-5 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center px-2">
                    <Smartphone className="h-2.5 w-2.5 text-white/80" />
                  </div>
                  <div className="p-2">
                    <div className="w-full h-2 bg-gray-100 rounded mb-1.5" />
                    <div className="w-2/3 h-2 bg-gray-100 rounded mb-3" />
                    <div className="space-y-1.5">
                      <div className="h-12 bg-gray-100 rounded" />
                      <div className="h-12 bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-sm border text-sm font-medium">
                  Mobile
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Kérjen Ajánlatot</h2>
              <p className="mt-4 text-xl text-gray-600">
                Írja le projektjét és felvesszük Önnel a kapcsolatot
              </p>
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <form className="mt-12 bg-white rounded-2xl shadow-lg border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Név
                    </label>
                    <Input
                      type="text"
                      id="name"
                      className="mt-1"
                      placeholder="Az Ön neve"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      id="email"
                      className="mt-1"
                      placeholder="pelda@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Telefonszám
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      className="mt-1"
                      placeholder="+36 30 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                      Tervezett Költségkeret
                    </label>
                    <select
                      id="budget"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    >
                      <option>Válasszon...</option>
                      <option>100-300 ezer Ft</option>
                      <option>300-500 ezer Ft</option>
                      <option>500 ezer - 1 millió Ft</option>
                      <option>1 millió Ft felett</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700">
                      Projekt Leírása
                    </label>
                    <Textarea
                      id="project"
                      className="mt-1"
                      rows={11}
                      placeholder="Írja le projektjét és elvárásait..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity">
                  Ajánlatkérés Küldése <ArrowRight className="ml-2" />
                </Button>
              </div>
            </form>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}