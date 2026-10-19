"use client";

export default function EducationPage() {

  const education = [
    {
      id: "1",
      image: "https://collegewollege.com/_next/image?url=https%3A%2F%2Fcdn.collegewollege.com%2Fstorage%2Fcolleges%2Fbranding%2Fxw5l9JMPMpVkxZ7DUXiJkiiiedDUO4p1g7DxfBkP.webp&w=3840&q=60",
      degree: "Bachelor of Technology, Computer Science & Engineering",
      institution: "MIT Art, Design and Technology University, Pune",
      period: "2021 - 2025",
      score: "Score: 8.22 CGPA",
      description:
        "Specialised in Artificial Intelligence and Analytics, with coursework in machine learning, data structures, databases and software engineering. Built full-stack and ML projects alongside coursework and shipped client work while still studying.",
    },
    {
      id: "2",
      image: "https://content.jdmagicbox.com/v2/comp/mumbai/b7/022pxx22.xx22.240720105957.w2b7/catalogue/rao-junior-college-of-science-sakinaka-mumbai-junior-colleges-e89w3r4ufg.jpg",
      degree: "Higher Secondary Certificate (12th), Science",
      institution: "Your Junior College Name, Pune",
      period: "2019 - 2021",
      score: "Score: 00.00%",
      description:
        "Completed the science stream with a focus on physics, chemistry and mathematics, and picked up programming fundamentals that led into a computer science degree.",
    },
    {
      id: "3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfQZR24GuAuxRA_UcU_-Mk_aFK-WPPMzgG7z38SWNVw&s=10",
      degree: "Secondary School Certificate (10th)",
      institution: "Your School Name, Pune",
      period: "2018 - 2019",
      score: "Score: 00.00%",
      description:
        "Completed secondary schooling with strong results in mathematics and science.",
    },
  ]

  return (
    <div className="px-10 py-8">
      {/* Header */}
      <div className="flex items-end gap-5">
        <h1 className="uppercase font-primary text-accent text-[15vh] leading-[15vh] font-bold whitespace-nowrap">Education</h1>
        <div className="h-px w-full bg-accent" />
      </div>

      {/* Page Content */}
      <section className="mt-12 flex flex-col gap-12">
        {education.map((item, index) => (
          <div key={item.id} className="grid w-full grid-cols-3 gap-8">
            {/* First Column */}
            <div
              className={`neu-card relative col-span-1 min-h-64 overflow-hidden rounded-4xl ${index % 2 === 0 ? "" : "order-last"
                }`}
            >
              <img
                src={item.image}
                alt={item.degree}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Second Column */}
            <div className="col-span-2 flex flex-col neu-card h-fit rounded-4xl p-7">
              <div className="py-5 px-7 neu-card rounded-4xl">
                <h1 className="uppercase font-primary text-accent font-bold text-xl">{item.degree}</h1>
                <p className="opacity-60 font-secondary">{item.institution}</p>
                <div className="flex gap-3 mt-3">
                  <button className="px-4 py-2 rounded-full bg-accent text-primary font-primary font-bold text-sm">{item.score}</button>
                  <button className="px-4 py-2 rounded-full bg-accent text-primary font-primary font-bold text-sm">{item.period}</button>
                </div>
              </div>
              <p className="mt-5 text-justify opacity-60 font-secondary px-3 font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </ div>
  )
}