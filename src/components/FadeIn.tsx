"use client"

import { motion, type Variants } from "framer-motion"

// Shared luxury easing curve — used everywhere across the site
export const LYVRA_EASING = [0.22, 1, 0.36, 1] as const;

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: LYVRA_EASING,
    },
  },
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      variants={fadeInVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
