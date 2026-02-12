"use client";

import Image from "next/image";

const projects = [
  {
    title: "AgroShield — Crop Disease Detection",
    period: "Jul 2024 – Dec 2024 · Team of 4 · Full Stack Developer",
    stack: "Flutter · Firebase · Python · CNN",
    details: [
      "Shipped a farmer-first mobile app enabling real-time grape disease detection via CNN models.",
      "Integrated cloud sync and offline-first scanning workflows to support rural usage.",
      "Achieved 93% detection accuracy across five grape species with tailored treatment playbooks.",
    ],
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?w=600&q=80",
  },
  {
    title: "Enterprise Resource Planning Suite",
    period: "Feb 2025 – Apr 2025 · Solo · Full Stack Developer",
    stack: "React · Firebase · Tailwind CSS",
    details: [
      "Designed a role-based ERP with six distributed modules powering 100% of client operations.",
      "Engineered data workflows sustaining ~50k reads and ~20k writes per day with zero downtime.",
      "Optimized architecture for seamless onboarding of ~20 users without latency or sync issues.",
    ],
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&q=80",
  },
  {
    title: "Fashion E-Commerce Platform",
    period: "2024 · Team of 2 · Full Stack Developer",
    stack: "React + Vite · Node.js · MySQL · Azure",
    details: [
      "Delivered a full-stack ecommerce flagship with secure authentication and checkout pipelines.",
      "Handled ₹50,000+ in first-day sales with 100% uptime and resilient scaling.",
      "Achieved Lighthouse 100 SEO and 96 best-practice scores through meticulous optimization.",
    ],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32">
          <h2 className="font-display text-6xl tracking-[0.1em] text-black lg:text-7xl">
            VOLUNTEER
          </h2>
          <span className="font-display text-5xl tracking-[0.1em] text-black">
            & PROJECTS
          </span>
          <p className="mt-8 max-w-md leading-relaxed text-black/85">
            Side projects and contributions that reflect my interests in design,
            performance, and open source.
          </p>
        </div>

        {/* Right - Stacked images with captions */}
        <div className="flex flex-col justify-center gap-10 px-8 py-24 lg:px-12 lg:py-32">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col gap-6 border-b border-black/10 pb-10 last:border-none">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
                <div className="relative h-32 w-full overflow-hidden lg:h-40 lg:w-56">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 220px, 80vw"
                  />
                </div>
                <div className="flex-1 border-l-2 border-[#A2B99E] pl-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#A2B99E]">
                    {p.period}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-black">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-black/60">
                    {p.stack}
                  </p>
                </div>
              </div>
              <ul className="ml-2 space-y-2 text-sm leading-relaxed text-black/80 lg:ml-64">
                {p.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
