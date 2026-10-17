"use client";

export default function About() {
  return (
    <div className="grid h-full w-full grid-cols-5 px-6 pt-26 md:py-10">
      <div className="mb-7 flex gap-3 md:hidden">
        <h1 className="text-accent font-primary text-8xl">ABOUT</h1>
        <h2 className="text-secondary font-primary -rotate-90 text-7xl font-black tracking-wider">
          ME
        </h2>
      </div>
      <section className="col-span-5 flex flex-col justify-center gap-7 md:col-span-4">
        <div className="neu-card bg-primary w-full rounded-[30px] p-6 md:p-8">
          <h1 className="font-primary text-accent-two text-lg uppercase md:text-2xl">
            Building Technology with Purpose
          </h1>
          <p className="font-secondary mt-1 text-justify font-thin opacity-55 max-sm:text-sm">
            I&apos;m a full stack developer and tech entrepreneur passionate about creating software that
            solves real business problems. As the Co-Founder of Eterna Tech Solutions, I lead the
            development of scalable digital products—from business websites to custom ERP, CRM,
            HRMS, VMS, inventory management systems, and other enterprise solutions. I enjoy turning
            ideas into reliable products that deliver real value.
          </p>
        </div>
        <div className="flex items-center gap-7 max-sm:flex-col">
          <div className="neu-accent bg-accent w-full rounded-[30px] p-8">
            <h1 className="font-primary text-secondary text-lg uppercase md:text-2xl">
              Where Design Meets Development
            </h1>
            <p className="font-secondary text-primary-two mt-1 text-justify opacity-55 max-sm:text-sm">
              I primarily work with the MERN stack, Firebase, and cloud platforms like AWS and
              Vercel, building applications that are fast, scalable, and user-focused. While I enjoy
              every stage of development, front-end design is where I&apos;m most at home. There&apos;s
              something incredibly satisfying about transforming a concept into an intuitive,
              polished interface that people genuinely enjoy using.
            </p>
          </div>
          <div className="hidden h-full flex-col justify-evenly md:flex">
            <button className="bg-primary neu-button font-secondary rounded-full px-5 py-3 text-sm font-bold opacity-70 hover:cursor-pointer">
              Projects
            </button>
            <button className="bg-accent neu-button font-secondary text-primary rounded-full px-5 py-3 text-sm font-bold hover:cursor-pointer">
              Skills
            </button>
            <button className="bg-primary neu-button font-secondary rounded-full px-5 py-3 text-sm font-bold opacity-70 hover:cursor-pointer">
              Contact
            </button>
          </div>
        </div>
        <div className="neu-card bg-primary w-full rounded-[30px] p-8">
          <h1 className="font-primary text-accent-two text-lg uppercase md:text-2xl">
            Beyond the Code
          </h1>
          <p className="font-secondary mt-1 text-justify opacity-55 max-sm:text-sm">
            Outside of software development, I enjoy exploring creativity through photography,
            videography, writing, fitness, art, and travelling. I believe every experience offers a
            new perspective that shapes how I think and build. I love meeting new people, exchanging
            ideas, and constantly learning.
          </p>
        </div>
      </section>

      <section className="col-span-1 hidden overflow-hidden md:block">
        <div className="flex h-full translate-x-4 -translate-y-5.5 rotate-90 items-center justify-center">
          <h1 className="text-accent font-primary text-[11vw] leading-[10vw]">ABOUT</h1>
          <h2 className="text-secondary font-primary w-fit -rotate-90 text-[9vw]">ME</h2>
        </div>
      </section>
    </div>
  );
}
