import { useEffect, useState } from 'react';
import { Snowflake } from 'lucide-react';

const SNOWFLAKE_CHARS = ['❄', '❅', '❆'];
const SNOWFLAKE_COUNT = 50;

export function ChristmasTheme() {
  const [showBanner, setShowBanner] = useState(true);

  const closeBanner = () => {
    setShowBanner(false);
    localStorage.setItem('hideChristmasBanner', 'true');
  };

  useEffect(() => {
    const isHidden = localStorage.getItem('hideChristmasBanner');
    if (isHidden) {
      setShowBanner(false);
    }
  }, []);

  return (
    <>
      {/* Karácsonyi Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-green-600 text-white py-2 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Snowflake className="h-5 w-5 mr-2 animate-spin" />
                <span className="text-sm font-medium">
                  🎄 Ünnepi ajánlatunk: 20% kedvezmény minden szolgáltatásunkra december 31-ig! 🎁
                </span>
              </div>
              <button
                onClick={closeBanner}
                className="text-white hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Karácsonyi Dekoráció - Fejlett Hópelyhek */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {[...Array(SNOWFLAKE_COUNT)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-200/70 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              fontSize: `${Math.random() * 15 + 10}px`,
              animation: `fall ${7 + Math.random() * 13}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.4 + 0.3,
              filter: 'blur(0.3px)',
              textShadow: '0 0 5px rgba(191, 219, 254, 0.5)',
            }}
          >
            {SNOWFLAKE_CHARS[Math.floor(Math.random() * SNOWFLAKE_CHARS.length)]}
          </div>
        ))}
      </div>
    </>
  );
}