"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left - Full-height portrait with green tint */}
        <div className="relative order-2 min-h-[60vh] lg:order-1 lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1000&q=80"
            alt=""
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
          <p className="mt-12 max-w-lg leading-relaxed text-black/85">
            I'm a frontend engineer and UI architect with a passion for creating
            interfaces that are both beautiful and functional. My work blends
            editorial design sensibilities with modern web technology.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-black/85">
            I focus on performance, accessibility, and clean architecture. When
            I'm not coding, you'll find me exploring typography, photography, or
            the latest design trends.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/skills" className="bg-[#A2B99E] px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white hover:bg-[#8A9A87]">
              SKILLS
            </Link>
            <Link href="/contact" className="border border-black px-5 py-2 text-xs font-semibold tracking-[0.2em] text-black hover:bg-black hover:text-white">
              CONTACT
            </Link>
            <Link href="/projects" className="bg-black px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white hover:bg-black/80">
              WORK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
