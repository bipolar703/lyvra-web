import StudioForm from "@/components/StudioForm"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export const metadata = {
  title: "The Studio | LYVRA - Custom Streetwear Application",
  description: "Apply for custom streetwear design services. Fill out the application to start your custom journey with LYVRA.",
}

const SUBTLE_EASE = [0.22, 1, 0.36, 1] as const
const NORMAL_DURATION = 0.5

export default function TheStudio() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 max-w-4xl relative z-10">
      <header className="space-y-8 md:space-y-10 mb-20 md:mb-24 lg:mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
          className="font-script text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] tracking-tight uppercase italic leading-[0.9]"
        >
          The Studio
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
          className="flex items-center space-x-4"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-40 leading-none">Application // LYVRA Elite</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.2, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
          className="text-sm md:text-base lg:text-lg font-medium leading-relaxed md:leading-loose max-w-2xl"
        >
          Welcome to the creative sanctuary. Fill out the application below 
          to start your custom journey. Every piece is thoughtfully crafted 
          to reflect your unique essence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: NORMAL_DURATION, ease: SUBTLE_EASE }}
          className="flex flex-wrap gap-4 md:gap-6 pt-4"
        >
          <a 
            href="#application"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-40 hover:opacity-70 transition-opacity flex items-center space-x-2"
            aria-label="Jump to application form"
          >
            <span>Jump to Application</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1} />
          </a>
        </motion.div>
      </header>

      <div id="application">
        <StudioForm />
      </div>
    </div>
  )
}
