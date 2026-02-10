"use client";

import Image from "next/image";

const hobbies = [
  {
    title: "Photography",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&q=80",
  },
  {
    title: "Typography",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80",
  },
  {
    title: "Travel",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80",
  },
  {
    title: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32">
          <h2 className="font-display text-6xl tracking-[0.1em] text-black lg:text-7xl">
            HOBBIES
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-black/85">
            Beyond code, I explore photography, typography, and design. These
            interests influence my work and keep me inspired.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="bg-[#A2B99E] px-4 py-2 text-xs font-semibold tracking-wider text-white">
              PHOTOGRAPHY
            </span>
            <span className="border border-black px-4 py-2 text-xs font-semibold tracking-wider text-black">
              TYPOGRAPHY
            </span>
            <span className="bg-black px-4 py-2 text-xs font-semibold tracking-wider text-white">
              TRAVEL
            </span>
          </div>
        </div>

        {/* 2x2 image grid */}
        <div className="grid grid-cols-2 gap-2 p-8 lg:gap-4 lg:p-12">
          {hobbies.map((h) => (
            <div key={h.title} className="relative aspect-square overflow-hidden">
              <Image
                src={h.image}
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity hover:bg-black/20" />
              <span className="absolute bottom-4 left-4 font-semibold tracking-wider text-white drop-shadow-lg">
                {h.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
