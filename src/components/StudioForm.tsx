'use client'

import { useState, useRef } from "react"
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react"

export default function StudioForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [trustScale, setTrustScale] = useState(10)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    instagram: '',
    pinterest: '',
    soundtrack: '',
    sourcing: '',
    budget: '',
    soulText: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, trustScale }),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setError('Something went wrong. Please try again.')
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="py-16 md:py-24 flex flex-col items-center text-center px-4">
        <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-500 mb-6" strokeWidth={1} />
        <h2 className="text-2xl md:text-4xl font-cormorant italic mb-3">Application Recorded</h2>
        <p className="text-sm opacity-60 max-w-xs">We'll be in touch within 72 hours.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-xs uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
        >
          Submit another
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="px-4 md:px-0 max-w-xl mx-auto space-y-12 md:space-y-16">
      
      {/* Section 1: Contact */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.5em] opacity-30">01</span>
          <h2 className="text-xs font-bold uppercase tracking-[0.4em]">Identity</h2>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-xs uppercase tracking-[0.25em] opacity-50 block">Full Name</label>
            <input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="w-full h-14 border-2 border-border/40 rounded-xl px-4 bg-background text-base"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.25em] opacity-50 block">Email</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full h-14 border-2 border-border/40 rounded-xl px-4 bg-background text-base"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="whatsapp" className="text-xs uppercase tracking-[0.25em] opacity-50 block">WhatsApp</label>
            <input
              id="whatsapp"
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => handleChange('whatsapp', e.target.value)}
              className="w-full h-14 border-2 border-border/40 rounded-xl px-4 bg-background text-base"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Links */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.5em] opacity-30">02</span>
          <h2 className="text-xs font-bold uppercase tracking-[0.4em]">References</h2>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="instagram" className="text-xs uppercase tracking-[0.25em] opacity-50 block">Instagram</label>
            <input
              id="instagram"
              type="text"
              value={formData.instagram}
              onChange={(e) => handleChange('instagram', e.target.value)}
              className="w-full h-14 border-2 border-border/40 rounded-xl px-4 bg-background text-base"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="pinterest" className="text-xs uppercase tracking-[0.25em] opacity-50 block">Pinterest</label>
            <input
              id="pinterest"
              type="text"
              value={formData.pinterest}
              onChange={(e) => handleChange('pinterest', e.target.value)}
              className="w-full h-14 border-2 border-border/40 rounded-xl px-4 bg-background text-base"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="soundtrack" className="text-xs uppercase tracking-[0.25em] opacity-50 block">Spotify</label>
            <input
              id="soundtrack"
              type="text"
              value={formData.soundtrack}
              onChange={(e) => handleChange('soundtrack', e.target.value)}
              className="w-full h-14 border-2 border-border/40 rounded-xl px-4 bg-background text-base"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Project */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.5em] opacity-30">03</span>
          <h2 className="text-xs font-bold uppercase tracking-[0.4em]">Project</h2>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="sourcing" className="text-xs uppercase tracking-[0.25em] opacity-50 block">Sourcing</label>
            <select
              id="sourcing"
              required
              value={formData.sourcing}
              onChange={(e) => handleChange('sourcing', e.target.value)}
              className="w-full h-14 border-2 border-border/40 rounded-xl px-4 bg-background text-base appearance-none cursor-pointer"
            >
              <option value="">Select option</option>
              <option value="provide">I'll provide the garment</option>
              <option value="thrift">LYVRA to source</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="text-xs uppercase tracking-[0.25em] opacity-50 block">Budget (USD)</label>
            <input
              id="budget"
              type="number"
              min="75"
              required
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className="w-full h-14 border-2 border-border/40 rounded-xl px-4 bg-background text-base"
            />
          </div>
        </div>
        
        {/* Trust Scale */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase tracking-[0.25em] opacity-50">Trust Level</span>
            <span className="text-2xl font-cormorant italic">{trustScale}/10</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="10" 
            value={trustScale}
            onChange={(e) => setTrustScale(parseInt(e.target.value))}
            className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-foreground"
          />
          <div className="flex justify-between text-xs uppercase tracking-[0.15em] opacity-30">
            <span>You decide</span>
            <span>Full freedom</span>
          </div>
        </div>
      </section>

      {/* Section 4: Soul */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.5em] opacity-30">04</span>
          <h2 className="text-xs font-bold uppercase tracking-[0.4em]">Your Story</h2>
        </div>
        <div className="space-y-2">
          <label htmlFor="soulText" className="text-xs uppercase tracking-[0.25em] opacity-50 block">Tell us about yourself</label>
          <textarea
            id="soulText"
            required
            rows={5}
            value={formData.soulText}
            onChange={(e) => handleChange('soulText', e.target.value)}
            className="w-full min-h-[140px] border-2 border-border/40 rounded-xl px-4 py-3 bg-background text-base resize-none"
          />
        </div>
      </section>

      {/* Error */}
      {error && (
        <div className="p-4 border border-red-500/30 rounded-lg text-center text-sm text-red-500">
          {error}
        </div>
      )}

      {/* Submit */}
      <div className="pt-4">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 border-2 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-white transition-all duration-500 rounded-full text-sm uppercase tracking-[0.3em] disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span>Submit</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <p className="text-center text-xs uppercase tracking-[0.15em] opacity-25 pb-8">
        LYVRA reserves the right to decline
      </p>
    </form>
  )
}
