import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { MagneticButton } from '@/components/MagneticButton';
import { Check } from 'lucide-react';
import { Link } from 'wouter';

const tiers = [
  {
    name: "Essential",
    price: "2,499",
    desc: "Access to the foundation of your fitness journey.",
    features: [
      "Access to gym floor & standard equipment",
      "1 fitness assessment per month",
      "Locker room access",
      "App access for workout tracking"
    ],
    popular: false
  },
  {
    name: "Signature",
    price: "3,999",
    desc: "The complete Silver Life experience.",
    features: [
      "Everything in Essential",
      "Unlimited group classes",
      "Monthly nutrition consultation",
      "Priority class booking",
      "Guest pass (1/month)"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "5,999",
    desc: "Maximum attention, maximum results.",
    features: [
      "Everything in Signature",
      "4 personal training sessions/mo",
      "Advanced body composition analysis",
      "Dedicated premium locker",
      "Recovery zone access"
    ],
    popular: false
  }
];

const schedule = [
  { time: "6:00 AM", mon: "Yoga Flow", tue: "MetCon", wed: "Yoga Flow", thu: "MetCon", fri: "CoreBlast", sat: "MetCon", sun: "-" },
  { time: "7:00 AM", mon: "Zumba", tue: "CoreBlast", wed: "Zumba", thu: "CoreBlast", fri: "Zumba", sat: "Yoga Flow", sun: "Yoga Flow" },
  { time: "8:00 AM", mon: "MetCon", tue: "Yoga Flow", wed: "MetCon", thu: "Yoga Flow", fri: "MetCon", sat: "Zumba", sun: "Zumba" },
  { time: "9:00 AM", mon: "CoreBlast", tue: "Zumba", wed: "CoreBlast", thu: "Zumba", fri: "Yoga Flow", sat: "CoreBlast", sun: "-" },
  { time: "5:00 PM", mon: "Yoga Flow", tue: "CoreBlast", wed: "Yoga Flow", thu: "CoreBlast", fri: "Zumba", sat: "-", sun: "-" },
  { time: "6:00 PM", mon: "Zumba", tue: "MetCon", wed: "Zumba", thu: "MetCon", fri: "CoreBlast", sat: "-", sun: "-" },
  { time: "7:00 PM", mon: "MetCon", tue: "Yoga Flow", wed: "MetCon", thu: "Yoga Flow", fri: "MetCon", sat: "-", sun: "-" },
  { time: "8:00 PM", mon: "CoreBlast", tue: "-", wed: "CoreBlast", thu: "-", fri: "Yoga Flow", sat: "-", sun: "-" },
];

const getClassColor = (className: string) => {
  switch(className) {
    case "Yoga Flow": return "bg-[#1E293B] text-[#94A3B8] border-[#334155]"; // Steel slate
    case "Zumba": return "bg-[#271E17] text-[#D8B978] border-[#4A3A28]"; // Warm amber dark
    case "CoreBlast": return "bg-[#17202A] text-[#7F8C8D] border-[#2C3E50]"; // Deep blue gray
    case "MetCon": return "bg-[#2A2416] text-[#C9A24B] border-[#4A4027]"; // Dark gold
    case "-": return "bg-transparent text-muted-foreground/30 border-transparent";
    default: return "bg-sidebar border-border text-foreground";
  }
};

const Membership: React.FC = () => {
  useEffect(() => {
    document.title = "Membership & Pricing | The Silver Life Gym | Ahmedabad";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-[100dvh]"
    >
      <section className="relative h-[40vh] w-full flex flex-col items-center justify-center pt-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-30" />
        <div className="relative z-10 text-center px-6 mt-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Invest in Yourself</h1>
            <p className="font-serif italic text-primary text-xl">Transparent pricing. No hidden fees.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, i) => (
            <StaggerItem key={i} className={`relative p-8 rounded-xl border ${tier.popular ? 'bg-sidebar border-primary shadow-2xl scale-100 lg:scale-105 z-10' : 'bg-background border-border'}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background font-sans font-bold text-[10px] tracking-widest uppercase px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif text-foreground mb-2">{tier.name}</h3>
              <p className="text-muted-foreground text-sm font-sans mb-6">{tier.desc}</p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-xl font-sans text-foreground">₹</span>
                <span className="text-4xl md:text-5xl font-serif text-foreground">{tier.price}</span>
                <span className="text-muted-foreground text-sm font-sans">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-sm font-sans text-foreground/80 leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
              <MagneticButton 
                as={Link}
                href="/contact"
                className={`w-full ${tier.popular ? 'bg-primary text-background' : 'bg-transparent border border-border text-foreground hover:border-primary'}`}
                variant={tier.popular ? 'primary' : 'outline'}
              >
                Choose Plan
              </MagneticButton>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6 bg-sidebar border-y border-border">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Weekly Class Timetable</h2>
              <p className="text-muted-foreground font-sans">Classes are included in Signature and Elite memberships.</p>
            </div>
          </ScrollReveal>

          <div className="overflow-x-auto pb-8">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border w-[10%]">Time</th>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <th key={day} className="p-4 text-center font-sans text-sm font-bold uppercase tracking-widest text-foreground border-b border-border w-[12.8%]">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className="group">
                    <td className="p-4 font-sans text-sm font-medium text-muted-foreground border-b border-border/50 whitespace-nowrap">
                      {row.time}
                    </td>
                    {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => {
                      const className = row[day as keyof typeof row];
                      return (
                        <td key={day} className="p-2 border-b border-border/50 text-center">
                          {className !== '-' ? (
                            <div className={`py-3 px-2 rounded border text-xs font-sans font-medium tracking-wide ${getClassColor(className)}`}>
                              {className}
                            </div>
                          ) : (
                            <div className="py-3 px-2 text-muted-foreground/20 text-xs">-</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Membership;
