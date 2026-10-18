"use client";

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

  return <div className="px-10 py-8">
    {/* Header */}
    <div className="flex items-end gap-5">
      <h1 className="uppercase font-primary text-accent text-[15vh] leading-[15vh] font-bold whitespace-nowrap">Skills</h1>
      <div className="h-px w-full bg-accent" />
    </div>

    {/* Page Content */}
    <section className="grid grid-cols-1 gap-10 mt-12">
      {skills.map((doc, index) => (
        <div key={doc.category} className={`flex gap-4 ${index % 2 === 0 ? "bg-primary neu-card flex-row" : "bg-accent neu-accent flex-row-reverse"} rounded-4xl p-8`}>
          <div className={`font-primary font-bold uppercase px-8 py-6 neu-card rounded-4xl ${index % 2 === 0 ? "text-accent" : "text-primary"}`}>{doc.category}</div>
          <div className={`h-full w-0.5 rounded-full ${index % 2 === 0 ? "bg-accent" : "bg-primary"}`} />
        </div>
      ))}
    </section>
  </ div>;
}
