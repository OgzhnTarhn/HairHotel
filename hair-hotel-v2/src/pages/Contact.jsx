import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Erkek Protez Saç',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    // 🔴 BURAYI KENDİ NUMARANLA DEĞİŞTİR (Başında + olmadan 90 ile başla)
    const phoneNumber = "905330000000"; 

    // Mesaj Formatı (İstediğin Gibi Sadeleştirildi)
    // %0A kodu "Alt satıra geç" demektir.
    const text = `Merhaba, ben ${formData.name} (${formData.phone})%0A%0A` +
                 `${formData.service}%0A` + 
                 `${formData.message}%0A%0A` +
                 `Bilgi almak istiyorum.`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-dark-bg min-h-screen pb-0">
      
      {/* HEADER */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover fixed-bg"
          alt="İletişim Kapak"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center">
            <span className="text-bronze font-bold tracking-[0.3em] uppercase block mb-4">Bize Ulaşın</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Randevu & İletişim</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* SOL TARAF: İLETİŞİM BİLGİLERİ */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-8">İletişim Bilgileri</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Saç sorunlarınızla ilgili ücretsiz analiz yaptırmak veya randevu almak için aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-bronze text-xl rounded-sm mr-6 shrink-0">📍</div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Merkez Ofis</h3>
                  <p className="text-gray-400">Çukurambar Mah. 1071. Cadde<br />No: 25 A Blok, Çankaya / Ankara</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-bronze text-xl rounded-sm mr-6 shrink-0">📞</div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Telefon & Whatsapp</h3>
                  <p className="text-gray-400 mb-1">Randevu: <a href="tel:+905330000000" className="text-white hover:text-bronze transition-colors">0(533) 000 00 00</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-bronze text-xl rounded-sm mr-6 shrink-0">✉️</div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">E-Posta</h3>
                  <p className="text-gray-400">info@hairhotel.com.tr</p>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: FORM */}
          <div className="w-full lg:w-1/2">
            <form className="bg-[#1a1a1a] p-10 border border-white/5 shadow-2xl" onSubmit={handleWhatsApp}>
              <h3 className="text-2xl font-bold text-white mb-8">Bize Yazın</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-500 text-xs uppercase font-bold mb-2">Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-bronze transition-colors" 
                    placeholder="Adınız..." 
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase font-bold mb-2">Telefon Numaranız</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-bronze transition-colors" 
                    placeholder="0555..." 
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-500 text-xs uppercase font-bold mb-2">İlgilendiğiniz Hizmet</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 text-gray-400 px-4 py-3 focus:outline-none focus:border-bronze transition-colors"
                >
                  <option>Erkek Protez Saç</option>
                  <option>Kadın Protez Saç</option>
                  <option>Medikal / Alopesi</option>
                  <option>Bakım Hizmeti</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-gray-500 text-xs uppercase font-bold mb-2">Mesajınız</label>
                <textarea 
                  name="message"
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-bronze transition-colors" 
                  placeholder="Sorunuzu buraya yazabilirsiniz..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-bronze text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors duration-300 flex justify-center items-center gap-2"
              >
                <span>WhatsApp İle Gönder</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487 1.065.46 1.065.31 2.296.284 1.462-.03 2.502-1.017 2.854-1.998.353-.981.353-1.821.248-1.998z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* HARİTA */}
      <div className="w-full h-[400px] border-t border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48995.83645398236!2d32.78768795898859!3d39.9030391263056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9fea8f%3A0xad110bd9d8a598c9!2zw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1700736000000!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;