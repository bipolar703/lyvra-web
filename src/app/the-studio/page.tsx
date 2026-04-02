import StudioForm from "@/components/StudioForm"
import Header from "@/components/Header"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "The Studio | LYVRA - Custom Streetwear Application",
  description: "Apply for custom streetwear design services. Fill out the application to start your custom journey with LYVRA.",
}

export default function TheStudio() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-40 lg:pt-48 max-w-4xl relative z-10">
        <header className="space-y-10 md:space-y-12 mb-24 md:mb-28 lg:mb-36">
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] tracking-tight uppercase italic leading-[0.9] opacity-90 animate-fade-in">
            The Studio
          </h1>
          
          <div className="flex items-center space-x-4 animate-fade-in-delay-1">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-40 leading-none">Application // LYVRA Elite</span>
          </div>
        
        <p className="font-cormorant text-sm md:text-base lg:text-lg font-medium leading-relaxed md:leading-loose max-w-2xl opacity-60 animate-fade-in-delay-2">
          Welcome to the creative sanctuary. Fill out the application below 
          to start your custom journey. Every piece is thoughtfully crafted 
          to reflect your unique essence.
        </p>
        
        <div className="flex flex-wrap gap-4 md:gap-6 pt-4 animate-fade-in-delay-3">
          <a 
            href="#application"
            className="cursor-pointer text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-40 hover:opacity-70 transition-opacity duration-500 flex items-center space-x-2"
            aria-label="Jump to application form"
          >
            <span>Jump to Application</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1} />
          </a>
        </div>
      </header>
      </div>

      <div id="application">
        <StudioForm />
      </div>
    </>
  )
}
