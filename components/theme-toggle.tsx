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
      className="bg-primary neu-button fixed top-5 right-22 z-50 w-20 overflow-hidden rounded-full p-2 hover:cursor-pointer"
    >
      <div
        className={`bg-accent w-fit rounded-full p-2 transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] ${isDark ? "translate-x-6" : "translate-x-0"}`}
      >
        {isDark && <Moon />}
        {!isDark && <Sun />}
      </div>
    </button>
  );
}
