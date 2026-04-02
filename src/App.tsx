import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import CurbAppealSection from './sections/CurbAppealSection';
import LocalSection from './sections/LocalSection';
import ResidentialSection from './sections/ResidentialSection';
import BookingSection from './sections/BookingSection';
import DependableSection from './sections/DependableSection';
import SatisfactionSection from './sections/SatisfactionSection';
import ServicesSection from './sections/ServicesSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative">
        {/* Section 1: Hero with Quote Form */}
        <HeroSection />
        
        {/* Section 2: Curb Appeal */}
        <CurbAppealSection />
        
        {/* Section 3: Local */}
        <LocalSection />
        
        {/* Section 4: Residential */}
        <ResidentialSection />
        
        {/* Section 5: Booking */}
        <BookingSection />
        
        {/* Section 6: Dependable */}
        <DependableSection />
        
        {/* Section 7: Satisfaction */}
        <SatisfactionSection />
        
        {/* Section 8: Services */}
        <ServicesSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
