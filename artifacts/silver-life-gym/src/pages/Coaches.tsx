import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const team = [
  { name: "Rajesh Mehta", role: "Head Strength Coach", exp: "14 Years", img: "/Images/trainers/T1.JPG" },
  { name: "Rahul Sharma", role: "Functional Movement Specialist", exp: "9 Years", img: "/Images/trainers/T2.JPG" },
  { name: "Arjun Patel", role: "Metabolic Conditioning Expert", exp: "11 Years", img: "/Images/trainers/T3.JPG" },
  { name: "Sunita Desai", role: "Women's Fitness Coach", exp: "7 Years", img: "/Images/trainers/T4.JPG" },
  { name: "Rohan Joshi", role: "Vitality 40+ Specialist", exp: "12 Years", img: "/Images/trainers/T5.JPG" },
];

const Coaches: React.FC = () => {
  useEffect(() => {
    document.title = "Our Coaches | The Silver Life Gym | Ahmedabad";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-[100dvh]"
    >
      <section className="relative h-[40vh] w-full flex flex-col items-center justify-center pt-20 border-b border-border">
        <div className="absolute inset-0 noise-bg opacity-30" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Our Coaching Team</h1>
            <p className="text-muted-foreground font-sans text-lg">
              Every coach is certified, experienced, and deeply invested in your transformation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((coach, i) => (
            <StaggerItem key={i}>
              <div className="group block relative">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-6 bg-sidebar border border-border">
                  <img 
                    src={coach.img} 
                    alt={coach.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-background text-xs font-bold font-sans px-3 py-1 rounded-full shadow-lg">
                    {coach.exp}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-1 group-hover:text-primary transition-colors">{coach.name}</h3>
                <p className="text-muted-foreground font-sans text-xs uppercase tracking-widest">{coach.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </motion.div>
  );
};

export default Coaches;
