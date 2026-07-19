import React from 'react';
import { Link } from 'wouter';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center group mb-6 transition-transform hover:scale-105">
              <img src="/Images/logo.jpeg" alt="The Silver Life Gym Logo" className="h-20 w-auto object-contain mix-blend-screen" />
            </Link>
            <p className="font-serif italic text-primary mb-6 pr-4">
              Where Strength Meets Serenity. Since 2006.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sidebar border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sidebar border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sidebar border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-sans font-medium text-foreground tracking-widest uppercase text-sm mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Services', 'Coaches', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium text-foreground tracking-widest uppercase text-sm mb-6">Support</h4>
            <ul className="flex flex-col gap-3">
              {['Membership', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Membership' || item === 'Contact' ? `/${item.toLowerCase()}` : '/#'} className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <h4 className="font-sans font-medium text-foreground tracking-widest uppercase text-sm mb-6">Visit Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  12, Chandlodia Road, Naranpura<br />
                  Ahmedabad — 380013<br />
                  Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+91 98254 14284</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">info@silverlifegym.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-sans">
            © {new Date().getFullYear()} The Silver Life Gym. All Rights Reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs font-sans">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};
