import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Megaphone, Search, Users, LineChart, Settings, ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    title: "Weboldal Fejlesztés",
    icon: <Code className="h-5 w-5" />,
    href: "/szolgaltatasok/weboldal-fejlesztes"
  },
  {
    title: "Marketing",
    icon: <Megaphone className="h-5 w-5" />,
    href: "/szolgaltatasok/marketing",
    subServices: [
      {
        title: "Google Hirdetések",
        description: "Jelenjen meg az első helyen, amikor szolgáltatását keresik",
        icon: <Search className="h-5 w-5" />,
        href: "/szolgaltatasok/marketing/google-ads"
      },
      {
        title: "Facebook & Instagram",
        description: "Érje el célközönségét a közösségi médiában",
        icon: <Users className="h-5 w-5" />,
        href: "/szolgaltatasok/marketing/facebook-ads"
      },
      {
        title: "Keresőoptimalizálás",
        description: "Kerüljön az első oldalra a Google keresőben",
        icon: <LineChart className="h-5 w-5" />,
        href: "/szolgaltatasok/marketing/seo"
      }
    ]
  },
  {
    title: "Karbantartás",
    icon: <Settings className="h-5 w-5" />,
    href: "/szolgaltatasok/karbantartas"
  }
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b">
      <nav className="px-4 py-2 space-y-2">
        <div className="px-4 py-2 text-sm font-medium text-gray-500">Szolgáltatások</div>
        {services.map((service) => (
          <div key={service.title} className="space-y-2">
            <div
              className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors cursor-pointer"
              onClick={() => service.subServices ? toggleService(service.title) : onClose()}
            >
              <Link
                to={service.href}
                className="flex items-center gap-2 flex-1"
                onClick={onClose}
              >
                {service.icon}
                <span>{service.title}</span>
              </Link>
              {service.subServices && (
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    expandedService === service.title ? 'rotate-180' : ''
                  }`} 
                />
              )}
            </div>
            
            {service.subServices && expandedService === service.title && (
              <div className="pl-8 space-y-2">
                {service.subServices.map((subService) => (
                  <Link
                    key={subService.title}
                    to={subService.href}
                    className="flex items-start gap-2 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                    onClick={onClose}
                  >
                    <div className="flex-shrink-0 mt-1">{subService.icon}</div>
                    <div>
                      <div className="font-medium">{subService.title}</div>
                      <div className="text-sm text-gray-500">{subService.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="pt-2 pb-3">
          <Link to="/kapcsolat" onClick={onClose}>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
              Ingyenes Konzultáció
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}