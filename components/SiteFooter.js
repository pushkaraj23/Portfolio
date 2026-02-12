"use client";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#F8F4E8]/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs uppercase tracking-[0.35em] text-black/70 md:flex-row md:items-center md:justify-between lg:px-12">
        <div className="flex flex-col gap-1 text-[0.55rem] md:flex-row md:items-center md:gap-6">
          <span className="font-semibold text-black/80">Pushkaraj Suryawanshi</span>
          <span>pushkaraj232002@gmail.com</span>
          <span>+91 9096582399</span>
        </div>
        <div className="flex flex-wrap gap-4 text-[0.55rem]">
          <a
            href="https://www.linkedin.com/in/pushkaraj-suryawanshi-604bba228/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#A2B99E]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pushkaraj23"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#A2B99E]"
          >
            GitHub
          </a>
          <span>Portfolio 2025</span>
        </div>
      </div>
    </footer>
  );
}
