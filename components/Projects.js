"use client";

import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    desc: "High-performance online store with dynamic cart and checkout.",
  },
  {
    title: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    desc: "Analytics dashboard for B2B clients with real-time charts.",
  },
  {
    title: "Editorial Magazine",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    desc: "Content-rich publication with custom typography.",
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
        <div className="flex flex-col justify-center gap-6 px-8 py-24 lg:px-12 lg:py-32">
          {projects.map((p, i) => (
            <div key={p.title} className="flex items-stretch gap-6">
              <div className="relative h-32 w-40 shrink-0 overflow-hidden lg:h-40 lg:w-56">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <div className="flex flex-col justify-center border-l-2 border-[#A2B99E] pl-6">
                <span className="font-semibold tracking-wider text-black">
                  {p.title}
                </span>
                <p className="mt-1 text-sm text-black/70">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
