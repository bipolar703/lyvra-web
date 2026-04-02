'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, type Variants } from 'framer-motion'
import MobileNav from '@/components/MobileNav'
import { LYVRA_EASING } from '@/lib/constants'

interface HeaderProps {
  heroRef?: React.RefObject<HTMLElement | null>
}

// Custom ease for premium feel
const PREMIUM_EASE = LYVRA_EASING

export default function Header({ heroRef }: HeaderProps) {
  const [hidden, setHidden] = useState(false)
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const lastYRef = useRef(0)
  const heroObserverRef = useRef<IntersectionObserver | null>(null)

  const { scrollY } = useScroll()

  // Track scroll direction - hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current
    
    // Only trigger if scrolled enough (180px threshold for better UX)
    if (Math.abs(difference) > 50) {
      // Hide when scrolling down past threshold
      if (difference > 0 && y > 100) {
        setHidden(true)
        setIsCompact(true)
      } 
      // Show when scrolling up
      else if (difference < 0) {
        setHidden(false)
        setIsCompact(y < 100)
      }
      
      lastYRef.current = y
    }
    
  })

  // Intersection observer for hero logo detection
  useEffect(() => {
    if (!heroRef?.current) return

    heroObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // hasScrolledPastHero = true when hero is NOT intersecting (scrolled past)
          setHasScrolledPastHero(!entry.isIntersecting)
        })
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger zone: hero is past 40% from top
        threshold: 0,
      }
    )

    heroObserverRef.current.observe(heroRef.current)

    return () => {
      heroObserverRef.current?.disconnect()
    }
  }, [heroRef])

  // Animation variants
  const headerVariants: Variants = {
    visible: { y: '0%' },
    hidden: { y: '-100%' },
  }

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.header
      initial="visible"
      animate={hidden ? 'hidden' : 'visible'}
      variants={headerVariants}
      transition={{ duration: 0.3, ease: PREMIUM_EASE }}
      className={`
        fixed top-0 left-0 right-0 z-50 w-full
        backdrop-blur-md border-b border-border/30
        ${isCompact ? 'bg-background/90' : 'bg-background/60'}
      `}
    >
      <nav 
        className={`
          container mx-auto flex items-center justify-between 
          px-4 md:px-8 max-w-7xl
          transition-all duration-300 ease-[0.22,1,0.36,1]
          ${isCompact ? 'h-14 md:h-16' : 'h-16 md:h-20'}
        `}
        role="navigation" 
        aria-label="Main navigation"
      >
        {/* Left: Navigation Links - Desktop */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-12 text-[10px] lg:text-xs font-bold uppercase tracking-[0.25em] lg:tracking-[0.3em]">
          <li>
            <Link 
              href="/our-vision" 
              className="hover:opacity-40 transition-opacity relative group py-2"
              aria-label="Our Vision page"
            >
              Our Vision
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link 
              href="/behind-the-stitch" 
              className="hover:opacity-40 transition-opacity relative group py-2"
              aria-label="Behind the Stitch page"
            >
              Behind the Stitch
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
            </Link>
          </li>
        </ul>

        {/* Center: Logo - Shows when scrolled past hero */}
        <motion.div
          initial="visible"
          animate={hasScrolledPastHero ? 'visible' : 'hidden'}
          variants={logoVariants}
          transition={{ duration: 0.3, ease: PREMIUM_EASE }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Link href="/" className="flex items-center" aria-label="LYVRA Home">
            <Image 
              src="/logo.svg" 
              alt="LYVRA" 
              width={120} 
              height={40} 
              className={`
                transition-all duration-300 ease-[0.22,1,0.36,1]
                ${isCompact ? 'h-6 md:h-7 w-auto' : 'h-8 md:h-9 w-auto'}
              `}
            />
          </Link>
        </motion.div>

        {/* Right side: Search + CTA + Mobile Nav */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link 
            href="/the-studio" 
            className="hidden md:block px-4 lg:px-5 py-2 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em]"
            aria-label="The Studio application"
          >
            The Studio
          </Link>
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  )
}
