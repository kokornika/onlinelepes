import { ArrowRight, Code2, Rocket, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm pt-32 pb-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Modern Weboldalak</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                Amelyek Értéket Teremtenek
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professzionális weboldalkészítés modern technológiákkal. Segítünk online jelenlétének 
              kialakításában, hogy vállalkozása sikeresen működjön a digitális térben.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
              >
                Kezdjük El <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
              >
                Referenciák Megtekintése
              </Button>
            </div>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Rocket className="h-6 w-6 text-purple-600" />,
                title: "Gyors Fejlesztés",
                description: "2-4 hét alatt elkészülő projektek",
                delay: 0.8,
              },
              {
                icon: <Code2 className="h-6 w-6 text-blue-600" />,
                title: "Modern Technológiák",
                description: "Legújabb fejlesztési eszközök",
                delay: 1,
              },
              {
                icon: <Zap className="h-6 w-6 text-purple-600" />,
                title: "Optimalizált Teljesítmény",
                description: "Gyors betöltés és működés",
                delay: 1.2,
              },
            ].map((feature, index) => (
              <FadeIn key={index} delay={feature.delay}>
                <div className="h-full flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}