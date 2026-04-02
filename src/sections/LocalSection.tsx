import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, DollarSign, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LocalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.fromTo(
        bgRef.current,
        { y: '-8%', scale: 1.03 },
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

      // Card slide in
      gsap.fromTo(
        cardRef.current,
        { x: 80, opacity: 0 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bullets = [
    { icon: MapPin, text: 'Newport News–focused scheduling' },
    { icon: Calendar, text: 'Seasonal timing that fits Virginia weather' },
    { icon: DollarSign, text: 'Clear quotes, no hidden fees' },
  ];

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
          src="/lawn_trees_wide.jpg"
          alt="Wide lawn with mature trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 min-h-[80vh] lg:min-h-screen flex items-center justify-end px-6 lg:px-[6vw] py-16">
        <div
          ref={cardRef}
          className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-forest/92 backdrop-blur-sm p-6 md:p-8 lg:p-10"
        >
          <div className="w-12 h-0.5 bg-gold mb-6" />

          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-6">
            We're local.
          </h2>

          <p className="text-cream/80 text-sm md:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
            Based in Newport News, we know the soil, the seasons, and what grows best here.
          </p>

          <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <bullet.icon className="w-4 h-4 lg:w-5 lg:h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/90 text-xs md:text-sm">{bullet.text}</span>
              </li>
            ))}
          </ul>

          <a
            href="#about"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            Meet the Team
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocalSection;
