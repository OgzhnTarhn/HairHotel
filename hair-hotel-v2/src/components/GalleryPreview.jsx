import { Link } from 'react-router-dom';

const transformations = [
  {
    id: 1,
    title: "Doğal Ön Hat Tasarımı",
    category: "Erkek Protez",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Tam Yoğunluk & Hacim",
    category: "Seyrek Saç Çözümleri",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Gençleşme Etkisi",
    category: "Total Değişim",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
  }
];

const GalleryPreview = () => {
  return (
    <section className="bg-[#121212] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-bronze text-sm font-bold tracking-[0.2em] uppercase">Gerçek Sonuçlar</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
              Değişime <span className="text-gray-600">Tanık Olun</span>
            </h2>
          </div>
          
          <Link 
            to="/galeri" 
            className="group flex items-center gap-2 text-white text-sm font-bold tracking-widest uppercase hover:text-bronze transition-colors"
          >
            Tüm Galeriyi Gör
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Fotoğraf Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-sm cursor-pointer">
              
              {/* Fotoğraf (Zoom Efektli) */}
              <div className="overflow-hidden h-[500px]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Üzerindeki Karartma (Overlay) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Yazılar (Alt Kısım) */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-bronze text-xs font-bold tracking-wider uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <div className="h-[1px] w-0 bg-bronze group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;