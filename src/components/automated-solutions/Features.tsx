import { Calendar, MessageSquare, QrCode } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: Calendar,
    title: 'Intelligens Időpontfoglalás',
    description: 'Automatikus időpontfoglalási rendszer, amely 0-24 órában fogadja az ügyfeleket.',
    benefits: [
      'Online foglalási felület',
      'SMS emlékeztető',
      'Automatikus visszaigazolás',
      'Naptár szinkronizáció'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    path: '/szolgaltatasok/egyedi-fejlesztes/idopontfoglalas'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot Asszisztens',
    description: 'Mesterséges intelligenciával működő chatbot, amely 24 órában válaszol az ügyfelek kérdéseire.',
    benefits: [
      'Non-stop elérhetőség',
      'Azonnali válaszok',
      'Automatikus tanulás',
      'Többnyelvű támogatás'
    ],
    gradient: 'from-purple-500 to-pink-500',
    path: '/szolgaltatasok/egyedi-fejlesztes/chatbot'
  },
  {
    icon: QrCode,
    title: 'QR-kód Névjegykártya',
    description: 'Modern, digitális névjegykártya egyedi QR-kóddal. Ossza meg kapcsolatait egyetlen kattintással.',
    benefits: [
      'Egyedi design',
      'Kontaktmentes átadás',
      'Könnyű frissítés',
      'Környezetbarát'
    ],
    gradient: 'from-orange-500 to-red-500',
    link: 'https://qrnevjegy.hu/'
  }
];

export function Features() {
  const navigate = useNavigate();

  const handleServiceClick = (service: typeof features[0]) => {
    if ('link' in service && service.link) {
      window.open(service.link, '_blank');
    } else if ('path' in service && service.path) {
      navigate(service.path);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
            Főbb Funkciók
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Minden Amire <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szüksége Van</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Komplex megoldások, amelyek leveszik válláról a mindennapi adminisztráció terhét
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <SlideIn key={index} delay={0.1 * index} direction="up">
            <div 
              onClick={() => handleServiceClick(feature)}
              className="group bg-white rounded-xl shadow-lg border p-6 hover:border-purple-200 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient background that shows on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-xl`} />
              
              <div className="relative">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{feature.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-purple-600 font-medium group-hover:translate-x-1 transition-transform">
                  További információk <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}