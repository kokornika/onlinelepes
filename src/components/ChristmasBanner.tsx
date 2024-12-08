import { X } from 'lucide-react';
import { useState } from 'react';
import { FadeIn } from '@/components/ui/motion';

export function ChristmasBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <FadeIn>
      <div className="relative bg-gradient-to-r from-red-600 via-green-700 to-green-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap">
            <div className="flex items-center">
              <span className="flex p-2 rounded-lg">
                <span className="text-white text-sm md:text-base font-medium">
                  🎄 Ünnepi ajánlatunk: 20% kedvezmény minden szolgáltatásunkra december 31-ig! 🎁
                </span>
              </span>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
            <button
              type="button"
              className="flex p-2 rounded-md hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsVisible(false)}
            >
              <span className="sr-only">Bezárás</span>
              <X className="h-4 w-4 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}