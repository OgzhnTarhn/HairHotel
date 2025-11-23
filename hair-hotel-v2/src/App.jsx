import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'; // <--- EKLENDİ
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-sans text-gray-200 min-h-screen bg-dark-bg">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Diğer sayfalar henüz boş, test amaçlı duruyor */}
          <Route path="/iletisim" element={<div className="pt-40 text-center pb-40">İletişim Sayfası Gelecek</div>} />
          <Route path="/galeri" element={<div className="pt-40 text-center pb-40">Galeri Sayfası Gelecek</div>} />
          <Route path="/hizmet/:slug" element={<div className="pt-40 text-center pb-40">Hizmet Detay Sayfası</div>} />
        </Routes>
      </main>

      <Footer /> {/* <--- EKLENDİ (En alta sabitlendi) */}
    </div>
  );
}

export default App;