"use client";

import ThemeToggle from "./theme-toggle";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-full">
            <Navbar />
            <main className="h-screen w-[95vw] overflow-x-hidden hide-scrollbar md:pl-[9.5vw]">{children}</main>
            <ThemeToggle />
            <SideBar />
        </div>
    );
}
