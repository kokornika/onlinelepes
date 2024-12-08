import { useState } from 'react';
import { FadeIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';

export function ResponsiveShowcase() {
  const [activeView, setActiveView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const mockContent = {
    hero: {
      title: 'Modern Weboldal',
      subtitle: 'Professzionális Megjelenés',
      cta: 'Kezdjük El'
    },
    features: [
      'Reszponzív Design',
      'Modern Technológiák',
      'SEO Optimalizálás'
    ]
  };

  return (
    <div className="py-20">
      {/* Device Selector */}
      <div className="flex justify-center gap-4 mb-12">
        <Button
          variant={activeView === 'desktop' ? 'default' : 'outline'}
          onClick={() => setActiveView('desktop')}
          className={activeView === 'desktop' ? 'bg-gradient-to-r from-purple-600 to-blue-500' : ''}
        >
          Desktop
        </Button>
        <Button
          variant={activeView === 'tablet' ? 'default' : 'outline'}
          onClick={() => setActiveView('tablet')}
          className={activeView === 'tablet' ? 'bg-gradient-to-r from-purple-600 to-blue-500' : ''}
        >
          Tablet
        </Button>
        <Button
          variant={activeView === 'mobile' ? 'default' : 'outline'}
          onClick={() => setActiveView('mobile')}
          className={activeView === 'mobile' ? 'bg-gradient-to-r from-purple-600 to-blue-500' : ''}
        >
          Mobile
        </Button>
      </div>

      {/* Device Preview */}
      <div className="relative flex justify-center">
        <FadeIn>
          <div className={`
            transition-all duration-500 ease-in-out
            ${activeView === 'desktop' ? 'w-[1024px]' : ''}
            ${activeView === 'tablet' ? 'w-[768px]' : ''}
            ${activeView === 'mobile' ? 'w-[320px]' : ''}
          `}>
            {/* Browser Chrome */}
            <div className="bg-gray-100 rounded-t-xl border border-b-0">
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 px-2">
                  <div className="bg-white rounded-md py-1 px-3 text-sm text-gray-500 text-center">
                    www.yourdomain.com
                  </div>
                </div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="bg-white border rounded-b-xl shadow-lg overflow-hidden">
              {/* Hero Section */}
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 px-6 py-12">
                <div className={`
                  text-center transition-all duration-500
                  ${activeView === 'desktop' ? 'px-32' : ''}
                  ${activeView === 'tablet' ? 'px-16' : ''}
                  ${activeView === 'mobile' ? 'px-4' : ''}
                `}>
                  <h1 className={`
                    font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text
                    ${activeView === 'desktop' ? 'text-5xl mb-6' : ''}
                    ${activeView === 'tablet' ? 'text-4xl mb-4' : ''}
                    ${activeView === 'mobile' ? 'text-3xl mb-3' : ''}
                  `}>
                    {mockContent.hero.title}
                  </h1>
                  <p className={`
                    text-gray-600
                    ${activeView === 'desktop' ? 'text-xl mb-8' : ''}
                    ${activeView === 'tablet' ? 'text-lg mb-6' : ''}
                    ${activeView === 'mobile' ? 'text-base mb-4' : ''}
                  `}>
                    {mockContent.hero.subtitle}
                  </p>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500">
                    {mockContent.hero.cta}
                  </Button>
                </div>
              </div>

              {/* Features Grid */}
              <div className={`
                grid gap-6 p-6
                ${activeView === 'desktop' ? 'grid-cols-3' : ''}
                ${activeView === 'tablet' ? 'grid-cols-2' : ''}
                ${activeView === 'mobile' ? 'grid-cols-1' : ''}
              `}>
                {mockContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl border hover:border-purple-200 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature}</h3>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Device Info */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-2">
          {activeView === 'desktop' && 'Desktop Nézet (1024px)'}
          {activeView === 'tablet' && 'Tablet Nézet (768px)'}
          {activeView === 'mobile' && 'Mobil Nézet (320px)'}
        </h3>
        <p className="text-gray-600">
          {activeView === 'desktop' && 'Teljes funkcionalitás és tartalom nagy képernyőkön'}
          {activeView === 'tablet' && 'Optimalizált elrendezés közepes méretű képernyőkre'}
          {activeView === 'mobile' && 'Mobil-first megközelítés, egyszerűsített navigáció'}
        </p>
      </div>
    </div>
  );
}