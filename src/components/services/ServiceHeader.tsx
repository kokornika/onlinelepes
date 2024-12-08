import { FadeIn } from '@/components/ui/motion';

export function ServiceHeader() {
  return (
    <FadeIn>
      <div className="text-center mb-8 sm:mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
          Szolgáltatásaink
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Komplex Megoldások az{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Online Sikerhez
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Személyre szabott szolgáltatások, amelyek segítenek vállalkozása digitális növekedésében
        </p>
      </div>
    </FadeIn>
  );
}