import { Link } from 'react-router-dom';
import { menuItems } from '../data/menuItems';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-dark-bg/95 backdrop-blur-lg py-3 shadow-2xl border-white/5' 
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-6 border-transparent'
      }`}
    >
      {/* 👆 YUKARIDAKİ DEĞİŞİKLİK: 
         scrolled false ise (en tepedeysek): 'bg-gradient-to-b...' ekledik.
         Bu, tepeden aşağıya doğru inen siyah bir gölge oluşturur, yazıyı okunur kılar.
      */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="group z-50">
            <div className="text-2xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">
              Hair <span className="text-bronze group-hover:text-white transition-colors">Hotel</span>
            </div>
            <div className="text-[8px] tracking-[0.4em] text-gray-300 uppercase text-center mt-1 group-hover:text-bronze transition-colors font-bold drop-shadow-md">
              Exclusive
            </div>
          </Link>

          {/* MENÜ LİNKLERİ */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((menu, index) => (
              <div 
                key={index}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link 
                  to={menu.url} 
                  className={`text-[13px] font-bold tracking-wider uppercase transition-all duration-300 py-4 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-bronze after:bottom-2 after:left-0 after:transition-all after:duration-300 hover:after:w-full drop-shadow-lg ${
                    scrolled ? 'text-gray-300 hover:text-bronze' : 'text-white hover:text-bronze'
                  }`}
                >
                  {/* 👆 YUKARIDAKİ DEĞİŞİKLİK: text-white ve font-bold yaptık */}
                  {menu.title}
                </Link>

                {/* DROPDOWN MENÜ */}
                {menu.submenu && (
                  <div className={`absolute top-[80%] left-1/2 -translate-x-1/2 w-64 pt-6 transition-all duration-300 transform origin-top ${openDropdown === index ? 'opacity-100 scale-y-100 translate-y-0 visible' : 'opacity-0 scale-y-95 translate-y-2 invisible'}`}>
                    <div className="bg-[#1a1a1a] border border-white/10 shadow-2xl rounded-sm overflow-hidden">
                      {menu.submenu.map((sub, subIndex) => (
                        <Link 
                          key={subIndex} 
                          to={sub.url} 
                          className="block px-6 py-3 text-xs text-gray-400 hover:bg-white/5 hover:text-bronze hover:pl-8 transition-all duration-300 border-b border-white/5 last:border-0"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* SAĞ TARAF: TELEFON & BUTON */}
          <div className="hidden md:flex items-center space-x-6 z-50">
            
            {/* Telefon Numarası - Rengi Beyaz ve Kalın yaptık */}
            <a 
              href="tel:+905330000000" 
              className="text-white text-xs font-bold tracking-wider hover:text-bronze transition-colors flex items-center gap-2 drop-shadow-lg"
            >
              <span className="text-bronze text-sm">📞</span> 
              0(533) 000 00 00
            </a>

            {/* Randevu Butonu - Arkasına hafif siyahlık attık */}
            <a 
              href="https://wa.me/905330000000" 
              className="bg-black/30 backdrop-blur-sm border border-bronze text-bronze px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-bronze hover:text-black transition-all duration-300 shadow-lg"
            >
              Randevu Al
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;