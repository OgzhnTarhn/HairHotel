import { useParams, Link } from 'react-router-dom';
import { legalContent } from '../data/legalData';
import { useEffect } from 'react';

const Legal = () => {
  const { slug } = useParams();
  const data = legalContent[slug];

  // Sayfa açılınca en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return <div className="text-white text-center pt-40">Sayfa bulunamadı.</div>;
  }

  return (
    <div className="bg-dark-bg min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Başlık */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <span className="text-bronze text-xs font-bold uppercase tracking-widest mb-2 block">Kurumsal</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{data.title}</h1>
        </div>

        {/* İçerik */}
        <div className="text-gray-300 text-lg leading-loose space-y-6 text-justify bg-[#1a1a1a] p-10 border border-white/5 rounded-sm shadow-2xl">
          {data.content.split('\n').map((paragraph, index) => {
            if (!paragraph.trim()) return null;
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Geri Dön */}
        <div className="mt-8">
          <Link to="/" className="text-bronze font-bold hover:text-white transition-colors text-sm uppercase tracking-wide">
            ← Anasayfaya Dön
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Legal;