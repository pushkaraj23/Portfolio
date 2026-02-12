"use client";

import Image from "next/image";

const technicalSkills = [
  { label: "C / C++", value: 92 },
  { label: "Python · Data Science", value: 90 },
  { label: "Java · R", value: 84 },
  { label: "JavaScript · ReactJS", value: 92 },
  { label: "HTML · CSS · UI/UX", value: 88 },
  { label: "Flutter · Mobile", value: 85 },
  { label: "Firebase · Cloud", value: 86 },
  { label: "MySQL · MongoDB", value: 88 },
];

const tools = [
  "Git & GitHub",
  "Machine Learning",
  "MLOps Foundations",
  "Arduino Programming",
];

const languages = [
  { lang: "Marathi", level: "Native" },
  { lang: "Hindi", level: "Fluent" },
  { lang: "English", level: "Professional" },
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
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {technicalSkills.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="relative h-20 w-20">
                    <svg className="h-20 w-20 -rotate-90" viewBox="0 0 36 36">
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
                  <span className="text-sm font-medium leading-snug text-black/80">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                >
                  {tool}
                </span>
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
                LANGUAGES KNOWN
              </p>
              <div className="mt-4 space-y-4 text-white">
                {languages.map((l) => (
                  <div key={l.lang} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-sm uppercase tracking-[0.3em]">
                      {l.lang}
                    </span>
                    <span className="text-xs text-white/70">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              COMMUNICATION · CLIENT DISCOVERY · CROSS-FUNCTIONAL LEADERSHIP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
