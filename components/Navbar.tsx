"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!mobileOpen) return;

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [mobileOpen]);

    return (
        <>
            {/* ================= MOBILE NAVBAR ================= */}
            <div className="md:hidden">
                {/* Backdrop */}
                <div
                    aria-hidden={!mobileOpen}
                    onClick={() => setMobileOpen(false)}
                    className={`fixed inset-0 z-40 bg-primary/50 backdrop-blur-sm transition-opacity duration-700 ease-out ${
                        mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                />

                {/* Hamburger / Cross Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="neu-card bg-primary fixed top-[max(1rem,env(safe-area-inset-top))] left-4 z-50 flex h-14 w-14 flex-col items-center justify-center rounded-full sm:top-5 sm:left-5 sm:h-16 sm:w-16"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    <div>
                        <div
                            className={`bg-accent h-1.5 w-7 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-2 sm:w-9 ${
                                mobileOpen ? "translate-y-1 rotate-45" : ""
                            }`}
                        />
                        <div
                            className={`bg-accent h-1.5 w-5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-2 sm:w-7 ${
                                mobileOpen ? "w-7 -translate-y-1 -rotate-45 sm:w-9" : "mt-1.5"
                            }`}
                        />
                    </div>
                </button>

                {/* Dropdown — slide + fade (smoother than max-height) */}
                <nav
                    className={`neu-card bg-primary fixed inset-x-0 top-0 z-40 max-h-[100dvh] overflow-y-auto rounded-b-[28px] pt-[max(6rem,calc(env(safe-area-inset-top)+5rem))] pb-8 sm:rounded-b-[35px] ${
                        mobileOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-[calc(100%+1rem)] opacity-0"
                    }`}
                    style={{
                        transitionProperty: "transform, opacity",
                        transitionDuration: "700ms",
                        transitionTimingFunction: EASE,
                    }}
                >
                    <div className="flex flex-col gap-1.5 px-4 sm:gap-2 sm:px-5">
                        {NAV_ITEMS.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-3 rounded-full px-4 py-3 transition-all duration-500 ease-out sm:gap-4 ${
                                        isActive ? "text-accent neu-button" : "text-secondary"
                                    } ${
                                        mobileOpen
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-3 opacity-0"
                                    }`}
                                    style={{
                                        transitionDelay: mobileOpen ? `${80 + index * 45}ms` : "0ms",
                                    }}
                                >
                                    <Icon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
                                    <p className="font-primary text-base tracking-wide sm:text-lg">
                                        {item.name}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>

            {/* ================= DESKTOP NAVBAR ================= */}
            <nav
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
                className={`neu-card bg-primary absolute top-[3%] left-[3vh] z-50 hidden h-[94%] flex-col justify-around overflow-hidden rounded-[45px] px-4.5 py-2 md:flex ${
                    expanded ? "w-56" : "w-24"
                }`}
                style={{
                    transitionProperty: "width",
                    transitionDuration: "650ms",
                    transitionTimingFunction: EASE,
                }}
            >
                {NAV_ITEMS.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`group flex items-center gap-3 rounded-full p-3 ${
                                pathname === item.href ? "text-accent neu-button" : "text-secondary"
                            }`}
                        >
                            <Icon className="group-hover:text-accent/60 h-9 w-9 shrink-0 transition-colors duration-300" />

                            <p
                                className={`font-primary group-hover:text-accent/60 overflow-hidden text-lg font-bold tracking-wide whitespace-nowrap transition-all duration-500 ease-out ${
                                    expanded
                                        ? "max-w-[8rem] translate-x-0 opacity-100"
                                        : "max-w-0 -translate-x-2 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: expanded ? `${index * 30}ms` : "0ms",
                                }}
                            >
                                {item.name}
                            </p>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
