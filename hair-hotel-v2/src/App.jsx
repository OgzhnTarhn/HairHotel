import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Bileşen Importları
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO'; // <--- 1. EKLENDİ
import CookieConsent from './components/CookieConsent'; // <--- 2. EKLENDİ

// Sayfa Importları
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="font-sans text-gray-200 min-h-screen bg-dark-bg">
      {/* Varsayılan SEO Ayarları (Her sayfa için temel) */}
      <SEO /> 
      
      <ScrollToTop />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmet/:slug" element={<ServiceDetail />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/iletisim" element={<Contact />} />
          
          {/* YASAL SAYFALAR ROTASI */}
          <Route path="/kurumsal/:slug" element={<Legal />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Çerez Bildirimi (En üst katmanda görünür) */}
      <CookieConsent />
    </div>
  );
}

export default App;