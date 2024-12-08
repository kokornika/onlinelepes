import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { WebsiteDevelopment } from '@/pages/WebsiteDevelopment';
import { Marketing } from '@/pages/Marketing';
import { GoogleAds } from '@/pages/marketing/GoogleAds';
import { FacebookAds } from '@/pages/marketing/FacebookAds';
import { SEO } from '@/pages/marketing/SEO';
import { AutomatedSolutions } from '@/pages/AutomatedSolutions';
import { AppointmentBooking } from '@/pages/automated-solutions/AppointmentBooking';
import { ChatbotAssistant } from '@/pages/automated-solutions/ChatbotAssistant';
import { Contact } from '@/pages/Contact';
import { LetsStart } from '@/pages/LetsStart';
import { References } from '@/pages/References';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ChristmasBanner } from '@/components/ChristmasBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <ScrollToTop />
      <ChristmasBanner />
      <Header />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/szolgaltatasok/weboldal-fejlesztes" element={<WebsiteDevelopment />} />
          <Route path="/szolgaltatasok/marketing" element={<Marketing />} />
          <Route path="/szolgaltatasok/marketing/google-ads" element={<GoogleAds />} />
          <Route path="/szolgaltatasok/marketing/facebook-ads" element={<FacebookAds />} />
          <Route path="/szolgaltatasok/marketing/seo" element={<SEO />} />
          <Route path="/szolgaltatasok/egyedi-fejlesztes" element={<AutomatedSolutions />} />
          <Route path="/szolgaltatasok/egyedi-fejlesztes/idopontfoglalas" element={<AppointmentBooking />} />
          <Route path="/szolgaltatasok/egyedi-fejlesztes/chatbot" element={<ChatbotAssistant />} />
          <Route path="/kapcsolat" element={<Contact />} />
          <Route path="/kezdjuk-el" element={<LetsStart />} />
          <Route path="/referenciak" element={<References />} />
        </Routes>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}