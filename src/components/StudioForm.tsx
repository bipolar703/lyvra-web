'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function StudioForm() {
  const [trustScale, setTrustScale] = useState(10);
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
    preferredColor: '',
    measurements: '',
    thriftDescription: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formPayload = {
        ...formData,
        trustScale,
      };

      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formPayload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 md:py-24 flex flex-col items-center text-center px-4"
      >
        <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-500 mb-6" strokeWidth={1} />
        <h2 className="text-2xl md:text-4xl font-cormorant italic mb-3">Application Recorded</h2>
        <p className="text-sm opacity-60 max-w-xs">
          Your soul has been archived. We&apos;ll be in touch within 72 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-xs uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
        >
          Submit another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-4 md:px-0 max-w-xl mx-auto space-y-12 md:space-y-16">
      {/* Section 1: Contact */}
      <section className="space-y-6 md:space-y-8">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] opacity-30">01</span>
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Identity</h2>
        </div>
        <div className="space-y-5 md:space-y-6">
          <div className="space-y-2">
            <Label htmlFor="full-name" className="text-[10px] uppercase tracking-[0.25em] opacity-50">Full Name</Label>
            <Input 
              id="full-name" 
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="h-12 md:h-14 border border-border/40 rounded-lg md:rounded-xl px-4 bg-background/50 text-sm md:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.25em] opacity-50">Email</Label>
            <Input 
              id="email" 
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 md:h-14 border border-border/40 rounded-lg md:rounded-xl px-4 bg-background/50 text-sm md:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-[10px] uppercase tracking-[0.25em] opacity-50">WhatsApp / Signal</Label>
            <Input 
              id="whatsapp" 
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="h-12 md:h-14 border border-border/40 rounded-lg md:rounded-xl px-4 bg-background/50 text-sm md:text-base"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Links */}
      <section className="space-y-6 md:space-y-8">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] opacity-30">02</span>
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">References</h2>
        </div>
        <div className="space-y-4 md:space-y-5">
          <div className="space-y-2">
            <Label htmlFor="instagram" className="text-[10px] uppercase tracking-[0.25em] opacity-50">Instagram</Label>
            <Input 
              id="instagram" 
              placeholder="@handle"
              value={formData.instagram}
              onChange={handleChange}
              className="h-12 md:h-14 border border-border/40 rounded-lg md:rounded-xl px-4 bg-background/50 text-sm md:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pinterest" className="text-[10px] uppercase tracking-[0.25em] opacity-50">Pinterest</Label>
            <Input 
              id="pinterest" 
              placeholder="@moodboard"
              value={formData.pinterest}
              onChange={handleChange}
              className="h-12 md:h-14 border border-border/40 rounded-lg md:rounded-xl px-4 bg-background/50 text-sm md:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="soundtrack" className="text-[10px] uppercase tracking-[0.25em] opacity-50">Spotify</Label>
            <Input 
              id="soundtrack" 
              placeholder="Playlist link"
              value={formData.soundtrack}
              onChange={handleChange}
              className="h-12 md:h-14 border border-border/40 rounded-lg md:rounded-xl px-4 bg-background/50 text-sm md:text-base"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Project */}
      <section className="space-y-6 md:space-y-8">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] opacity-30">03</span>
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Project</h2>
        </div>
        <div className="space-y-4 md:space-y-5">
          <div className="space-y-2">
            <Label htmlFor="sourcing" className="text-[10px] uppercase tracking-[0.25em] opacity-50">Sourcing</Label>
            <select 
              id="sourcing"
              value={formData.sourcing}
              onChange={handleChange}
              required
              className="w-full h-12 md:h-14 border border-border/40 rounded-lg md:rounded-xl px-4 bg-background/50 text-sm md:text-base appearance-none cursor-pointer"
            >
              <option value="">Select option</option>
              <option value="provide">I&apos;ll provide the garment</option>
              <option value="thrift">LYVRA to source</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-[10px] uppercase tracking-[0.25em] opacity-50">Budget (USD)</Label>
            <Input 
              id="budget" 
              type="number"
              min="75"
              placeholder="75"
              value={formData.budget}
              onChange={handleChange}
              required
              className="h-12 md:h-14 border border-border/40 rounded-lg md:rounded-xl px-4 bg-background/50 text-sm md:text-base"
            />
          </div>
        </div>
        
        {/* Trust Scale */}
        <div className="space-y-3 md:space-y-4 pt-2">
          <div className="flex justify-between items-center">
            <Label className="text-[10px] uppercase tracking-[0.25em] opacity-50">Trust Level</Label>
            <span className="text-xl md:text-2xl font-cormorant italic">{trustScale}/10</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="10" 
            value={trustScale}
            onChange={(e) => setTrustScale(parseInt(e.target.value))}
            className="w-full h-2 md:h-1 bg-border rounded-full appearance-none cursor-pointer accent-foreground"
          />
          <div className="flex justify-between text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-30">
            <span>You decide</span>
            <span>Full freedom</span>
          </div>
        </div>
      </section>

      {/* Section 4: Soul */}
      <section className="space-y-6 md:space-y-8">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] opacity-30">04</span>
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Your Story</h2>
        </div>
        <div className="space-y-2 md:space-y-3">
          <Label htmlFor="soul-text" className="text-[10px] uppercase tracking-[0.25em] opacity-50">Tell us about yourself</Label>
          <Textarea 
            id="soul-text"
            placeholder="Share your vision..."
            value={formData.soulText}
            onChange={handleChange}
            required
            rows={5}
            className="min-h-[140px] md:min-h-[160px] border border-border/40 rounded-lg md:rounded-xl px-4 py-3 bg-background/50 text-sm md:text-base resize-none"
          />
        </div>
      </section>

      {/* Error */}
      {error && (
        <div className="p-4 border border-red-500/30 rounded-lg text-center text-xs md:text-sm text-red-500">
          {error}
        </div>
      )}

      {/* Submit */}
      <div className="pt-4 md:pt-6">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 md:h-16 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-white transition-all duration-500 rounded-full text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] disabled:opacity-50 flex items-center justify-center gap-3"
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

      <p className="text-center text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-25 pb-8 md:pb-0">
        LYVRA reserves the right to decline
      </p>
    </form>
  );
}
