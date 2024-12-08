import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion';

const services = [
  {
    title: 'Weboldal Fejlesztés',
    href: '/szolgaltatasok/weboldal-fejlesztes'
  },
  {
    title: 'Marketing',
    href: '/szolgaltatasok/marketing'
  },
  {
    title: 'Google Hirdetések',
    href: '/szolgaltatasok/marketing/google-ads'
  },
  {
    title: 'Facebook & Instagram',
    href: '/szolgaltatasok/marketing/facebook-ads'
  },
  {
    title: 'Keresőoptimalizálás',
    href: '/szolgaltatasok/marketing/seo'
  },
  {
    title: 'Karbantartás',
    href: '/szolgaltatasok/karbantartas'
  }
];

const company = [
  {
    title: 'Rólunk',
    href: '/rolunk'
  },
  {
    title: 'Referenciák',
    href: '/referenciak'
  },
  {
    title: 'Kapcsolat',
    href: '/kapcsolat'
  },
  {
    title: 'Kezdjük El',
    href: '/kezdjuk-el'
  }
];

const legal = [
  {
    title: 'ÁSZF',
    href: '/aszf'
  },
  {
    title: 'Adatvédelem',
    href: '/adatvedelem'
  },
  {
    title: 'Cookie Szabályzat',
    href: '/cookie-szabalyzat'
  }
];

const contact = {
  phone: '+36 30 355 1793',
  email: 'info@onlinelepes.hu',
  phoneAvailability: 'Telefonos elérhetőség: H-V: 08:00 - 20:00'
};

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <FadeIn>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Szolgáltatások</h3>
              <ul className="space-y-2">
                {services.map((item) => (
                  <li key={item.title}>
                    <Link 
                      to={item.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Vállalkozás</h3>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.title}>
                    <Link 
                      to={item.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{contact.email}</span>
                  </a>
                </li>
                <li className="text-gray-600">
                  {contact.phoneAvailability}
                </li>
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kövess Minket</h3>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.title}>
                    <Link 
                      to={item.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t">
            <div className="text-center text-gray-600">
              &copy; {new Date().getFullYear()} Onlinelepes. Minden jog fenntartva.
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}