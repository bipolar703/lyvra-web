"use client"

import { motion, type Variants } from "framer-motion"
import { LYVRA_EASING } from "@/lib/constants"

// Subtle fade-in with gentle upward motion
// Designed to be barely noticeable — elegant, not flashy
interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: LYVRA_EASING,
    },
  },
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay }}
      variants={fadeInVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Reduced motion variant — respects user preferences
const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
}

interface FadeInAccessibleProps extends FadeInProps {
  respectReducedMotion?: boolean
}

export function FadeInAccessible({ 
  children, 
  delay = 0, 
  className,
  respectReducedMotion = true 
}: FadeInAccessibleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay }}
      variants={respectReducedMotion ? reducedVariants : fadeInVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
