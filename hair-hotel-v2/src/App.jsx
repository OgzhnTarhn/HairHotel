import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail'; // <--- 1. BU SATIRI EKLEDİK (Dosyayı çağırdık)
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-sans text-gray-200 min-h-screen bg-dark-bg">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 2. AŞAĞIDAKİ SATIRI DEĞİŞTİRDİK: Artık gerçek sayfayı gösteriyor */}
          <Route path="/hizmet/:slug" element={<ServiceDetail />} />
          
          {/* Diğer sayfalar şimdilik test olarak kalsın, onları sonra yapacağız */}
          <Route path="/iletisim" element={<div className="pt-40 text-center pb-40">İletişim Sayfası Gelecek</div>} />
          <Route path="/galeri" element={<div className="pt-40 text-center pb-40">Galeri Sayfası Gelecek</div>} />
          <Route path="/blog" element={<div className="pt-40 text-center pb-40">Blog Sayfası Gelecek</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;