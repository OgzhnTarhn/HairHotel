import { blogPosts } from '../data/blogData';

const Blog = () => {
  return (
    <div className="bg-dark-bg min-h-screen pb-24">
      
      {/* 1. HEADER (Kapak Alanı) */}
      <div className="relative h-[40vh] w-full overflow-hidden mb-16">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover fixed-bg"
          alt="Blog Kapak"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="text-bronze font-bold tracking-[0.3em] uppercase block mb-4">Blog & Haberler</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Uzmanından Tavsiyeler</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2. BLOG KARTLARI (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden group hover:border-bronze transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              
              {/* Resim Alanı */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-bronze text-black text-[10px] font-bold uppercase px-3 py-1 tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Yazı Alanı */}
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-xs mb-4 space-x-2">
                  <span>📅 {post.date}</span>
                  <span>•</span>
                  <span>Hair Hotel</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-bronze transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.desc}
                </p>

                <div className="flex items-center text-bronze text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  Devamını Oku
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Daha Fazla Yükle Butonu (Görsel Amaçlı) */}
        <div className="text-center mt-20">
           <button className="border border-white/20 text-gray-400 px-8 py-3 text-sm font-bold uppercase tracking-widest hover:border-bronze hover:text-bronze transition-all">
             Daha Fazla Göster
           </button>
        </div>

      </div>

    </div>
  );
};

export default Blog;