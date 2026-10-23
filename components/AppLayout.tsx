"use client";

import ThemeToggle from "./theme-toggle";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-full min-h-dvh overflow-x-hidden">
            <Navbar />
            <main className="hide-scrollbar h-dvh w-full overflow-x-hidden overflow-y-auto pr-14 pb-[env(safe-area-inset-bottom)] sm:pr-16 md:pl-32 lg:pl-[9.5vw]">
                {children}
            </main>
            <ThemeToggle />
            <SideBar />
        </div>
    );
}
