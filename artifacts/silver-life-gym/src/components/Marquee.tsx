import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: string[];
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, className }) => {
  // Duplicate items twice to ensure seamless looping without jumpiness
  const loopItems = [...items, ...items];

  return (
    <div className={cn("w-full overflow-hidden bg-sidebar py-3 border-y border-border relative flex items-center", className)}>
      <div className="marquee-content shrink-0 flex items-center">
        {loopItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-primary mx-4 text-xs tracking-[0.2em] font-sans font-medium uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="text-primary text-[10px] mx-4 opacity-50">◆</span>
          </React.Fragment>
        ))}
        {/* Double the set inside the same track so the loop is fully seamless */}
        {loopItems.map((item, index) => (
          <React.Fragment key={`copy-${index}`}>
            <span className="text-primary mx-4 text-xs tracking-[0.2em] font-sans font-medium uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="text-primary text-[10px] mx-4 opacity-50">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
