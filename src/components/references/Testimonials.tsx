import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kiss Péter',
    role: 'Ügyvezető',
    company: 'Fashion Store',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'Az új webshop bevezetése után 3 hónap alatt 250%-kal nőtt az online értékesítésünk. Profi csapat, profi munka!',
    rating: 5
  },
  {
    name: 'Nagy Anna',
    role: 'Marketing Vezető',
    company: 'Local Restaurant',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'A Google hirdetések beállítása után megtöbbszöröztük a foglalásaink számát. Végre nem kell a marketinggel foglalkoznom!',
    rating: 5
  },
  {
    name: 'Kovács János',
    role: 'Tulajdonos',
    company: 'Legal Office',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'Kiváló szakmai tudás és profi hozzáállás jellemzi a csapatot. A projektünk minden elvárásunkat felülmúlta.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideIn key={index} delay={0.2 * index} direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}