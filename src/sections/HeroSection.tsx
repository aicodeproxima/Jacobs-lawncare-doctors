import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Send, CheckCircle, Phone, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // Entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        overlayRef.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      );

      const headlineLines = headlineRef.current?.querySelectorAll('.headline-line');
      if (headlineLines) {
        tl.fromTo(
          headlineLines,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          '-=0.6'
        );
      }

      tl.fromTo(
        subheadRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      tl.fromTo(
        ctaRef.current,
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      tl.fromTo(
        microRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.2'
      );

      tl.fromTo(
        formRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );

      tl.fromTo(
        imageRef.current,
        { scale: 1.06 },
        { scale: 1, duration: 1.5, ease: 'power2.out' },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
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

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      className="relative min-h-screen bg-forest"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/hero_lawn_house.jpg"
          alt="Beautiful residential lawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/60 to-forest/30" />
      </div>

      {/* Green Overlay Panel */}
      <div
        ref={overlayRef}
        className="absolute left-0 top-0 h-full w-full lg:w-[55vw] bg-forest/85"
        style={{
          background: 'linear-gradient(90deg, rgba(11,58,46,0.95) 0%, rgba(11,58,46,0.88) 70%, rgba(11,58,46,0.5) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center px-6 lg:px-[4vw] py-20 lg:py-0">
        
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
          {/* Logo Mark */}
          <div className="mb-8">
            <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center">
              <span className="text-forest font-serif font-bold text-2xl">J</span>
            </div>
          </div>

          {/* Headline */}
          <div ref={headlineRef} className="max-w-full">
            <h1 className="font-serif text-cream text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-semibold leading-[0.95]">
              <span className="headline-line block">Residential</span>
              <span className="headline-line block">Landscaping</span>
              <span className="headline-line block text-gold">Done Right</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            ref={subheadRef}
            className="text-cream/80 text-base md:text-lg mt-6 leading-relaxed max-w-md"
          >
            Mowing, cleanup, seasonal maintenance, and outdoor upgrades for homes in Newport News, VA.
          </p>

          {/* Single Prominent CTA */}
          <div ref={ctaRef} className="mt-8">
            <button
              onClick={scrollToServices}
              className="group bg-gold text-forest px-8 py-4 font-medium text-lg flex items-center gap-3 hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              See Our Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 flex flex-wrap gap-4 text-cream/60 text-sm">
            <a href="tel:+17575550132" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} />
              (757) 555-0132
            </a>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              Mon–Fri 7am–6pm
            </div>
          </div>

          {/* Micro Trust Line */}
          <p
            ref={microRef}
            className="text-cream/50 text-xs tracking-wide mt-6"
          >
            Locally owned • Fully insured • Satisfaction guaranteed
          </p>
        </div>

        {/* Right Side - Quote Form */}
        <div 
          ref={formRef}
          className="w-full lg:w-1/2 lg:max-w-md"
        >
          <div className="bg-forest/80 backdrop-blur-sm border border-cream/10 p-6 lg:p-8">
            <h3 className="font-serif text-cream text-2xl lg:text-3xl font-semibold mb-2">
              Get Your Free Quote
            </h3>
            <p className="text-cream/60 text-sm mb-6">
              Tell us about your project. We'll reply within one business day.
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <CheckCircle className="w-12 h-12 text-gold mb-4" />
                <h4 className="font-serif text-cream text-xl font-semibold mb-2">
                  Thank you!
                </h4>
                <p className="text-cream/60 text-sm">
                  We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/80 text-xs mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/80 text-xs mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="(757) 555-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream/80 text-xs mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-cream/80 text-xs mb-1.5">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-cream/10 border border-cream/20 text-cream text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  >
                    <option value="" className="bg-forest">Select a service</option>
                    {serviceOptions.map((option, i) => (
                      <option key={i} value={option} className="bg-forest">{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-cream/80 text-xs mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2.5 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-forest py-3 font-medium flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors"
                >
                  Get My Quote
                  <Send size={16} />
                </button>

                <p className="text-cream/40 text-xs text-center">
                  No obligation. Free estimate.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
