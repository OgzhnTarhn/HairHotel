import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail'; // <--- YENİ EKLENDİ
import Contact from './pages/Contact';

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
      <ScrollToTop />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmet/:slug" element={<ServiceDetail />} />
          <Route path="/galeri" element={<Gallery />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> {/* <--- DETAY SAYFASI BAĞLANDI */}
          
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;