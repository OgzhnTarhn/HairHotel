import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <--- 1. Link bileşenini import et

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/90 backdrop-blur-md border-t border-white/10 text-white shadow-2xl transition-all duration-500 ease-in-out transform translate-y-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-sm text-gray-300 text-center md:text-left">
          <p>
            Size daha iyi bir deneyim sunmak için çerezleri (cookies) kullanıyoruz. 
            Sitemizi kullanmaya devam ederek 
            {/* 2. Linki güncelledik: Legal sayfana dinamik gider */}
            <Link 
              to="/kurumsal/gizlilik-politikasi" 
              className="text-white font-semibold hover:underline ml-1"
            >
              Gizlilik Politikamızı
            </Link> kabul etmiş sayılırsınız.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Reddet
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors shadow-lg"
          >
            Kabul Et
          </button>
        </div>

      </div>
    </div>
  );
}