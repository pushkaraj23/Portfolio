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
            className="absolute right-5 top-5 w-20 rounded-full bg-primary neu-button p-2 overflow-hidden hover:cursor-pointer"
        >
            <div className={`rounded-full bg-accent p-2 w-fit transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]
                ${isDark ? "translate-x-6" : "translate-x-0"}`}>
                {isDark && <Moon />}
                {!isDark && <Sun />}
            </div>
        </button>
    );
}