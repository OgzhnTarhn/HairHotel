import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
  // --- GÜÇLENDİRİLMİŞ VARSAYILAN AYARLAR ---
  
  const siteName = "Hair Maker";
  
  const defaultTitle = "Hair Maker | İstanbul Saç Ekim Konaklama Hizmetleri";
  
  // Daha ikna edici ve anahtar kelime barındıran açıklama
  const defaultDesc = "Hair Maker ile İstanbul'da saç ekimi operasyonlarınız için lüks konaklama, VIP transfer ve rehberlik hizmeti alın. Şişli İzzetpaşa'da, kliniğinize yakın, hijyenik ve güvenli otel deneyimi. Yurt dışından gelen misafirler için özel paketler.";
  
  // SEO Bombardımanı: Anahtar kelime havuzu
  const defaultKeywords = [
    // Marka
    "hair maker", "hair maker istanbul", "hair maker hotel",
    // Türkçe Anahtar Kelimeler
    "saç ekimi konaklama", "istanbul saç ekimi oteli", "şişli otel", "izzetpaşa konaklama", 
    "saç ekimi sonrası bakım", "istanbul sağlık turizmi konaklama", "vip transfer istanbul", 
    "havaalanı karşılama", "mecidiyeköy otel", "saç ekim merkezi konaklama",
    // İngilizce (Yabancı Müşteriler İçin)
    "hair transplant turkey accommodation", "istanbul hair transplant hotel", "post-op care hotel",
    "hair transplant package turkey", "accommodation for hair transplant patients", "sisli hotels",
    "cheap hotel istanbul", "luxury recovery hotel", "medical tourism turkey"
  ].join(", ");

  // --- GOOGLE İÇİN YAPISAL VERİ (JSON-LD) ---
  // Bu bölüm Google'ın işletmeni "Harita/İşletme" olarak tanımasını sağlar.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Veya "Hotel"
    "name": "Hair Maker",
    "image": "https://hairmaker.com/logo.png", // İleride logo linkini buraya koyarsın
    "description": defaultDesc,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İzzetpaşa Mahallesi Lale 1 Sokak İkbal Apartmanı No: 5 / 1B",
      "addressLocality": "Şişli",
      "addressRegion": "İstanbul",
      "postalCode": "34387",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0667,
      "longitude": 28.9867
    },
    "url": "https://hairmaker.com", // Kendi domainini alınca burayı güncelle
    "telephone": "+905016493435", // İletişim numaranı buraya yazarsan iyi olur
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* --- Temel HTML Etiketleri --- */}
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      
      {/* --- Bot Kontrolleri (İndekslesin ve Takip Etsin) --- */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Hair Maker" />
      <meta name="publisher" content="Hair Maker" />

      {/* --- Dil ve Konum --- */}
      <html lang="tr" />
      <meta name="geo.region" content="TR-34" />
      <meta name="geo.placename" content="Şişli" />
      <meta name="geo.position" content="41.0667;28.9867" />
      <meta name="ICBM" content="41.0667, 28.9867" />

      {/* --- Sosyal Medya (Open Graph) --- */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />

      {/* --- Twitter Kartları --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />

      {/* --- JSON-LD (Schema) Scripti --- */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      {/* --- Görsel Kimlik ve Mobil Ayarlar --- */}
      <link rel="icon" type="image/png" href="/favicon.png" /> {/* Tarayıcı sekmesi ikonu */}
      <link rel="apple-touch-icon" href="/logo192.png" /> {/* iPhone ana ekrana ekleme ikonu */}
      <meta name="theme-color" content="#ffffff" /> {/* Mobil tarayıcı çubuk rengi (Sitenin ana rengini yaz) */}

      {/* --- Google Search Console Doğrulama (İleride lazım olacak) --- */}
      {/* Google sana bir kod verince 'content' kısmına yazacaksın */}
      <meta name="google-site-verification" content="BURAYA_GOOGLE_KODU_GELECEK" />
    </Helmet>
  );
}