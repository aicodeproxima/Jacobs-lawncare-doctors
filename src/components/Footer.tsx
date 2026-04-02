import { Facebook, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Lawn Maintenance', href: '#services' },
      { label: 'Landscape Install', href: '#services' },
      { label: 'Seasonal Cleanups', href: '#services' },
      { label: 'Hardscapes', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Work', href: '#services' },
      { label: 'Testimonials', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-forest border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-forest font-serif font-bold text-lg">J</span>
              </div>
              <span className="font-serif text-cream text-xl font-semibold">
                Jacob's Lawn Care Doctors
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Premium residential landscaping and lawn care services in Newport News, VA. Making yards beautiful since 2010.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-gold hover:text-forest transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream font-medium mb-5 text-sm tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-cream font-medium mb-5 text-sm tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cream font-medium mb-5 text-sm tracking-wide uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="tel:+17575550132" className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" />
                <span className="text-sm">(757) 555-0132</span>
              </a>
              <a href="mailto:hello@jacobslawndoctors.com" className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors">
                <Mail size={16} className="text-gold" />
                <span className="text-sm">hello@jacobslawndoctors.com</span>
              </a>
              <div className="flex items-center gap-3 text-cream/60">
                <MapPin size={16} className="text-gold" />
                <span className="text-sm">Newport News, VA</span>
              </div>
              <div className="flex items-center gap-3 text-cream/60">
                <Clock size={16} className="text-gold" />
                <span className="text-sm">Mon–Fri 7am–6pm<br />Sat 8am–2pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-cream/40">
            <span>&copy; {currentYear} Jacob's Lawn Care Doctors</span>
            <span className="hidden sm:inline">•</span>
            <span>Licensed & Insured</span>
            {footerLinks.legal.map((link, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="hidden sm:inline">•</span>
                <a href={link.href} className="hover:text-cream/60 transition-colors">
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-gold hover:text-forest transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
