import { FadeIn } from '@/components/ui/motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  isExternal?: boolean;
}

export function ServiceCard({ icon: Icon, title, description, onClick, isExternal }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative p-8 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-purple-600 group-hover:scale-110 transition-transform">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-xl font-semibold flex items-center gap-2">
          {title}
          {isExternal && (
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
              Külső Link
            </span>
          )}
        </h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}