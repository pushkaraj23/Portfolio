"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1A1A1A]">
      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />
      </div>

      {/* Main content - overlapping layout */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-24 lg:px-12 lg:py-32">
        <div className="flex flex-1 items-end">
          <div className="w-full max-w-4xl">
            {/* Giant name - partially overlaps image area */}
            <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-[0.02em] text-white drop-shadow-2xl">
              PUSHKARAJ
            </h1>
            <div className="mt-4 flex flex-wrap gap-6">
              <span className="font-display text-2xl tracking-[0.2em] text-white/90 lg:text-3xl">
                RESUME
              </span>
              <span className="font-display text-2xl tracking-[0.2em] text-white/90 lg:text-3xl">
                PRESENTATION
              </span>
            </div>
          </div>
        </div>

        {/* Portrait overlapping from right - maximalist overlap */}
        <div className="absolute right-0 top-1/2 hidden w-[45%] -translate-y-1/2 lg:block">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="45vw"
            />
          </div>
        </div>

        {/* Bottom strip - beige accent */}
        <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-6 text-xs tracking-[0.3em] text-white/60">
          <span>Frontend Engineer & UI Architect</span>
          <span>Portfolio 2025 · Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
