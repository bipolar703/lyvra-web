"use client"

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Minus } from "lucide-react";

const FadeInVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function BehindTheStitch() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-32 max-w-7xl">
      <header className="space-y-16 mb-48 relative" aria-labelledby="editorial-heading">
        <div className="space-y-6">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 0.4, x: 0 }}
             transition={{ duration: 1.5 }}
             className="flex items-center space-x-4"
           >
             <span className="text-[10px] font-black uppercase tracking-[1em]">The Atelier Journals</span>
             <div className="h-px w-24 bg-foreground" />
           </motion.div>
           <h1 id="editorial-heading" className="text-7xl md:text-[14rem] font-[950] tracking-tighter uppercase italic leading-[0.8] reveal-text">
             The Process
           </h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-24 pt-16 border-t border-border">
          <div className="relative">
            <p className="text-xl md:text-3xl font-medium leading-relaxed opacity-80 italic">
              A dedicated editorial space exploring the soul of our atelier. 
              From raw sourcing to the final hand-sewn detail. We believe in the friction between the machine and the hand.
            </p>
          </div>
          <div className="hidden md:flex justify-end items-end">
             <div className="text-right space-y-4">
                <div className="w-16 h-px bg-foreground/20 ml-auto" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Digital Editorial // No. 001</p>
             </div>
          </div>
        </div>
      </header>

      {/* Editorial Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-48 relative">
        {/* Story 1 */}
        <article className="md:col-span-7 space-y-24" aria-labelledby="story-1-heading">
          <FadeInVisible>
            <div className="group relative aspect-[4/5] bg-accent/10 rounded-[3rem] overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop"
                alt="Close-up of industrial sewing machine stitching heavyweight black fabric"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[4000ms] ease-out"
              />
              <div className="absolute top-10 left-10">
                 <div className="bg-background/90 backdrop-blur-md px-6 py-3 rounded-full border border-black/5 shadow-sm">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Entry 001</span>
                 </div>
              </div>
            </div>
          </FadeInVisible>
          
          <FadeInVisible delay={0.2}>
            <div className="max-w-xl space-y-12">
              <h2 id="story-1-heading" className="text-5xl md:text-8xl font-[950] uppercase tracking-tighter italic leading-none">The Art of the Seam</h2>
              <div className="flex space-x-12">
                 <div className="flex-shrink-0 pt-4"><Minus className="w-12 h-12 opacity-20" strokeWidth={1} /></div>
                 <p className="text-lg md:text-xl font-medium leading-relaxed opacity-60">
                  We focus on the imperfections. Each garment is treated as a living canvas. The thread isn&apos;t just functional; it is a brushstroke. We use heavy-weight 500GSM cotton sourced from deadstock lots to ensure exclusivity and sustainability.
                </p>
              </div>
              <button 
                className="group relative inline-flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.6em] py-4 pr-12 transition-all hover:pr-4"
                aria-label="Read more about Entry 001: The Art of the Seam"
              >
                <span>Read full entry</span>
                <ArrowRight className="size-5 absolute right-0 group-hover:-right-4 transition-all duration-700 ease-[0.22,1,0.36,1]" />
              </button>
            </div>
          </FadeInVisible>
        </article>

        {/* Story 2 */}
        <article className="md:col-span-5 md:pt-[30rem] space-y-24" aria-labelledby="story-2-heading">
          <FadeInVisible delay={0.4}>
            <div className="group relative aspect-square bg-accent/10 rounded-[3rem] overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop"
                alt="Interior of a minimalist design studio with fabric rolls and sketches"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[4000ms] ease-out"
              />
            </div>
          </FadeInVisible>
          
          <FadeInVisible delay={0.6}>
            <div className="space-y-12">
               <h2 id="story-2-heading" className="text-5xl md:text-8xl font-[950] uppercase tracking-tighter italic leading-none">Atelier Spirits</h2>
               <p className="text-lg font-medium leading-relaxed opacity-60">
                 In the heart of the studio, time slows down. Every LYVRA piece undergoes a 12-hour aging process using organic washes to achieve that signature &quot;Grainy Film&quot; tactile feel.
               </p>
               <button 
                className="group relative inline-flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.6em] py-4 pr-12 transition-all hover:pr-4"
                aria-label="Read more about Entry 002: Atelier Spirits"
               >
                <span>Explore the archive</span>
                <ArrowRight className="size-5 absolute right-0 group-hover:-right-4 transition-all duration-700 ease-[0.22,1,0.36,1]" />
              </button>
            </div>
          </FadeInVisible>
        </article>
      </div>

      {/* Detail Showcase */}
      <section className="mt-[30rem] border-t border-border pt-48" aria-labelledby="methodology-heading">
         <FadeInVisible>
           <div className="text-center space-y-8 mb-48">
              <span className="text-[10px] font-black uppercase tracking-[1em] opacity-30">Our DNA</span>
              <h2 id="methodology-heading" className="text-6xl md:text-[10rem] font-[950] italic uppercase tracking-tighter leading-none">Core Methodologies</h2>
           </div>
         </FadeInVisible>
         
         <div className="grid md:grid-cols-3 gap-32">
           {[
             { title: "Textural Contrast", desc: "Mixing high-gloss silks with rugged thrifts to create a dialogue between luxury and the street.", color: "bg-pink-100/50" },
             { title: "Heritage Sourcing", desc: "Curating materials from historical ateliers globally, ensuring every fiber has a history.", color: "bg-blue-100/50" },
             { title: "The Soul Print", desc: "Hidden labels and internal embroidery that speak only to the owner's personal narrative.", color: "bg-purple-100/50" }
           ].map((item, i) => (
             <FadeInVisible key={i} delay={i * 0.1}>
               <div className="space-y-12 group text-center md:text-left">
                  <div className={`w-24 h-24 ${item.color} rounded-[2rem] mx-auto md:mx-0 flex items-center justify-center font-black italic text-3xl group-hover:rotate-12 transition-transform duration-1000 ease-[0.22,1,0.36,1]`}>
                     0{i+1}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-[950] uppercase tracking-tighter italic">{item.title}</h3>
                    <p className="text-base font-medium leading-relaxed opacity-50">{item.desc}</p>
                  </div>
               </div>
             </FadeInVisible>
           ))}
         </div>
      </section>

      {/* Newsletter - Polished High-End Section */}
      <section className="mt-[30rem] bg-primary text-primary-foreground p-12 md:p-32 rounded-[4rem] overflow-hidden relative" aria-labelledby="newsletter-heading">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-br from-pink-500/10 via-blue-500/5 to-transparent blur-[160px]" aria-hidden="true" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <span className="text-[10px] font-black uppercase tracking-[1em] opacity-40">The Collective</span>
            <h2 id="newsletter-heading" className="text-6xl md:text-[10rem] font-[950] tracking-tighter uppercase leading-[0.8] italic">
              Join the<br />Collective
            </h2>
            <p className="text-lg font-medium opacity-40 tracking-wider uppercase max-w-xs leading-loose">Early access to archival drops and atelier insights. Limited entry.</p>
          </div>
          <form className="flex flex-col space-y-16" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
              <label htmlFor="newsletter-email" className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40">Communication Channel</label>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  id="newsletter-email"
                  required
                  placeholder="YOUR@EMAIL.COM" 
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-10 text-2xl md:text-4xl font-[950] uppercase tracking-tight focus:border-primary-foreground outline-none transition-colors"
                  aria-required="true"
                />
                <button type="submit" className="absolute right-0 p-4 hover:translate-x-4 transition-transform duration-1000 ease-[0.22,1,0.36,1]">
                  <ArrowRight className="size-12" strokeWidth={1} />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-6">
               <div className="size-2 bg-pink-400 rounded-full animate-pulse" />
               <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20 underline decoration-pink-400/20">Elite Membership Agreement</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
