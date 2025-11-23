import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Erkek Protez Saç",
    description: "Kendi saçınızdan ayırt edilemeyen, nefes alan ve %100 doğal görünümlü sistemler.",
    link: "/hizmet/erkek-protez-sac",
    // Saç/Kafa İkonu
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Kadın Protez Saç",
    description: "Seyreklik veya dökülme sorunlarına özel, hacimli ve estetik çözümler.",
    link: "/hizmet/kadin-protez-sac",
    // Kadın/Yüz İkonu
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Medikal Çözümler",
    description: "Kemoterapi ve Alopesi gibi durumlar için özel olarak tasarlanmış hassas sistemler.",
    link: "/hizmet/kemoterapi-sac-dokulmesi",
    // Sağlık/Artı İkonu
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-dark-bg py-24 px-6 relative">
      {/* Hafif Arka Plan Deseni (Opsiyonel Lüks Detay) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <span className="text-bronze text-sm font-bold tracking-[0.2em] uppercase">Hizmetlerimiz</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Size Özel Çözümler</h2>
          <div className="w-20 h-1 bg-bronze mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Kartlar Izgarası (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.link} 
              className="group relative bg-[#1a1a1a] p-10 border border-white/5 hover:border-bronze transition-all duration-500 hover:-translate-y-2"
            >
              {/* İkon Kutusu */}
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 text-gray-400 group-hover:text-bronze group-hover:bg-bronze/10 transition-all duration-500">
                {service.icon}
              </div>

              {/* Başlık ve Yazı */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-bronze transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Ok İşareti (Link) */}
              <div className="flex items-center text-sm font-bold text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">
                İncele
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;