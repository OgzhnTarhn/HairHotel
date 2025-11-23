import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useEffect } from 'react';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <div className="text-white text-center pt-40">Yazı bulunamadı.</div>;
  }

  return (
    <div className="bg-dark-bg min-h-screen pb-24">
      
      {/* 1. HEADER (Kapak Resmi - Daha Sade) */}
      <div className="relative h-[50vh] w-full">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover fixed-bg"
        />
        {/* Karartma */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Başlık (Resmin Ortasında) */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <span className="bg-bronze text-black px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 inline-block rounded-sm">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            <p className="text-gray-300 mt-4 text-sm font-medium">📅 {post.date}</p>
          </div>
        </div>
      </div>

      {/* 2. İÇERİK ALANI */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 -mt-10">
        
        {/* İçerik Kutusu */}
        <div className="bg-[#1a1a1a] border border-white/5 p-8 md:p-12 shadow-2xl rounded-sm">
          
          {/* Giriş Özeti (Kalın ve Dikkat Çekici) */}
          <div className="mb-10 border-l-4 border-bronze pl-6">
            <p className="text-xl text-white font-medium leading-relaxed italic">
              "{post.desc}"
            </p>
          </div>

          {/* ANA METİN (Düzgün Format) */}
          <div className="text-gray-300 text-lg leading-loose space-y-6">
            {post.content.split('\n').map((paragraph, index) => {
              // Boş satırları atla
              if (!paragraph.trim()) return null;
              
              return (
                <p key={index} className="block">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Alt Kısım: Paylaş ve Geri Dön */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-sm">
              Yazar: <span className="text-bronze font-bold">Hair Hotel Uzmanları</span>
            </div>
            
            <Link 
              to="/blog" 
              className="flex items-center gap-2 text-white text-sm font-bold tracking-widest uppercase hover:text-bronze transition-colors"
            >
              <span className="text-xl">←</span> Blog Listesine Dön
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogDetail;