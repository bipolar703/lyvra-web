"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

// Template wraps each page — perfect for transitions in App Router
// Renders on every navigation, unlike layout which persists

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Reset scroll to top on every navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  // Subtle fade transition between pages
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
