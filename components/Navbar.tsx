"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
                    className="ml-auto w-16 h-16 flex items-center justify-center flex-col fixed z-50 top-5 left-5 rounded-full neu-card bg-primary"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    <div>
                        <div className={`h-2 rounded-full w-9 bg-accent transition-all duration-500 ${mobileOpen? "rotate-45 translate-y-1" : ""}`} />
                        <div className={`h-2 rounded-full w-7 bg-accent transition-all duration-500 ${mobileOpen? "-rotate-45 -translate-y-1 w-9" : "mt-1.5"}`} />
                    </div>
                </button>

                {/* Dropdown */}
                <nav
                    className={`
                        w-full rounded-b-[35px] neu-card bg-primary
                        overflow-hidden
                        transition-all duration-500
                        ease-[cubic-bezier(.34,1.56,.64,1)]
                        ${mobileOpen
                            ? "max-h-150 opacity-100 pt-26 pb-5"
                            : "max-h-0 opacity-0 py-0"
                        }
                    `}
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
                                    className={`
                                        flex items-center gap-4
                                        px-4 py-3 rounded-full
                                        transition-all duration-200
                                        ${isActive
                                            ? "text-accent neu-button"
                                            : "text-secondary"
                                        }
                                    `}
                                >
                                    <Icon className="w-7 h-7" />

                                    <p className="font-primary text-lg tracking-wide">
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
                className={`
                    hidden md:flex
                    absolute z-50 top-[3%] left-[4vh]
                    h-[94%] px-4.5 py-2
                    flex-col justify-around
                    rounded-[45px] neu-card
                    transition-all duration-500
                    ease-[cubic-bezier(.34,1.56,.64,1)]
                    overflow-hidden bg-primary
                    ${expanded ? "w-52" : "w-24"}
                `}
            >
                {NAV_ITEMS.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`
                                flex rounded-full p-3 items-center gap-3 group
                                ${pathname === item.href
                                    ? "text-accent neu-button"
                                    : "text-secondary"
                                }
                            `}
                        >
                            <Icon
                                className="
                                        w-9 h-9
                                        transition-colors duration-200
                                        group-hover:text-accent/60
                                    "
                            />

                            {expanded && (
                                <p
                                    className="
                                        font-primary text-lg tracking-wide
                                        transition-colors duration-200
                                        group-hover:text-accent/60
                                    "
                                >
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