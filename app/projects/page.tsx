"use client";

import { FaSearch, FaCross, FaTimes, FaCheck, FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { projects, type Project } from "@/lib/projects";

export default function ProjectsPage() {

  const [selected, setSelected] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // let real horizontal gestures (trackpad swipe) work normally
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && e.deltaY > 0;
      if (atStart || atEnd) return; // let the page scroll when the row can't move further

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

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

  return <div className="px-10 py-8">
    {/* Header */}
    <div className="flex items-end gap-5">
      <h1 className="whitespace-nowrap font-primary text-[15vh] font-bold uppercase leading-[15vh] text-accent">
        Projects
      </h1>
      <div className="neu-card-inverse flex items-center gap-3 rounded-full px-6 py-3">
        <input
          type="text"
          placeholder="Search"
          className="w-64 font-secondary text-lg text-accent outline-none placeholder:text-accent"
        />
        <button type="button" aria-label="Search" className="shrink-0 hover:cursor-pointer">
          <FaSearch className="h-7 w-7 text-accent" />
        </button>
      </div>
      <div className="h-px w-full bg-accent" />
    </div>

    {/* Page Content */}
    <section ref={scrollRef} className="w-full h-full overflow-x-scroll mt-5 flex gap-10 hide-scrollbar p-6">
      {projects.map((doc) => (
        <div key={doc.slug} onClick={() => setSelected(doc)} className="bg-primary neu-card-dynamic hover:cursor-pointer rounded-4xl p-7 flex flex-col">
          <div className="relative min-w-[23vw] h-[33vh] rounded-t-4xl overflow-hidden">
            <img src={doc.coverImage} alt={doc.title} className="w-full h-full object-cover object-center" />
            <div className="w-full h-full absolute top-0 left-0 bg-linear-to-b from-primary/0 to-primary" />
          </div>
          <h1 className="font-primary text-accent text-3xl uppercase font-semibold">{doc.title}</h1>
          <p className="font-secondary opacity-60 mt-2">{doc.description}</p>
          <div className="flex whitespace-nowrap gap-5 mt-5">
            {doc.tags.map((item, index) => (
              <div key={index} className="px-5 py-3 neu-card-dynamic rounded-full ">
                <h3 className="font-secondary text-accent text-sm">{item}</h3>
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
        className="fixed inset-0 z-60 bg-primary/60 p-4 backdrop-blur-lg md:p-12"
      >
        <section
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          className="neu-card relative flex h-full w-full flex-col overflow-hidden rounded-4xl bg-primary"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close project"
            className="neu-button absolute right-6 top-6 z-10 rounded-full bg-primary p-4 hover:cursor-pointer"
          >
            <FaTimes className="h-5 w-5 text-accent" />
          </button>

          {/* Scrollable content */}
          <div className="hide-scrollbar flex-1 overflow-y-auto p-8 md:p-14">
            {/* Title block */}
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="neu-button bg-primary text-accent rounded-full px-5 pt-3 pb-2 font-secondary text-sm uppercase font-bold">
                {selected.category}
              </span>
              <span className="neu-button flex items-center font-bold gap-2 rounded-full px-5 pt-3 pb-2 font-secondary text-sm uppercase text-accent">
                {selected.status}
              </span>
            </div>

            <div className="flex items-end gap-5">
              <h1 className="uppercase font-primary text-accent text-[10vh] leading-[10vh] font-bold whitespace-nowrap">{selected.title}</h1>
              <div className="h-px w-full bg-accent" />
            </div>
            <p className="mt-4 max-w-3xl font-secondary opacity-60">{selected.tagline}</p>

            {/* Cover image */}
            <img
              src={selected.coverImage}
              alt={selected.title}
              className="h-[60vh] w-full object-cover mt-10 rounded-4xl object-center"
            />

            {/* Meta */}
            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-5">
              {[
                { label: "Role", value: selected.role },
                { label: "Client", value: selected.client },
                { label: "Duration", value: selected.duration },
                { label: "Year", value: String(selected.year) },
                { label: "Team", value: `${selected.teamSize} ${selected.teamSize === 1 ? "person" : "people"}` },
              ].map((m) => (
                <div key={m.label} className="neu-card-dynamic rounded-4xl px-6 py-5">
                  <p className="font-secondary text-xs uppercase font-semibold opacity-60">{m.label}</p>
                  <p className="mt-1 font-primary text-xl font-semibold uppercase text-accent">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-accent/30 my-12" />

            {/* Overview */}
            <h2 className="mt-14 font-primary text-3xl font-semibold uppercase text-accent">Overview</h2>
            <p className="mt-3 max-w-4xl font-secondary text-lg leading-relaxed opacity-60">
              {selected.overview}
            </p>

            <div className="h-px w-full bg-accent/30 my-12" />

            {/* Features */}
            <h2 className="mt-14 font-primary text-3xl font-semibold uppercase text-accent">Key Features</h2>
            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {selected.features.map((f) => (
                <li key={f} className="flex items-center gap-4 font-secondary">
                  <span className="neu-button mt-0.5 shrink-0 rounded-full p-2">
                    <FaCheck className="h-3 w-3 text-accent" />
                  </span>
                  <span className="opacity-80">{f}</span>
                </li>
              ))}
            </ul>

            <div className="h-px w-full bg-accent/30 my-12" />

            {/* Tech stack */}
            <h2 className="mt-14 font-primary text-3xl font-semibold uppercase text-accent">Tech Stack</h2>
            <div className="mt-5 grid gap-8 md:grid-cols-2">
              {Object.entries(selected.techStack).map(([group, items]) => (
                <div key={group}>
                  <p className="mb-3 font-secondary text-xs uppercase tracking-widest opacity-60">{group}</p>
                  <div className="flex flex-wrap gap-4">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="neu-card-dynamic rounded-full px-5 py-3 font-secondary text-sm text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-accent/30 my-12" />

            {/* Challenges */}
            <h2 className="font-primary text-3xl font-semibold uppercase text-accent">
              Challenges & Solutions
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {selected.challenges.map((c, i) => (
                <div key={i} className="neu-card rounded-4xl p-7">
                  <div className="px-5 py-3 neu-card rounded-4xl">
                    <span className="font-bold font-secondary text-accent uppercase">Challenge : </span>
                    <p className="font-secondary text-accent">{c.problem}</p>
                  </div>
                  <p className="font-secondary opacity-60 px-4 mt-5"><span className="font-bold uppercase">Solution : </span><br />{c.solution}</p>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-accent/30 my-12" />

            {/* Results */}
            <h2 className="mt-14 font-primary text-3xl font-semibold uppercase text-accent">Results</h2>
            <div className="mt-5 grid grid-cols-2 gap-6 md:grid-cols-3">
              {selected.results.map((r) => (
                <div key={r.label} className="neu-card-inverse rounded-4xl px-6 py-7 text-center">
                  <p className="font-primary text-4xl font-bold uppercase text-accent">{r.value}</p>
                  <p className="mt-2 font-secondary text-sm opacity-60">{r.label}</p>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-accent/30 my-12" />

            {/* Gallery */}
            <h2 className="mt-14 font-primary text-3xl font-semibold uppercase text-accent">Gallery</h2>
            <div className="hide-scrollbar -mx-2 mt-5 flex gap-6 overflow-x-auto p-2">
              {selected.gallery.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${selected.title} screenshot ${i + 1}`}
                  className="h-[32vh] w-auto rounded-4xl object-cover"
                />
              ))}
            </div>

            <div className="h-px w-full bg-accent/30 my-12" />

            {/* Links */}
            <div className="mt-14 flex flex-wrap gap-5">
              {selected.links.live && (
                <a
                  href={selected.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-button flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-secondary font-semibold uppercase text-primary"
                >
                  <p className="pt-1">Live Demo</p> <FaExternalLinkAlt className="h-4 w-4" />
                </a>
              )}
              {selected.links.github && (
                <a
                  href={selected.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-button flex items-center gap-3 rounded-full px-7 py-4 font-secondary font-semibold uppercase text-accent"
                >
                  <FaGithub className="h-5 w-5" /> <p className="pt-1">Source Code</p>
                </a>
              )}
              {selected.links.caseStudy && (
                <a
                  href={selected.links.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-button flex items-center gap-3 rounded-full px-7 py-4 font-secondary font-semibold uppercase text-accent"
                >
                  <FaBookOpen className="h-4 w-4" /> <p className="pt-1">Case Study</p>
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    )}

  </ div>;
}
