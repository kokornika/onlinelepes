import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { WebsiteDevelopment } from '@/pages/WebsiteDevelopment';
import { Marketing } from '@/pages/Marketing';

export default function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/szolgaltatasok/weboldal-fejlesztes" element={<WebsiteDevelopment />} />
          <Route path="/szolgaltatasok/marketing" element={<Marketing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}