import { FadeIn } from '@/components/ui/motion';

const clients = [
  {
    name: 'Fashion Store',
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100',
  },
  {
    name: 'Local Restaurant',
    logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200&h=100',
  },
  {
    name: 'Legal Office',
    logo: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=200&h=100',
  },
  {
    name: 'Fitness Center',
    logo: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=200&h=100',
  },
  {
    name: 'Tech Company',
    logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=200&h=100',
  },
  {
    name: 'Healthcare Provider',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=200&h=100',
  }
];

export function ClientLogos() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Ügyfeleink
            </span>
            <h2 className="text-4xl font-bold">
              Akik Már <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Minket Választottak</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Büszkék vagyunk arra, hogy olyan nagyszerű cégekkel dolgozhatunk együtt
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:border-purple-200 transition-all duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}