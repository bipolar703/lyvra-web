import type { Metadata } from "next";
import Image from "next/image"
import { Pinyon_Script, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

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

// Elegant serif for body text and subheadings
const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LYVRA | Luxury Streetwear",
    template: "%s | LYVRA",
  },
  description: "An elite streetwear application platform. Upcycling vintage denim into masterpieces.",
  openGraph: {
    title: "LYVRA | Luxury Streetwear",
    description: "An elite streetwear application platform. Upcycling vintage denim into masterpieces.",
    url: "https://lyvra.com",
    siteName: "LYVRA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LYVRA | Luxury Streetwear",
    description: "An elite streetwear application platform. Upcycling vintage denim into masterpieces.",
  },
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
      <body className={`${pinyonScript.variable} ${dmSans.variable} ${cormorantGaramond.variable} antialiased bg-background text-foreground`}>
        {/* Background Gradients */}
        <div className="pastel-blur pastel-blur-top" aria-hidden="true" />
        <div className="pastel-blur pastel-blur-bottom" aria-hidden="true" />
        <div className="pastel-blur pastel-blur-center" aria-hidden="true" />

        {/* Header will be rendered by page-level component with hero detection */}

        <main className="min-h-screen" role="main">
          {children}
        </main>

        {/* Footer */}
        <footer className="container mx-auto py-16 md:py-24 lg:py-32 px-4 md:px-8 border-t border-border mt-24 md:mt-32" role="contentinfo">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <Image src="/logo.svg" alt="LYVRA" width={200} height={67} className="h-14 md:h-18 lg:h-24 w-auto" />
              <p className="text-xs md:text-sm font-medium opacity-40 max-w-xs leading-relaxed uppercase tracking-wider">
                An elite streetwear application platform. Architecting identities through tactile rebellion.
              </p>
            </div>
            
            {/* Explore Links */}
            <div className="space-y-6">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-30">Explore</h3>
              <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold uppercase tracking-widest">
                <li>
                  <Link href="/our-vision" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2" aria-label="Learn about our vision and mission">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="/behind-the-stitch" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2" aria-label="Explore our creative process">
                    Behind the Stitch
                  </Link>
                </li>
                <li>
                  <Link href="/the-studio" className="hover:opacity-50 transition-opacity inline-flex items-center gap-2" aria-label="Apply to The Studio for custom designs">
                    The Studio
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-30">Follow</h3>
              <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold uppercase tracking-widest">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.name}>
                    <Link href={social.href} className="hover:opacity-50 transition-opacity inline-flex items-center gap-2" aria-label={`LYVRA on ${social.name}`}>
                      {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30 gap-4">
            <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.25em] md:tracking-[0.3em] opacity-40 text-center md:text-left">
              &copy; {new Date().getFullYear()} LYVRA DESIGN STUDIO. ALL RIGHTS RESERVED.
            </p>
            <p className="font-cormorant text-[9px] md:text-[10px] uppercase font-bold tracking-[0.25em] md:tracking-[0.3em] opacity-20">
              Designed for the Souls of Modern Rebellion.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
