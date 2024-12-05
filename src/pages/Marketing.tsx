import { ArrowRight, Megaphone, BarChart, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn } from '@/components/ui/motion';

export function Marketing() {
  const services = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Google Ads',
      description: 'Célzott hirdetések a Google keresőben és display hálózaton.'
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: 'Facebook & Instagram Ads',
      description: 'Hatékony közösségi média kampányok és remarketing.'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Analitika & Optimalizálás',
      description: 'Adatvezérelt döntések és folyamatos teljesítményjavítás.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Konverzió Optimalizálás',
      description: 'Látogatók vásárlókká alakítása és értékesítés növelése.'
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
                <span className="block">Online Marketing</span>
                <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  Szolgáltatások
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Növelje online jelenlétét és érje el célközönségét hatékony marketing kampányokkal.
                Személyre szabott stratégiák és mérhető eredmények.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                >
                  Ingyenes Konzultáció <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2"
                >
                  Esettanulmányok
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Marketing Szolgáltatásaink</h2>
              <p className="mt-4 text-xl text-gray-600">
                Átfogó online marketing megoldások
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <div className="p-8 bg-white rounded-xl shadow-sm border hover:border-purple-200 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border">
                <div className="text-4xl font-bold text-purple-600">500%</div>
                <div className="mt-2 text-gray-600">Átlagos ROI</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border">
                <div className="text-4xl font-bold text-purple-600">1M+</div>
                <div className="mt-2 text-gray-600">Elért Felhasználó</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border">
                <div className="text-4xl font-bold text-purple-600">50+</div>
                <div className="mt-2 text-gray-600">Elégedett Ügyfél</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Kérjen Ajánlatot</h2>
              <p className="mt-4 text-xl text-gray-600">
                Írja le marketing céljait és felvesszük Önnel a kapcsolatot
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="mt-12 space-y-6 bg-white rounded-xl shadow-sm border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
                  Marketing Célok
                </label>
                <Textarea
                  id="goals"
                  className="mt-1"
                  rows={6}
                  placeholder="Írja le marketing céljait és elvárásait..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                Ajánlatkérés Küldése <ArrowRight className="ml-2" />
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}