"use client"

import { useState, useEffect, useCallback } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"

// Search data — update paths and labels as pages change
const searchItems = [
  {
    heading: "Pages",
    items: [
      { name: "Our Vision", href: "/our-vision", keywords: ["story", "sustainable", "eco", "upcycle", "local"] },
      { name: "Behind the Stitch", href: "/behind-the-stitch", keywords: ["editorial", "process", "atelier", "artisan", "sewing"] },
      { name: "The Studio", href: "/the-studio", keywords: ["apply", "custom", "form", "sourcing", "thrift"] },
    ],
  },
]

interface SearchModalProps {
  variant?: "icon" | "bar"
  className?: string
}

export function SearchModal({ variant = "icon", className }: SearchModalProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Cmd+K / Ctrl+K keyboard shortcut to open search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        // Skip if user is typing in an input or textarea
        if (
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement
        ) {
          return
        }
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      {/* Desktop trigger — search bar with keyboard shortcut hint */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "hidden md:flex items-center gap-3 px-4 py-2.5 border border-border/50 rounded-full",
          "bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-500",
          "text-muted-foreground hover:text-foreground cursor-pointer group",
          className
        )}
        aria-label="Open search"
      >
        <Search className="w-4 h-4 opacity-50 group-hover:opacity-80 transition-opacity" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide opacity-50">Search...</span>
        <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-border/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground/70">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Mobile trigger — icon only */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "md:hidden flex items-center justify-center w-10 h-10",
          "hover:bg-accent/50 rounded-full transition-all duration-300",
          className
        )}
        aria-label="Open search"
      >
        <Search className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Search Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-2xl border border-border/50 bg-background/95 backdrop-blur-xl">
          <Command className="[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-14 [&_[cmdk-input-wrapper]]:border-0 [&_[cmdk-input-wrapper]]:shadow-none">
            <CommandInput
              placeholder="Search pages..."
              className="text-base"
            />
            <CommandList>
              <CommandEmpty className="py-8 text-center text-sm text-muted-foreground">
                <div className="space-y-2">
                  <p>No results found.</p>
                  <p className="text-xs opacity-50">Try searching for &quot;Vision&quot;, &quot;Studio&quot;, or &quot;Behind&quot;</p>
                </div>
              </CommandEmpty>
              {searchItems.map((group) => (
                <CommandGroup key={group.heading} heading={group.heading} className="px-2">
                  {group.items.map((item) => (
                    <CommandItem
                      key={item.href}
                      value={`${item.name} ${item.keywords.join(" ")}`}
                      onSelect={() => runCommand(() => router.push(item.href))}
                      className="flex items-center gap-3 py-4 px-4 cursor-pointer rounded-xl my-1"
                    >
                      <Search className="w-4 h-4 opacity-40 flex-shrink-0" strokeWidth={1.5} />
                      <div className="flex flex-col gap-0.5 flex-1">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-[10px] opacity-40 uppercase tracking-widest">
                          {item.keywords.slice(0, 3).join(" · ")}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
