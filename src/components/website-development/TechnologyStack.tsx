import { FadeIn, SlideIn } from '@/components/ui/motion';
import { 
  Blocks, 
  Database, 
  Layout, 
  Palette, 
  Server, 
  Shield, 
  Smartphone,
  Sparkles
} from 'lucide-react';

const technologies = [
  {
    category: 'Frontend',
    icon: <Layout className="h-6 w-6" />,
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript']
  },
  {
    category: 'Backend',
    icon: <Server className="h-6 w-6" />,
    items: ['Node.js', 'Express', 'NestJS', 'Python']
  },
  {
    category: 'Database',
    icon: <Database className="h-6 w-6" />,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL']
  },
  {
    category: 'UI/UX',
    icon: <Palette className="h-6 w-6" />,
    items: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Material UI']
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="h-6 w-6" />,
    items: ['React Native', 'Flutter', 'Progressive Web Apps']
  },
  {
    category: 'Infrastructure',
    icon: <Blocks className="h-6 w-6" />,
    items: ['Docker', 'AWS', 'Vercel', 'Netlify']
  },
  {
    category: 'Optimization',
    icon: <Sparkles className="h-6 w-6" />,
    items: ['SEO', 'Performance', 'Core Web Vitals']
  },
  {
    category: 'Security',
    icon: <Shield className="h-6 w-6" />,
    items: ['SSL/TLS', 'OAuth', 'GDPR Compliance']
  }
];

export function TechnologyStack() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold">Technológiai Stack</h2>
            <p className="mt-4 text-xl text-gray-600">
              Modern és megbízható technológiák a sikeres projektekhez
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <SlideIn key={index} delay={0.1 * index} direction="up">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:border-purple-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center text-purple-600">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{tech.category}</h3>
                </div>
                <div className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg text-sm font-medium text-gray-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}