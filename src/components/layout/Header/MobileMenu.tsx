import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b">
      <nav className="px-4 py-2 space-y-2">
        <Link
          to="/szolgaltatasok/weboldal-fejlesztes"
          className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
          onClick={onClose}
        >
          Weboldal Fejlesztés
        </Link>
        <Link
          to="/szolgaltatasok/marketing"
          className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
          onClick={onClose}
        >
          Marketing
        </Link>
        <a
          href="#contact"
          className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
          onClick={onClose}
        >
          Kapcsolat
        </a>
        <div className="pt-2 pb-3">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            Ingyenes Konzultáció
          </Button>
        </div>
      </nav>
    </div>
  );
}