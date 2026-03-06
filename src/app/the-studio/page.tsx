import StudioForm from "@/components/StudioForm";

export default function TheStudio() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-2xl relative z-10">
      <header className="space-y-6 mb-24">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none opacity-80 animate-in fade-in slide-in-from-left-4 duration-1000">
          The Studio
        </h1>
        <div className="flex items-center space-x-4 animate-in fade-in delay-200 duration-1000">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 leading-none">Application // LYVRA Elite</span>
        </div>
        <p className="text-sm font-medium leading-loose opacity-60 animate-in fade-in delay-300 duration-1000 max-w-md">
          We do not take every project. To maintain the purity of the LYVRA aesthetic, 
          all potential clients must apply for our design services. 
          Expect a response within 48-72 hours.
        </p>
      </header>

      <StudioForm />
    </div>
  );
}
