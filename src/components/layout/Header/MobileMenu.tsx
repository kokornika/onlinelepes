import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Megaphone, Globe2 } from 'lucide-react';

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
    href: "/szolgaltatasok/marketing"
  },
  {
    title: "Automatizált Megoldások",
    icon: <Globe2 className="h-5 w-5" />,
    href: "/szolgaltatasok/egyedi-fejlesztes"
  }
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b">
      <nav className="px-4 py-2 space-y-2">
        <div className="px-4 py-2 text-sm font-medium text-gray-500">Szolgáltatások</div>
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.href}
            className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
            onClick={onClose}
          >
            {service.icon}
            {service.title}
          </Link>
        ))}
        <div className="pt-2 pb-3">
          <Link to="/kapcsolat">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
              Ingyenes Konzultáció
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}