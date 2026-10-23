"use client";

import { ChevronUp, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS } from "@/lib/navigation";

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
        <div className="fixed top-0 right-0 z-30 flex h-screen">
            {/* Gradient Line */}
            <div className="h-full w-px bg-linear-to-b from-white/60 to-white/0" />

            {/* The main part */}
            <div className="flex h-full w-14 flex-col sm:w-16">
                {/* Number tile */}
                <div className="bg-accent flex h-16 shrink-0 items-center justify-center sm:h-20">
                    <h1 className="font-primary text-primary rotate-90 text-3xl font-bold sm:text-4xl">
                        {"0" + (currentIndex + 1)}
                    </h1>
                </div>

                {/* Vertical text panel */}
                <div className="flex flex-1 items-start justify-center overflow-hidden pt-3 sm:pt-6">
                    <div className="font-secondary max-h-full uppercase opacity-70 [writing-mode:vertical-rl]">
                        <h2 className="text-[11px] font-semibold tracking-wide sm:text-sm md:text-base">
                            Schedule a Call!
                        </h2>
                        <p className="mt-1 text-[9px] leading-tight sm:mt-0 sm:text-xs md:text-sm">
                            Next free: Wed, 9:00 PM IST (Wed, 12:00 AM EST)
                        </p>
                    </div>
                </div>

                {/* Arrow Buttons */}
                <div className="neu-accent bg-accent flex flex-col items-center justify-center gap-2 rounded-t-full p-3 sm:p-4">
                    <button
                        onClick={previous}
                        aria-label="Previous page"
                        className="bg-accent neu-arrow-buttons w-fit rounded-full p-2 hover:cursor-pointer"
                    >
                        <ChevronUp className="text-[#1c1c1c]" strokeWidth={3} />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next page"
                        className="bg-accent neu-arrow-buttons w-fit rounded-full p-2 hover:cursor-pointer"
                    >
                        <ChevronDown className="text-[#1c1c1c]" strokeWidth={3} />
                    </button>
                </div>
            </div>
        </div>
    );
}
