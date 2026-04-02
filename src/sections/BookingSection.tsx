import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BookingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const imageBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.fromTo(
        bgRef.current,
        { y: '-8%', scale: 1.05 },
        {
          y: '8%',
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // Text slide in from left
      gsap.fromTo(
        textBlockRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Image slide in from right
      gsap.fromTo(
        imageBlockRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] lg:min-h-screen overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[116%] -top-[8%]"
      >
        <img
          src="/service_cleanup.jpg"
          alt="Seasonal cleanup service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 min-h-[80vh] lg:min-h-screen flex items-center px-6 lg:px-[6vw] py-16">
        <div ref={textBlockRef} className="max-w-sm md:max-w-md lg:max-w-lg">
          <div className="mb-4">
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
              Easy Booking
            </span>
          </div>

          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] mb-4 lg:mb-6">
            Schedule in<br />
            <span className="text-gold">minutes.</span>
          </h2>

          <p className="text-cream/80 text-sm md:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
            Request a visit online or by phone. We confirm quickly, show up on time, and keep you updated.
          </p>

          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            Book a Visit
            <ArrowRight size={16} />
          </a>
        </div>

        <div
          ref={imageBlockRef}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[42vw] h-[60vh] shadow-card overflow-hidden"
        >
          <img
            src="/service_maintenance.jpg"
            alt="Professional lawn maintenance"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
