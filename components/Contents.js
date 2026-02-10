"use client";

import Image from "next/image";
import Link from "next/link";

const sections = [
  { href: "/about", label: "ABOUT ME", page: "02" },
  { href: "/experience", label: "EXPERIENCE", page: "03" },
  { href: "/education", label: "EDUCATION", page: "04" },
  { href: "/skills", label: "SKILLS", page: "05" },
  { href: "/projects", label: "PROJECTS", page: "06" },
  { href: "/hobbies", label: "HOBBIES", page: "07" },
  { href: "/contact", label: "CONTACT", page: "08" },
];

export default function Contents() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left - Contents list */}
        <div className="flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32">
          <h2 className="font-display text-5xl tracking-[0.1em] text-black lg:text-6xl">
            CONTENTS
          </h2>
          <p className="mt-2 text-sm font-semibold tracking-[0.4em] text-[#A2B99E]">
            LIST
          </p>
          <ul className="mt-12 space-y-4">
            {sections.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-baseline justify-between border-b border-black/10 py-3 font-semibold tracking-wider text-black transition-colors hover:text-[#A2B99E] hover:border-[#A2B99E]"
                >
                  <span>
                    {String(i + 1).padStart(2, "0")}. {item.label}
                  </span>
                  <span className="text-sm text-black/50">p.{item.page}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Large pictorial */}
        <div className="relative min-h-[50vh] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
}
