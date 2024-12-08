import { ArrowRight, Globe, ShoppingCart, Users, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <FadeIn>
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Online Jelenlét = Üzleti Siker
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Növelje Vállalkozása <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Online Bevételeit</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Modern weboldal fejlesztés, amely segít vállalkozásának az online térben való növekedésben. 
              Már az első hónaptól mérhető eredmények!
            </p>
            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
              >
                Ingyenes Konzultáció <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto group border-2"
              >
                <span className="mr-2">+36 30 123 4567</span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text group-hover:opacity-80">
                  Azonnali Kapcsolat
                </span>
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Miért fontos a weboldal? */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Miért fontos a weboldal?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">0-24 Online Jelenlét</h3>
                  <p className="text-gray-600">Weboldala akkor is dolgozik, amikor Ön pihen. Folyamatos elérhetőség és információszolgáltatás az érdeklődőknek.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Professzionális Megjelenés</h3>
                  <p className="text-gray-600">A modern weboldal növeli vállalkozása hitelességét és megbízhatóságát az ügyfelek szemében.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Növekvő Bevételek</h3>
                  <p className="text-gray-600">Az online jelenléttel új értékesítési csatornát nyit meg, ami jelentősen növelheti vállalkozása bevételeit.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Mérhető Eredmények</h3>
                  <p className="text-gray-600">Részletes statisztikák és elemzések segítségével nyomon követheti weboldala teljesítményét és optimalizálhatja azt.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}