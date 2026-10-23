"use client";
import { useEffect, useRef } from "react";

type Skill = { name: string; image: string };
type Category = { category: string; items: Skill[] };

function SkillRow({ doc, index }: { doc: Category; index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const dirRef = useRef(1); // 1 = right, -1 = left

  const stop = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const start = () => {
    const el = scrollRef.current;
    if (!el || rafRef.current !== null) return;

    const step = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return; // nothing to scroll

      el.scrollLeft += dirRef.current * 1; // speed: px per frame
      if (el.scrollLeft >= max - 1) dirRef.current = -1;
      else if (el.scrollLeft <= 0) dirRef.current = 1;

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const handleLeave = () => {
    stop();
    dirRef.current = 1;
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" }); // optional: reset
  };

  useEffect(() => stop, []); // cleanup on unmount

  const even = index % 2 === 0;

  return (
    <div
      onMouseEnter={start}
      onMouseLeave={handleLeave}
      onTouchStart={start}
      onTouchEnd={handleLeave}
      className={`flex flex-col gap-4 rounded-3xl px-4 py-4 sm:rounded-4xl sm:px-6 sm:py-5 md:flex-row md:items-center md:gap-4 md:px-8 ${
        even ? "bg-primary neu-card md:flex-row" : "bg-accent neu-accent md:flex-row-reverse"
      }`}
    >
      <div
        className={`font-primary shrink-0 rounded-3xl px-5 py-4 text-center text-sm font-bold whitespace-nowrap uppercase sm:rounded-4xl sm:px-8 sm:py-6 sm:text-base neu-card ${
          even ? "text-accent" : "text-primary"
        }`}
      >
        {doc.category}
      </div>
      <div
        className={`hidden h-full w-0.5 rounded-full md:block ${even ? "bg-accent" : "bg-primary"}`}
      />
      <div className={`h-px w-full rounded-full md:hidden ${even ? "bg-accent/40" : "bg-primary/40"}`} />

      <div className="relative flex w-full min-w-0 overflow-hidden">
        <div
          ref={scrollRef}
          className="hide-scrollbar flex h-full w-full gap-8 overflow-x-scroll sm:gap-12"
        >
          {doc.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center justify-center gap-2 sm:gap-3">
              <img src={item.image} alt={item.name} className="h-10 min-w-10 object-cover sm:h-12 sm:min-w-12" />
              <p
                className={`${even ? "text-accent" : "text-primary"} font-secondary text-xs whitespace-nowrap sm:text-base`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div
          className={`pointer-events-none absolute right-0 h-full min-w-16 bg-linear-to-l sm:min-w-40 ${
            even ? "from-primary to-primary/0" : "from-accent to-accent/0"
          }`}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const skills = [
    {
      category: "Full Stack",
      items: [
        { name: "ReactJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "NextJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "REST APIs", image: "https://cdn.simpleicons.org/openapiinitiative" },
        { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "TailwindCSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      category: "UI / UX",
      items: [
        { name: "Interface Design", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Responsive Design Principles", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Design-to-Code Implementation", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "R", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git/GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "CI/CD", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
        { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "ML Fundamentals", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      ],
    },
  ];

  return (
    <div className="px-5 pt-24 pb-10 sm:px-8 md:px-10 md:py-8">
      {/* Header */}
      <div className="flex items-end gap-3 sm:gap-5">
        <h1 className="font-primary text-accent shrink-0 text-[clamp(2.75rem,12vw,15vh)] leading-none font-bold uppercase">
          Skills
        </h1>
        <div className="bg-accent h-px w-full" />
      </div>

      {/* Page Content */}
      <section className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:gap-8 md:mt-12 md:gap-10">
        {skills.map((doc, index) => (
          <SkillRow key={doc.category} doc={doc} index={index} />
        ))}
      </section>
    </div>
  );
}
