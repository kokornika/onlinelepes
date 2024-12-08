import { Calendar, MessageSquare, QrCode } from 'lucide-react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Intelligens Időpontfoglalás',
    description: 'Automatikus időpontfoglalási rendszer, amely 0-24 órában fogadja az ügyfeleket. Többé nem kell a telefonhívásokkal foglalkoznia.',
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
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'AI Chatbot Asszisztens',
    description: 'Mesterséges intelligenciával működő chatbot, amely 24 órában válaszol az ügyfelek kérdéseire, tehermentesítve ezzel az ügyfélszolgálatot.',
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
    icon: <QrCode className="h-6 w-6" />,
    title: 'QR-kód Névjegykártya',
    description: 'Modern, digitális névjegykártya egyedi QR-kóddal. Ossza meg kapcsolatait és céges információit egyetlen kattintással.',
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Főbb Funkciók
            </span>
            <h2 className="text-4xl font-bold">
              Minden Amire <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Szüksége Van</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Komplex megoldások, amelyek leveszik válláról a mindennapi adminisztráció terhét
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <SlideIn key={index} delay={0.2 * index} direction="up">
              <div 
                className="group bg-white rounded-xl shadow-lg border p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl relative overflow-hidden cursor-pointer"
                onClick={() => handleServiceClick(feature)}
              >
                {/* Gradient background that shows on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 group/item">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${feature.gradient}`} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}