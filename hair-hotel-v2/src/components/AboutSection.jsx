import { Link } from 'react-router-dom';

const features = [
  "Amerika ve Avrupa standartlarında protez teknolojisi",
  "%100 İnsan saçı ve doğal görünüm garantisi",
  "Size özel VIP odalarda gizlilik esaslı işlem",
  "Ücretsiz bakım ve danışmanlık desteği"
];

const AboutSection = () => {
  return (
    <section className="bg-dark-bg py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* SOL TARA: GÖRSEL (Lüks bir berber/işlem fotosu) */}
          <div className="w-full md:w-1/2 relative">
            {/* Arkadaki Dekoratif Çerçeve */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-bronze/30 z-0 hidden md:block"></div>
            
            {/* Resim */}
            <img 
              src="https://images.unsplash.com/photo-1503951914290-934c463ca989?q=80&w=2094&auto=format&fit=crop" 
              alt="Hair Maker Deneyimi" 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Resmin Üzerindeki "Tecrübe" Kutusu */}
            <div className="absolute bottom-10 -right-6 z-20 bg-bronze text-dark-bg p-6 shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm font-bold tracking-widest uppercase">Yıllık Tecrübe</div>
            </div>
          </div>

          {/* SAĞ TARAF: YAZI VE MADDELER */}
          <div className="w-full md:w-1/2">
            <span className="text-bronze text-sm font-bold tracking-[0.2em] uppercase">Hair Maker</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Sadece Saç Değil, <br />
              <span className="text-gray-500">Özgüven Tasarlıyoruz.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Klasik protez saç uygulamalarını unutun. Hair Maker olarak, yüz hattınıza, saç yapınıza ve yaşam tarzınıza en uygun tasarımı yaparak, aynalarla barışmanızı sağlıyoruz. Bizim için başarı, saçınızın protez olduğunun anlaşılmamasıdır.
            </p>

            {/* Özellik Listesi (Tik İşaretli) */}
            <ul className="space-y-4 mb-10">
              {features.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-bronze/20 flex items-center justify-center mr-4 text-bronze text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Buton */}
            <Link 
              to="/iletisim" 
              className="inline-block border-2 border-white text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Tanışmaya Gelin
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;