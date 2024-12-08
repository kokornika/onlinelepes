import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Kiss Péter',
    role: 'Ügyvezető',
    company: 'Fashion Store',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'Az új webshop bevezetése után 3 hónap alatt 250%-kal nőtt az online értékesítésünk. Profi csapat, profi munka!',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Nagy Anna',
    role: 'Marketing Vezető',
    company: 'Local Restaurant',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'A Google hirdetések beállítása után megtöbbszöröztük a foglalásaink számát. Végre nem kell a marketinggel foglalkoznom!',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Kovács János',
    role: 'Tulajdonos',
    company: 'Autószerviz',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'Az online időpontfoglalási rendszer bevezetése óta sokkal hatékonyabban tudjuk szervezni a munkát. Kiváló megoldás!',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'Szabó Eszter',
    role: 'Vezető',
    company: 'Beauty Salon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'A weboldalunk teljesen megújult, modern és könnyen kezelhető lett. Az ügyfelek imádják az online foglalási rendszert.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Tóth Gábor',
    role: 'Tulajdonos',
    company: 'IT Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'Kiváló szakmai tudás és profi hozzáállás jellemzi a csapatot. A projektünk minden elvárásunkat felülmúlta.',
    gradient: 'from-violet-500 to-purple-500'
  }
];

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      showNext();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      showPrev();
    }
  };

  const showPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const showNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 2 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Vélemények
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Mit Mondanak <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Ügyfeleink</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Elégedett ügyfeleink visszajelzései alapján folyamatosan fejlődünk
          </p>
        </div>
      </FadeIn>

      {/* Testimonials Carousel */}
      <div className="relative mt-8 sm:mt-12">
        <div 
          className="overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="group bg-white rounded-xl shadow-lg border p-6 sm:p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-xl relative overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-lg font-semibold">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="mt-4 text-gray-600 italic text-base sm:text-lg">"{testimonial.content}"</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-purple-600 w-4' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Navigation Buttons - Hidden on mobile */}
        <button
          onClick={showPrev}
          className="hidden sm:block absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border hover:border-purple-200 transition-all duration-300"
          disabled={isAnimating}
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={showNext}
          className="hidden sm:block absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border hover:border-purple-200 transition-all duration-300"
          disabled={isAnimating}
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Review Button */}
      <div className="mt-8 sm:mt-12 text-center">
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
          onClick={() => window.open("https://www.google.com/maps", "_blank")}
        >
          <Star className="mr-2 h-5 w-5 text-yellow-500" />
          Írjon Véleményt
        </Button>
      </div>
    </section>
  );
}