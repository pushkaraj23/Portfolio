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
        <div className="flex h-full flex-col gap-8 overflow-y-scroll px-6 py-10 md:pr-10 md:pl-6">
          {education.map((data, index) => (
            <div key={index} className="neu-card w-full rounded-[5vh] p-8">
              <div className="neu-card rounded-[4vh] px-7 py-5">
                <h1 className="text-accent font-primary text-2xl">{data.degree}</h1>

                <h2 className="font-secondary text-sm font-light opacity-75">{data.institution}</h2>
              </div>

              <div className="flex gap-6 px-5 pt-7">
                <div className="flex gap-2">
                  <div className="bg-accent neu-accent h-full w-2 rounded-full" />

                  <p className="font-primary text-sm uppercase opacity-60">Score: {data.result}</p>
                </div>

                <div className="flex gap-2">
                  <div className="bg-accent neu-accent h-full w-2 rounded-full" />

                  <p className="font-primary text-sm uppercase opacity-60">
                    {data.startDate} - {data.endDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="from-primary to-primary/0 pointer-events-none absolute bottom-0 left-0 h-[15vh] w-full bg-linear-to-t" />
      </section>
      <section className="bg-primary flex gap-5 overflow-hidden px-6 py-2 max-sm:flex-col md:items-center">
        <h1 className="text-accent font-primary h-fit text-7xl uppercase md:text-9xl">Education</h1>
        <div className="flex h-full items-center gap-4 md:p-4">
          <div className="flex justify-center gap-4 md:flex-col">
            <button className="bg-accent neu-button font-secondary text-primary rounded-full px-5 py-3 text-sm font-bold hover:cursor-pointer">
              Skills
            </button>
            <button className="bg-primary neu-button font-secondary hidden rounded-full px-5 py-3 text-sm font-bold opacity-70 hover:cursor-pointer md:block">
              Contact
            </button>
          </div>
          <button className="bg-primary neu-button font-secondary h-fit rounded-full px-5 py-3 text-sm font-bold opacity-70 hover:cursor-pointer">
            Projects
          </button>
        </div>
      </section>
    </div>
  );
}
