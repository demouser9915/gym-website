import React, { useEffect } from 'react';
import { HeroSlider } from '@/components/HeroSlider';
import { Marquee } from '@/components/Marquee';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { MagneticButton } from '@/components/MagneticButton';
import { Link } from 'wouter';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const InstagramReel = ({ url }: { url: string }) => {
  // Extract the ID from the Instagram URL (works for /reel/ID or /p/ID)
  const match = url.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/i);
  const id = match ? match[1] : '';

  if (!id) {
    return (
      <div className="w-full h-full bg-sidebar flex items-center justify-center p-4 text-center border border-border">
        <span className="text-muted-foreground text-xs">Invalid Instagram URL</span>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.instagram.com/p/${id}/embed/captioned`}
      className="w-full h-full border-none bg-background"
      scrolling="no"
      allowTransparency={true}
      allow="encrypted-media"
    />
  );
};

const Home: React.FC = () => {
  const [reels, setReels] = React.useState<string[]>([]);

  useEffect(() => {
    document.title = "The Silver Life Gym | Premium Fitness & Wellness | Ahmedabad";
    
    // Fetch reels dynamically from reels.txt (cache-busted to instantly reflect changes)
    fetch('/reels.txt?t=' + Date.now())
      .then(res => res.text())
      .then(text => {
        const urls = text.split('\n').map(l => l.trim()).filter(l => l);
        setReels(urls.slice(0, 4));
      })
      .catch(() => {});

    // Setup JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "name": "The Silver Life Gym",
      "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      "url": "https://silverlifegym.com",
      "telephone": "+919825414284",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12, Chandlodia Road, Naranpura",
        "addressLocality": "Ahmedabad",
        "postalCode": "380013",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "foundingDate": "2006",
      "slogan": "Where Strength Meets Serenity"
    };

    let script = document.getElementById('json-ld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, []);

  const coaches = [
    { name: "Rajesh Mehta", role: "Head Strength Coach", exp: "14 Years", img: "/Images/trainers/T1.JPG" },
    { name: "Rahul Sharma", role: "Functional Movement Specialist", exp: "9 Years", img: "/Images/trainers/T2.JPG" },
    { name: "Arjun Patel", role: "Metabolic Conditioning Expert", exp: "11 Years", img: "/Images/trainers/T3.JPG" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-[100dvh]"
    >
      <HeroSlider />
      
      <Marquee items={[
        "18+ YEARS OF EXCELLENCE",
        "500+ ACTIVE MEMBERS",
        "CERTIFIED COACHES",
        "NARANPURA'S PREMIER GYM",
        "STATE-OF-THE-ART EQUIPMENT",
        "PERSONALIZED PROGRAMS"
      ]} />

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-8">
              Redefining Fitness in <span className="text-primary italic">Ahmedabad.</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg md:text-xl leading-relaxed mb-8">
              Founded in 2006, The Silver Life Gym is a sanctuary for those who demand more from their training. We pair world-class equipment with an atmosphere of quiet luxury, ensuring every session is purposeful.
            </p>
            <MagneticButton as={Link} href="/about" variant="outline" className="border-border">Discover Our Story</MagneticButton>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" alt="Gym interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-border/20 rounded-lg pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Coaches */}
      <section className="bg-sidebar py-24 md:py-32 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-primary font-sans tracking-widest uppercase text-sm block mb-4">The Experts</span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground">Our Expert Coaches</h2>
                <p className="font-serif italic text-primary text-xl mt-2">Guided by the best.</p>
              </div>
              <MagneticButton as={Link} href="/coaches" variant="ghost" className="hidden md:flex border border-border">Meet the Full Team →</MagneticButton>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, i) => (
              <StaggerItem key={i}>
                <div className="group block relative">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-6 bg-background border border-border transition-colors duration-500 group-hover:border-primary/50">
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
                  <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider">{coach.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="mt-12 text-center md:hidden">
            <MagneticButton as={Link} href="/coaches" variant="outline" className="w-full">Meet the Full Team →</MagneticButton>
          </div>
        </div>
      </section>

      {/* Social Reels */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Follow Our Journey</h2>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary font-sans hover:underline">
              @thesilverlifegym
            </a>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reels.length > 0 ? reels.map((url, i) => (
            <StaggerItem key={i}>
              <div className="relative aspect-[9/16] w-full bg-sidebar border border-border rounded-lg overflow-hidden group">
                <InstagramReel url={url} />
              </div>
            </StaggerItem>
          )) : [1, 2, 3, 4].map((i) => (
            <StaggerItem key={i}>
              <div className="relative aspect-[9/16] w-full bg-sidebar border border-border rounded-lg overflow-hidden group cursor-pointer">
                <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?w=400&q=80`} alt="Gym Reel Placeholder" className="w-full h-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur flex items-center justify-center text-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 w-5 h-5 fill-current" />
                  </div>
                  <span className="text-foreground text-xs font-sans tracking-wide max-w-[80%]">REEL PLACEHOLDER<br/><span className="text-[10px] text-muted-foreground">swap src</span></span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <div className="mt-16 text-center">
          <MagneticButton as="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer" variant="outline">View More on Instagram →</MagneticButton>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
