import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { MagneticButton } from '@/components/MagneticButton';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const lastIndex = useRef(1);
  const isFetching = useRef(false);

  const fetchItems = useCallback(async () => {
    if (isFetching.current || !hasMore) return;
    isFetching.current = true;
    setIsLoadingMore(true);
    
    const exts = ['.jpg', '.jpeg', '.png', '.mp4', '.webm'];
    let newItems: GalleryItem[] = [];
    let misses = 0;
    
    // Find up to 6 items, or stop if we hit 3 misses in a row
    while (newItems.length < 6 && misses < 3 && lastIndex.current <= 100) {
      let found = false;
      const i = lastIndex.current;
      
      for (const folderCase of ['gallery', 'Gallery']) {
        for (const ext of exts) {
          // Check lowercase then uppercase
          for (const actualExt of [ext, ext.toUpperCase()]) {
            const path = `/Images/${folderCase}/i${i}${actualExt}`;
            try {
              // Append a cache-buster so the browser doesn't return a cached 404
              const res = await fetch(path + '?t=' + Date.now(), { method: 'HEAD', cache: 'no-store' });
              const contentType = res.headers.get('content-type') || '';
              
              if (res.ok && !contentType.includes('text/html')) {
                const isVideo = /\.(mp4|webm|ogg)$/i.test(actualExt);
                newItems.push({
                  id: i,
                  type: isVideo ? 'video' : 'image',
                  src: path,
                  alt: `Gallery Item ${i}`
                });
                found = true;
                misses = 0;
                break; // Break inner loop
              }
            } catch(e) {
              // ignore fetch errors
            }
          }
          if (found) break; // Break ext loop
        }
        if (found) break; // Break folderCase loop
      }
      
      if (!found) {
        misses++;
      }
      lastIndex.current++;
    }
    
    setGalleryItems(prev => [...prev, ...newItems]);
    
    if (misses >= 3 || lastIndex.current > 100) {
      setHasMore(false);
    }
    
    setIsLoading(false);
    setIsLoadingMore(false);
    isFetching.current = false;
  }, [hasMore]);

  useEffect(() => {
    document.title = "Gallery | The Silver Life Gym | Ahmedabad";
    fetchItems();
  }, [fetchItems]);

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
  }, [lightboxIndex, galleryItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, galleryItems.length]);

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

      <section className="py-16 px-6 max-w-[1400px] mx-auto min-h-[40vh]">
        {isLoading ? (
          <div className="flex items-center justify-center h-full w-full py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin opacity-50" />
          </div>
        ) : galleryItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-sans">No gallery items found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div 
                    className="relative rounded-lg overflow-hidden group cursor-pointer border border-border/50 bg-sidebar aspect-[4/3]"
                    onClick={() => openLightbox(index)}
                  >
                    {item.type === 'image' ? (
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-sidebar overflow-hidden">
                        <video 
                          src={item.src} 
                          className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                          preload="metadata"
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-1 w-5 h-5 fill-current text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-16">
                <MagneticButton 
                  variant="outline" 
                  onClick={fetchItems} 
                  disabled={isLoadingMore}
                  className="px-10"
                >
                  {isLoadingMore ? 'Loading...' : 'View More'}
                </MagneticButton>
              </div>
            )}
          </>
        )}
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
                    <video 
                      src={galleryItems[lightboxIndex].src} 
                      className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl border border-border bg-black"
                      controls
                      autoPlay
                    />
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
