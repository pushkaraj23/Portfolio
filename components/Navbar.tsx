"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* ================= MOBILE NAVBAR ================= */}
            <div className={`md:hidden`}>
                {/* Hamburger / Cross Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="neu-card bg-primary fixed top-5 left-5 z-50 ml-auto flex h-16 w-16 flex-col items-center justify-center rounded-full"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    <div>
                        <div
                            className={`bg-accent h-2 w-9 rounded-full transition-all duration-500 ${mobileOpen ? "translate-y-1 rotate-45" : ""}`}
                        />
                        <div
                            className={`bg-accent h-2 w-7 rounded-full transition-all duration-500 ${mobileOpen ? "w-9 -translate-y-1 -rotate-45" : "mt-1.5"}`}
                        />
                    </div>
                </button>

                {/* Dropdown */}
                <nav
                    className={`neu-card bg-primary w-full overflow-hidden rounded-b-[35px] transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] ${mobileOpen ? "max-h-150 pt-26 pb-5 opacity-100" : "max-h-0 py-0 opacity-0"
                        } `}
                >
                    <div className="flex flex-col gap-2 px-5">
                        {NAV_ITEMS.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-4 rounded-full px-4 py-3 transition-all duration-200 ${isActive ? "text-accent neu-button" : "text-secondary"
                                        } `}
                                >
                                    <Icon className="h-7 w-7" />

                                    <p className="font-primary text-lg tracking-wide">{item.name}</p>
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
                className={`neu-card bg-primary absolute top-[3%] left-[3vh] z-50 hidden h-[94%] flex-col justify-around overflow-hidden rounded-[45px] px-4.5 py-2 transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] md:flex ${expanded ? "w-56" : "w-24"} `}
            >
                {NAV_ITEMS.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`group flex items-center gap-3 rounded-full p-3 ${pathname === item.href ? "text-accent neu-button" : "text-secondary"
                                } `}
                        >
                            <Icon className="group-hover:text-accent/60 h-9 w-9 transition-colors duration-200" />

                            {expanded && (
                                <p className="font-primary font-bold group-hover:text-accent/60 text-lg tracking-wide transition-colors duration-200">
                                    {item.name}
                                </p>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
