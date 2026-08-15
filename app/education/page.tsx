"use client";

export default function EducationPage() {
    interface Education {
        degree: string;
        institution: string;
        result: string;
        startDate: string;
        endDate: string;
    }
    const education: Education[] = [
        {
            degree: "Bachelor of Technology, Computer Science & Technology",
            institution: "MIT Art Design and Technology, Pune",
            result: "8.22 CGPA",
            startDate: "OCT 2021",
            endDate: "MAY 2026",
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "ABC Junior College",
            result: "93.3%",
            startDate: "JUN 2019",
            endDate: "MAY 2021",
        },
        {
            degree: "Indian Certificate of Secondary Education (ICSE)",
            institution: "XYZ High School",
            result: "96%",
            startDate: "JUN 2009",
            endDate: "MAR 2019",
        },
    ];

    return (
        <div className="h-full max-sm:pt-16">
            <section className="relative h-[78%]">

                <div className="h-full overflow-y-scroll flex flex-col gap-8 px-6 md:pl-6 md:pr-10 py-10">
                    {education.map((data, index) => (
                        <div
                            key={index}
                            className="neu-card w-full p-8 rounded-[5vh]"
                        >
                            <div className="py-5 px-7 neu-card rounded-[4vh]">
                                <h1 className="text-accent text-2xl font-primary">
                                    {data.degree}
                                </h1>

                                <h2 className="font-secondary text-sm font-light opacity-75">
                                    {data.institution}
                                </h2>
                            </div>

                            <div className="flex gap-6 pt-7 px-5">
                                <div className="flex gap-2">
                                    <div className="bg-accent neu-accent h-full rounded-full w-2" />

                                    <p className="uppercase text-sm font-primary opacity-60">
                                        Score: {data.result}
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <div className="bg-accent neu-accent h-full rounded-full w-2" />

                                    <p className="uppercase text-sm font-primary opacity-60">
                                        {data.startDate} - {data.endDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-linear-to-t from-primary to-primary/0 pointer-events-none" />

            </section>
            <section className="bg-primary px-6 py-2 overflow-hidden flex max-sm:flex-col md:items-center gap-5">
                <h1 className="uppercase text-accent text-7xl md:text-9xl h-fit font-primary">Education</h1>
                <div className="md:p-4 flex gap-4 h-full items-center">
                    <div className="flex md:flex-col gap-4 justify-center">
                        <button className="bg-accent neu-button px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-bold text-sm text-primary">Skills</button>
                        <button className="bg-primary hidden md:block neu-button px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-bold text-sm opacity-70">Contact</button>
                    </div>
                    <button className="bg-primary neu-button h-fit px-5 py-3 rounded-full font-secondary hover:cursor-pointer font-bold text-sm opacity-70">Projects</button>
                </div>
            </section>
        </div>
    );
}