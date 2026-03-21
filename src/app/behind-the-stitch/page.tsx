"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Minus } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"

export default function BehindTheStitch() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="container mx-auto px-4 md:px-6 py-24 md:py-32 max-w-7xl">
      {/* Header */}
      <header className="mb-32 md:mb-48 space-y-16 relative" aria-labelledby="editorial-heading">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.4, x: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center space-x-4"
            aria-hidden="true"
          >
            <span className="text-[10px] font-black uppercase tracking-[1em]">The Atelier Journals</span>
            <div className="h-px w-24 bg-foreground" />
          </motion.div>
          <h1 id="editorial-heading" className="font-script text-6xl md:text-[10rem] lg:text-[12rem] tracking-tight uppercase italic leading-[0.85] reveal-text">
            Behind the Stitch
          </h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 pt-12 md:pt-16 border-t border-border">
          <div className="relative">
            <p className="text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed md:leading-loose opacity-80 italic">
              Every garment has a story. From the thrill of finding the perfect vintage
              piece to the hours spent re-imagining its future. We don&apos;t just sew; 
              we breathe new life into fabric. This is the rhythm of the needle and the 
              soul behind every stitch.
            </p>
          </div>
          <div className="hidden md:flex justify-end items-end">
            <div className="text-right space-y-4">
              <div className="w-16 h-px bg-foreground/20 ml-auto" aria-hidden="true" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Digital Editorial // No. 001</p>
            </div>
          </div>
        </div>
      </header>

      {/* Editorial Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 relative">
        {/* Story 1 */}
        <article className="md:col-span-7 space-y-20 md:space-y-24" aria-labelledby="story-1-heading">
          <FadeIn>
            <div className="group relative aspect-[3/4] md:aspect-[4/5] bg-accent/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop"
                alt="Close-up of industrial sewing machine stitching heavyweight black fabric"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[4000ms] ease-out"
              />
              <div className="absolute top-6 md:top-10 left-6 md:left-10">
                <div className="bg-background/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-black/5 shadow-sm">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Entry 001</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="max-w-xl space-y-8 md:space-y-12">
              <h2 id="story-1-heading" className="text-4xl md:text-6xl lg:text-8xl font-script uppercase tracking-tight italic leading-[0.9]">
                The Art of the Seam
              </h2>
              <div className="flex space-x-6 md:space-x-12">
                <div className="flex-shrink-0 pt-2 md:pt-4" aria-hidden="true">
                  <Minus className="w-8 h-8 md:w-12 md:h-12 opacity-20" strokeWidth={1} />
                </div>
                <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed md:leading-loose opacity-60">
                  We focus on the imperfections. Each garment is treated as a living canvas. The thread isn&apos;t just functional; it is a brushstroke. We use heavy-weight 500GSM cotton sourced from deadstock lots to ensure exclusivity and sustainability.
                </p>
              </div>
              <Link 
                href="#"
                className="group relative inline-flex items-center space-x-4 md:space-x-8 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] py-4 md:py-6 transition-all hover:opacity-60"
                aria-label="Read more about Entry 001: The Art of the Seam"
              >
                <span>Read full entry</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-700" strokeWidth={1} />
              </Link>
            </div>
          </FadeIn>
        </article>

        {/* Story 2 */}
        <article className="md:col-span-5 md:pt-[15rem] lg:pt-[20rem] space-y-20 md:space-y-24" aria-labelledby="story-2-heading">
          <FadeIn delay={0.4}>
            <div className="group relative aspect-[4/5] md:aspect-square bg-accent/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop"
                alt="Interior of a minimalist design studio with fabric rolls and sketches"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[4000ms] ease-out"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="space-y-8 md:space-y-12">
              <h2 id="story-2-heading" className="text-4xl md:text-6xl lg:text-8xl font-script uppercase tracking-tight italic leading-[0.9]">
                Atelier Spirits
              </h2>
              <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed md:leading-loose opacity-60">
                In the heart of the studio, time slows down. Every LYVRA piece undergoes a 12-hour aging process using organic washes to achieve that signature &quot;Grainy Film&quot; tactile feel.
              </p>
              <Link 
                href="#"
                className="group relative inline-flex items-center space-x-4 md:space-x-8 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] py-4 md:py-6 transition-all hover:opacity-60"
                aria-label="Read more about Entry 002: Atelier Spirits"
              >
                <span>Explore the archive</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-700" strokeWidth={1} />
              </Link>
            </div>
          </FadeIn>
        </article>
      </div>

      {/* Detail Showcase */}
      <section className="mt-32 md:mt-48 lg:mt-[15rem] xl:mt-[20rem] border-t border-border pt-16 md:pt-24 lg:pt-32" aria-labelledby="methodology-heading">
        <FadeIn>
          <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-24 lg:mb-32">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[1em] opacity-30 block">Our DNA</span>
            <h2 id="methodology-heading" className="text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-script italic uppercase tracking-tight leading-[0.85]">
              Core Methodologies
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          {[
            { title: "Textural Contrast", desc: "Mixing high-gloss silks with rugged thrifts to create a dialogue between luxury and the street.", color: "bg-pink-100/50" },
            { title: "Heritage Sourcing", desc: "Curating materials from historical ateliers globally, ensuring every fiber has a history.", color: "bg-blue-100/50" },
            { title: "The Soul Print", desc: "Hidden labels and internal embroidery that speak only to the owner&apos;s personal narrative.", color: "bg-purple-100/50" }
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="space-y-8 md:space-y-12 group text-center md:text-left">
                <div className={`w-20 h-20 md:w-24 md:h-24 ${item.color} rounded-[1.5rem] md:rounded-[2rem] mx-auto md:mx-0 flex items-center justify-center font-script italic text-2xl md:text-3xl group-hover:rotate-6 md:group-hover:rotate-12 transition-transform duration-1000 ease-[0.22,1,0.36,1]`} aria-hidden="true">
                  0{i+1}
                </div>
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight italic">{item.title}</h3>
                  <p className="text-sm md:text-base font-medium leading-relaxed md:leading-loose opacity-50">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-32 md:mt-48 lg:mt-[15rem] bg-primary text-primary-foreground p-8 md:p-16 lg:p-24 xl:p-32 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden relative" aria-labelledby="newsletter-heading">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-br from-pink-500/10 via-blue-500/5 to-transparent blur-[160px]" aria-hidden="true" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[1em] opacity-40 block">The Collective</span>
            <h2 id="newsletter-heading" className="text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-script tracking-tight uppercase leading-[0.85] italic">
              Join the<br />Collective
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-medium opacity-40 tracking-wider uppercase max-w-xs leading-loose">
              Early access to archival drops and atelier insights. Limited entry.
            </p>
          </div>
          <form className="flex flex-col space-y-8 md:space-y-12" aria-label="Newsletter subscription form">
            <div className="space-y-4 md:space-y-8">
              <label htmlFor="newsletter-email" className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-40 block">
                Communication Channel
              </label>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  id="newsletter-email"
                  required
                  placeholder="YOUR@EMAIL.COM" 
                  className="w-full bg-transparent border-b-2 border-primary-foreground/20 py-4 md:py-6 lg:py-8 text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight focus:border-primary-foreground focus:outline-none transition-colors placeholder:opacity-20"
                  aria-required="true"
                />
                <button 
                  type="submit" 
                  className="absolute right-0 p-3 md:p-4 hover:translate-x-2 md:hover:translate-x-4 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" strokeWidth={1} />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="size-2 bg-pink-400 rounded-full animate-pulse" aria-hidden="true" />
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-20 underline decoration-pink-400/20">
                Elite Membership Agreement
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <div className="mt-24 md:mt-32 lg:mt-48 text-center">
        <Link
          href="/the-studio"
          className="group inline-flex items-center space-x-6 md:space-x-12 px-12 md:px-16 lg:px-20 py-8 md:py-10 lg:py-12 border border-border/50 hover:border-primary rounded-full transition-all duration-1000"
          aria-label="Start your custom journey at The Studio"
        >
          <span className="text-xs md:text-sm lg:text-base font-black uppercase tracking-[0.4em] md:tracking-[0.6em] group-hover:tracking-[0.5em] md:group-hover:tracking-[0.8em] transition-all duration-700">
            Start Your Journey
          </span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-700" strokeWidth={1} />
        </Link>
      </div>
    </div>
  )
}
