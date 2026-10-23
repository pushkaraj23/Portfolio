"use client";

export default function EducationPage() {
  const education = [
    {
      id: "1",
      image:
        "https://collegewollege.com/_next/image?url=https%3A%2F%2Fcdn.collegewollege.com%2Fstorage%2Fcolleges%2Fbranding%2Fxw5l9JMPMpVkxZ7DUXiJkiiiedDUO4p1g7DxfBkP.webp&w=3840&q=60",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "MIT ADT University, Pune, India",
      period: "Oct 2021 – May 2025",
      score: "CGPA: 8.22/10",
      description:
        "Completed a B.Tech in Computer Science and Engineering while shipping full-stack and ML projects alongside coursework — including client production systems, a crop-disease detection app, and hackathon builds in predictive health.",
    },
  ];

  return (
    <div className="px-5 pt-24 pb-10 sm:px-8 md:px-10 md:py-8">
      {/* Header */}
      <div className="flex items-end gap-3 sm:gap-5">
        <h1 className="font-primary text-accent shrink-0 text-[clamp(2.25rem,9vw,15vh)] leading-none font-bold uppercase">
          Education
        </h1>
        <div className="bg-accent h-px w-full" />
      </div>

      {/* Page Content */}
      <section className="mt-8 flex flex-col gap-8 sm:mt-10 sm:gap-10 md:mt-12 md:gap-12">
        {education.map((item, index) => (
          <div
            key={item.id}
            className="grid w-full grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-8"
          >
            {/* First Column */}
            <div
              className={`neu-card relative min-h-48 overflow-hidden rounded-3xl sm:min-h-56 sm:rounded-4xl md:col-span-1 md:min-h-64 ${
                index % 2 === 0 ? "" : "md:order-last"
              }`}
            >
              <img
                src={item.image}
                alt={item.degree}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Second Column */}
            <div className="neu-card flex h-fit flex-col rounded-3xl p-4 sm:rounded-4xl sm:p-7 md:col-span-2">
              <div className="neu-card rounded-3xl px-4 py-4 sm:rounded-4xl sm:px-7 sm:py-5">
                <h1 className="font-primary text-accent text-base font-bold uppercase sm:text-xl">
                  {item.degree}
                </h1>
                <p className="font-secondary text-sm opacity-60 sm:text-base">{item.institution}</p>
                <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
                  <button className="bg-accent text-primary font-primary rounded-full px-3 py-1.5 text-xs font-bold sm:px-4 sm:py-2 sm:text-sm">
                    {item.score}
                  </button>
                  <button className="bg-accent text-primary font-primary rounded-full px-3 py-1.5 text-xs font-bold sm:px-4 sm:py-2 sm:text-sm">
                    {item.period}
                  </button>
                </div>
              </div>
              <p className="font-secondary mt-4 px-1 text-sm text-justify font-light opacity-60 sm:mt-5 sm:px-3 sm:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
