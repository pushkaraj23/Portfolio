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
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <ThemeToggle />
            <ArrowButtons />
        </>
    );
}