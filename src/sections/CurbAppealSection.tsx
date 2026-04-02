import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CurbAppealSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.fromTo(
        bgRef.current,
        { y: '-10%', scale: 1.05 },
        {
          y: '10%',
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

      // Content fade in
      gsap.fromTo(
        microRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      const headlineLines = headlineRef.current?.querySelectorAll('.headline-line');
      if (headlineLines) {
        headlineLines.forEach((line, i) => {
          gsap.fromTo(
            line,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 65%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        });
      }

      gsap.fromTo(
        bodyRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
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
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="/garden_flowers_wide.jpg"
          alt="Beautiful garden with flowers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10 min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center px-6 text-center py-16">
        <div ref={microRef} className="mb-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
              Curb Appeal
            </span>
            <div className="w-10 h-0.5 bg-gold" />
          </div>
        </div>

        <div ref={headlineRef} className="max-w-4xl">
          <h2 className="font-serif text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.0]">
            <span className="headline-line block">Beautiful yards,</span>
            <span className="headline-line block text-gold">zero hassle.</span>
          </h2>
        </div>

        <div ref={bodyRef} className="max-w-2xl mt-6 lg:mt-8">
          <p className="text-cream/80 text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8">
            We handle the mowing, edging, weeding, and seasonal cleanups—so your home always looks its best.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-gold hover:text-cream transition-colors text-sm font-medium tracking-wide"
          >
            View Maintenance Plans
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurbAppealSection;
