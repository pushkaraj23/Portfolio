"use client";

const barcodeStyle = {
  backgroundImage:
    "repeating-linear-gradient(90deg, #000 0px, #000 8px, transparent 8px, transparent 12px)",
};

export default function Hero() {
  return (
    <section className="relative h-screen max-h-screen w-full overflow-hidden bg-[#1A1A1A] text-white">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 lg:grid-cols-[2fr,1fr]">
        {/* Left panel */}
        <div className="relative z-10 flex flex-col justify-between px-8 py-16 lg:px-16 lg:py-20">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.6em] text-[#A2B99E] uppercase">
            <span>PUSHKARAJ</span>
            <span className="text-white text-sm">®</span>
            <span className="hidden md:inline text-white/50">
              CO-FOUNDER · LEAD WEB DEV
            </span>
          </div>

          <div className="mt-8 space-y-2">
            <h1 className="font-display text-[clamp(6rem,18vw,13rem)] leading-[0.8] uppercase">
              PUSHKARAJ
            </h1>
            <p className="font-display text-[clamp(2.8rem,8vw,4.2rem)] tracking-[0.35em] text-white/80 uppercase">
              SURYAWANSHI
            </p>
          </div>

          <div className="mt-8 space-y-2 uppercase">
            <p className="font-display text-4xl tracking-[0.35em] text-[#A2B99E]">
              RESUME
            </p>
            <p className="text-xs font-semibold tracking-[0.4em] text-white/70">
              CO-FOUNDER · LEAD WEB DEVELOPER · AI / ML ASPIRANT
            </p>
          </div>

          <div className="mt-10 max-w-xl text-sm uppercase tracking-[0.25em] text-white/70">
            Co-founder & Lead Web Developer at Fibonce Tech Solutions, Codex
            Hackathon winner, aspiring AI-focused MS candidate dedicated to
            building intelligent, production-ready software.
          </div>

          <div className="mt-12 flex flex-wrap gap-10 text-[0.6rem] tracking-[0.45em] uppercase text-white/60">
            <span>PUNE · INDIA</span>
            <span>pushkaraj232002@gmail.com</span>
            <span>+91 9096582399</span>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="h-12 w-48 bg-white/90" style={barcodeStyle} />
            <div className="space-y-1 text-[0.55rem] uppercase tracking-[0.4em] text-white/50">
              <p>SCAN · CONNECT</p>
              <p>LINKEDIN · GITHUB</p>
            </div>
          </div>
        </div>

      </div>
      <img src="/home/hero.jpg" alt="Pushkaraj Suryawanshi" className="absolute top-0 right-0 w-1/2 h-full object-cover" />
    </section>
  );
}
