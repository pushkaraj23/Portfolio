"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavbarProps {
    activeNav: number;
    setActiveNav: (index: number) => void;
    items: string[];
}

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    return (
        <nav
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            className={`absolute z-50 top-[4%] left-[4vh] h-[92%] px-4.5 py-2 flex flex-col justify-around rounded-[45px] neu-card transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] overflow-hidden bg-primary
                ${expanded ? "w-56" : "w-24"}`}
        >
            {NAV_ITEMS.map((item, index) => {
                const Icon = item.icon;
                return <Link
                    key={index}
                    href={item.href}
                    className={`
                        flex items-center gap-3 group
                        ${pathname === item.href
                            ? "text-accent"
                            : "text-secondary"}
                    `}
                >
                    <div className={`p-3 w-fit rounded-full 
                        ${pathname === item.href
                            ? "neu-button"
                            : ""}`
                    }>
                        <Icon className="w-9 h-9 transition-colors duration-200 group-hover:text-accent/60" />
                    </div>
                    {expanded && <p className="font-primary text-lg tracking-wide transition-colors duration-200 group-hover:text-accent/60">{item.name}</p>}
                </Link>
            })}
        </nav>
    )
}