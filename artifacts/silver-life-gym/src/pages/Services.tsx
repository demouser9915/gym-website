import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Link } from 'wouter';
import { Dumbbell, Activity, Flame, Heart, ArrowUpRight, Apple } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    id: "strength",
    title: "Strength Conditioning",
    icon: Dumbbell,
    desc: "Barbells, powerlifting platforms, resistance machines. Build raw, functional strength under expert supervision."
  },
  {
    id: "functional",
    title: "Functional Movement",
    icon: Activity,
    desc: "Movement-pattern training focused on mobility, coordination, and injury prevention. Train like an athlete."
  },
  {
    id: "metabolic",
    title: "Metabolic Sculpt",
    icon: Flame,
    desc: "High-intensity metabolic circuits designed to torch fat, preserve muscle, and accelerate conditioning."
  },
  {
    id: "womens",
    title: "Women's Fitness",
    icon: Heart,
    desc: "A dedicated program honoring the unique physiology and goals of women. Strength, confidence, and community."
  },
  {
    id: "vitality",
    title: "Vitality 40+",
    icon: ArrowUpRight,
    desc: "Specialized programming for members over 40. Joint-friendly, progressive, and deeply effective."
  },
  {
    id: "nutrition",
    title: "Nutrition & Wellness",
    icon: Apple,
    desc: "Personalized nutrition advisory and supplementation guidance integrated with your training plan."
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Our Services | The Silver Life Gym | Ahmedabad";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-[100dvh]"
    >
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&q=80" 
            alt="Gym weights" 
            className="w-full h-full object-cover object-center opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-0 noise-bg" />
        </div>
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-4">Our Disciplines</h1>
            <p className="text-primary font-serif italic text-xl md:text-2xl">Specialized training. Superior results.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        {/* Desktop Layout - Asymmetric Grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.id} delay={i * 0.1}>
              <div className="group h-full bg-sidebar border border-border p-10 rounded-xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-background border border-border flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">{svc.title}</h3>
                  <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">{svc.desc}</p>
                  <Link href="/membership" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-foreground tracking-widest uppercase group-hover:text-primary transition-colors">
                    Learn More <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Layout - Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            {services.map((svc) => (
              <AccordionItem key={svc.id} value={svc.id} className="border-border">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-sidebar border border-border flex items-center justify-center shrink-0">
                      <svc.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-serif text-xl text-foreground">{svc.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pb-6 pl-14">
                  {svc.desc}
                  <div className="mt-4">
                    <Link href="/membership" className="text-primary font-medium text-sm tracking-widest uppercase">
                      Learn More →
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
