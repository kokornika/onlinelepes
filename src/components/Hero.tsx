import { ArrowRight, Code2, Rocket, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { Link, useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Modern Weboldalak</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                Amelyek Értéket Teremtenek
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professzionális weboldalkészítés modern technológiákkal. Segítünk online jelenlétének 
              kialításában, hogy vállalkozása sikeresen működjön a digitális térben.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/kezdjuk-el">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                >
                  Kezdjük El <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
                onClick={() => navigate('/referenciak')}
              >
                Referenciák Megtekintése
              </Button>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
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