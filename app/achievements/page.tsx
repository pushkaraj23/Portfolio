"use client";

export default function AchievementsPage() {

    const achievements = [
        {
            id: "1",
            image: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
            image: "https://images.unsplash.com/photo-1631350397792-8e0c2de5b637?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
            image: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
            image: "https://images.unsplash.com/photo-1520110120835-c96534a4c984?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
        <div className="px-10 py-8">
            {/* Header */}
            <div className="flex items-end gap-5">
                <h1 className="uppercase font-primary text-accent text-[15vh] leading-[15vh] font-bold whitespace-nowrap">Achievements</h1>
                <div className="h-px w-full bg-accent" />
            </div>

            {/* Page Content */}
            <section className="mt-12 flex flex-col gap-8">
                {achievements.map((item, index) => (
                    <div key={item.id} className="w-full rounded-4xl p-8 bg-primary neu-card grid grid-cols-2 gap-8">
                        <div className={`relative col-span-1 overflow-hidden rounded-4xl min-h-[30vh] neu-card ${index % 2 === 0 ? "" : "order-last"}`}>
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="w-full h-full absolute inset-0 bg-linear-to-b from-primary/0 to-primary" />
                            <div className="absolute bottom-0 left-0 w-full px-5 py-5">
                                <h1 className="text-accent text-2xl font-primary font-bold">{item.title}</h1>
                                <h3 className="font-secondary opacity-60">{item.subtitle}</h3>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center px-5">
                            {item.points.map((point, index) => (
                                <li key={index} className="font-secondary opacity-60 text-justify font-light text-lg">{point}</li>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </ div>
    )
}