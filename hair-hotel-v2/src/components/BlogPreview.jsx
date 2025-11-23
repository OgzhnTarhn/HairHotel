import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPreview = () => {
  // Sadece ilk 3 yazıyı al
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-dark-bg py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* BAŞLIK ALANI */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-bronze text-sm font-bold tracking-[0.2em] uppercase">Bilgi & Tavsiye</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
              Uzmanından <span className="text-gray-600">Notlar</span>
            </h2>
          </div>
          
          <Link 
            to="/blog" 
            className="group flex items-center gap-2 text-white text-sm font-bold tracking-widest uppercase hover:text-bronze transition-colors"
          >
            Blog Sayfasına Git
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* YAZI KARTLARI (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {recentPosts.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id}
              className="group bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden hover:border-bronze transition-all duration-500 hover:-translate-y-2"
            >
              {/* Resim */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-bronze text-black text-[10px] font-bold uppercase px-3 py-1 tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* İçerik */}
              <div className="p-8">
                <div className="text-gray-500 text-xs mb-3">📅 {post.date}</div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-bronze transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.desc}
                </p>
                <span className="text-bronze text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
                  Oku <span className="text-lg">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;