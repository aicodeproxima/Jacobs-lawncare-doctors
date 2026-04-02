import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Scissors, Leaf, Flower2, Shovel, 
  Sun, Droplets, TreePine, Fence, Home,
  ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation - only animate once
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true, // Only animate once
          }
        }
      );

      // Categories animation - only animate once, don't reverse on scroll up
      const categories = categoriesRef.current?.querySelectorAll('.service-category');
      if (categories) {
        categories.forEach((category, i) => {
          gsap.fromTo(
            category,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: i * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: category,
                start: 'top 90%',
                once: true, // Only animate once, content stays visible
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const serviceCategories: ServiceCategory[] = [
    {
      title: "Landscape Installation",
      services: [
        { icon: Flower2, title: "Landscape Design & Planning", description: "Custom designs tailored to your property and vision.", features: ["3D renderings", "Plant selection guidance", "Budget planning"] },
        { icon: Shovel, title: "New Landscape Installation", description: "Complete transformation of your outdoor space.", features: ["Soil preparation", "Plant installation", "Mulch application"] },
        { icon: Leaf, title: "Lawn Installation & Renovation", description: "Beautiful lawns from scratch or restoration.", features: ["Grading", "Soil amendment", "Seed or sod"] },
        { icon: Droplets, title: "Sod Installation", description: "Instant lawn with premium sod varieties.", features: ["Site prep", "Quality sod", "Watering guidance"] },
        { icon: Sun, title: "Seeding & Overseeding", description: "Thick, healthy grass for your yard.", features: ["Aeration", "Premium seed blends", "Fertilization"] },
        { icon: TreePine, title: "Planting Trees, Shrubs & Flowers", description: "Expert planting for lasting beauty.", features: ["Proper spacing", "Soil conditioning", "Warranty included"] },
      ]
    },
    {
      title: "Lawn Care & Maintenance",
      services: [
        { icon: Scissors, title: "Lawn Mowing", description: "Regular mowing with professional equipment.", features: ["Weekly service", "Edge trimming", "Clipping cleanup"] },
        { icon: Fence, title: "Lawn Edging", description: "Crisp, clean edges along all borders.", features: ["Sidewalk edges", "Driveway borders", "Bed definitions"] },
        { icon: TreePine, title: "Trimming & Pruning", description: "Healthy growth through proper pruning.", features: ["Seasonal timing", "Disease prevention", "Shape maintenance"] },
        { icon: Scissors, title: "Hedge & Shrub Shaping", description: "Precise shaping for polished appearance.", features: ["Formal hedges", "Natural shaping", "Seasonal trims"] },
        { icon: Leaf, title: "Weed Control", description: "Targeted weed management programs.", features: ["Pre-emergent", "Post-emergent", "Organic options"] },
        { icon: Droplets, title: "Fertilization Programs", description: "Custom feeding schedules for your lawn.", features: ["Soil testing", "Seasonal applications", "Slow-release formulas"] },
      ]
    },
    {
      title: "Outdoor Enhancements",
      services: [
        { icon: Shovel, title: "Mulch Installation", description: "Fresh mulch for beds and tree rings.", features: ["Various colors", "Weed barrier", "Proper depth"] },
        { icon: Fence, title: "Rock & Gravel Installation", description: "Decorative stone for pathways and beds.", features: ["River rock", "Pea gravel", "Drainage rock"] },
        { icon: Flower2, title: "Garden Bed Design & Maintenance", description: "Beautiful beds that thrive year-round.", features: ["Annual rotation", "Perennial care", "Weed management"] },
        { icon: Sun, title: "Seasonal Flower Rotation", description: "Colorful blooms every season.", features: ["Spring annuals", "Summer color", "Fall mums"] },
        { icon: Home, title: "Hardscape Installation", description: "Patios, walkways, and retaining walls.", features: ["Pavers", "Natural stone", "Concrete"] },
        { icon: Sun, title: "Landscape Lighting", description: "Elegant outdoor lighting solutions.", features: ["Path lighting", "Uplighting", "Security lighting"] },
      ]
    },
    {
      title: "Cleanup & Seasonal Services",
      services: [
        { icon: Leaf, title: "Yard Cleanup", description: "Comprehensive property cleanups.", features: ["Debris removal", "Bed cleaning", "Final polish"] },
        { icon: TreePine, title: "Leaf Removal", description: "Fall leaf collection and removal.", features: ["Multiple visits", "Bagging service", "Composting"] },
        { icon: Droplets, title: "Storm Cleanup", description: "Post-storm debris and damage cleanup.", features: ["Emergency service", "Branch removal", "Damage assessment"] },
        { icon: Shovel, title: "Debris Hauling", description: "Removal of yard waste and debris.", features: ["Truck hauling", "Responsible disposal", "Site restoration"] },
        { icon: Droplets, title: "Drainage Solutions", description: "Fix standing water issues.", features: ["French drains", "Grading", "Downspout routing"] },
        { icon: Fence, title: "Grading & Leveling", description: "Proper slope for drainage and aesthetics.", features: ["Rough grading", "Finish grading", "Erosion control"] },
      ]
    },
    {
      title: "Property Upkeep",
      services: [
        { icon: Home, title: "Seasonal Property Maintenance", description: "Year-round care for your landscape.", features: ["Spring cleanup", "Summer care", "Winter prep"] },
        { icon: Fence, title: "HOA & Residential Property Upkeep", description: "Compliance with HOA standards.", features: ["Regular inspections", "Documentation", "Prompt service"] },
        { icon: Snowflake, title: "Snow Removal", description: "Winter snow and ice management.", features: ["Driveway clearing", "Walkway safety", "De-icing"] },
      ]
    }
  ];

  // Snowflake icon component since lucide doesn't have it
  function Snowflake({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4M8 3l4 4 4-4M8 21l4-4 4 4M3 8l4 4-4 4M21 8l-4 4 4 4" />
      </svg>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-sage py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-16">
          <span className="text-forest/60 text-xs tracking-[0.2em] uppercase font-medium">
            Our Services
          </span>
          <h2 className="font-serif text-forest text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Services built around<br />your home.
          </h2>
          <p className="text-forest/70 text-base lg:text-lg leading-relaxed">
            From weekly maintenance to full outdoor transformations, we keep it simple, tidy, and on schedule.
          </p>
        </div>

        {/* Service Categories Accordion */}
        <div ref={categoriesRef} className="space-y-4">
          {serviceCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="service-category bg-white shadow-sm overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setOpenCategory(openCategory === catIndex ? null : catIndex)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-forest/5 transition-colors"
              >
                <h3 className="font-serif text-forest text-xl lg:text-2xl font-semibold text-left">
                  {category.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-forest/50 text-sm hidden sm:block">
                    {category.services.length} services
                  </span>
                  {openCategory === catIndex ? (
                    <ChevronUp className="w-5 h-5 text-forest" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-forest" />
                  )}
                </div>
              </button>

              {/* Category Services */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openCategory === catIndex ? 'max-h-[2000px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, svcIndex) => (
                    <div
                      key={svcIndex}
                      className="group p-5 border border-forest/10 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-forest/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
                          <service.icon className="w-5 h-5 text-forest" />
                        </div>
                        <h4 className="font-serif text-forest text-lg font-semibold leading-tight">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-forest/70 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <ul className="space-y-1">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-forest/60 text-xs flex items-center gap-2">
                            <div className="w-1 h-1 bg-gold rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 font-medium hover:bg-forest/90 transition-colors"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
