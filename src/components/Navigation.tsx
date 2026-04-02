import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    // Scroll to the hero section where the contact form is
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-forest/95 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <span className="text-forest font-serif font-bold text-sm">J</span>
            </div>
            <span className="font-serif text-cream text-lg font-semibold hidden sm:block group-hover:text-gold transition-colors">
              Jacob's Lawn Care Doctors
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('services')}
              className="text-cream/80 hover:text-gold text-sm font-medium tracking-wide transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={scrollToContact}
              className="btn-primary text-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cream p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-forest/98 backdrop-blur-lg transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-cream text-2xl font-serif hover:text-gold transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Sticky Mobile Call Button */}
      <a
        href="tel:+17575550132"
        className={`fixed bottom-4 right-4 z-[100] md:hidden bg-gold text-forest p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <Phone size={24} />
      </a>
    </>
  );
};

export default Navigation;
