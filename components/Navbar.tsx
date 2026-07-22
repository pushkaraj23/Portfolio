"use client";

import { useState } from "react";

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            className={`absolute top-[4vh] left-[4vh] h-[92vh] rounded-[50px] neu-card transition-all duration-300 ease-out overflow-hidden z-10
                ${expanded ? "w-72" : "w-20"}`}
        >

        </nav>
    )
}