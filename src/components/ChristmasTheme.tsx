import { useEffect, useState, useMemo } from 'react';
import { Snowflake } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SNOWFLAKE_CHARS = ['❄', '❅', '❆'];
const SNOWFLAKE_COUNT = 25;

interface SnowflakeConfig {
  left: string;
  fontSize: string;
  duration: string;
  delay: string;
  opacity: number;
  char: string;
}

export function ChristmasTheme() {
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const snowflakes = useMemo(() => {
    if (!isHomePage) return [];
    
    return Array.from({ length: SNOWFLAKE_COUNT }).map(() => ({
      left: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 15 + 10}px`,
      duration: `${7 + Math.random() * 13}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.4 + 0.3,
      char: SNOWFLAKE_CHARS[Math.floor(Math.random() * SNOWFLAKE_CHARS.length)]
    } as SnowflakeConfig));
  }, [isHomePage]);

  return (
    <>
      {/* Karácsonyi Banner - minden oldalon megjelenik */}
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

      {/* Hópelyhek - csak a főoldalon jelennek meg */}
      {isHomePage && (
        <div className="fixed inset-0 pointer-events-none z-[1] will-change-transform">
          {snowflakes.map((config, i) => (
            <div
              key={i}
              className="absolute text-blue-200/70 animate-fall"
              style={{
                left: config.left,
                top: '-20px',
                fontSize: config.fontSize,
                animation: `fall ${config.duration} linear infinite`,
                animationDelay: config.delay,
                opacity: config.opacity,
                filter: 'blur(0.3px)',
                textShadow: '0 0 5px rgba(191, 219, 254, 0.5)',
                willChange: 'transform',
              }}
            >
              {config.char}
            </div>
          ))}
        </div>
      )}
    </>
  );
}