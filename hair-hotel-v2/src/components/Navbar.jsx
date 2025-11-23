import { Link } from 'react-router-dom';
import { menuItems } from '../data/menuItems';
import { useState } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO ALANI */}
          <Link to="/" className="text-2xl font-bold text-gray-800 tracking-wider">
            HAIR <span className="text-yellow-600">HOTEL</span>
          </Link>

          {/* MENÜ LİNKLERİ (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((menu, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link 
                  to={menu.url} 
                  className="text-gray-700 hover:text-yellow-600 font-medium py-2 transition"
                >
                  {menu.title}
                </Link>

                {/* DROPDOWN (Varsa göster) */}
                {menu.submenu && (
                  <div className={`absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 transform origin-top ${openDropdown === index ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}>
                    {menu.submenu.map((sub, subIndex) => (
                      <Link 
                        key={subIndex} 
                        to={sub.url} 
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 border-b border-gray-100 last:border-0"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RANDEVU BUTONU */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/905000000000" 
              className="bg-yellow-600 text-white px-6 py-2 rounded-full font-bold hover:bg-yellow-700 transition shadow-lg"
            >
              Randevu Al
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;