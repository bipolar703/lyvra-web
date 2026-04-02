"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"
import Header from "@/components/Header"
import { useRef } from "react"

const FAST_DURATION = 0.3
const NORMAL_DURATION = 0.5
const SUBTLE_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export default function OurVision() {
  // Ref for hero section - used by Header to detect when hero scrolls out of view
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Smart Header - appears after hero scrolls away */}
      <Header heroRef={heroRef} />
      
      <div className="flex flex-col items-center justify-center pt-24 md:pt-28 lg:pt-32 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
        {/* ──────────────────────────────────────────────────────────────
            HERO SECTION — Subtle entrance with elegant fade
            ────────────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative w-full text-center space-y-16 md:space-y-20 lg:space-y-24 mb-24 md:mb-32" aria-labelledby="hero-heading">
        {/* Brand Name — gentle slide up */}
        <motion.div
          className="space-y-8 md:space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: FAST_DURATION, ease: SUBTLE_EASE }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
              className="pb-4 md:pb-6 px-4"
            >
              <Image 
                src="/logo.svg" 
                alt="LYVRA" 
                width={800} 
                height={267}
                className="w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[35vw] h-auto"
                priority
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 0.2, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
            className="text-[10px] md:text-[11px] lg:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] max-w-md mx-auto leading-relaxed"
          >
            Luxury Streetwear · Sustainable Fashion · Custom Design
          </motion.p>
        </motion.div>

        {/* Hero Visual — subtle scale and fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
          className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[21/9] bg-accent/5 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-border/50 group"
        >
          <Image
            src="/1.webp"
            alt="LYVRA fashion editorial — sustainable luxury streetwear showcase"
            fill
            className="object-cover object-center md:object-top opacity-90 transition-transform duration-[4000ms] group-hover:scale-[1.02]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.3, duration: NORMAL_DURATION }}
              className="text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[1em] text-white drop-shadow-xl"
            >
              LYVRA · 2026
            </motion.span>
            <div className="w-px h-20 md:h-28 lg:h-32 bg-gradient-to-b from-white/30 to-transparent mt-6 md:mt-8" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Call to Action — subtle fade in */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
          className="pt-8 md:pt-12"
        >
<Link
  href="/the-studio"
  className="group relative inline-flex items-center gap-8 md:gap-12 px-12 md:px-16 lg:px-20 py-5 md:py-6 lg:py-8 border border-black/30 hover:border-black/80 transition-all duration-700 rounded-full cursor-pointer"
  style={{ WebkitTapHighlightColor: 'transparent' }}
  aria-label="Apply to The Studio - Start your custom streetwear journey"
>
  {/* Hover background - transparent initially, black on hover */}
  <span className="absolute inset-0 bg-black rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
  
  {/* Text - black initially, white on hover */}
  <span className="relative z-10 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.5em] md:tracking-[0.6em] lg:tracking-[0.8em] text-black group-hover:text-white transition-colors duration-500">
    Enter the Studio
  </span>
  
  {/* Arrow - black initially, white on hover, moves on hover */}
  <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-all duration-500 group-hover:translate-x-2" strokeWidth={1} />
</Link>
        </motion.div>
        </section>

        {/* ──────────────────────────────────────────────────────────────
           OUR VISION CONTENT — Scroll-triggered subtle animations
           ────────────────────────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 lg:py-40 space-y-24 md:space-y-32 lg:space-y-40 border-t border-border/50" aria-labelledby="vision-heading">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10 max-w-4xl mx-auto px-4">
            <span className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.8em] md:tracking-[1em] opacity-25 block">Our Vision</span>
            <h1 id="vision-heading" className="font-cormorant text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] opacity-85">
              The Story Behind the Soul
            </h1>
          </div>
        </FadeIn>

        {/* Opening Statement — alternating image/text layout */}
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <h3 className="font-cormorant text-xl md:text-2xl lg:text-3xl leading-relaxed opacity-80">
                Did you know that a single pair of jeans can consume up to 10,000 liters of water during production?
              </h3>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed md:leading-loose opacity-55">
                At LYVRA, we choose to rescue rather than create. By upcycling and hand-sourcing vintage denim, we give the planet a breather and provide you with a masterpiece.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-border/30 order-1 md:order-2 group">
              <Image
                src="/4.webp"
                alt="Upcycled vintage denim — sustainable fashion process"
                fill
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeIn>

        {/* Second Statement — reversed layout */}
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
            <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-border/30 group">
              <Image
                src="/5.webp"
                alt="Hand-stitching detail — artisan craftsmanship"
                fill
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 md:space-y-8">
              <h3 className="font-cormorant text-xl md:text-2xl lg:text-3xl leading-relaxed opacity-80">
                The artist doesn&apos;t just sew; she enters your world.
              </h3>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed md:leading-loose opacity-55">
                She seeks to understand your essence to craft a piece that makes everyone stop and ask: &quot;Where did you get that?&quot;. It&apos;s not just a garment; it&apos;s a beautiful, eco-friendly conversation starter that makes you feel amazing while being kind to the Earth.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Tagline Banner */}
        <FadeIn delay={0.1}>
          <div className="text-center py-12 md:py-16 lg:py-20 px-6 border-t border-b border-border/30">
            <p className="font-cormorant text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] opacity-50 tracking-wide px-4">
              Proudly Local · Authentically Eco-Friendly · Sustainably Stunning
            </p>
          </div>
        </FadeIn>

        {/* Explore CTAs */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-14 xl:gap-20">
            <Link
              href="/behind-the-stitch"
              className="group flex items-center gap-4 md:gap-6 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] hover:opacity-50 transition-opacity duration-500"
              aria-label="Explore the creative process — Behind the Stitch page"
            >
              <span>Explore the Process</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:size-6 group-hover:translate-x-2 transition-transform duration-700" strokeWidth={1} aria-hidden="true" />
            </Link>
            <Link
              href="/the-studio"
              className="px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 border border-foreground/15 hover:border-foreground/40 transition-all duration-700 rounded-full text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em]"
              aria-label="Start your custom journey — The Studio application"
            >
              Start Your Journey
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
    </>
  )
}
