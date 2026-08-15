"use client";

export default function About() {
    return (
        <div className="px-6 pt-26 md:py-10 grid grid-cols-5 h-full w-full">
            <div className="md:hidden flex gap-3 mb-7">
                <h1 className="text-accent text-8xl font-primary">ABOUT</h1>
                <h2 className="text-secondary text-7xl font-black tracking-wider font-primary -rotate-90">ME</h2>
            </div>
            <section className="flex flex-col col-span-5 md:col-span-4 gap-7 justify-center">
                <div className="neu-card rounded-[30px] bg-primary w-full p-6 md:p-8">
                    <h1 className="uppercase font-primary text-lg md:text-2xl text-accent-two">Building Technology with Purpose</h1>
                    <p className="font-secondary max-sm:text-sm font-thin text-justify mt-1 opacity-55">I'm a full stack developer and tech entrepreneur passionate about creating software that solves real business problems. As the Co-Founder of Eterna Tech Solutions, I lead the development of scalable digital products—from business websites to custom ERP, CRM, HRMS, VMS, inventory management systems, and other enterprise solutions. I enjoy turning ideas into reliable products that deliver real value.</p>
                </div>
                <div className="flex max-sm:flex-col gap-7 items-center">
                    <div className="neu-accent rounded-[30px] bg-accent w-full p-8">
                        <h1 className="uppercase font-primary text-lg md:text-2xl text-secondary">Where Design Meets Development</h1>
                        <p className="font-secondary text-primary-two max-sm:text-sm text-justify mt-1 opacity-55">I primarily work with the MERN stack, Firebase, and cloud platforms like AWS and Vercel, building applications that are fast, scalable, and user-focused. While I enjoy every stage of development, front-end design is where I'm most at home. There's something incredibly satisfying about transforming a concept into an intuitive, polished interface that people genuinely enjoy using.</p>
                    </div>
                    <div className="hidden md:flex flex-col justify-evenly h-full">
                        <button className="bg-primary neu-button px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-bold text-sm opacity-70">Projects</button>
                        <button className="bg-accent neu-button px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-bold text-sm text-primary">Skills</button>
                        <button className="bg-primary neu-button px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-bold text-sm opacity-70">Contact</button>
                    </div>
                </div>
                <div className="neu-card rounded-[30px] bg-primary w-full p-8">
                    <h1 className="uppercase font-primary text-lg md:text-2xl text-accent-two">Beyond the Code</h1>
                    <p className="font-secondary text-justify mt-1 max-sm:text-sm opacity-55">Outside of software development, I enjoy exploring creativity through photography, videography, writing, fitness, art, and travelling. I believe every experience offers a new perspective that shapes how I think and build. I love meeting new people, exchanging ideas, and constantly learning.</p>
                </div>
            </section>

            <section className="hidden md:block col-span-1 overflow-hidden">
                <div className="flex justify-center items-center -translate-y-5.5 translate-x-4 rotate-90 h-full">
                    <h1 className="text-accent font-primary text-[11vw] leading-[10vw]  ">ABOUT</h1>
                    <h2 className="text-secondary font-primary text-[9vw] -rotate-90 w-fit">ME</h2>
                </div>
            </section>
        </div>
    )
}