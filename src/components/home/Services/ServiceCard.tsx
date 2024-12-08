import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  isExternal?: boolean;
  gradient?: string;
}

export function ServiceCard({ icon: Icon, title, description, onClick, isExternal, gradient = 'from-purple-500 to-blue-500' }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative p-8 bg-white rounded-xl border-2 hover:border-purple-300 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] cursor-pointer transform hover:-translate-y-1"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-xl`} />
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            {title}
            {isExternal && (
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                Külső Link
              </span>
            )}
          </h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>
        <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-1 transition-transform">
          További információk <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
}