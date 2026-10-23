"use client";

import ThemeToggle from "./theme-toggle";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-full overflow-x-hidden">
            <Navbar />
            <main className="hide-scrollbar h-screen w-full overflow-x-hidden overflow-y-auto pr-14 sm:pr-16 md:pl-32 lg:pl-[9.5vw]">
                {children}
            </main>
            <ThemeToggle />
            <SideBar />
        </div>
    );
}
