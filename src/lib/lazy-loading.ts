import { lazy } from 'react';

// Helper function to create lazy loaded components with loading states
export function lazyLoad(importFunc: () => Promise<any>, fallback?: React.ReactNode) {
  const LazyComponent = lazy(importFunc);
  return {
    Component: LazyComponent,
    fallback
  };
}

// Preload function for critical components
export function preloadComponent(importFunc: () => Promise<any>) {
  const component = importFunc();
  return component;
}