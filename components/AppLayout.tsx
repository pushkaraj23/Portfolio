"use client";

import ThemeToggle from "./theme-toggle";
import Navbar from "./Navbar";
import ArrowButtons from "./Arrowbuttons";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full relative">
            <Navbar />
            <main className="md:pl-[11vw] h-screen w-screen">
                {children}
            </main>
            <ThemeToggle />
            <ArrowButtons />
        </div>
    );
}