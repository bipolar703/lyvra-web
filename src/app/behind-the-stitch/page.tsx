"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"
import Header from "@/components/Header"

const FAST_DURATION = 0.3
const NORMAL_DURATION = 0.5
const SUBTLE_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export default function BehindTheStitch() {
  const containerRef = useRef(null)
  // Dummy ref for Header - this page doesn't have a hero section
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Smart Header */}
      <Header heroRef={heroRef} />
      
      <div ref={containerRef} className="container mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-28 lg:pt-32 max-w-7xl">
      {/* ──────────────────────────────────────────────────────────────
         HEADER — Minimal entrance animation
         ────────────────────────────────────────────────────────────── */}
      <header className="mb-20 md:mb-28 lg:mb-36 space-y-12 md:space-y-14 lg:space-y-16 relative" aria-labelledby="editorial-heading">
        <div className="space-y-6 md:space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: FAST_DURATION, ease: SUBTLE_EASE }}
            className="flex items-center gap-4 md:gap-6"
            aria-hidden="true"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.8em] md:tracking-[1em]">The Atelier Journals</span>
            <div className="h-px w-16 md:w-20 lg:w-24 bg-foreground/20" />
          </motion.div>
          <motion.h1
            id="editorial-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] tracking-tight leading-[0.88]"
          >
            Behind the Stitch
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 pt-8 md:pt-12 lg:pt-16 border-t border-border/50"
        >
          <div className="relative">
            <p className="font-cormorant text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed md:leading-loose opacity-75 italic">
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
        </motion.div>
      </header>

      {/* ──────────────────────────────────────────────────────────────
         EDITORIAL GRID — Subtle scroll-triggered animations
         ────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 relative">
        {/* Story 1 */}
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
              <div className="absolute top-5 md:top-6 lg:top-8 left-5 md:left-6 lg:left-8">
                <div className="bg-background/90 backdrop-blur-sm px-4 md:px-5 lg:px-6 py-2 md:py-2.5 rounded-full border border-black/5 shadow-sm">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">Entry 001</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="max-w-xl space-y-6 md:space-y-8 lg:space-y-10">
              <h2 id="story-1-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant uppercase tracking-tight leading-[0.92]">
                The Art of the Seam
              </h2>
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 pt-2 md:pt-3" aria-hidden="true">
                  <div className="w-6 md:w-8 h-px bg-foreground/15" />
                </div>
<p className="font-cormorant text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed md:leading-loose opacity-50">
                  We focus on the imperfections. Each garment is treated as a living canvas. The thread isn&apos;t just functional; it is a brushstroke. We use heavy-weight 500GSM cotton sourced from deadstock lots to ensure exclusivity and sustainability.
                </p>
              </div>
              
            </div>
          </FadeIn>
        </article>

        {/* Story 2 */}
        <article className="md:col-span-5 md:pt-[8rem] lg:pt-[10rem] xl:pt-[12rem] space-y-14 md:space-y-18 lg:space-y-20" aria-labelledby="story-2-heading">
          <FadeIn delay={0.15}>
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
          
          <FadeIn delay={0.2}>
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <h2 id="story-2-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant uppercase tracking-tight leading-[0.92]">
                Atelier Spirits
              </h2>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed md:leading-loose opacity-50">
                In the heart of the studio, time slows down. Every LYVRA piece undergoes a 12-hour aging process using organic washes to achieve that signature &quot;Grainy Film&quot; tactile feel.
              </p>
              <Link 
                href="#archive"
                className="group/btn inline-flex items-center gap-3 md:gap-4 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] py-3 md:py-4 hover:opacity-50 transition-opacity duration-500"
                aria-label="Explore the archive"
              >
                <span>Explore the archive</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-2 transition-transform duration-700" strokeWidth={1} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </article>
      </div>

      {/* ──────────────────────────────────────────────────────────────
         METHODOLOGY SECTION
         ────────────────────────────────────────────────────────────── */}
      <section className="mt-24 md:mt-32 lg:mt-40 xl:mt-48 border-t border-border/50 pt-16 md:pt-20 lg:pt-24" aria-labelledby="methodology-heading">
        <FadeIn>
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10 mb-14 md:mb-18 lg:mb-24">
            <span className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.8em] md:tracking-[1em] opacity-25 block">Our DNA</span>
            <h2 id="methodology-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant italic uppercase tracking-tight leading-[0.9]">
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
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="space-y-6 md:space-y-8 text-center md:text-left group">
                <div 
                  className={`w-16 h-16 md:w-20 md:h-20 ${item.color} rounded-[1rem] md:rounded-[1.5rem] mx-auto md:mx-0 flex items-center justify-center font-script italic text-xl md:text-2xl group-hover:rotate-3 md:group-hover:rotate-6 transition-transform duration-1000`}
                  aria-hidden="true"
                >
                  {item.num}
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tight italic">{item.title}</h3>
                  <p className="font-cormorant text-sm md:text-base font-medium leading-relaxed opacity-40">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

{/* Archive Gallery Section */}
      <section id="archive" className="mt-24 md:mt-32 lg:mt-40 xl:mt-48 border-t border-border/50 pt-16 md:pt-20 lg:pt-24" aria-labelledby="archive-heading">
        <FadeIn>
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10 mb-14 md:mb-18 lg:mb-24">
            <span className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.8em] md:tracking-[1em] opacity-25 block">Gallery</span>
            <h2 id="archive-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant italic uppercase tracking-tight leading-[0.9]">
              The Archive
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <FadeIn key={num} delay={(num - 1) * 0.08}>
              <div className="group relative aspect-[4/5] rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border border-border/30">
                <Image
                  src={`/${num}.webp`}
                  alt={`Archive image ${num}`}
                  fill
                  className="object-cover transition-transform duration-[3000ms] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

{/* Final CTA */}
      <FadeIn>
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
      </FadeIn>
    </div>
    </>
  )
}
