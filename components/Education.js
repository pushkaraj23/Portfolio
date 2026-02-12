"use client";

import Image from "next/image";

const education = [
  {
    tag: "B.TECH",
    degree: "Bachelor of Technology, Computer Science & Engineering",
    school: "MIT ADT University, Pune",
    year: "Oct 2021 — May 2025",
    detail: "CGPA: 8.22 / 10",
  },
];

const achievements = [
  "Winner · Codex Hackathon by Capgemini — Predictive Health Solution using Everyday Wearables",
  "Special Recognition Award · Smart Pune Health Hackathon — Predictive Analysis & Healthcare",
  "4th Place · CUDA Parallel Programming Challenge hosted by NVIDIA at campus",
  "Winner · Digicode Hackathon organised by ENTC Department",
];

export default function Education() {
  return (
    <section id="education" className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_45%]">
        <div className="flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32">
          <h2 className="font-display text-6xl tracking-[0.1em] text-black lg:text-7xl">
            EDUCATION
          </h2>

          <div className="mt-8 flex flex-wrap gap-6">
            <span className="inline-flex items-center justify-center bg-black px-6 py-3 text-xs font-semibold tracking-[0.35em] uppercase text-white">
              UNDERGRAD · AI FOCUS
            </span>
            <span className="inline-flex items-center justify-center bg-[#A2B99E] px-6 py-3 text-xs font-semibold tracking-[0.35em] uppercase text-white">
              DATA SCIENCE · ML
            </span>
          </div>

          {/* Education details */}
          <div className="mt-16 space-y-10">
            {education.map((item) => (
              <div key={item.degree} className="grid gap-6 border-l-4 border-[#A2B99E] pl-8">
                <div>
                  <span className="font-display text-sm tracking-[0.4em] text-[#A2B99E] uppercase">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-black">
                    {item.degree}
                  </h3>
                </div>
                <div className="text-black/70">
                  <p className="text-sm font-medium uppercase tracking-[0.3em]">
                    {item.school}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em]">
                    {item.year} · {item.detail}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-black/75">
                  Focused on AI, Machine Learning, and applied research methodologies
                  while building production-grade software for academic and industry partners.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Large standing portrait */}
        <div className="relative hidden min-h-screen lg:block">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
            alt=""
            fill
            className="object-cover object-top"
            sizes="45vw"
          />
        </div>
      </div>

      <div className="border-t border-black/10 bg-[#EDE8DC]/60 px-8 py-16 lg:px-16">
        <h3 className="font-display text-3xl tracking-[0.2em] text-black uppercase">
          Achievements
        </h3>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-black/80">
          {achievements.map((achievement) => (
            <li key={achievement} className="border-l-2 border-[#A2B99E] pl-4">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
