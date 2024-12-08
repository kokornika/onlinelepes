// Performance monitoring utilities
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    console.log(metric); // In production, send to analytics
  }
}

// Image loading optimization
export function getImageDimensions(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.src = src;
  });
}

// Resource hints for critical assets
export function addResourceHints() {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://images.unsplash.com' }
  ];

  hints.forEach(({ rel, href, crossorigin }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (crossorigin) link.crossOrigin = 'true';
    document.head.appendChild(link);
  });
}