import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'image', src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80", alt: "Strength Zone" },
  { id: 2, type: 'image', src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80", alt: "Dumbbell Rack" },
  { id: 3, type: 'video', src: "placeholder_1", alt: "Gym Tour Video" },
  { id: 4, type: 'image', src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80", alt: "Plates" },
  { id: 5, type: 'image', src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80", alt: "Rowing Machines" },
  { id: 6, type: 'image', src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80", alt: "Cardio Zone" },
  { id: 7, type: 'video', src: "placeholder_2", alt: "Member Highlight Video" },
  { id: 8, type: 'image', src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80", alt: "Locker Room" },
  { id: 9, type: 'image', src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80", alt: "Group Training Space" },
  { id: 10, type: 'image', src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80", alt: "Yoga Studio" },
  { id: 11, type: 'image', src: "https://images.unsplash.com/photo-1522898467493-49726bf28798?w=1200&q=80", alt: "Treadmills" },
  { id: 12, type: 'image', src: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1200&q=80", alt: "Kettlebells" }
];

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Gallery | The Silver Life Gym | Ahmedabad";
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
    }
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1));
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-[100dvh]"
    >
      <section className="relative h-[40vh] w-full flex flex-col items-center justify-center pt-20 border-b border-border">
        <div className="absolute inset-0 noise-bg opacity-30" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Our World-Class Facility</h1>
            <div className="w-16 h-[1px] bg-primary mx-auto" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 max-w-[1400px] mx-auto">
        <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <StaggerItem key={item.id} className="break-inside-avoid">
              <div 
                className="relative rounded-lg overflow-hidden group cursor-pointer border border-border/50 bg-sidebar"
                onClick={() => openLightbox(index)}
              >
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-auto object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full flex flex-col items-center justify-center bg-sidebar">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-1 w-6 h-6 fill-current" />
                    </div>
                    <span className="mt-4 text-xs font-sans tracking-widest text-muted-foreground uppercase">Video Placeholder</span>
                  </div>
                )}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg pointer-events-none" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors z-50 p-2"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors z-50 p-4"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors z-50 p-4"
              aria-label="Next image"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-5xl max-h-[85vh] px-20 outline-none" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {galleryItems[lightboxIndex].type === 'image' ? (
                    <img 
                      src={galleryItems[lightboxIndex].src.replace('w=1200', 'w=2000')} 
                      alt={galleryItems[lightboxIndex].alt}
                      className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl border border-border"
                    />
                  ) : (
                    <div className="w-full aspect-video bg-sidebar border border-border flex items-center justify-center rounded shadow-2xl">
                       <span className="text-muted-foreground font-sans uppercase tracking-widest text-sm">Video Player Placeholder</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
