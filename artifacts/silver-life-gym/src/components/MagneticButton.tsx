import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  as?: any;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  className,
  as: Component = 'button',
  ...props
}) => {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "relative px-6 py-3 rounded-full font-sans font-medium text-sm md:text-base tracking-wide transition-colors duration-300 overflow-hidden group inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-accent",
    outline: "border border-border text-foreground hover:border-primary hover:text-primary",
    ghost: "text-foreground hover:text-primary"
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center relative z-10"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </Component>
  );
};
