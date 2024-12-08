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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Vélemények
            </span>
            <h2 className="text-4xl font-bold">
              Mit Mondanak <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Ügyfeleink</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Elégedett ügyfeleink visszajelzései alapján folyamatosan fejlődünk
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Carousel */}
        <div className="mt-20 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-4"
                >
                  <div className="group bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl relative overflow-hidden h-full">
                    {/* Gradient background that shows on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{testimonial.name}</div>
                        <div className="text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="mt-4 text-gray-600 italic">"{testimonial.content}"</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={showPrev}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border hover:border-purple-200 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={showNext}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border hover:border-purple-200 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Review Button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
            onClick={() => window.open("https://www.google.com/maps/place//data=!4m3!3m2!1s0x48037b3dfc5abced:0x8236b98506633346!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2", "_blank")}
          >
            <Star className="mr-2 h-5 w-5 text-yellow-500" />
            Írjon Véleményt
          </Button>
        </div>
      </div>
    </section>
  );
}