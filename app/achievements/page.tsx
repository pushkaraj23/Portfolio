"use client";

export default function AchievementsPage() {
  const achievements = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      title: "Winner · Codex Hackathon by Capgemini",
      subtitle: "Predictive health solution using everyday wearables",
      points: [
        "Built a working prototype in 48 hours that flags abnormal health trends from smartwatch data.",
        "Led the full-stack build, from the Flutter app to the anomaly detection service.",
        "Presented the solution to a panel of industry judges and won first place among 100+ teams.",
        "Received mentorship and a follow-up invitation to refine the idea further.",
      ],
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1631350397792-8e0c2de5b637?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      title: "Co-Founder · Fibonce Tech Solutions",
      subtitle: "Custom software for clients across three countries",
      points: [
        "Co-founded the company and built its technical division from the ground up.",
        "Delivered 20+ production systems, including ERP suites and e-commerce platforms.",
        "Owned requirement discovery, architecture, deployment and post-launch stability.",
        "Guided junior engineers toward measurable delivery through code reviews and mentoring.",
      ],
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1632910121591-29e2484c0259?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      title: "First Class with Distinction",
      subtitle: "B.Tech in Computer Science (AI and Analytics)",
      points: [
        "Graduated with a CGPA of 8.22 while working on client projects alongside coursework.",
        "Completed a major project on applied machine learning with a live demo.",
        "Presented technical talks and workshops to junior students.",
      ],
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1520110120835-c96534a4c984?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      title: "Certified Cloud Practitioner",
      subtitle: "Cloud fundamentals and deployment best practices",
      points: [
        "Earned the certification after a focused three-month study plan.",
        "Applied the knowledge to move client apps to containerised deployments.",
        "Cut deployment time on a client project from hours to minutes with CI/CD.",
      ],
    },
  ];

  return (
    <div className="px-5 pt-24 pb-10 sm:px-8 md:px-10 md:py-8">
      {/* Header */}
      <div className="flex items-end gap-3 sm:gap-5">
        <h1 className="font-primary text-accent shrink-0 text-[clamp(1.85rem,8vw,15vh)] leading-none font-bold uppercase">
          Achievements
        </h1>
        <div className="bg-accent h-px w-full" />
      </div>

      {/* Page Content */}
      <section className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-8 md:mt-12">
        {achievements.map((item, index) => (
          <div
            key={item.id}
            className="bg-primary neu-card grid w-full grid-cols-1 gap-5 rounded-3xl p-4 sm:gap-6 sm:rounded-4xl sm:p-6 md:grid-cols-2 md:gap-8 md:p-8"
          >
            <div
              className={`neu-card relative min-h-[28vh] overflow-hidden rounded-3xl sm:min-h-[30vh] sm:rounded-4xl ${
                index % 2 === 0 ? "" : "md:order-last"
              }`}
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 h-full w-full bg-linear-to-b from-primary/0 to-primary" />
              <div className="absolute bottom-0 left-0 w-full px-4 py-4 sm:px-5 sm:py-5">
                <h1 className="font-primary text-accent text-lg font-bold sm:text-2xl">{item.title}</h1>
                <h3 className="font-secondary text-sm opacity-60 sm:text-base">{item.subtitle}</h3>
              </div>
            </div>
            <div className="flex flex-col justify-center px-1 sm:px-5">
              <ul className="flex flex-col gap-2 sm:gap-1">
                {item.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="font-secondary list-disc text-sm text-justify font-light opacity-60 sm:text-lg"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
