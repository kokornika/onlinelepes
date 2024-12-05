import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              Onlinelepes
            </Link>
          </div>

          <nav className="hidden md:flex space-x-12">
            <Link 
              to="/szolgaltatasok/weboldal-fejlesztes"
              className="text-gray-700 hover:text-purple-600 transition-colors px-2 py-1 rounded-md hover:bg-purple-50"
            >
              Weboldal Fejlesztés
            </Link>
            <Link 
              to="/szolgaltatasok/marketing"
              className="text-gray-700 hover:text-purple-600 transition-colors px-2 py-1 rounded-md hover:bg-purple-50"
            >
              Marketing
            </Link>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-purple-600 transition-colors px-2 py-1 rounded-md hover:bg-purple-50"
            >
              Kapcsolat
            </a>
          </nav>

          <div className="hidden md:flex md:ml-12">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity">
              Ingyenes Konzultáció
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b">
          <nav className="px-4 py-2 space-y-2">
            <Link
              to="/szolgaltatasok/weboldal-fejlesztes"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Weboldal Fejlesztés
            </Link>
            <Link
              to="/szolgaltatasok/marketing"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketing
            </Link>
            <a
              href="#contact"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
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
      )}
    </header>
  );
}