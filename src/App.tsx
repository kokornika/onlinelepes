import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ChristmasBanner } from '@/components/ChristmasBanner';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { lazyLoad } from '@/lib/lazy-loading';

// Lazy load pages
const HomePage = lazy(() => import('@/pages/HomePage').then(module => ({ default: module.HomePage })));
const AllServices = lazy(() => import('@/pages/AllServices').then(module => ({ default: module.AllServices })));
const WebsiteDevelopment = lazy(() => import('@/pages/WebsiteDevelopment').then(module => ({ default: module.WebsiteDevelopment })));
const Marketing = lazy(() => import('@/pages/Marketing').then(module => ({ default: module.Marketing })));
const GoogleAds = lazy(() => import('@/pages/marketing/GoogleAds').then(module => ({ default: module.GoogleAds })));
const FacebookAds = lazy(() => import('@/pages/marketing/FacebookAds').then(module => ({ default: module.FacebookAds })));
const SEO = lazy(() => import('@/pages/marketing/SEO').then(module => ({ default: module.SEO })));
const MaintenanceService = lazy(() => import('@/pages/MaintenanceService').then(module => ({ default: module.MaintenanceService })));
const Contact = lazy(() => import('@/pages/Contact').then(module => ({ default: module.Contact })));
const LetsStart = lazy(() => import('@/pages/LetsStart').then(module => ({ default: module.LetsStart })));
const References = lazy(() => import('@/pages/References').then(module => ({ default: module.References })));
const Terms = lazy(() => import('@/pages/Terms').then(module => ({ default: module.Terms })));
const Privacy = lazy(() => import('@/pages/Privacy').then(module => ({ default: module.Privacy })));
const CookiePolicy = lazy(() => import('@/pages/CookiePolicy').then(module => ({ default: module.CookiePolicy })));
const Blog = lazy(() => import('@/pages/Blog').then(module => ({ default: module.Blog })));
const WebsiteDevelopmentSzekszard = lazy(() => import('@/pages/landing/WebsiteDevelopmentSzekszard').then(module => ({ default: module.WebsiteDevelopmentSzekszard })));
const WebsiteAudit = lazy(() => import('@/pages/WebsiteAudit').then(module => ({ default: module.WebsiteAudit })));

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <ScrollToTop />
      <ChristmasBanner />
      <Header />
      <main className="relative">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/szolgaltatasok" element={<AllServices />} />
            <Route path="/szolgaltatasok/weboldal-fejlesztes" element={<WebsiteDevelopment />} />
            <Route path="/szolgaltatasok/marketing" element={<Marketing />} />
            <Route path="/szolgaltatasok/marketing/google-ads" element={<GoogleAds />} />
            <Route path="/szolgaltatasok/marketing/facebook-ads" element={<FacebookAds />} />
            <Route path="/szolgaltatasok/marketing/seo" element={<SEO />} />
            <Route path="/szolgaltatasok/karbantartas" element={<MaintenanceService />} />
            <Route path="/kapcsolat" element={<Contact />} />
            <Route path="/kezdjuk-el" element={<LetsStart />} />
            <Route path="/referenciak" element={<References />} />
            <Route path="/weboldal-keszites-szekszard" element={<WebsiteDevelopmentSzekszard />} />
            <Route path="/aszf" element={<Terms />} />
            <Route path="/adatvedelem" element={<Privacy />} />
            <Route path="/cookie-szabalyzat" element={<CookiePolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/weboldal-audit" element={<WebsiteAudit />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}