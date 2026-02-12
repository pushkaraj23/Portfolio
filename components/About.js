 "use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left - Full-height portrait with green tint */}
        <div className="relative order-2 min-h-[60vh] lg:order-1 lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1000&q=80"
            alt="Portrait"
            fill
            className="object-cover opacity-90"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-[#A2B99E]/20 mix-blend-multiply" />
        </div>

        {/* Right - Huge ABOUT ME text + content */}
        <div className="flex flex-col justify-center px-8 py-24 lg:order-2 lg:px-16 lg:py-32">
          <h2 className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-[0.05em] text-black">
            ABOUT
          </h2>
          <span className="font-display mt-1 text-4xl tracking-[0.2em] text-black lg:text-5xl">
            ME
          </span>

          <p className="mt-12 max-w-xl leading-relaxed text-black/85">
            I’m Pushkaraj Suryawanshi, Co-founder and Lead Web Developer at
            Fibonce Tech Solutions Pvt. Ltd., national-level Codex Hackathon winner
            by Capgemini, and an aspiring MS in Computer Science candidate focused
            on Artificial Intelligence and Data Science.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-black/85">
            My mission is to blend applied research with production engineering—
            designing resilient systems that power ML-driven products. I love
            orchestrating the entire SDLC: discovering requirements, architecting
            scalable platforms, and shipping lovable, measurable, enduring software.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-black/85">
            Up next: deepening expertise in AI/ML and MLOps through graduate study,
            then leading teams as an Applied ML or AI Software Engineer delivering
            intelligent experiences at scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/skills"
              className="bg-[#A2B99E] px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white hover:bg-[#8A9A87]"
            >
              SKILLS
            </Link>
            <Link
              href="/projects"
              className="border border-black px-5 py-2 text-xs font-semibold tracking-[0.2em] text-black hover:bg-black hover:text-white"
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="bg-black px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white hover:bg-black/80"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
