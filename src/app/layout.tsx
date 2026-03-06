import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LYVRA | Luxury Streetwear - Indie Art Edge",
  description: "An elite streetwear application platform and brand.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {/* Background Gradients */}
        <div className="pastel-blur pastel-blur-top" aria-hidden="true" />
        <div className="pastel-blur pastel-blur-bottom" aria-hidden="true" />
        <div className="pastel-blur pastel-blur-center" aria-hidden="true" />

        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8 max-w-7xl">
            <Link href="/" className="text-2xl font-black tracking-tighter group flex items-center space-x-2">
              <span className="group-hover:italic transition-all duration-300">LYVRA</span>
              <div className="w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <ul className="hidden md:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em]">
              <li>
                <Link href="/" className="hover:opacity-40 transition-opacity relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/behind-the-stitch" className="hover:opacity-40 transition-opacity relative group">
                  Behind the Stitch
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/the-studio" className="px-6 py-2 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full">
                  The Studio
                </Link>
              </li>
            </ul>
            <MobileNav />
          </nav>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="container mx-auto py-24 px-4 border-t border-border mt-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
            <div className="col-span-2 space-y-6">
              <h2 className="text-3xl font-black tracking-tighter">LYVRA</h2>
              <p className="text-xs font-medium opacity-40 max-w-xs leading-loose uppercase tracking-wider">
                An elite streetwear application platform and brand. Architecting identities through tactile rebellion.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Explore</h3>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
                <li><Link href="/" className="hover:opacity-50">Collection</Link></li>
                <li><Link href="/behind-the-stitch" className="hover:opacity-50">Editorial</Link></li>
                <li><Link href="/the-studio" className="hover:opacity-50">Studio</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Social</h3>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
                <li><Link href="#" className="hover:opacity-50">Instagram</Link></li>
                <li><Link href="#" className="hover:opacity-50">Twitter</Link></li>
                <li><Link href="#" className="hover:opacity-50">TikTok</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#d6d3d1]/30">
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40">
              &copy; 2026 LYVRA DESIGN STUDIO. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-20 mt-4 md:mt-0">
              Designed for the Souls of Modern Rebellion.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
