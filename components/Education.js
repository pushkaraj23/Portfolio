"use client";

import Image from "next/image";

const education = [
  { num: "ONE", degree: "Master of Computer Science", school: "University Name", year: "2015 — 2017" },
  { num: "TWO", degree: "Bachelor of Engineering", school: "Engineering College", year: "2011 — 2015" },
  { num: "THREE", degree: "Certifications", school: "Various", year: "Ongoing" },
  { num: "FOUR", degree: "Workshops", school: "Industry Events", year: "2020 — Present" },
];

export default function Education() {
  return (
    <section id="education" className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_45%]">
        <div className="flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32">
          <h2 className="font-display text-6xl tracking-[0.1em] text-black lg:text-7xl">
            EDUCATION
          </h2>

          {/* Circular number elements */}
          <div className="mt-12 flex flex-wrap gap-4">
            {education.map((item, i) => (
              <div
                key={item.num}
                className={`flex h-20 w-20 items-center justify-center rounded-full font-display text-lg tracking-wider ${
                  i === 0 ? "bg-black text-white" : "bg-[#A2B99E] text-white"
                }`}
              >
                {item.num}
              </div>
            ))}
          </div>

          {/* Education details */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {education.map((item) => (
              <div key={item.num} className="border-l-2 border-[#A2B99E] pl-6">
                <h3 className="font-semibold text-black">{item.degree}</h3>
                <p className="text-sm text-[#A2B99E]">{item.school}</p>
                <p className="mt-1 text-xs text-black/60">{item.year}</p>
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
    </section>
  );
}
