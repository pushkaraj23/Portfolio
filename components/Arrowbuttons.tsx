"use client";

import { ChevronUp, ChevronDown } from "lucide-react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS } from "@/lib/navigation";

interface ArrowButtonProps {
    activeNav: number;
    setActiveNav: React.Dispatch<React.SetStateAction<number>>;
    total: number;
}

export default function ArrowButtons() {
    const pathname = usePathname();
    const router = useRouter();

    const currentIndex = NAV_ITEMS.findIndex(
        item => item.href === pathname
    );

    const next = () => {
        const nextIndex = (currentIndex + 1) % NAV_ITEMS.length;

        router.push(NAV_ITEMS[nextIndex].href);
    };
    
    const previous = () => {
        const previousIndex =
            (currentIndex - 1 + NAV_ITEMS.length) %
            NAV_ITEMS.length;

        router.push(NAV_ITEMS[previousIndex].href);
    };
    return (
        <div className="p-2.5 neu-accent fixed z-50 bottom-5 right-5 rounded-full bg-accent flex flex-col gap-2">
            <button onClick={previous} className="p-2 rounded-full bg-accent neu-arrow-buttons hover:cursor-pointer"><ChevronUp className="text-[#1c1c1c]" strokeWidth={3} /></button>
            <button onClick={next} className="p-2 rounded-full bg-accent neu-arrow-buttons hover:cursor-pointer"><ChevronDown className="text-[#1c1c1c]" strokeWidth={3} /></button>
        </div>
    );
}