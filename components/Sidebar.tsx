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

export default function SideBar() {
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
        <div className="fixed right-0 top-0 flex h-screen">
            {/* Gradient Line */}
            <div className="h-full w-px bg-linear-to-b from-white/60 to-white/0" />

            {/* The main part */}
            <div className="flex h-full w-16 flex-col">
                {/* Number tile */}
                <div className="flex h-20 shrink-0 items-center justify-center bg-accent">
                    <h1 className="rotate-90 font-bold font-primary text-4xl text-primary">{'0' + (currentIndex + 1)}</h1>
                </div>

                {/* Vertical text panel */}
                <div className="flex flex-1 justify-center pt-6">
                    <div className="font-secondary uppercase opacity-70 [writing-mode:vertical-rl]">
                        <h2 className="font-semibold tracking-wide">Schedule a Call!</h2>
                        <p className="text-sm   ">
                            Next free: Wed, 9:00 PM IST (Wed, 12:00 AM EST)
                        </p>
                    </div>
                </div>

                {/* Arrow Buttons */}
                <div className="p-4 flex flex-col gap-2 neu-accent rounded-t-full justify-center items-center bg-accent">
                    <button
                        onClick={previous}
                        className="bg-accent neu-arrow-buttons rounded-full p-2 w-fit hover:cursor-pointer"
                    >
                        <ChevronUp className="text-[#1c1c1c]" strokeWidth={3} />
                    </button>
                    <button
                        onClick={next}
                        className="bg-accent neu-arrow-buttons rounded-full p-2 w-fit hover:cursor-pointer"
                    >
                        <ChevronDown className="text-[#1c1c1c]" strokeWidth={3} />
                    </button>
                </div>

            </div>

        </div>
    );
}