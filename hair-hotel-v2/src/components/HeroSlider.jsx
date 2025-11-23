import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    title: "Yeniden Kendiniz Olun",
    subtitle: "Türkiye'nin en doğal protez saç teknolojisi ile tanışın.",
    buttonText: "Hizmetleri İncele",
    link: "/hizmet/protez-sac-nedir"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2078&auto=format&fit=crop",
    title: "Mükemmel Uyum & Estetik",
    subtitle: "Kendi saçınızdan ayırt edilemeyen %100 doğal görünüm.",
    buttonText: "Randevu Oluştur",
    link: "/iletisim"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    title: "VIP Bakım Hizmeti",
    subtitle: "Size özel odalarda, gizlilik esaslı profesyonel bakım.",
    buttonText: "Bize Ulaşın",
    link: "/iletisim"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Otomatik geçiş ayarı (5 saniye)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* SLIDER GÖRSELLERİ */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Arka Plan Resmi */}
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          
          {/* Karartma Perdesi (Overlay) - Lüks Gradyan */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          
          {/* YAZILAR VE İÇERİK */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                <span className="block text-bronze text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
                  Hair Hotel Exclusive
                </span>
                
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-gray-300 text-lg md:text-xl mb-10 font-light max-w-lg">
                  {slide.subtitle}
                </p>
                
                <Link 
                  to={slide.link} 
                  className="inline-block bg-bronze text-dark-bg px-8 py-4 font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
                >
                  {slide.buttonText}
                </Link>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ALTTAKI NOKTALAR (Dots) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-bronze w-8' : 'bg-gray-600 hover:bg-gray-400'}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;