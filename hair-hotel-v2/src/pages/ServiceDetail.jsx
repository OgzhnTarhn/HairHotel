import { useParams } from 'react-router-dom';
import { serviceDetails } from '../data/serviceData';

const ServiceDetail = () => {
  const { slug } = useParams();
  
  // Veri yoksa hata vermesin diye önlem
  const service = serviceDetails[slug] || serviceDetails["default"];

  // Metin parçaları
  const textPart1 = service.desc1 || service.description;
  const textPart2 = service.desc2 || "";

  return (
    <div className="bg-dark-bg min-h-screen pb-24">
      
      {/* 1. HEADER (Kapak Resmi) */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover fixed-bg"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl">
             <span className="text-bronze font-bold tracking-[0.3em] uppercase block mb-6 animate-fade-in">Hizmetlerimiz</span>
             <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-slide-up">{service.title}</h1>
          </div>
        </div>
      </div>

      {/* 2. İÇERİK ALANI - GÜNCELLENDİ: max-w-4xl yerine max-w-6xl yapıldı */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        
        {/* Başlık */}
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-white mb-4">Uygulama Detayları</h2>
           <div className="w-24 h-1 bg-bronze mx-auto rounded-full"></div>
        </div>

        {/* --- METİN 1. BÖLÜM --- */}
        <div className="text-gray-300 text-lg leading-loose text-justify space-y-6">
          {textPart1.split('\n\n').map((paragraph, index) => (
            <p key={index} className="indent-8">{paragraph}</p>
          ))}
        </div>

        {/* --- ARA GÖRSEL --- */}
        {textPart2 && (
          // Genişlik arttığı için görselin kenarlara taşma efektini (mx) biraz kıstık ki orantılı dursun
          <div className="my-16 rounded-sm overflow-hidden h-[500px] shadow-2xl border-y border-white/5 group">
            <img 
              src={service.image} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
              alt="Uygulama Detayı" 
            />
          </div>
        )}

        {/* --- METİN 2. BÖLÜM --- */}
        {textPart2 && (
          <div className="text-gray-300 text-lg leading-loose text-justify space-y-6 mb-16">
            {textPart2.split('\n\n').map((paragraph, index) => (
              <p key={index} className="indent-8">{paragraph}</p>
            ))}
          </div>
        )}

        {/* --- AVANTAJLAR KUTULARI --- */}
        <h3 className="text-2xl font-bold text-white mb-8 text-center mt-12">Neden Bizi Seçmelisiniz?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {service.features.map((feature, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-8 border-l-4 border-bronze hover:bg-white/5 transition-colors shadow-lg group">
              <div className="flex items-start">
                <span className="text-bronze text-xl mr-4 mt-1 group-hover:scale-125 transition-transform">✦</span>
                <span className="text-gray-300 text-base font-medium">{feature}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- ALT ÇAĞRI (CTA) --- */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#252525] p-12 rounded-lg text-center border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-bronze/10 rounded-full blur-3xl"></div>
          
          <h4 className="text-3xl font-bold text-white mb-4 relative z-10">Ücretsiz Saç Analizi İçin Hazır mısınız?</h4>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
            Uzmanlarımızla görüşün, yüz hattınıza en uygun modeli birlikte belirleyelim.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
             <a href="https://wa.me/905330000000" className="bg-bronze text-black px-10 py-4 font-bold rounded hover:bg-white transition-colors">
               Whatsapp'tan Yazın
             </a>
             <a href="tel:+905330000000" className="border border-white text-white px-10 py-4 font-bold rounded hover:bg-white hover:text-black transition-colors">
               Bizi Arayın
             </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ServiceDetail;