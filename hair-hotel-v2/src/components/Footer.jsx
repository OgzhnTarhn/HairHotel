import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-400 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ÜST KISIM (4 Sütun) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. SÜTUN: Marka & Slogan */}
          <div>
            <Link to="/" className="block mb-6">
              <div className="text-2xl font-bold tracking-[0.2em] text-white uppercase">
                Hair <span className="text-bronze">Hotel</span>
              </div>
              <div className="text-[8px] tracking-[0.4em] text-gray-500 uppercase mt-1">
                Exclusive
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-500">
              Türkiye'nin en gelişmiş protez saç teknolojileriyle, hayalinizdeki görünüme kavuşun. %100 doğal, tespit edilemez ve size özel.
            </p>
            {/* Sosyal Medya İkonları */}
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Youtube'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-bronze hover:text-black transition-all duration-300">
                  <span className="text-[10px] font-bold uppercase">{social.substring(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. SÜTUN: Hızlı Linkler */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Kurumsal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-bronze transition-colors">Anasayfa</Link></li>
              <li><Link to="/galeri" className="hover:text-bronze transition-colors">Öncesi & Sonrası</Link></li>
              <li><Link to="/blog" className="hover:text-bronze transition-colors">Blog / Makaleler</Link></li>
              <li><Link to="/iletisim" className="hover:text-bronze transition-colors">İletişim & Ulaşım</Link></li>
              <li><Link to="/kurumsal/kvkk" className="hover:text-bronze transition-colors">KVKK Aydınlatma Metni</Link></li>""
            </ul>
          </div>

          {/* 3. SÜTUN: Hizmetlerimiz (Düzeltildi: Simülasyon Kalktı) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Hizmetler</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/hizmet/erkek-protez-sac" className="hover:text-bronze transition-colors">Erkek Protez Saç</Link></li>
              <li><Link to="/hizmet/kadin-protez-sac" className="hover:text-bronze transition-colors">Kadın Protez Saç</Link></li>
              <li><Link to="/hizmet/kemoterapi-sac-dokulmesi" className="hover:text-bronze transition-colors">Medikal Çözümler</Link></li>
              <li><Link to="/hizmet/protez-sac-bakimi" className="hover:text-bronze transition-colors">Bakım & Onarım</Link></li>
              <li><Link to="/hizmet/protez-sac-uygulama" className="hover:text-bronze transition-colors">Uygulama Aşamaları</Link></li>
            </ul>
          </div>

          {/* 4. SÜTUN: İletişim Bilgileri */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Bize Ulaşın</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <span className="text-bronze mr-3 text-lg">📍</span>
                <span>
                  Çukurambar Mah. 1071. Cadde<br />
                  No: 25 A Blok, Çankaya / Ankara
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-bronze mr-3 text-lg">📞</span>
                <a href="tel:+905330000000" className="hover:text-white transition-colors">0(533) 000 00 00</a>
              </li>
              <li className="flex items-center">
                <span className="text-bronze mr-3 text-lg">✉️</span>
                <a href="mailto:info@hairhotel.com.tr" className="hover:text-white transition-colors">info@hairhotel.com.tr</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ALT ÇİZGİ & İMZA ALANI */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          
          {/* Sol Taraf: Copyright + İmza */}
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
            <p>&copy; 2025 Hair Hotel. Tüm hakları saklıdır.</p>
            <span className="hidden md:block">|</span>
            <div className="flex items-center gap-1">
              <span>Developed by</span>
              <a 
                href="https://www.linkedin.com/in/o%C4%9Fuzhan-tarhan-6a8299357/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-bronze font-bold transition-colors border-b border-transparent hover:border-bronze"
              >
                Oğuzhan Tarhan
              </a>
            </div>
          </div>

          {/* Sağ Taraf: Linkler */}
          <div className="flex space-x-6">
  <Link to="/kurumsal/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
  <Link to="/kurumsal/kullanim-sartlari" className="hover:text-white transition-colors">Kullanım Şartları</Link>
</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;