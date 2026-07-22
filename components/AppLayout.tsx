"use client";

import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import Navbar from "./Navbar";

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
        </>
    );
}