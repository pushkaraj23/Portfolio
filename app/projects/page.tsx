"use client";

import { FaSearch, FaTimes, FaCheck, FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import { useState, useEffect } from "react";
import { projects, type Project } from "@/lib/projects";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <div className="px-8 pt-24 pb-10 sm:px-10 md:px-10 md:py-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-end">
        <h1 className="font-primary text-accent shrink-0 text-[clamp(2.75rem,11vw,15vh)] leading-none font-bold uppercase">
          Projects
        </h1>
        <div className="flex w-full items-center gap-3 md:items-end md:gap-5">
          <div className="neu-card-inverse flex min-w-0 flex-1 items-center gap-2 rounded-full px-4 py-2.5 sm:gap-3 sm:px-6 sm:py-3 md:flex-none">
            <input
              type="text"
              placeholder="Search"
              className="font-secondary text-accent w-full min-w-0 text-base outline-none placeholder:text-accent md:w-64 md:text-lg"
            />
            <button type="button" aria-label="Search" className="shrink-0 hover:cursor-pointer">
              <FaSearch className="text-accent h-5 w-5 sm:h-7 sm:w-7" />
            </button>
          </div>
          <div className="bg-accent hidden h-px w-full md:block" />
        </div>
      </div>

      {/* Card grid — vertical page scroll */}
      <section className="mt-8 grid grid-cols-1 gap-8 py-4 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:gap-10">
        {projects.map((doc) => (
          <div
            key={doc.slug}
            onClick={() => setSelected(doc)}
            className="bg-primary neu-card-dynamic flex h-full flex-col rounded-3xl p-5 hover:cursor-pointer sm:rounded-4xl sm:p-7"
          >
            <div className="relative h-[28vh] overflow-hidden rounded-t-3xl sm:h-[33vh] sm:rounded-t-4xl">
              <img
                src={doc.coverImage}
                alt={doc.title}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-linear-to-b from-primary/0 to-primary" />
            </div>
            <h1 className="font-primary text-accent mt-3 text-2xl font-semibold uppercase sm:text-3xl">
              {doc.title}
            </h1>
            <p className="font-secondary mt-2 flex-1 text-sm opacity-60 sm:text-base">{doc.description}</p>
            <div className="mt-3 flex flex-wrap gap-3 p-2 sm:mt-4 sm:gap-4">
              {doc.tags.map((item, index) => (
                <div key={index} className="neu-card-dynamic shrink-0 rounded-full px-4 py-2 sm:px-5 sm:py-3">
                  <h3 className="font-secondary text-accent text-xs sm:text-sm">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Popup View */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="bg-primary/60 fixed inset-0 z-60 p-3 backdrop-blur-lg sm:p-4 md:p-12"
        >
          <section
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="neu-card bg-primary relative flex h-full w-full flex-col overflow-hidden rounded-3xl sm:rounded-4xl"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close project"
              className="neu-button bg-primary absolute top-4 right-4 z-10 rounded-full p-3 hover:cursor-pointer sm:top-6 sm:right-6 sm:p-4"
            >
              <FaTimes className="text-accent h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Scrollable content */}
            <div className="hide-scrollbar flex-1 overflow-y-auto p-5 sm:p-8 md:p-14">
              {/* Title block */}
              <div className="mb-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="neu-button bg-primary text-accent font-secondary rounded-full px-4 pt-2.5 pb-1.5 text-xs font-bold uppercase sm:px-5 sm:pt-3 sm:pb-2 sm:text-sm">
                  {selected.category}
                </span>
                <span className="neu-button font-secondary text-accent flex items-center gap-2 rounded-full px-4 pt-2.5 pb-1.5 text-xs font-bold uppercase sm:px-5 sm:pt-3 sm:pb-2 sm:text-sm">
                  {selected.status}
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-5">
                <h1 className="font-primary text-accent text-3xl leading-none font-bold uppercase sm:text-5xl md:text-[8vh] md:leading-[8vh] lg:text-[10vh] lg:leading-[10vh]">
                  {selected.title}
                </h1>
                <div className="bg-accent hidden h-px w-full sm:block" />
              </div>
              <p className="font-secondary mt-4 max-w-3xl text-sm opacity-60 sm:text-base">
                {selected.tagline}
              </p>

              {/* Cover image */}
              <img
                src={selected.coverImage}
                alt={selected.title}
                className="mt-6 h-[30vh] w-full rounded-3xl object-cover object-center sm:mt-10 sm:h-[45vh] sm:rounded-4xl md:h-[60vh]"
              />

              {/* Meta */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 md:grid-cols-5">
                {[
                  { label: "Role", value: selected.role },
                  { label: "Client", value: selected.client },
                  { label: "Duration", value: selected.duration },
                  { label: "Year", value: String(selected.year) },
                  {
                    label: "Team",
                    value: `${selected.teamSize} ${selected.teamSize === 1 ? "person" : "people"}`,
                  },
                ].map((m) => (
                  <div key={m.label} className="neu-card-dynamic rounded-3xl px-4 py-4 sm:rounded-4xl sm:px-6 sm:py-5">
                    <p className="font-secondary text-xs font-semibold uppercase opacity-60">{m.label}</p>
                    <p className="font-primary text-accent mt-1 text-base font-semibold uppercase sm:text-xl">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-accent/30 my-8 h-px w-full sm:my-12" />

              {/* Overview */}
              <h2 className="font-primary text-accent text-2xl font-semibold uppercase sm:text-3xl">
                Overview
              </h2>
              <p className="font-secondary mt-3 max-w-4xl text-base leading-relaxed opacity-60 sm:text-lg">
                {selected.overview}
              </p>

              <div className="bg-accent/30 my-8 h-px w-full sm:my-12" />

              {/* Features */}
              <h2 className="font-primary text-accent text-2xl font-semibold uppercase sm:text-3xl">
                Key Features
              </h2>
              <ul className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:grid-cols-2">
                {selected.features.map((f) => (
                  <li key={f} className="font-secondary flex items-center gap-3 sm:gap-4">
                    <span className="neu-button mt-0.5 shrink-0 rounded-full p-2">
                      <FaCheck className="text-accent h-3 w-3" />
                    </span>
                    <span className="text-sm opacity-80 sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent/30 my-8 h-px w-full sm:my-12" />

              {/* Tech stack */}
              <h2 className="font-primary text-accent text-2xl font-semibold uppercase sm:text-3xl">
                Tech Stack
              </h2>
              <div className="mt-4 grid gap-6 sm:mt-5 sm:gap-8 md:grid-cols-2">
                {Object.entries(selected.techStack).map(([group, items]) => (
                  <div key={group}>
                    <p className="font-secondary mb-3 text-xs tracking-widest uppercase opacity-60">
                      {group}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="neu-card-dynamic font-secondary text-accent rounded-full px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-accent/30 my-8 h-px w-full sm:my-12" />

              {/* Challenges */}
              <h2 className="font-primary text-accent text-2xl font-semibold uppercase sm:text-3xl">
                Challenges & Solutions
              </h2>
              <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-6 md:grid-cols-2">
                {selected.challenges.map((c, i) => (
                  <div key={i} className="neu-card rounded-3xl p-5 sm:rounded-4xl sm:p-7">
                    <div className="neu-card rounded-3xl px-4 py-3 sm:rounded-4xl sm:px-5">
                      <span className="font-secondary text-accent font-bold uppercase">
                        Challenge :{" "}
                      </span>
                      <p className="font-secondary text-accent text-sm sm:text-base">{c.problem}</p>
                    </div>
                    <p className="font-secondary mt-4 px-2 text-sm opacity-60 sm:mt-5 sm:px-4 sm:text-base">
                      <span className="font-bold uppercase">Solution : </span>
                      <br />
                      {c.solution}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-accent/30 my-8 h-px w-full sm:my-12" />

              {/* Results */}
              <h2 className="font-primary text-accent text-2xl font-semibold uppercase sm:text-3xl">
                Results
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-6 md:grid-cols-3">
                {selected.results.map((r) => (
                  <div
                    key={r.label}
                    className="neu-card-inverse rounded-3xl px-4 py-5 text-center sm:rounded-4xl sm:px-6 sm:py-7"
                  >
                    <p className="font-primary text-accent text-2xl font-bold uppercase sm:text-4xl">
                      {r.value}
                    </p>
                    <p className="font-secondary mt-2 text-xs opacity-60 sm:text-sm">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-accent/30 my-8 h-px w-full sm:my-12" />

              {/* Gallery */}
              <h2 className="font-primary text-accent text-2xl font-semibold uppercase sm:text-3xl">
                Gallery
              </h2>
              <div className="hide-scrollbar -mx-2 mt-4 flex gap-4 overflow-x-auto p-2 sm:mt-5 sm:gap-6">
                {selected.gallery.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${selected.title} screenshot ${i + 1}`}
                    className="h-[24vh] w-auto rounded-3xl object-cover sm:h-[32vh] sm:rounded-4xl"
                  />
                ))}
              </div>

              <div className="bg-accent/30 my-8 h-px w-full sm:my-12" />

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-14 sm:gap-5">
                {selected.links.live && (
                  <a
                    href={selected.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-button bg-accent font-secondary text-primary flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold uppercase sm:px-7 sm:py-4 sm:text-base"
                  >
                    <p className="pt-1">Live Demo</p> <FaExternalLinkAlt className="h-4 w-4" />
                  </a>
                )}
                {selected.links.github && (
                  <a
                    href={selected.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-button font-secondary text-accent flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold uppercase sm:px-7 sm:py-4 sm:text-base"
                  >
                    <FaGithub className="h-5 w-5" /> <p className="pt-1">Source Code</p>
                  </a>
                )}
                {selected.links.caseStudy && (
                  <a
                    href={selected.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-button font-secondary text-accent flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold uppercase sm:px-7 sm:py-4 sm:text-base"
                  >
                    <FaBookOpen className="h-4 w-4" /> <p className="pt-1">Case Study</p>
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
