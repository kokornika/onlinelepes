import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes = '100vw'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(w => `${src}?auto=format&w=${w} ${w}w`)
      .join(', ');
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      onLoad={() => setIsLoaded(true)}
      srcSet={generateSrcSet()}
      sizes={sizes}
    />
  );
}