'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function StudioForm() {
  const [trustScale, setTrustScale] = useState(10);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = {
        fullName: (document.getElementById('full-name') as HTMLInputElement)?.value || '',
        email: (document.getElementById('email') as HTMLInputElement)?.value || '',
        whatsapp: (document.getElementById('whatsapp') as HTMLInputElement)?.value || '',
        instagram: (document.getElementById('instagram') as HTMLInputElement)?.value || '',
        pinterest: (document.getElementById('pinterest') as HTMLInputElement)?.value || '',
        soundtrack: (document.getElementById('soundtrack') as HTMLInputElement)?.value || '',
        sourcing: (document.getElementById('sourcing') as HTMLSelectElement)?.value || '',
        budget: (document.getElementById('budget') as HTMLInputElement)?.value || '',
        trustScale: trustScale,
        soulText: (document.getElementById('soul-text') as HTMLTextAreaElement)?.value || '',
        preferredColor: (document.getElementById('preferred-color') as HTMLInputElement)?.value || '',
        measurements: (document.getElementById('measurements') as HTMLInputElement)?.value || '',
        thriftDescription: (document.getElementById('thrift-description') as HTMLInputElement)?.value || '',
      };

      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setError('Something went wrong. Please try again or contact us directly.');
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="py-48 flex flex-col items-center text-center space-y-16"
      >
        <div className="relative">
           <div className="w-48 h-48 bg-green-50 rounded-full flex items-center justify-center">
             <CheckCircle2 className="w-24 h-24 text-green-600/30" strokeWidth={0.5} />
           </div>
           <motion.div 
             animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
             transition={{ repeat: Infinity, duration: 4 }}
             className="absolute inset-0 bg-green-200 rounded-full blur-3xl -z-10" 
           />
        </div>
        <div className="space-y-8">
          <h2 className="text-6xl md:text-9xl font-[950] italic uppercase tracking-tighter leading-none">Application<br/>Recorded</h2>
          <p className="text-lg md:text-xl font-medium opacity-60 max-w-lg mx-auto leading-relaxed italic">
            Your soul has been archived. Our curators will review your vision and initiate contact via encrypted channels within 72 hours.
          </p>
        </div>
        <div className="pt-12">
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-[10px] font-black uppercase tracking-[1em] border-b border-foreground pb-4 hover:opacity-50 transition-all"
          >
            Submit another vision
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form className="space-y-48" onSubmit={handleSubmit}>
      {/* Section 1: Contact */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-16"
      >
        <div className="flex items-center space-x-8 border-b border-border/30 pb-10">
          <span className="text-[10px] font-black uppercase tracking-[1em] opacity-30 italic">01</span>
          <h2 className="text-xs font-black uppercase tracking-[0.6em]">Identity Archive</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          <div className="space-y-4 group col-span-2 md:col-span-1">
            <Label className="studio-label" htmlFor="full-name">Full Name</Label>
            <Input type="text" id="full-name" className="studio-input" placeholder="DESIGNATION" required aria-required="true" />
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1">
            <Label className="studio-label" htmlFor="email">Email Address</Label>
            <Input type="email" id="email" className="studio-input" placeholder="DIGITAL@ENTRY.COM" required aria-required="true" />
          </div>
          <div className="space-y-4 col-span-2">
            <Label className="studio-label" htmlFor="whatsapp">WhatsApp / Signal Number</Label>
            <Input type="tel" id="whatsapp" className="studio-input" placeholder="+X (XXX) XXX-XXXX" required aria-required="true" />
          </div>
        </div>
      </motion.section>

      {/* Section 2: Inspiration */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-16"
      >
        <div className="flex items-center space-x-8 border-b border-border/30 pb-10">
          <span className="text-[10px] font-black uppercase tracking-[1em] opacity-30 italic">02</span>
          <h2 className="text-xs font-black uppercase tracking-[0.6em]">Visual Inspiration</h2>
        </div>
        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            <div className="space-y-4">
              <Label className="studio-label" htmlFor="instagram">Instagram Link</Label>
              <Input type="url" id="instagram" className="studio-input" placeholder="INSTAGRAM.COM/HANDLE" />
            </div>
            <div className="space-y-4">
              <Label className="studio-label" htmlFor="pinterest">Pinterest Link</Label>
              <Input type="url" id="pinterest" className="studio-input" placeholder="PINTEREST.COM/MOODBOARD" />
            </div>
          </div>
          <div className="space-y-4">
            <Label className="studio-label" htmlFor="soundtrack">Spotify Playlist</Label>
            <Input type="url" id="soundtrack" className="studio-input" placeholder="THE SOUNDTRACK OF YOUR LIFE" />
          </div>
        </div>
      </motion.section>

      {/* Section 3: Project Details */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-16"
      >
        <div className="flex items-center space-x-8 border-b border-border/30 pb-10">
          <span className="text-[10px] font-black uppercase tracking-[1em] opacity-30 italic">03</span>
          <h2 className="text-xs font-black uppercase tracking-[0.6em]">Project Scope</h2>
        </div>
        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            <div className="space-y-4">
              <Label className="studio-label" htmlFor="sourcing">Garment Sourcing</Label>
              <div className="relative">
                <select id="sourcing" className="studio-input appearance-none bg-transparent cursor-pointer py-6" defaultValue="" required aria-required="true">
                  <option value="" disabled className="bg-background">SELECT PROTOCOL</option>
                  <option value="provide" className="bg-background">PROVIDE (CLIENT BASE)</option>
                  <option value="thrift" className="bg-background">THRIFT (LYVRA SOURCED)</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <ArrowRight className="size-6 rotate-90" strokeWidth={1} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Label className="studio-label" htmlFor="budget">Project Budget (Min $75)</Label>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-black opacity-20">$</span>
                <Input type="number" id="budget" min="75" step="5" className="studio-input pl-10 font-black text-2xl" placeholder="75" required aria-required="true" />
              </div>
            </div>
          </div>
          
          <div className="space-y-12 bg-foreground/[0.02] p-12 md:p-24 rounded-[3rem] border border-border/20">
            <div className="flex justify-between items-end">
                <Label className="studio-label mb-0 text-[10px]" htmlFor="trust-scale">Vision Trust Scale</Label>
                <span className="text-6xl font-black italic tracking-tighter leading-none opacity-80" aria-live="polite">{trustScale}/10</span>
            </div>
            <input 
              type="range" 
              id="trust-scale"
              min="1" 
              max="10" 
              step="1"
              className="w-full accent-foreground h-12 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" 
              value={trustScale} 
              onChange={(e) => setTrustScale(parseInt(e.target.value))}
              aria-label="Trust scale slider from 1 to 10"
              aria-valuemin={1}
              aria-valuemax={10}
              aria-valuenow={trustScale}
              aria-valuetext={`${trustScale} out of 10`}
            />
            <div className="flex justify-between text-[10px] uppercase font-black opacity-20 tracking-[0.4em] italic">
              <span>Micro-manage</span>
              <span>Full Creative Freedom</span>
            </div>
          </div>

          {/* Thrifting & Custom Sourcing Details */}
          <div className="space-y-8 pt-8 border-t border-border/10">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.6em] opacity-60">Thrifting &amp; Custom Sourcing</h3>
              <p className="text-[10px] opacity-30 italic leading-relaxed">
                If you chose THRIFT sourcing, provide details below to help us find the perfect base piece.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4">
                <Label className="studio-label" htmlFor="preferred-color">Preferred Color</Label>
                <Input
                  type="text"
                  id="preferred-color"
                  className="studio-input"
                  placeholder="E.G., INDIGO, VINTAGE WASH"
                />
              </div>
              <div className="space-y-4">
                <Label className="studio-label" htmlFor="measurements">Measurements (cm)</Label>
                <Input
                  type="text"
                  id="measurements"
                  className="studio-input"
                  placeholder="E.G., WAIST 80, LENGTH 95"
                />
              </div>
              <div className="space-y-4">
                <Label className="studio-label" htmlFor="thrift-description">General Description</Label>
                <Input
                  type="text"
                  id="thrift-description"
                  className="studio-input"
                  placeholder="STYLE, ERA, CONDITION"
                />
              </div>
            </div>
            <div className="bg-foreground/[0.02] p-6 md:p-8 rounded-[2rem] border border-border/20 mt-4">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-pink-100/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">💎</span>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Important Note</p>
                  <p className="text-xs font-medium opacity-40 italic leading-relaxed">
                    Please note: Thrifting the base piece will incur an additional service charge.
                    We&apos;ll provide a detailed quote after reviewing your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: The Soul */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-16"
      >
        <div className="flex items-center space-x-8 border-b border-border/30 pb-10">
          <span className="text-[10px] font-black uppercase tracking-[1em] opacity-30 italic">04</span>
          <h2 className="text-xs font-black uppercase tracking-[0.6em]">The Soul</h2>
        </div>
        <div className="space-y-8">
          <Label className="studio-label leading-relaxed" htmlFor="soul-text">Describe your soul and why you chose LYVRA</Label>
          <Textarea 
            id="soul-text"
            className="studio-input min-h-[400px] md:min-h-[600px] resize-none focus:min-h-[700px] transition-all duration-1000 bg-background/20 rounded-[2rem] p-12 text-lg italic md:text-2xl leading-relaxed" 
            placeholder="Tell us about the internal art that drives you..." 
            required
            aria-required="true"
          ></Textarea>
        </div>
      </motion.section>

      {/* Error Display */}
      {error && (
        <div className="mb-8 p-6 bg-destructive/10 border border-destructive/20 rounded-[2rem] text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-destructive">{error}</p>
        </div>
      )}

      <div className="relative group pt-12 pb-48">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="relative w-full bg-primary text-primary-foreground py-16 text-xs md:text-sm font-black uppercase tracking-[1.5em] hover:bg-black disabled:opacity-50 transition-all duration-1000 rounded-full overflow-hidden flex items-center justify-center btn-premium-glow"
        >
          {isSubmitting ? (
            <Loader2 className="size-8 animate-spin" strokeWidth={1} />
          ) : (
            <>
              <span className="relative z-10 pl-6">Submit Application</span>
              <ArrowRight className="size-8 absolute right-16 opacity-0 group-hover:opacity-40 group-hover:right-12 transition-all duration-1000" strokeWidth={1} />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </button>
      </div>

      <p className="text-[10px] uppercase font-black tracking-[0.6em] text-center opacity-20 mt-12 pb-32 leading-loose max-w-lg mx-auto italic">
        By submitting, you acknowledge that LYVRA reserves the right to refuse service based on vision misalignment.
      </p>
    </form>
  );
}
