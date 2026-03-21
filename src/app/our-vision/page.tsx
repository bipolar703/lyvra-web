"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"

export default function OurVision() {
  return (
    <div className="flex flex-col items-center justify-center pt-16 md:pt-32 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Editorial Hero Section */}
      <section className="relative w-full text-center space-y-24 mb-32" aria-labelledby="hero-heading">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center">
            <motion.span
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-[18vw] md:text-[22rem] leading-none pb-4 px-4"
            >
              LYVRA
            </motion.span>
          </div>
          <p className="text-xs md:text-[11px] font-black uppercase tracking-[0.6em] opacity-30 max-w-md mx-auto leading-loose">
            Luxury streetwear crafted for the elite.<br />
            Designing the souls of modern rebellion.
          </p>
        </motion.div>

        {/* Hero Visual */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-accent/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border group">
          <Image
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop"
            alt="LYVRA sustainable fashion editorial"
            fill
            className="object-cover object-top opacity-90 transition-transform duration-[4000ms] group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 pointer-events-none">
            <span className="text-[9px] font-black uppercase tracking-[1em] opacity-40 text-white drop-shadow-xl">LYVRA SPRING/SUMMER 2026</span>
            <div className="w-px h-32 bg-gradient-to-b from-white/40 to-transparent" aria-hidden="true" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-12">
          <Link
            href="/the-studio"
            className="group relative inline-flex items-center space-x-16 px-20 py-10 border border-primary/10 hover:border-primary transition-all duration-1000 rounded-full"
            aria-label="Apply to The Studio"
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

      {/* Our Vision Content */}
      <section className="w-full py-24 md:py-32 lg:py-48 space-y-32 md:space-y-40 lg:space-y-48 border-t border-border" aria-labelledby="vision-heading">
        <FadeIn>
          <div className="text-center space-y-8 md:space-y-12 max-w-4xl mx-auto">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[1em] md:tracking-[1.2em] opacity-30 block">Our Vision</span>
            <h1 id="vision-heading" className="font-script text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] leading-none opacity-80">
              The Story Behind the Soul
            </h1>
          </div>
        </FadeIn>

        {/* Opening Statement */}
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed md:leading-loose opacity-70 italic">
                &quot;Did you know that a single pair of jeans can consume up to 10,000 liters of water during production?&quot;
              </p>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed md:leading-loose opacity-60">
                At LYVRA, we choose to rescue rather than create. By upcycling and hand-sourcing vintage denim, we give the planet a breather and provide you with a masterpiece.
              </p>
            </div>
            <div className="relative aspect-[3/4] md:aspect-[4/5] bg-accent/10 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop"
                alt="Upcycled vintage denim process - hands working on fabric"
                fill
                className="object-cover grayscale transition-all duration-[3s]"
              />
            </div>
          </div>
        </FadeIn>

        {/* Second Statement */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            <div className="relative aspect-[3/4] md:aspect-[4/5] bg-accent/10 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-border order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop"
                alt="Hand-stitching artisan detail - closeup of needle and thread"
                fill
                className="object-cover transition-transform duration-[3s]"
              />
            </div>
            <div className="space-y-6 md:space-y-8 order-1 md:order-2">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed md:leading-loose opacity-70 italic">
                &quot;The artist doesn&apos;t just sew; she enters your world.&quot;
              </p>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed md:leading-loose opacity-60">
                She seeks to understand your essence to craft a piece that makes everyone stop and ask: &quot;Where did you get that?&quot;. It&apos;s not just a garment; it&apos;s a beautiful, eco-friendly conversation starter that makes you feel amazing while being kind to the Earth.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.3}>
          <div className="text-center py-12 md:py-16 lg:py-20 border-t border-b border-border">
            <p className="font-script text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none opacity-60 tracking-wide px-4">
              Proudly Local. Authentically Eco-Friendly. Sustainably Stunning.
            </p>
          </div>
        </FadeIn>

        {/* Explore CTA */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24">
            <Link
              href="/behind-the-stitch"
              className="group flex items-center space-x-4 md:space-x-6 lg:space-x-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] hover:opacity-50 transition-opacity"
              aria-label="Explore the creative process - Behind the Stitch page"
            >
              <span>Explore the Process</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:size-6 group-hover:translate-x-2 transition-transform duration-700" strokeWidth={1} aria-hidden="true" />
            </Link>
            <Link
              href="/the-studio"
              className="px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 border border-foreground/20 hover:border-foreground/60 transition-all duration-700 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em]"
              aria-label="Start your custom journey - The Studio application"
            >
              Start Your Journey
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
