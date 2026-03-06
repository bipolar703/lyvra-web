'use client'

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const menuItems = [
  { name: 'Home', href: '/', id: '01' },
  { name: 'Behind the Stitch', href: '/behind-the-stitch', id: '02' },
  { name: 'The Studio', href: '/the-studio', id: '03' },
];

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button 
            className="p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-all active:scale-95"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-full sm:max-w-md bg-background border-l-0 p-0 flex flex-col focus:outline-none"
        >
          {/* Grain Texture Overlay for Menu - Higher Opacity for Background feel */}
          <div className="absolute inset-0 pointer-events-none opacity-10 noise-bg z-0" aria-hidden="true" />
          
          <SheetHeader className="px-6 py-6 border-b border-border/30 relative z-10 flex flex-row items-center justify-between space-y-0">
            <SheetTitle className="text-xl font-black tracking-tighter italic">LYVRA</SheetTitle>
            <SheetClose asChild>
              <button className="p-2 active:scale-90 transition-transform">
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </SheetClose>
          </SheetHeader>

          <nav className="flex-1 flex flex-col justify-center px-8 relative z-10 overflow-y-auto">
            <ul className="space-y-12 py-12">
              {menuItems.map((item, i) => (
                <li key={item.name}>
                  <SheetClose asChild>
                    <Link 
                      href={item.href} 
                      className="group flex flex-col"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-30 mb-2 block">{item.id}</span>
                        <div className="flex items-center justify-between">
                          <span className="text-5xl font-black uppercase tracking-tighter italic leading-none group-hover:pl-4 transition-all duration-700 ease-[0.22,1,0.36,1]">
                            {item.name}
                          </span>
                          <ArrowRight className="w-8 h-8 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[0.22,1,0.36,1]" />
                        </div>
                      </motion.div>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-8 border-t border-border/30 relative z-10 bg-background/80 backdrop-blur-sm">
            <div className="flex space-x-12 mb-10">
              {['Instagram', 'Twitter'].map((social) => (
                <Link key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.4em] hover:opacity-50 transition-opacity">
                  {social}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-20 leading-loose">
                &copy; 2026 LYVRA DESIGN STUDIO.<br />
                ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* Large Decorative Mark */}
          <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none z-0">
            <span className="text-[30rem] font-black italic">L</span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
