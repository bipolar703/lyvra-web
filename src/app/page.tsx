"use client"

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const FadeInWhenVisible = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ethoses = [
  {
    title: "Tactile Rebellion",
    desc: "Our garments are designed to be felt. Heavyweight textures that defy the fast-fashion trend of disposability. Every thread is a deliberate act of resistance."
  },
  {
    title: "Chromatic Nostalgia",
    desc: "Colors inspired by 35mm film stock and sun-bleached memories of the 90s indie art scene. We capture the haze of a memory and weave it into cloth."
  },
  {
    title: "Sustainable Brutalism",
    desc: "Raw edges, exposed seams, and deadstock fabrics. Beauty found in the structural integrity of the craft. We don't hide the process; we celebrate the grit."
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center pt-16 md:pt-32 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Editorial Hero Section */}
      <section className="relative w-full text-center space-y-24 mb-32" aria-labelledby="hero-heading">
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center">
            <h1 id="hero-heading" className="text-[12vw] md:text-[14rem] font-[950] tracking-tighter leading-[0.8] uppercase py-4">
              Indie Art
            </h1>
            <div className="flex items-center justify-center space-x-6 md:space-x-12 mt-4">
              {/* Added horizontal padding (px-4) to prevent "Edge" clipping when using bg-clip-text */}
              <motion.span 
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-200 to-purple-300 italic text-[10vw] md:text-[12rem] font-black pb-4 px-4 inline-block"
              >
                Edge
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "15vw" }}
                transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] bg-[#1c1917]/20 hidden md:block"
              />
            </div>
          </div>
          <p className="text-xs md:text-[11px] font-black uppercase tracking-[0.6em] opacity-30 max-w-md mx-auto leading-loose">
            Luxury streetwear crafted for the elite.<br />
            Designing the souls of modern rebellion.
          </p>
        </motion.div>

        {/* Hero Visual Mockup with Enhanced Parallax */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-accent/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border group">
          <motion.div 
            style={{ 
              scale: useTransform(scrollYProgress, [0, 0.4], [1.1, 1]),
              y: useTransform(scrollYProgress, [0, 0.4], ["0%", "-10%"])
            }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop"
              alt="Editorial Streetwear model wearing luxury oversized hoodie"
              fill
              className="object-cover object-top opacity-90 transition-transform duration-[4000ms] group-hover:scale-105"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 pointer-events-none">
            <span className="text-[9px] font-black uppercase tracking-[1em] opacity-40 text-white drop-shadow-xl">LYVRA SPRING/SUMMER 2026</span>
            <div className="w-px h-32 bg-gradient-to-b from-white/40 to-transparent" aria-hidden="true" />
          </div>
        </div>

        {/* Call to Action - Elevated Minimalist */}
        <div className="pt-12">
          <Link 
            href="/the-studio" 
            className="group relative inline-flex items-center space-x-16 px-20 py-10 border border-primary/10 hover:border-primary transition-all duration-1000 rounded-full"
            aria-label="Enter the Studio to start your design process"
          >
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.8em] group-hover:translate-x-2 transition-transform duration-700">Enter the Studio</span>
            <motion.div 
              className="absolute inset-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 rounded-full"
            />
            <span className="absolute inset-0 flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none text-[10px] font-black uppercase tracking-[0.8em]">
              Start Application
            </span>
          </Link>
        </div>
      </section>

      {/* Brand Ethos - Polished Editorial Grid */}
      <section className="grid md:grid-cols-2 gap-24 md:gap-48 py-48 border-t border-border w-full" aria-labelledby="ethos-heading">
        <div className="space-y-24">
          <FadeInWhenVisible>
            <div className="space-y-12">
               <div className="flex items-center space-x-6">
                 <div className="w-12 h-px bg-foreground/20" />
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-30">Our Philosophy</span>
               </div>
               <h2 id="ethos-heading" className="text-6xl md:text-[8rem] font-[950] italic tracking-tighter uppercase leading-[0.85]">
                 Grainy film.<br />Pastel dreams.
               </h2>
            </div>
          </FadeInWhenVisible>
          
          <Accordion type="single" collapsible className="w-full max-w-lg" defaultValue="item-0">
            {ethoses.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border py-4">
                <AccordionTrigger className="text-xs font-black uppercase tracking-[0.4em] hover:no-underline hover:opacity-50 transition-opacity py-6">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-medium leading-relaxed opacity-50 pb-8 pr-12">
                  {item.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="flex flex-col space-y-24">
          <FadeInWhenVisible delay={0.2}>
            <div className="relative aspect-[4/5] bg-primary rounded-[2.5rem] overflow-hidden shadow-3xl group">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
                  alt="High-fashion model in minimalist urban setting"
                  fill
                  className="object-cover grayscale transition-all duration-[3s] group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.4}>
            <div className="flex flex-col space-y-8 p-12 border border-border rounded-[2rem] bg-background/40 backdrop-blur-md">
               <div className="w-16 h-16 bg-pink-100/50 rounded-full flex items-center justify-center font-black italic text-xl">L</div>
               <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em]">Elite Curation</h4>
                  <p className="text-[11px] opacity-40 uppercase font-bold tracking-[0.2em] leading-relaxed">
                    Every piece is hand-aged and textured to achieve a unique tactile narrative. We don&apos;t just make clothes; we preserve artistic intent.
                  </p>
               </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Featured Archive - Clean, Minimalist Grid */}
      <section className="w-full py-48 space-y-32" aria-labelledby="archive-heading">
        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-border pb-16">
            <div className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.8em] opacity-30">Drop 001 // Archive</span>
              <h2 id="archive-heading" className="text-7xl md:text-[10rem] font-[950] tracking-tighter italic uppercase leading-none">
                The Archive
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-sm font-black uppercase tracking-[0.4em] mb-4 italic">Liminal Spaces Collection</p>
              <div className="h-[2px] w-48 bg-foreground ml-auto" />
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop", title: "Heavyweight Hoodie", price: "$220", availability: "Sold Out" },
            { img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070&auto=format&fit=crop", title: "Distressed Denim", price: "$340", availability: "Archived" },
            { img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a991?q=80&w=2030&auto=format&fit=crop", title: "Atelier Coach Jacket", price: "$410", availability: "Elite" }
          ].map((item, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="group space-y-8">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-accent/10 border border-border">
                  <Image 
                    src={item.img} 
                    alt={`Product shot: ${item.title}`} 
                    fill 
                    className="object-cover grayscale transition-all duration-[3s] ease-out group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md px-5 py-2 rounded-full border border-black/5 shadow-sm">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em]">{item.availability}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start px-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-black uppercase tracking-[0.3em]">{item.title}</h3>
                    <p className="text-[10px] opacity-20 font-bold uppercase tracking-[0.4em] italic">Hand-Finished Atelier</p>
                  </div>
                  <span className="text-xs font-[950] italic opacity-40">{item.price}</span>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Manifesto Quote - High-End Centerpiece */}
      <section className="w-full py-64 flex flex-col items-center justify-center text-center relative px-8" aria-labelledby="manifesto-heading">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <motion.div 
            style={{ 
              x: useTransform(scrollYProgress, [0.8, 1], ["0%", "20%"]), 
              opacity: useTransform(scrollYProgress, [0.8, 1], [0.03, 0.005]) 
            }}
            className="absolute top-1/4 -left-20 text-[20vw] md:text-[30rem] font-[950] italic select-none"
          >
            SOUL
          </motion.div>
          <motion.div 
            style={{ 
              x: useTransform(scrollYProgress, [0.8, 1], ["0%", "-20%"]), 
              opacity: useTransform(scrollYProgress, [0.8, 1], [0.03, 0.005]) 
            }}
            className="absolute bottom-1/4 -right-20 text-[20vw] md:text-[30rem] font-[950] italic select-none"
          >
            ART
          </motion.div>
        </div>

        <FadeInWhenVisible>
          <div className="max-w-6xl space-y-24">
            <div className="w-24 h-px bg-foreground/20 mx-auto" />
            <blockquote className="space-y-16">
              <p id="manifesto-heading" className="text-4xl md:text-[8rem] font-[950] italic tracking-tighter uppercase leading-[0.85]">
                &quot;In the intersection of high fashion and street grit, we found the only truth worth wearing.&quot;
              </p>
              <footer className="flex flex-col items-center space-y-8">
                <cite className="text-[10px] font-black uppercase tracking-[1em] opacity-40 not-italic">LYVRA MANIFESTO</cite>
                <div className="flex space-x-4">
                   {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-foreground/20 rounded-full" />)}
                </div>
              </footer>
            </blockquote>
          </div>
        </FadeInWhenVisible>
      </section>
    </div>
  );
}
