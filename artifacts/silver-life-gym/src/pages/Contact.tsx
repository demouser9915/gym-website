import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { MagneticButton } from '@/components/MagneticButton';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | The Silver Life Gym | Ahmedabad";
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // UI only, no submission
    alert("Thank you for your message. We will get back to you shortly.");
    form.reset();
  };

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
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Get in Touch</h1>
            <p className="font-serif italic text-primary text-xl">Start your transformation today.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Details & Form */}
          <div className="w-full lg:w-[40%] flex flex-col gap-12">
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-sans font-medium tracking-widest text-primary text-sm uppercase mb-8">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                        12, Chandlodia Road, Naranpura<br />
                        Ahmedabad — 380013<br />
                        Gujarat, India
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                        Mon–Sat: 5:30 AM – 10:00 PM<br />
                        Sunday: 7:00 AM – 1:00 PM
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground font-sans text-sm">+91 98254 14284</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground font-sans text-sm">info@silverlifegym.com</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton 
                    as="a"
                    href="https://wa.me/919825414284?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20The%20Silver%20Life%20Gym."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white hover:bg-[#20bd5a]"
                  >
                    Chat on WhatsApp
                  </MagneticButton>
                  <MagneticButton 
                    as="a"
                    href="https://www.google.com/search?sca_esv=2dfa73c1edabb0ca&rlz=1C1ONGR_enIN1187IN1187&sxsrf=APpeQns2xcJ-r_jDPY-lbx4Ek41OYHCjRg:1783843699949&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_02K06Cr9kn0ZCYqOIQq99xuyl63LO3E1-LmgHcTTOyaA3WtEM1K-ZtLjIyexO_B-dGkSDgt3L9hj3R9JLtqX66_HluxJ8tjyh93f4N1m2Uo0Etdzg%3D%3D&q=The+Silver+Life+Gym+Reviews&sa=X&ved=2ahUKEwjW2MfQ18yVAxV2SmwGHev-EyMQ0bkNegQINRAH&biw=1536&bih=730&dpr=1.25"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                  >
                    Read Google Reviews
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-sidebar border border-border p-8 rounded-xl">
                <h2 className="font-serif text-2xl text-foreground mb-6">Send us a message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-background border-border/50 focus-visible:ring-primary rounded-none border-b-2 border-t-0 border-x-0 px-0 rounded-b-none focus-visible:ring-0 focus-visible:border-primary shadow-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Your email" {...field} className="bg-background border-border/50 focus-visible:ring-primary rounded-none border-b-2 border-t-0 border-x-0 px-0 rounded-b-none focus-visible:ring-0 focus-visible:border-primary shadow-none" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="Your phone" {...field} className="bg-background border-border/50 focus-visible:ring-primary rounded-none border-b-2 border-t-0 border-x-0 px-0 rounded-b-none focus-visible:ring-0 focus-visible:border-primary shadow-none" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you?" {...field} className="bg-background border-border/50 focus-visible:ring-primary rounded-none border-b-2 border-t-0 border-x-0 px-0 rounded-b-none focus-visible:ring-0 focus-visible:border-primary shadow-none min-h-[100px] resize-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <MagneticButton type="submit" className="w-full mt-4">
                      Submit Message
                    </MagneticButton>
                  </form>
                </Form>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Map */}
          <ScrollReveal direction="left" className="w-full lg:w-[60%] min-h-[500px]">
            <div className="w-full h-full rounded-xl overflow-hidden border border-border shadow-2xl relative">
              <iframe
                src="https://maps.google.com/maps?q=23.059123877401614,72.55583206439027&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Silver Life Gym Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </div>
          </ScrollReveal>

        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
