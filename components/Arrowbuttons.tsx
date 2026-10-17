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

    const currentIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);

    const next = () => {
        const nextIndex = (currentIndex + 1) % NAV_ITEMS.length;

        router.push(NAV_ITEMS[nextIndex].href);
    };

    const previous = () => {
        const previousIndex = (currentIndex - 1 + NAV_ITEMS.length) % NAV_ITEMS.length;

        router.push(NAV_ITEMS[previousIndex].href);
    };
    return (
        <div className="neu-accent bg-accent fixed right-5 bottom-5 z-50 flex flex-col gap-2 rounded-full p-2.5">
            <button
                onClick={previous}
                className="bg-accent neu-arrow-buttons rounded-full p-2 hover:cursor-pointer"
            >
                <ChevronUp className="text-[#1c1c1c]" strokeWidth={3} />
            </button>
            <button
                onClick={next}
                className="bg-accent neu-arrow-buttons rounded-full p-2 hover:cursor-pointer"
            >
                <ChevronDown className="text-[#1c1c1c]" strokeWidth={3} />
            </button>
        </div>
    );
}
