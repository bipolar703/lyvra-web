import type { Metadata } from "next";
import { Pinyon_Script, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { SearchModal } from "@/components/SearchModal";

// Elegant script font for brand names and headings
const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

// Clean minimal sans-serif for body text
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LYVRA | Luxury Streetwear - Sustainable Fashion",
  description: "An elite streetwear application platform. Upcycling vintage denim into masterpieces.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pinyonScript.variable} ${dmSans.variable} antialiased bg-background text-foreground`}>
        {/* Background Gradients */}
        <div className="pastel-blur pastel-blur-top" aria-hidden="true" />
        <div className="pastel-blur pastel-blur-bottom" aria-hidden="true" />
        <div className="pastel-blur pastel-blur-center" aria-hidden="true" />

        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-md border-b border-border/30">
          <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8 max-w-7xl" role="navigation" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="font-script text-2xl md:text-3xl tracking-tight group flex items-center space-x-3" aria-label="LYVRA Home">
              <span className="group-hover:italic transition-all duration-300">LYVRA</span>
            </Link>
            
            {/* Desktop Navigation */}
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
              <li>
                <Link 
                  href="/the-studio" 
                  className="px-5 md:px-6 py-2.5 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full"
                  aria-label="The Studio application"
                >
                  The Studio
                </Link>
              </li>
            </ul>

            {/* Right side: Search + Mobile Nav */}
            <div className="flex items-center gap-2 md:gap-4">
              <SearchModal />
              <MobileNav />
            </div>
          </nav>
        </header>

        <main className="min-h-screen" role="main">
          {children}
        </main>

        {/* Footer */}
        <footer className="container mx-auto py-16 md:py-24 lg:py-32 px-4 md:px-8 border-t border-border mt-24 md:mt-32" role="contentinfo">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-script text-3xl md:text-4xl lg:text-5xl tracking-tight">LYVRA</h2>
              <p className="text-xs md:text-sm font-medium opacity-40 max-w-xs leading-relaxed uppercase tracking-wider">
                An elite streetwear application platform. Architecting identities through tactile rebellion.
              </p>
            </div>
            
            {/* Explore Links */}
            <div className="space-y-6">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-30">Explore</h3>
              <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold uppercase tracking-widest">
                <li>
                  <Link href="/our-vision" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="/behind-the-stitch" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2">
                    Behind the Stitch
                  </Link>
                </li>
                <li>
                  <Link href="/the-studio" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2">
                    The Studio
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-30">Social</h3>
              <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold uppercase tracking-widest">
                <li>
                  <Link href="#" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2" aria-label="LYVRA on Instagram">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2" aria-label="LYVRA on Twitter">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2" aria-label="LYVRA on TikTok">
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30 gap-4">
            <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.25em] md:tracking-[0.3em] opacity-40 text-center md:text-left">
              &copy; {new Date().getFullYear()} LYVRA DESIGN STUDIO. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.25em] md:tracking-[0.3em] opacity-20">
              Designed for the Souls of Modern Rebellion.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
