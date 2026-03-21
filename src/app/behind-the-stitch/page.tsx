"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"

export default function BehindTheStitch() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-32 max-w-7xl">
      {/* ──────────────────────────────────────────────────────────────
         HEADER — Editorial introduction
         ────────────────────────────────────────────────────────────── */}
      <header className="mb-20 md:mb-28 lg:mb-36 space-y-12 md:space-y-14 lg:space-y-16 relative" aria-labelledby="editorial-heading">
        <div className="space-y-6 md:space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center gap-4 md:gap-6"
            aria-hidden="true"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.8em] md:tracking-[1em]">The Atelier Journals</span>
            <div className="h-px w-16 md:w-20 lg:w-24 bg-foreground/20" />
          </motion.div>
          <h1 id="editorial-heading" className="font-script text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] tracking-tight leading-[0.88]">
            Behind the Stitch
          </h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 pt-8 md:pt-12 lg:pt-16 border-t border-border/50">
          <div className="relative">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed md:leading-loose opacity-75 italic">
              Every garment has a story. From the thrill of finding the perfect vintage
              piece to the hours spent re-imagining its future. We don&apos;t just sew; 
              we breathe new life into fabric. This is the rhythm of the needle and the 
              soul behind every stitch.
            </p>
          </div>
          <div className="hidden md:flex justify-end items-end">
            <div className="text-right space-y-4 md:space-y-6">
              <div className="w-12 md:w-16 h-px bg-foreground/15 ml-auto" aria-hidden="true" />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-35">Digital Editorial · No. 001</p>
            </div>
          </div>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────────
         EDITORIAL GRID — Featured stories with imagery
         ────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 relative">
        {/* Story 1 — Large feature */}
        <article className="md:col-span-7 space-y-14 md:space-y-18 lg:space-y-20" aria-labelledby="story-1-heading">
          <FadeIn>
            <div className="group relative aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-border/30">
              <Image
                src="/2.webp"
                alt="Industrial sewing machine — the art of the seam in action"
                fill
                className="object-cover transition-transform duration-[4000ms] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              />
              {/* Entry label */}
              <div className="absolute top-5 md:top-6 lg:top-8 left-5 md:left-6 lg:left-8">
                <div className="bg-background/90 backdrop-blur-sm px-4 md:px-5 lg:px-6 py-2 md:py-2.5 rounded-full border border-black/5 shadow-sm">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">Entry 001</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="max-w-xl space-y-6 md:space-y-8 lg:space-y-10">
              <h2 id="story-1-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-script uppercase tracking-tight leading-[0.92]">
                The Art of the Seam
              </h2>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 pt-2 md:pt-3" aria-hidden="true">
                  <div className="w-6 md:w-8 h-px bg-foreground/15" />
                </div>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed md:leading-loose opacity-50">
                  We focus on the imperfections. Each garment is treated as a living canvas. The thread isn&apos;t just functional; it is a brushstroke. We use heavy-weight 500GSM cotton sourced from deadstock lots to ensure exclusivity and sustainability.
                </p>
              </div>
              <Link 
                href="#"
                className="group/btn inline-flex items-center gap-3 md:gap-4 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] py-3 md:py-4 hover:opacity-50 transition-opacity duration-500"
                aria-label="Read more about Entry 001: The Art of the Seam"
              >
                <span>Read full entry</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-2 transition-transform duration-700" strokeWidth={1} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </article>

        {/* Story 2 — Offset card */}
        <article className="md:col-span-5 md:pt-[8rem] lg:pt-[10rem] xl:pt-[12rem] space-y-14 md:space-y-18 lg:space-y-20" aria-labelledby="story-2-heading">
          <FadeIn delay={0.4}>
            <div className="group relative aspect-[4/5] md:aspect-square rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-border/30">
              <Image
                src="/3.webp"
                alt="Design studio interior — atelier spirits and creative space"
                fill
                className="object-cover transition-transform duration-[4000ms] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <h2 id="story-2-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-script uppercase tracking-tight leading-[0.92]">
                Atelier Spirits
              </h2>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed md:leading-loose opacity-50">
                In the heart of the studio, time slows down. Every LYVRA piece undergoes a 12-hour aging process using organic washes to achieve that signature &quot;Grainy Film&quot; tactile feel.
              </p>
              <Link 
                href="#"
                className="group/btn inline-flex items-center gap-3 md:gap-4 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] py-3 md:py-4 hover:opacity-50 transition-opacity duration-500"
                aria-label="Read more about Entry 002: Atelier Spirits"
              >
                <span>Explore the archive</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-2 transition-transform duration-700" strokeWidth={1} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </article>
      </div>

      {/* ──────────────────────────────────────────────────────────────
         METHODOLOGY SECTION — Core principles
         ────────────────────────────────────────────────────────────── */}
      <section className="mt-24 md:mt-32 lg:mt-40 xl:mt-48 border-t border-border/50 pt-16 md:pt-20 lg:pt-24" aria-labelledby="methodology-heading">
        <FadeIn>
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10 mb-14 md:mb-18 lg:mb-24">
            <span className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.8em] md:tracking-[1em] opacity-25 block">Our DNA</span>
            <h2 id="methodology-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-script italic uppercase tracking-tight leading-[0.9]">
              Core Methodologies
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
          {[
            { num: "01", title: "Textural Contrast", desc: "Mixing high-gloss silks with rugged thrifts to create a dialogue between luxury and the street.", color: "bg-pink-50/70" },
            { num: "02", title: "Heritage Sourcing", desc: "Curating materials from historical ateliers globally, ensuring every fiber has a history.", color: "bg-blue-50/70" },
            { num: "03", title: "The Soul Print", desc: "Hidden labels and internal embroidery that speak only to the owner&apos;s personal narrative.", color: "bg-purple-50/70" }
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="space-y-6 md:space-y-8 text-center md:text-left group">
                <div 
                  className={`w-16 h-16 md:w-20 md:h-20 ${item.color} rounded-[1rem] md:rounded-[1.5rem] mx-auto md:mx-0 flex items-center justify-center font-script italic text-xl md:text-2xl group-hover:rotate-3 md:group-hover:rotate-6 transition-transform duration-1000`}
                  aria-hidden="true"
                >
                  {item.num}
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tight italic">{item.title}</h3>
                  <p className="text-sm md:text-base font-medium leading-relaxed opacity-40">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
         NEWSLETTER SECTION — Community signup
         ────────────────────────────────────────────────────────────── */}
      <section className="mt-24 md:mt-32 lg:mt-40 xl:mt-48 bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3rem] overflow-hidden relative" aria-labelledby="newsletter-heading">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] bg-gradient-to-br from-pink-500/10 via-blue-500/5 to-transparent blur-[100px] md:blur-[160px]" aria-hidden="true" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <span className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.8em] md:tracking-[1em] opacity-35 block">The Collective</span>
            <h2 id="newsletter-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[8rem] font-script tracking-tight leading-[0.9]">
              Join the<br />Collective
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-medium opacity-35 tracking-wide uppercase max-w-xs leading-relaxed">
              Early access to archival drops and atelier insights. Limited entry.
            </p>
          </div>
          <form className="flex flex-col gap-6 md:gap-8" aria-label="Newsletter subscription form">
            <div className="space-y-4 md:space-y-5">
              <label htmlFor="newsletter-email" className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-35 block">
                Communication Channel
              </label>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  id="newsletter-email"
                  required
                  placeholder="YOUR@EMAIL.COM" 
                  className="w-full bg-transparent border-b-2 border-primary-foreground/15 py-4 md:py-5 lg:py-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-tight focus:border-primary-foreground focus:outline-none transition-colors placeholder:opacity-20"
                  aria-required="true"
                />
                <button 
                  type="submit" 
                  className="absolute right-0 p-3 md:p-4 hover:translate-x-2 transition-transform duration-700"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" strokeWidth={1} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-5">
              <div className="size-2 bg-pink-400/60 rounded-full animate-pulse" aria-hidden="true" />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] md:tracking-[0.35em] opacity-15 underline decoration-pink-400/20">
                Elite Membership Agreement
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
         FINAL CTA — Navigation to Studio
         ────────────────────────────────────────────────────────────── */}
      <div className="mt-16 md:mt-24 lg:mt-32 text-center">
        <Link
          href="/the-studio"
          className="group inline-flex items-center gap-6 md:gap-8 lg:gap-10 px-10 md:px-14 lg:px-16 py-5 md:py-6 lg:py-7 border border-border/30 hover:border-primary/50 rounded-full transition-all duration-700"
          aria-label="Start your custom journey at The Studio"
        >
          <span className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] group-hover:tracking-[0.5em] md:group-hover:tracking-[0.6em] transition-all duration-700">
            Start Your Journey
          </span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:translate-x-2 transition-transform duration-700" strokeWidth={1} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
