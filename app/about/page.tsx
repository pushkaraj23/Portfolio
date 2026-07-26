"use client";

export default function About() {
    return (
        <div className="px-5 py-10 grid grid-cols-5 h-full w-full">
            <section className="flex flex-col col-span-4 gap-7 justify-center">
                <div className="neu-card rounded-[30px] bg-primary w-full p-8">
                    <h1 className="uppercase font-primary text-2xl text-accent-two">Building Technology with Purpose</h1>
                    <p className="font-secondary text-justify mt-1 opacity-55">I'm a full stack developer and tech entrepreneur passionate about creating software that solves real business problems. As the Co-Founder of Eterna Tech Solutions, I lead the development of scalable digital products—from business websites to custom ERP, CRM, HRMS, VMS, inventory management systems, and other enterprise solutions. I enjoy turning ideas into reliable products that deliver real value.</p>
                </div>
                <div className="flex gap-7 items-center">
                    <div className="neu-accent rounded-[30px] bg-accent w-full p-8">
                        <h1 className="uppercase font-primary text-2xl text-secondary">Where Design Meets Development</h1>
                        <p className="font-secondary text-primary-two text-justify mt-1 opacity-55">I primarily work with the MERN stack, Firebase, and cloud platforms like AWS and Vercel, building applications that are fast, scalable, and user-focused. While I enjoy every stage of development, front-end design is where I'm most at home. There's something incredibly satisfying about transforming a concept into an intuitive, polished interface that people genuinely enjoy using.</p>
                    </div>
                    <div className="flex flex-col justify-evenly h-full">
                        <button className="bg-primary neu-button px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-medium text-sm opacity-70">Projects</button>
                        <button className="bg-accent neu-button px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-medium text-sm text-primary">Skills</button>
                        <button className="bg-primary neu-button px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-medium text-sm opacity-70">Contact</button>
                    </div>
                </div>
                <div className="neu-card rounded-[30px] bg-primary w-full p-8">
                    <h1 className="uppercase font-primary text-2xl text-accent-two">Beyond the Code</h1>
                    <p className="font-secondary text-justify mt-1 opacity-55">Outside of software development, I enjoy exploring creativity through photography, videography, writing, fitness, art, and travelling. I believe every experience offers a new perspective that shapes how I think and build. I love meeting new people, exchanging ideas, and constantly learning.</p>
                </div>
            </section>

            <section className="col-span-1 overflow-hidden">
                <div className="flex justify-center items-center -translate-y-5.5 translate-x-4 rotate-90 h-full">
                    <h1 className="text-accent font-primary text-[11vw] leading-[10vw]  ">ABOUT</h1>
                    <h2 className="text-secondary font-primary text-[9vw] -rotate-90 w-fit">ME</h2>
                </div>
            </section>
        </div>
    )
}