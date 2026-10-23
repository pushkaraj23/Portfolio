"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme, mounted]);

  if (!mounted) return null;

  const toggleTheme = () => {
    // Animate immediately
    setIsDark((prev) => !prev);

    // Delay the actual theme change
    setTimeout(() => {
      setTheme(isDark ? "light" : "dark");
    }, 400);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="bg-primary neu-button fixed top-4 right-[4.25rem] z-50 w-16 overflow-hidden rounded-full p-1.5 hover:cursor-pointer sm:top-5 sm:right-22 sm:w-20 sm:p-2"
    >
      <div
        className={`bg-accent w-fit rounded-full p-1.5 transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] sm:p-2 ${isDark ? "translate-x-5 sm:translate-x-6" : "translate-x-0"}`}
      >
        {isDark && <Moon className="h-5 w-5 sm:h-6 sm:w-6" />}
        {!isDark && <Sun className="h-5 w-5 sm:h-6 sm:w-6" />}
      </div>
    </button>
  );
}
