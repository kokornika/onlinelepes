import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { Link } from 'react-router-dom';

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">
              Kezdjük El a <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Közös Munkát</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Vegye fel velünk a kapcsolatot és beszéljük át, hogyan tudnánk az Ön vállalkozását is sikerre vinni!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kezdjuk-el">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                >
                  Ingyenes Konzultáció <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+36303551793">
                <Button 
                  size="lg"
                  variant="outline"
                  className="group border-2"
                >
                  <span className="mr-2">+36 30 355 1793</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text group-hover:opacity-80">
                    Azonnali Kapcsolat
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}