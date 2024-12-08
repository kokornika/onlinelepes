import { ArrowRight, Globe, ShoppingCart, Users, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
                Online Jelenlét = Üzleti Siker
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Növelje Vállalkozása <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Online Bevételeit</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Modern weboldal fejlesztés, amely segít vállalkozásának az online térben való növekedésben. 
                Már az első hónaptól mérhető eredmények!
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
                  <span className="mr-2">+36 30 123 4567</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text group-hover:opacity-80">
                    Azonnali Kapcsolat
                  </span>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { icon: <Globe className="h-6 w-6" />, label: '24/7 Online Jelenlét', gradient: 'from-blue-500 to-cyan-500' },
                  { icon: <ShoppingCart className="h-6 w-6" />, label: 'Növekvő Eladások', gradient: 'from-purple-500 to-pink-500' },
                  { icon: <Users className="h-6 w-6" />, label: 'Több Ügyfél', gradient: 'from-orange-500 to-red-500' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white transform hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl transform rotate-2" />
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
                    alt="Analytics Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Weboldal Látogatók</span>
                    </div>
                    <div className="text-green-500 font-medium">+156%</div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                      <div className="text-sm text-gray-600">Vásárlók</div>
                      <div className="text-lg font-semibold text-purple-600">52 új</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                      <div className="text-sm text-gray-600">Érdeklődők</div>
                      <div className="text-lg font-semibold text-purple-600">124 új</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                      <div className="text-sm text-gray-600">Megtérülés</div>
                      <div className="text-lg font-semibold text-purple-600">312%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}