import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(
        infoRef.current,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '(757) 555-0132', href: 'tel:+17575550132' },
    { icon: Mail, label: 'Email', value: 'hello@jacobslawndoctors.com', href: 'mailto:hello@jacobslawndoctors.com' },
    { icon: Clock, label: 'Hours', value: 'Mon–Fri 7am–6pm • Sat 8am–2pm' },
    { icon: MapPin, label: 'Service Area', value: 'Newport News, VA & nearby neighborhoods' },
  ];

  const serviceOptions = [
    'Lawn Maintenance',
    'Landscape Installation',
    'Seasonal Cleanup',
    'Hardscape/Patio',
    'Tree & Shrub Care',
    'Other'
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-forest py-20 lg:py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/contact_yard_bg.jpg"
          alt="Peaceful backyard"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/90 to-forest" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
            Get In Touch
          </span>
          <h2 className="font-serif text-cream text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Ready when you are.
          </h2>
          <p className="text-cream/70 text-base lg:text-lg max-w-xl mx-auto">
            Tell us what you need. We'll reply within one business day.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-sage p-6 lg:p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="font-serif text-forest text-2xl font-semibold mb-2">
                  Thank you!
                </h3>
                <p className="text-forest/70">
                  We've received your message and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-forest text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-forest/20 text-forest placeholder:text-forest/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-forest/20 text-forest placeholder:text-forest/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="(757) 555-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-forest text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-forest/20 text-forest placeholder:text-forest/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-forest text-sm font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-forest/20 text-forest placeholder:text-forest/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="Your property address"
                  />
                </div>

                <div>
                  <label className="block text-forest text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-forest/20 text-forest focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-forest text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-forest/20 text-forest placeholder:text-forest/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest text-cream py-4 font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-colors"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-forest/50 border border-cream/10"
                >
                  <div className="w-10 h-10 bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-cream/50 text-xs uppercase tracking-wide">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block text-cream text-lg hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-cream text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="p-6 bg-forest/50 border border-cream/10">
              <h3 className="font-serif text-cream text-xl font-semibold mb-4">
                Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['Denbigh-Warwick', 'Deep Creek/Menchville', 'Greater Hilton', 'Lee Hall', 'Southeast Community', 'City Center'].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-cream/70 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 p-5 bg-gold/10 border border-gold/30">
              <CheckCircle className="w-8 h-8 text-gold flex-shrink-0" />
              <div>
                <p className="text-cream font-medium">Licensed & Insured</p>
                <p className="text-cream/60 text-sm">Virginia Contractor License #VA123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
