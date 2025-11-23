import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection'; // <--- EKLENDİ

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesSection />
      <AboutSection /> {/* <--- EKLENDİ */}
    </div>
  )
}

export default Home