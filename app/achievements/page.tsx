"use client";

export default function AchievementsPage() {
  const achievements = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      title: "Winner · Codex Hackathon by Capgemini",
      subtitle: "Predictive health solution using everyday wearables · May 2023",
      points: [
        "Won Capgemini's Codex Hackathon with a predictive health solution built around everyday wearables.",
        "Turned smartwatch signals into actionable health insights in a working prototype under hackathon constraints.",
        "Presented the solution to an industry panel and placed first among competing teams.",
      ],
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&auto=format&fit=crop&q=60",
      title: "Special Recognition Award · Smart Pune Health Hackathon",
      subtitle: "Predictive Analysis and Health Care · Feb 2023",
      points: [
        "Received a Special Recognition Award and cash prize at the Smart Pune Health Hackathon.",
        "Focused on predictive analysis applied to healthcare use cases.",
        "Recognised for clarity of problem framing and a practical technical approach.",
      ],
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=60",
      title: "4th Place · CUDA Parallel Programming Competition",
      subtitle: "Hosted by NVIDIA · Aug 2022",
      points: [
        "Secured 4th position in NVIDIA's CUDA Parallel Programming competition.",
        "Applied parallel computing concepts to competitive programming challenges on GPU.",
        "Strengthened low-level performance thinking that still informs how systems are designed today.",
      ],
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1520110120835-c96534a4c984?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      title: "Winner · Digicode Hackathon",
      subtitle: "ENTC Department · Apr 2022",
      points: [
        "Won the Digicode Hackathon organised by the ENTC Department.",
        "Delivered a working solution under time pressure with a clear demo and narrative.",
        "Early signal of the end-to-end ownership style used on later client and startup work.",
      ],
    },
  ];

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="flex items-end gap-3 sm:gap-5">
        <h1 className="type-page-title text-accent shrink-0">Achievements</h1>
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
                <h1 className="type-card-title text-accent-two normal-case">{item.title}</h1>
                <h3 className="type-meta mt-1">{item.subtitle}</h3>
              </div>
            </div>
            <div className="flex flex-col justify-center px-1 sm:px-5">
              <ul className="flex flex-col gap-2 sm:gap-1">
                {item.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="type-body-muted list-disc text-justify"
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
