import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import GalleryPreview from '../components/GalleryPreview'; // <--- EKLENDİ

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <GalleryPreview /> {/* <--- EKLENDİ */}
    </div>
  )
}

export default Home