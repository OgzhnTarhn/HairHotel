import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Bileşenler
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sayfalar
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Sayfa değişince ekranı en üste kaydıran sihirli kod
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
      {/* Sayfa geçişlerinde yukarı atma fonksiyonu */}
      <ScrollToTop />
      
      <Navbar />
      
      <main>
        <Routes>
          {/* ANASAYFA */}
          <Route path="/" element={<Home />} />
          
          {/* HİZMET DETAYLARI (Erkek, Kadın, Nedir vs.) */}
          <Route path="/hizmet/:slug" element={<ServiceDetail />} />
          
          {/* GALERİ SAYFASI */}
          <Route path="/galeri" element={<Gallery />} />
          
          {/* İLETİŞİM SAYFASI */}
          <Route path="/iletisim" element={<Contact />} />
          
          {/* BLOG (Henüz yapmadık, hata vermesin diye geçici yazı koydum) */}
          <Route path="/blog" element={<div className="pt-40 text-center pb-40 text-gray-400">Blog Sayfası Yapım Aşamasında...</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;