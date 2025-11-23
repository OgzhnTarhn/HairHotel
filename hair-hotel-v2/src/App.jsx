import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Bileşenler (Sabit Parçalar)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sayfalar
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog'; // <--- BLOG SAYFASI EKLENDİ
import Contact from './pages/Contact';

// Sayfa değişince ekranı otomatik en üste kaydıran kod
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
      
      {/* Menü her sayfada sabit */}
      <Navbar />
      
      <main>
        <Routes>
          {/* ANASAYFA */}
          <Route path="/" element={<Home />} />
          
          {/* HİZMET DETAYLARI (Erkek, Kadın, Nedir vs. Dinamik Yapı) */}
          <Route path="/hizmet/:slug" element={<ServiceDetail />} />
          
          {/* GALERİ SAYFASI */}
          <Route path="/galeri" element={<Gallery />} />
          
          {/* BLOG SAYFASI */}
          <Route path="/blog" element={<Blog />} />
          
          {/* İLETİŞİM SAYFASI */}
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer her sayfada sabit */}
      <Footer />
    </div>
  );
}

export default App;