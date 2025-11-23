import { useState } from 'react';
import { galleryItems } from '../data/galleryData';

const Gallery = () => {
  const [filter, setFilter] = useState('hepsi');

  // Filtreleme Mantığı
  const filteredItems = filter === 'hepsi' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Filtre Butonu Bileşeni
  const FilterBtn = ({ name, label }) => (
    <button 
      onClick={() => setFilter(name)}
      className={`px-8 py-3 text-sm font-bold uppercase tracking-widest border transition-all duration-300 ${
        filter === name 
          ? 'bg-bronze border-bronze text-black' 
          : 'bg-transparent border-white/20 text-gray-400 hover:border-bronze hover:text-bronze'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-dark-bg min-h-screen pb-24">
      
      {/* 1. KAPAK RESMİ */}
      <div className="relative h-[40vh] w-full overflow-hidden mb-16">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          className="w-full h-full object-cover fixed-bg"
          alt="Galeri Kapak"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center">
            <span className="text-bronze font-bold tracking-[0.3em] uppercase block mb-4">Referanslarımız</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Değişime Tanık Olun</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2. SADELEŞTİRİLMİŞ FİLTRELER */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <FilterBtn name="hepsi" label="Tümü" />
          <FilterBtn name="erkek" label="Erkek" />
          <FilterBtn name="kadin" label="Kadın" />
        </div>

        {/* 3. FOTOĞRAF IZGARASI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-[#1a1a1a] border border-white/5 overflow-hidden rounded-sm hover:border-bronze transition-colors duration-500">
              
              {/* Resim Alanı */}
              <div className="h-[400px] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase text-bronze tracking-wider border border-white/10">
                  Sonuç
                </div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Karartma */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Alt Bilgi Alanı (Fiyat Al butonu kaldırıldı) */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-bronze text-[10px] font-bold tracking-widest uppercase mb-1 block">
                  {item.category === 'erkek' ? 'Erkek Protez' : 'Kadın Protez'}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Gallery;