import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  isExternal?: boolean;
  gradient?: string;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  onClick, 
  isExternal, 
  gradient = 'from-purple-500 to-blue-500' 
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative p-6 sm:p-8 bg-white rounded-xl border-2 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer transform hover:-translate-y-1 active:translate-y-0 active:shadow-md"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-xl`} />
      <div className="relative">
        <div className="flex items-center gap-4 mb-4 sm:mb-6">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 text-base sm:text-lg mb-6">{description}</p>
        <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-1 transition-transform">
          További információk <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
}