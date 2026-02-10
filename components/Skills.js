"use client";

import Image from "next/image";

const technicalSkills = [
  { label: "React / Next.js", value: 90 },
  { label: "JavaScript", value: 92 },
  { label: "CSS / Design", value: 85 },
  { label: "Performance", value: 82 },
];

const languages = [
  { lang: "English", level: "Native" },
  { lang: "Hindi", level: "Fluent" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left - Portrait + Technical skills */}
        <div className="flex flex-col lg:flex-row">
          <div className="relative h-[40vh] min-h-[300px] shrink-0 lg:h-screen lg:min-h-screen lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
              alt=""
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center px-8 py-16 lg:px-12 lg:py-24">
            <h2 className="font-display text-5xl tracking-[0.1em] text-black lg:text-6xl">
              TECHNICAL
            </h2>
            <span className="font-display text-4xl tracking-[0.1em] text-black">
              SKILLS
            </span>
            <div className="mt-10 flex flex-wrap gap-8">
              {technicalSkills.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <div className="relative h-24 w-24">
                    <svg className="h-24 w-24 -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#E5E5E5"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#A2B99E"
                        strokeWidth="3"
                        strokeDasharray={`${s.value} 100`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-black">
                      {s.value}%
                    </span>
                  </div>
                  <span className="mt-2 text-center text-xs font-medium text-black/70">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Communication skills, dark block */}
        <div className="flex flex-col justify-center bg-[#1A1A1A] px-8 py-24 lg:px-16 lg:py-32">
          <h2 className="font-display text-4xl tracking-[0.1em] text-white lg:text-5xl">
            COMMUNICATION
          </h2>
          <span className="font-display text-3xl tracking-[0.1em] text-white">
            SKILLS
          </span>
          <div className="mt-12 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-white/60">
                MOTHER TONGUE(S)
              </p>
              <p className="mt-2 text-white">English, Hindi</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-white/60">
                OTHER LANGUAGE(S)
              </p>
              <div className="mt-4 space-y-4">
                {languages.map((l) => (
                  <div key={l.lang} className="flex items-center justify-between">
                    <span className="text-white">{l.lang}</span>
                    <span className="text-sm text-white/70">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
