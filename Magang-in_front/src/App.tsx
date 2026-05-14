import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { OAuthCallbackPage } from './pages/OAuthCallbackPage';
import { LowonganPage } from './pages/LowonganPage';
import { PerusahaanPage } from './pages/PerusahaanPage';

// Layout dengan Navbar + Footer (untuk halaman umum)
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

// Landing page content
function LandingContent() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman publik dengan Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingContent />} />
          <Route path="/lowongan" element={<LowonganPage />} />
          <Route path="/perusahaan" element={<PerusahaanPage />} />

          {/* Protected: hanya role "pengguna" */}
          <Route element={<ProtectedRoute allowedRoles={['pengguna']} />}>
            <Route path="/dashboard" element={<div style={{ padding: '80px 24px', textAlign: 'center' }}><h2>Dashboard Pengguna</h2><p>Halaman ini sedang dalam pengembangan.</p></div>} />
          </Route>

          {/* Protected: hanya role "mitra" */}
          <Route element={<ProtectedRoute allowedRoles={['mitra']} />}>
            <Route path="/mitra/dashboard" element={<div style={{ padding: '80px 24px', textAlign: 'center' }}><h2>Dashboard Mitra</h2><p>Halaman ini sedang dalam pengembangan.</p></div>} />
          </Route>

          {/* Protected: hanya role "admin" */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<div style={{ padding: '80px 24px', textAlign: 'center' }}><h2>Dashboard Admin</h2><p>Halaman ini sedang dalam pengembangan.</p></div>} />
          </Route>

          {/* Protected: semua user yang sudah login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<div style={{ padding: '80px 24px', textAlign: 'center' }}><h2>Profile</h2><p>Halaman ini sedang dalam pengembangan.</p></div>} />
          </Route>
        </Route>

        {/* Halaman tanpa Navbar (punya layout sendiri) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth/google/callback" element={<OAuthCallbackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
