import { FadeIn } from '@/components/ui/motion';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'GB', name: 'English', emoji: '🇬🇧' },
  { code: 'DE', name: 'Deutsch', emoji: '🇩🇪' },
  { code: 'FR', name: 'Français', emoji: '🇫🇷' },
  { code: 'IT', name: 'Italiano', emoji: '🇮🇹' },
  { code: 'ES', name: 'Español', emoji: '🇪🇸' },
  { code: 'RU', name: 'Русский', emoji: '🇷🇺' },
  { code: 'CN', name: '中文', emoji: '🇨🇳' }
];

export function MultilingualShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
                <Globe className="inline-block w-4 h-4 mr-2" />
                Nemzetközi Piacok
              </span>
              <h2 className="text-4xl font-bold">
                Többnyelvű <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Weboldalak</span>
              </h2>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Érje el nemzetközi ügyfeleit anyanyelvi szinten. Többnyelvű weboldalaink 
                professzionális fordítással és lokalizációval készülnek, hogy vállalkozása 
                sikeresen léphessen ki a nemzetközi piacra.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {languages.map((lang) => (
                  <div 
                    key={lang.code}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border hover:border-purple-200 transition-colors"
                  >
                    <span className="text-2xl">{lang.emoji}</span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl transform -rotate-2" />
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=600"
                    alt="International Business"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {languages.slice(0, 4).map((lang) => (
                      <div key={lang.code} className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center text-lg">
                        {lang.emoji}
                      </div>
                    ))}
                  </div>
                  <div className="h-2 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full w-3/4" />
                  <div className="h-2 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full w-1/2" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}