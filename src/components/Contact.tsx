import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold">Kapcsolat</h2>
            <p className="mt-4 text-xl text-gray-600">
              Vegye fel velünk a kapcsolatot és kezdjük el közösen projektjét!
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium">Telefon</p>
                  <p className="text-gray-600">+36 30 123 4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium">E-mail</p>
                  <p className="text-gray-600">info@onlinelepes.hu</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium">Cím</p>
                  <p className="text-gray-600">1234 Budapest, Példa utca 123.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Név
                </label>
                <Input
                  type="text"
                  id="name"
                  className="mt-1"
                  placeholder="Az Ön neve"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <Input
                  type="email"
                  id="email"
                  className="mt-1"
                  placeholder="pelda@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Üzenet
                </label>
                <Textarea
                  id="message"
                  className="mt-1"
                  rows={4}
                  placeholder="Írja le projektjét..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                Üzenet Küldése
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}