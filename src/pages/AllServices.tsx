import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Megaphone, QrCode, Search, Users, LineChart, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const services = [
  {
    title: 'Weboldal Fejlesztés',
    icon: Code,
    description: 'Modern és reszponzív weboldalak fejlesztése',
    services: [
      {
        name: 'Bemutatkozó Weboldal',
        description: 'Professzionális megjelenés az online térben'
      },
      {
        name: 'Webáruház',
        description: 'Online értékesítési felület, integrált fizetéssel'
      },
      {
        name: 'Egyedi Fejlesztés',
        description: 'Speciális igényekre szabott megoldások'
      }
    ],
    gradient: 'from-blue-500 to-cyan-500',
    path: '/szolgaltatasok/weboldal-fejlesztes'
  },
  {
    title: 'Marketing Szolgáltatások',
    icon: Megaphone,
    description: 'Online marketing megoldások a növekedéshez',
    services: [
      {
        name: 'Google Hirdetések',
        description: 'Célzott megjelenés a keresőben',
        icon: Search,
        path: '/szolgaltatasok/marketing/google-ads'
      },
      {
        name: 'Facebook & Instagram',
        description: 'Közösségi média marketing',
        icon: Users,
        path: '/szolgaltatasok/marketing/facebook-ads'
      },
      {
        name: 'Keresőoptimalizálás',
        description: 'Organikus láthatóság növelése',
        icon: LineChart,
        path: '/szolgaltatasok/marketing/seo'
      }
    ],
    gradient: 'from-purple-500 to-pink-500',
    path: '/szolgaltatasok/marketing'
  },
  {
    title: 'Digitális Névjegykártya',
    icon: QrCode,
    description: 'Modern, QR-kódos digitális névjegykártyák készítése egyedi designnal és funkcionalitással.',
    gradient: 'from-orange-500 to-red-500',
    isExternal: true,
    link: 'https://qrnevjegy.hu/'
  }
];

export function AllServices() {
  const navigate = useNavigate();

  const handleServiceClick = (service: typeof services[0], subService?: { path?: string }) => {
    if (subService?.path) {
      navigate(subService.path);
    } else if ('link' in service && service.link) {
      window.open(service.link, '_blank');
    } else if ('path' in service && service.path) {
      navigate(service.path);
    }
  };

  return (
    <div className="min-h-screen pt-8 sm:pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Szolgáltatásaink
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Átfogó megoldások vállalkozása digitális jelenlétének kiépítéséhez és fejlesztéséhez
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {services.map((service, index) => (
            <SlideIn key={index} delay={0.1 * index} direction="up">
              <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold">{service.title}</h2>
                    <p className="mt-1 text-gray-600">{service.description}</p>
                  </div>
                </div>

                {service.services && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {service.services.map((subService, subIndex) => (
                      <div
                        key={subIndex}
                        onClick={() => handleServiceClick(service, subService)}
                        className="group p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border hover:border-purple-200 transition-all duration-300 cursor-pointer"
                      >
                        {'icon' in subService ? (
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3`}>
                            <subService.icon className="h-5 w-5 text-white" />
                          </div>
                        ) : null}
                        <h3 className="font-semibold mb-1">{subService.name}</h3>
                        <p className="text-sm text-gray-600">{subService.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <Button
                    onClick={() => handleServiceClick(service)}
                    variant="outline"
                    className="w-full sm:w-auto border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
                  >
                    További információk <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Contact Section */}
        <SlideIn direction="up" delay={0.4}>
          <div className="mt-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Kérjen <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Ajánlatot</span>
                </h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Név
                      </label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Az Ön neve"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail
                      </label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="pelda@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefonszám
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="+36 30 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Üzenet
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Írja le, milyen szolgáltatás érdekli..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                    Ajánlatkérés Küldése <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Kapcsolat
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border flex items-center justify-center text-purple-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium">Telefonszám</div>
                      <a href="tel:+36303551793" className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                        +36 30 355 1793
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border flex items-center justify-center text-purple-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium">E-mail</div>
                      <a href="mailto:info@onlinelepes.hu" className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                        info@onlinelepes.hu
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold mb-4">Miért Válasszon Minket?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                      <span>Modern technológiák használata</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                      <span>Személyre szabott megoldások</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                      <span>Folyamatos támogatás</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                      <span>Rugalmas együttműködés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}