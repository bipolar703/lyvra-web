'use client'

import Link from "next/link"
import { Menu, X, ArrowRight, Search } from "lucide-react"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { SearchModal } from "./SearchModal"

const menuItems = [
  { name: 'Our Vision', href: '/our-vision', id: '01' },
  { name: 'Behind the Stitch', href: '/behind-the-stitch', id: '02' },
  { name: 'The Studio', href: '/the-studio', id: '03' },
]

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'TikTok', href: '#' },
]

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button 
            className="p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-all active:scale-95"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" aria-hidden="true" />
          </button>
        </SheetTrigger>
        
        <SheetContent 
          side="right" 
          className="w-full sm:max-w-md bg-background border-l-0 p-0 flex flex-col focus:outline-none"
          aria-describedby="mobile-nav-description"
        >
          {/* Screen reader description */}
          <span id="mobile-nav-description" className="sr-only">
            Mobile navigation menu with links to Our Vision, Behind the Stitch, and The Studio pages
          </span>
          
          {/* Grain Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 noise-bg z-0" aria-hidden="true" />
          
          {/* Header */}
          <SheetHeader className="px-6 py-6 border-b border-border/30 relative z-10 flex flex-row items-center justify-between space-y-0">
            <SheetTitle className="font-script text-2xl tracking-tight">LYVRA</SheetTitle>
            <SheetClose asChild>
              <button 
                className="p-2 active:scale-90 transition-transform rounded-full hover:bg-accent/50"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6 stroke-[1.5]" aria-hidden="true" />
              </button>
            </SheetClose>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center px-6 md:px-8 relative z-10 overflow-y-auto" aria-label="Mobile navigation">
            <ul className="space-y-8 md:space-y-10 py-8">
              {menuItems.map((item, i) => (
                <li key={item.name}>
                  <SheetClose asChild>
                    <Link 
                      href={item.href} 
                      className="group flex flex-col"
                      aria-label={`${item.name} - page ${item.id}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 mb-2 md:mb-3 block">{item.id}</span>
                        <div className="flex items-center justify-between">
                          <span className="text-4xl md:text-5xl font-bold uppercase tracking-tight italic leading-none group-hover:pl-4 transition-all duration-700 ease-[0.22,1,0.36,1]">
                            {item.name}
                          </span>
                          <ArrowRight 
                            className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-x-6 md:-translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[0.22,1,0.36,1]" 
                            aria-hidden="true"
                          />
                        </div>
                      </motion.div>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer with Search and Social */}
          <div className="p-6 md:p-8 border-t border-border/30 relative z-10 bg-background/80 backdrop-blur-sm">
            {/* Search Bar */}
            <div className="mb-6 md:mb-8">
              <SearchModal variant="bar" className="w-full" />
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 md:space-x-8 mb-6 md:mb-8">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href} 
                  className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] hover:opacity-50 transition-opacity"
                  aria-label={`LYVRA on ${social.name}`}
                >
                  {social.name}
                </Link>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="space-y-2">
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-20 leading-relaxed">
                &copy; {new Date().getFullYear()} LYVRA DESIGN STUDIO.
              </p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-10 leading-relaxed">
                ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* Large Decorative Mark */}
          <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none z-0" aria-hidden="true">
            <span className="text-[25rem] md:text-[30rem] font-bold italic">L</span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
