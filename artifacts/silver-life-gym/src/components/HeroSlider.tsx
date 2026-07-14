import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { Link } from 'wouter';
import { MessageCircle } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
    alt: "Athletic training at The Silver Life Gym"
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80",
    alt: "Women lifting weights with focus"
  },
  {
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1600&q=80",
    alt: "Functional training and conditioning"
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-background">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Gradients and noise */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 noise-bg" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          <span className="block text-primary text-sm md:text-base tracking-[0.2em] font-sans mb-4 uppercase">
            Est. 2006 · Naranpura, Ahmedabad
          </span>
          <h1 className="text-[12vw] leading-[0.9] md:text-[8vw] font-serif font-black text-foreground mb-4 md:mb-6 uppercase tracking-tighter">
            The Silver <br /> Life Gym
          </h1>
          <p className="font-serif font-light italic text-primary text-2xl md:text-4xl lg:text-5xl mb-10 max-w-2xl">
            Where Strength Meets Serenity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
            <MagneticButton as={Link} href="/membership" className="w-full sm:w-auto text-background">Join Now</MagneticButton>
            <MagneticButton as={Link} href="/contact" variant="outline" className="w-full sm:w-auto border-foreground/30 text-foreground hover:border-primary">
              Book a Free Trial
            </MagneticButton>
            <MagneticButton 
              as="a"
              href="https://wa.me/919825414284?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20The%20Silver%20Life%20Gym."
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost" 
              className="w-full sm:w-auto gap-2 bg-sidebar/50 backdrop-blur-sm border border-border/50 hover:bg-sidebar"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span>Chat via WhatsApp</span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              idx === currentSlide ? "bg-primary w-8" : "bg-foreground/30 hover:bg-foreground/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
