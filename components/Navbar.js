"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/education", label: "EDUCATION" },
  { href: "/skills", label: "SKILLS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/hobbies", label: "HOBBIES" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F4E8]/95 backdrop-blur-sm border-b border-black/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.2em] text-black transition-colors hover:text-[#A2B99E]"
        >
          PUSHKARAJ
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-semibold tracking-[0.2em] text-black transition-colors hover:text-[#A2B99E]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={handleToggle}
          className="flex flex-col gap-1.5 justify-center items-center min-w-[44px] min-h-[44px] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all origin-center ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all ${
              isOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all origin-center ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-black/5 bg-[#F8F4E8] md:hidden">
          <ul className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-semibold tracking-[0.2em] text-black transition-colors hover:text-[#A2B99E]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
