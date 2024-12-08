import { useState } from 'react';
import { FadeIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { CreativeProjects } from './portfolio/CreativeProjects';
import { WebProjects } from './portfolio/WebProjects';

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<'web' | 'creative'>('web');

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Portfólió
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Modern és{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Kreatív Megoldások
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ismerje meg eddigi munkáinkat és ügyfeleinket
          </p>
        </div>
      </FadeIn>

      <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
        <Button
          variant={activeTab === 'web' ? 'default' : 'outline'}
          onClick={() => setActiveTab('web')}
          className={`px-4 sm:px-8 text-sm sm:text-base ${
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
          className={`px-4 sm:px-8 text-sm sm:text-base ${
            activeTab === 'creative'
              ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
              : ''
          }`}
        >
          Kreatív Munkák
        </Button>
      </div>

      {activeTab === 'web' ? <WebProjects /> : <CreativeProjects />}
    </section>
  );
}