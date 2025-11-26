import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import GalleryPreview from '../components/GalleryPreview';
import BlogPreview from '../components/BlogPreview';
import SEO from '../components/SEO'; // <--- 1. SEO BİLEŞENİ İÇE AKTARILDI

const Home = () => {
  return (
    <div>
      <SEO /> {/* <--- 2. EN TEPEYE EKLENDİ (Varsayılan Hair Maker ayarlarını çeker) */}
      
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <GalleryPreview />
      <BlogPreview />
    </div>
  )
}

export default Home;