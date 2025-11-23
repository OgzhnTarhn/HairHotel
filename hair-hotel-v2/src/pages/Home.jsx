import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import GalleryPreview from '../components/GalleryPreview';
import BlogPreview from '../components/BlogPreview'; // <--- 1. EKLENDİ

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <GalleryPreview />
      <BlogPreview /> {/* <--- 2. BURAYA YERLEŞTİRİLDİ */}
    </div>
  )
}

export default Home;