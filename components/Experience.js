"use client";

import Image from "next/image";

const periods = ["JAN-FEB", "MAR-APR", "JUN-JUL", "AUG-SEP"];
const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Company Inc.",
    period: "2022 — Present",
    text: "Leading frontend architecture for consumer products. Built scalable design systems.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 — 2022",
    text: "Developed responsive web applications for clients across finance, retail, and media.",
  },
  {
    role: "Junior Developer",
    company: "Startup Studio",
    period: "2017 — 2019",
    text: "Contributed to multiple product launches. Gained expertise in React and modern CSS.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_40%]">
        <div className="flex flex-col justify-between px-8 py-24 lg:px-16 lg:py-32">
          <div>
            <h2 className="font-display text-6xl tracking-[0.1em] text-black lg:text-7xl">
              EXPERIENCE
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-black/85">
              Building digital products with a focus on user experience and
              performance. Collaborative team player with a strong design sense.
            </p>
          </div>

          {/* Period labels - black bar */}
          <div className="mt-12 flex flex-wrap gap-2">
            {periods.map((p) => (
              <span
                key={p}
                className="bg-black px-5 py-3 text-xs font-semibold tracking-[0.2em] text-white"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Experience blocks */}
          <div className="mt-16 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.role} className="border-l-4 border-[#A2B99E] pl-8">
                <h3 className="font-semibold text-xl text-black">{exp.role}</h3>
                <p className="text-[#A2B99E] font-medium">{exp.company}</p>
                <p className="mt-1 text-sm text-black/60">{exp.period}</p>
                <p className="mt-3 text-black/85">{exp.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Large vertical photo, unconventional crop */}
        <div className="relative hidden min-h-screen lg:block">
          <div className="absolute inset-0 -rotate-6 scale-110">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
