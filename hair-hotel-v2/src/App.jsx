import Navbar from './components/Navbar';
import Home from './pages/Home'; // <--- BU EKLENDİ (Anasayfayı çağırdık)
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-sans text-gray-200 min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Navbar sabit olduğu için arkada kalmasın ama Slider tam ekran olsun diye padding yok */}
      <main>
        <Routes>
          {/* Anasayfa Rotası: Artık Home bileşenini gösteriyor */}
          <Route path="/" element={<Home />} />
          
          {/* Diğer sayfalar için test rotaları */}
          <Route path="/iletisim" element={<div className="pt-32 text-center">İletişim Sayfası</div>} />
          <Route path="/hizmet/:slug" element={<div className="pt-32 text-center">Hizmet Detay Sayfası</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;