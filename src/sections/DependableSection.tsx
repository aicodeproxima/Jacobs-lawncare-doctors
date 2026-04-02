import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DependableSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imageBlockRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);

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

      // Image slide in from left
      gsap.fromTo(
        imageBlockRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Text slide in from right
      gsap.fromTo(
        textBlockRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
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
          src="/lawn_wide_clean.jpg"
          alt="Clean lawn with perfect stripes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 min-h-[80vh] lg:min-h-screen flex items-center">
        <div
          ref={imageBlockRef}
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[42vw] h-[60vh] shadow-card overflow-hidden"
        >
          <img
            src="/service_install.jpg"
            alt="Landscape installation"
            className="w-full h-full object-cover"
          />
        </div>

        <div ref={textBlockRef} className="ml-auto mr-6 lg:mr-[6vw] max-w-sm md:max-w-md lg:max-w-lg px-6 lg:px-0">
          <div className="mb-4">
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
              Dependable
            </span>
          </div>

          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] mb-4 lg:mb-6">
            On time.<br />
            <span className="text-gold">Every time.</span>
          </h2>

          <p className="text-cream/80 text-sm md:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
            Regular maintenance, seasonal cleanups, and storm recovery—handled with the same care we'd give our own yards.
          </p>

          <a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2 text-sm"
          >
            Set Up a Plan
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DependableSection;
