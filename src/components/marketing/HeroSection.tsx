import { ArrowRight, Megaphone, Target, Users, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <FadeIn>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Online Marketing <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Megoldások</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Növelje vállalkozása online láthatóságát és érje el célközönségét hatékony marketing 
              stratégiákkal. Google Ads, Facebook hirdetések és keresőoptimalizálás egy kézből.
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

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Célzott Hirdetések</h3>
              <p className="text-gray-600">Érje el a megfelelő közönséget a megfelelő időben</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Több Ügyfél</h3>
              <p className="text-gray-600">Növelje forgalmát és ügyfélbázisát</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mérhető Eredmények</h3>
              <p className="text-gray-600">Részletes riportok és elemzések</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:border-purple-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                <Megaphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Szakértő Csapat</h3>
              <p className="text-gray-600">Tapasztalt marketing szakemberek</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}