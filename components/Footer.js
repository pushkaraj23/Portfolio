"use client";

import Image from "next/image";

const contactItems = [
  { label: "ADDRESS", value: "Your City, Country" },
  { label: "PHONE", value: "+1 (555) 000-0000" },
  { label: "EMAIL", value: "hello@pushkaraj.dev" },
  { label: "WEBSITE", value: "www.pushkaraj.dev" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative min-h-screen w-full overflow-hidden bg-[#F8F4E8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left - Large full-height photo */}
        <div className="relative min-h-[50vh] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

        {/* Right - GET IN TOUCH + contact details */}
        <div className="flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32">
          <h2 className="font-display text-6xl tracking-[0.1em] text-black lg:text-7xl">
            GET IN
          </h2>
          <span className="font-display text-6xl tracking-[0.1em] text-black lg:text-7xl">
            TOUCH
          </span>
          <div className="mt-16 space-y-8">
            {contactItems.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold tracking-[0.3em] text-black/60">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-medium text-black">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <span className="bg-[#A2B99E] px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white">
              LINKEDIN
            </span>
            <span className="border border-black px-5 py-2 text-xs font-semibold tracking-[0.2em] text-black">
              GITHUB
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10 px-8 py-6 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-black/50 tracking-widest">
          <span>Made with care</span>
          <span>pushkaraj.dev · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
