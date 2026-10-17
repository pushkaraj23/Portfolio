"use client";

import ThemeToggle from "./theme-toggle";
import Navbar from "./Navbar";
import ArrowButtons from "./Arrowbuttons";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-full">
            <Navbar />
            <main className="h-screen w-screen md:pl-[11vw]">{children}</main>
            <ThemeToggle />
            <ArrowButtons />
        </div>
    );
}
