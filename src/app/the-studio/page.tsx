import Link from "next/link"
import StudioForm from "@/components/StudioForm"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "The Studio | LYVRA - Custom Streetwear Application",
  description: "Apply for custom streetwear design services. Fill out the application to start your custom journey with LYVRA.",
}

export default function TheStudio() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 max-w-4xl relative z-10">
      <header className="space-y-8 md:space-y-10 mb-20 md:mb-24 lg:mb-32">
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] tracking-tight uppercase italic leading-[0.9] opacity-90 animate-in fade-in slide-in-from-left-4 duration-1000">
          The Studio
        </h1>
        <div className="flex items-center space-x-4 animate-in fade-in delay-200 duration-1000">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-40 leading-none">Application // LYVRA Elite</span>
        </div>
        <p className="text-sm md:text-base lg:text-lg font-medium leading-relaxed md:leading-loose opacity-60 animate-in fade-in delay-300 duration-1000 max-w-2xl">
          Welcome to the creative sanctuary. Fill out the application below 
          to start your custom journey. Every piece is thoughtfully crafted 
          to reflect your unique essence.
        </p>
        
        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 pt-4 animate-in fade-in delay-400 duration-1000">
          <a 
            href="#application"
            className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-40 hover:opacity-70 transition-opacity flex items-center space-x-2"
            aria-label="Jump to application form"
          >
            <span>Jump to Application</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1} />
          </a>
        </div>
      </header>

      <div id="application">
        <StudioForm />
      </div>
    </div>
  )
}
