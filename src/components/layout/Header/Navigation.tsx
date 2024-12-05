import { Link } from 'react-router-dom';

export function Navigation() {
  return (
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
  );
}