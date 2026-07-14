import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Zap, Users, Leaf } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | The Silver Life Gym | Est. 2006, Naranpura";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-[100dvh]"
    >
      {/* Hero Banner */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=80" 
            alt="The Silver Life Gym Interior" 
            className="w-full h-full object-cover object-center opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-0 noise-bg" />
        </div>
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground">About The Silver Life Gym</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Story Split Screen */}
      <section className="py-24 md:py-32 px-6 md:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <ScrollReveal direction="right" className="relative h-[400px] lg:h-auto min-h-[500px] rounded-lg overflow-hidden lg:rounded-r-xl lg:rounded-l-none">
            <img 
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80" 
              alt="Gym Equipment Detail" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="flex flex-col justify-center lg:pr-12">
            <span className="text-primary tracking-[0.2em] font-sans font-medium uppercase text-sm mb-6">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Born in Naranpura.<br />Built for Life.</h2>
            <div className="space-y-6 text-muted-foreground font-sans text-lg leading-relaxed">
              <p>
                In 2006, The Silver Life Gym opened its doors in the heart of Naranpura, Ahmedabad — not as just another fitness center, but as a sanctuary for meaningful, lasting transformation.
              </p>
              <p>
                For over 18 years, we have been the training ground for athletes, professionals, homemakers, and seniors who all share one thing: the commitment to a better life. Our philosophy is simple: strength is not just physical. It is mental clarity, disciplined habits, and the quiet confidence that comes from showing up, day after day.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-sidebar border-y border-border py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24 max-w-4xl mx-auto">
              <p className="font-serif italic text-3xl md:text-5xl text-primary leading-tight">
                "We don't just build bodies.<br />We build character."
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Discipline", desc: "Motivation fades. Discipline builds empires. We provide the structure; you provide the effort." },
              { icon: Users, title: "Community", desc: "A culture of high standards. Train alongside individuals who elevate your expectations." },
              { icon: Leaf, title: "Longevity", desc: "Training for life, not just for the mirror. Sustainable, scientifically-backed programming." }
            ].map((val, i) => (
              <StaggerItem key={i} className="text-center md:text-left flex flex-col items-center md:items-start group">
                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <val.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">{val.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{val.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">The Founders</h2>
            <div className="w-20 h-[1px] bg-primary mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg mb-8 relative border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=800&q=80" 
                  alt="Vikram Shah" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-serif text-foreground mb-2">Vikram Shah</h3>
              <p className="text-primary font-sans text-sm tracking-widest uppercase mb-6">Co-Founder & CEO</p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                A passionate fitness advocate with over two decades in the wellness industry, Vikram founded The Silver Life Gym in 2006 with a singular vision: to create a space where every individual, regardless of age or fitness level, could transform their life through structured, mindful training.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg mb-8 relative border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80" 
                  alt="Neha Shah" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-serif text-foreground mb-2">Neha Shah</h3>
              <p className="text-primary font-sans text-sm tracking-widest uppercase mb-6">Co-Founder & Director of Programs</p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                With a background in sports science and nutrition, Neha designed the gym's signature programming framework that blends modern exercise science with holistic wellness principles. Her approach has helped hundreds of members achieve lasting transformation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
