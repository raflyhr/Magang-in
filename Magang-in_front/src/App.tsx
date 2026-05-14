import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LoginPage } from './pages/LoginPage';
import { LowonganPage } from './pages/LowonganPage';
import { PerusahaanPage } from './pages/PerusahaanPage';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lowongan" element={<LowonganPage />} />
        <Route path="/perusahaan" element={<PerusahaanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
