"use client";

import Image from "next/image";

const highlights = [
  "20+ production systems deployed across India, Australia & the UK",
  "Hiring, mentoring, and leading multidisciplinary engineer pods",
  "Architecture through maintenance ownership for ERP, AI, and ecommerce platforms",
  "Award-winning hackathon performer with focus on predictive analytics",
];

const experiences = [
  {
    role: "Lead Web Developer & Co-Founder",
    company: "Fibonce Tech Solutions Pvt. Ltd.",
    period: "Aug 2025 — Present",
    bullets: [
      "Co-founded Fibonce Tech and built the technical division from the ground up.",
      "Own requirement discovery, system architecture, full-stack engineering, deployment, and post-launch stability.",
      "Delivered mission-critical ERP suites, ecommerce ecosystems, and AI-enabled applications for global clients.",
      "Scaled operations end-to-end—from hiring and onboarding to guiding engineers toward measurable delivery.",
    ],
  },
  {
    role: "Website Head",
    company: "Younoia",
    period: "Jul 2023 — Dec 2023",
    bullets: [
      "Directed the web experience roadmap, ensuring performant, accessible, and brand-aligned delivery.",
      "Recruited and mentored intern developers, instilling best practices and deployment rigor.",
      "Led end-to-end development of the organization’s web platform with continuous improvements.",
    ],
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
              Tenacious builder steering strategy, architecture, and delivery for
              high-stakes products. From bootstrapping a tech startup to mentoring
              teams, my craft blends business insight with deeply technical execution.
            </p>

            <ul className="mt-10 grid gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              {highlights.map((item) => (
                <li key={item} className="bg-black px-5 py-3 text-left leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience blocks */}
          <div className="mt-16 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.role} className="border-l-4 border-[#A2B99E] pl-8">
                <h3 className="font-semibold text-xl text-black">{exp.role}</h3>
                <p className="text-[#A2B99E] font-medium">{exp.company}</p>
                <p className="mt-1 text-sm text-black/60">{exp.period}</p>
                <ul className="mt-3 space-y-2 text-black/85">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
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
