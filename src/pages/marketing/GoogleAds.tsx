import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { GoogleAdsExample } from '@/components/marketing/GoogleAdsExample';

const features = [
  {
    title: 'Azonnali Eredmények',
    value: '24 óra',
    description: 'azonnali láthatóság a Google keresőben'
  },
  {
    title: 'Célzott Hirdetések',
    value: '98%',
    description: 'releváns látogatók'
  },
  {
    title: 'Költséghatékony',
    value: '3.5×',
    description: 'ROI átlagosan'
  }
];

const benefits = [
  'Azonnali láthatóság a Google keresőben',
  'Csak akkor fizet, ha rákattintanak a hirdetésére',
  'Pontosan mérhető eredmények és ROI',
  'Rugalmasan módosítható költségkeret',
  'Földrajzi és időbeni célzás lehetősége',
  'Versenyelőny a konkurenciával szemben'
];

const services = [
  'Részletes piacelemzés és stratégia kidolgozása',
  'Kulcsszókutatás és versenytárselemzés-elemzés',
  'Hirdetési kampányok létrehozása és optimalizálása',
  'Konverziók követése és mérése',
  'Havi riportok és elemzések',
  'Folyamatos optimalizálás és finomhangolás'
];

export function GoogleAds() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <Breadcrumb 
          items={[
            { label: 'Szolgáltatások', href: '/szolgaltatasok' },
            { label: 'Marketing', href: '/szolgaltatasok/marketing' },
            { label: 'Google Hirdetések' }
          ]} 
        />

        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Google <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Hirdetések</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Jelenjen meg az első helyen, amikor szolgáltatását keresik! A Google 
              hirdetésekkel azonnali láthatóságot és több vásárlót szerezhet vállalkozásának.
            </p>
          </div>
        </FadeIn>

        {/* Google Ads Example */}
        <GoogleAdsExample />

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                {feature.value}
              </div>
              <div className="mt-2 font-semibold">{feature.title}</div>
              <div className="mt-1 text-sm text-gray-600">{feature.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits & Services */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">
              Miért érdemes Google Ads hirdetéseket indítani?
            </h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">
              Mit tartalmaz a szolgáltatás?
            </h2>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                  <span className="text-gray-600">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
          >
            Ingyenes Konzultáció <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}