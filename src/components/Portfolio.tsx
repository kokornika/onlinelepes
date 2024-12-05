import { useState } from 'react';
import { FadeIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { CreativeProjects } from './portfolio/CreativeProjects';
import { WebProjects } from './portfolio/WebProjects';

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<'web' | 'creative'>('web');

  return (
    <section id="portfolio" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
              Portfólió
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Modern és kreatív megoldások minden platformra
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 flex justify-center gap-4">
          <Button
            variant={activeTab === 'web' ? 'default' : 'outline'}
            onClick={() => setActiveTab('web')}
            className={`px-8 ${
              activeTab === 'web'
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                : ''
            }`}
          >
            Weboldalak
          </Button>
          <Button
            variant={activeTab === 'creative' ? 'default' : 'outline'}
            onClick={() => setActiveTab('creative')}
            className={`px-8 ${
              activeTab === 'creative'
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                : ''
            }`}
          >
            Kreatív Munkák
          </Button>
        </div>

        {activeTab === 'web' ? <WebProjects /> : <CreativeProjects />}
      </div>
    </section>
  );
}