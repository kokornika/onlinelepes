import { FadeIn } from '@/components/ui/motion';

export function Blog() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Blog és <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Tudástár</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Hamarosan érkeznek szakmai cikkeink a modern webfejlesztés és online marketing világából
            </p>
          </div>
        </FadeIn>

        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg border p-8 text-center">
            <p className="text-gray-600">
              Jelenleg dolgozunk a blog tartalmak elkészítésén. Kérjük, látogasson vissza később!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}