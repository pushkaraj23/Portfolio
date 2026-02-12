"use client";

import Image from "next/image";

const languages = [
  {
    title: "Marathi",
    subtitle: "Native Speaker",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&q=80",
  },
  {
    title: "Hindi",
    subtitle: "Fluent",
    image: "https://images.unsplash.com/photo-1521292270410-a8c238da0b0e?w=500&q=80",
  },
  {
    title: "English",
    subtitle: "Professional",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
  },
];

export default function Languages() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32">
          <h2 className="font-display text-6xl tracking-[0.1em] text-black lg:text-7xl">
            LANGUAGES
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-black/85">
            Multilingual communicator comfortable translating technical vision for global
            stakeholders. Thrives in cross-cultural collaboration, client discovery, and
            leading teams through rapid iteration.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="bg-[#A2B99E] px-4 py-2 text-xs font-semibold tracking-[0.3em] text-white">
              STORYTELLING
            </span>
            <span className="border border-black px-4 py-2 text-xs font-semibold tracking-[0.3em] text-black">
              CLIENT BRIEFINGS
            </span>
            <span className="bg-black px-4 py-2 text-xs font-semibold tracking-[0.3em] text-white">
              TEAM LEADERSHIP
            </span>
          </div>
        </div>

        <div className="grid gap-2 p-8 lg:gap-4 lg:p-12">
          {languages.map((lang) => (
            <div
              key={lang.title}
              className="relative aspect-[6/5] overflow-hidden border border-black/10"
            >
              <Image
                src={lang.image}
                alt={lang.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 80vw"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-3xl text-white uppercase tracking-[0.3em]">
                  {lang.title}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  {lang.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
