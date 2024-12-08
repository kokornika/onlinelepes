import { useState } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

export function ResponsiveShowcase() {
  const [activeView, setActiveView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const viewConfigs = {
    desktop: {
      icon: <Monitor className="h-5 w-5" />,
      label: 'Desktop',
      width: 'w-full',
      mockup: {
        width: 'w-full max-w-4xl',
        height: 'h-[600px]',
        padding: 'p-8',
        titleSize: 'text-3xl',
        subtitleSize: 'text-xl',
        gridCols: 'grid-cols-3'
      }
    },
    tablet: {
      icon: <Tablet className="h-5 w-5" />,
      label: 'Tablet',
      width: 'w-[768px]',
      mockup: {
        width: 'w-[768px]',
        height: 'h-[500px]',
        padding: 'p-6',
        titleSize: 'text-2xl',
        subtitleSize: 'text-lg',
        gridCols: 'grid-cols-2'
      }
    },
    mobile: {
      icon: <Smartphone className="h-5 w-5" />,
      label: 'Mobile',
      width: 'w-[375px]',
      mockup: {
        width: 'w-[375px]',
        height: 'h-[600px]',
        padding: 'p-4',
        titleSize: 'text-xl',
        subtitleSize: 'text-base',
        gridCols: 'grid-cols-1'
      }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Reszponzív Design
            </span>
            <h2 className="text-4xl font-bold">
              Tökéletes Megjelenés <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Minden Eszközön</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Weboldala automatikusan alkalmazkodik a különböző képernyőméretekhez, 
              hogy látogatói a legjobb élményt kapják minden eszközön.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12">
          {/* Device Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {(Object.keys(viewConfigs) as Array<keyof typeof viewConfigs>).map((view) => (
              <Button
                key={view}
                variant={activeView === view ? 'default' : 'outline'}
                onClick={() => setActiveView(view)}
                className={`gap-2 ${activeView === view ? 'bg-gradient-to-r from-purple-600 to-blue-500' : ''}`}
              >
                {viewConfigs[view].icon}
                {viewConfigs[view].label}
              </Button>
            ))}
          </div>

          {/* Device Preview */}
          <div className="relative flex justify-center">
            <SlideIn direction="up">
              <div className={`
                transition-all duration-500 ease-in-out
                ${viewConfigs[activeView].width}
                mx-auto
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
                <div className={`bg-white border rounded-b-xl shadow-lg overflow-hidden ${viewConfigs[activeView].mockup.height}`}>
                  <div className={`h-full ${viewConfigs[activeView].mockup.padding}`}>
                    {/* Hero Section */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                      <h1 className={`font-bold ${viewConfigs[activeView].mockup.titleSize} bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4`}>
                        Modern Weboldal
                      </h1>
                      <p className={`${viewConfigs[activeView].mockup.subtitleSize} text-gray-600 mb-6`}>
                        Professzionális megjelenés minden eszközön
                      </p>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                        Kezdjük El
                      </Button>
                    </div>

                    {/* Features Grid */}
                    <div className={`grid ${viewConfigs[activeView].mockup.gridCols} gap-4`}>
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4">
                          <div className="w-10 h-10 rounded-lg bg-white mb-3" />
                          <div className="h-2 bg-white rounded-full w-2/3 mb-2" />
                          <div className="h-2 bg-white rounded-full w-1/2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Device Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-2">
              {activeView === 'desktop' && 'Asztali Számítógép Nézet'}
              {activeView === 'tablet' && 'Tablet Nézet'}
              {activeView === 'mobile' && 'Mobil Nézet'}
            </h3>
            <p className="text-gray-600">
              {activeView === 'desktop' && 'Teljes funkcionalitás és tartalom nagy képernyőkön'}
              {activeView === 'tablet' && 'Optimalizált elrendezés közepes méretű képernyőkre'}
              {activeView === 'mobile' && 'Mobil-first megközelítés, egyszerűsített navigáció'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}