"use client";

export default function ExperiencePage() {

  const experience = [
    {
      title: "Frontend Developer Intern",
      image: "https://i.pinimg.com/736x/a4/a4/af/a4a4af1e44204ab92875176027ca2032.jpg",
      organization: "Pixel Labs",
      from: "Jun 2022",
      until: "Dec 2022",
      description:
        "\tBuilt responsive UI components in React and helped migrate legacy pages to a modern design system. Collaborated closely with designers to translate Figma mockups into pixel-perfect, accessible interfaces that worked consistently across devices, screen sizes, and browsers.<br /><br />\tWrote reusable, well-documented components that cut duplicated code and sped up feature delivery for the wider team. Contributed to the internal component library, adding variants, accessibility attributes, and usage examples that made adoption easier for other developers.<br /><br />\tParticipated actively in code reviews, fixed stubborn cross-browser bugs, and picked up testing practices that improved the stability of every release I contributed to. Also learned how to break large tickets into small, shippable pieces, communicate blockers early, and take feedback constructively in a fast-moving team.",
    },
    {
      title: "Full Stack Developer",
      image: "https://i.pinimg.com/736x/30/d7/66/30d76629b6b2f23df23582bafda3e70a.jpg",
      organization: "Nimbus Technologies",
      from: "Jan 2023",
      until: "Mar 2025",
      description:
        "\tDeveloped and shipped features across a Next.js and Node.js stack, improving page load times by 40%. Designed and maintained RESTful APIs, database schemas, and authentication flows that supported thousands of active users, while keeping response times low as traffic grew.<br /><br />\tIntroduced server-side rendering and image optimization strategies that significantly boosted Core Web Vitals and SEO rankings. Profiled slow queries, added caching layers, and refactored critical paths, which reduced infrastructure costs and made the product feel noticeably faster for end users.<br /><br />\tWorked in an agile team, mentored junior developers, and helped set up CI/CD pipelines that made deployments faster, safer, and far more predictable. Wrote technical documentation, ran knowledge-sharing sessions, and helped establish coding standards that kept the codebase consistent across multiple contributors and projects.",
    },
    {
      title: "Senior Software Engineer",
      image: "https://i.pinimg.com/736x/bb/47/16/bb4716949f167109ae14e6463cf90e0e.jpg",
      organization: "Orbit Digital",
      from: "Apr 2025",
      until: "Present",
      description:
        "\tLeading a small team on product architecture, code reviews, and performance-focused releases. Defining technical direction for new features, balancing scalability and maintainability with tight delivery timelines, and making sure every decision is documented and understood by the team.<br /><br />\tDriving best practices around testing, monitoring, and documentation so the codebase stays healthy as the product grows. Introduced automated quality checks, error tracking, and performance budgets that catch regressions early, long before they reach production users.<br /><br />\tPartnering with product managers and designers to scope work, reduce technical debt, and ship polished experiences that users genuinely enjoy and rely on every day. Also mentoring engineers through pair programming and design reviews, helping them grow their skills while raising the overall quality bar of the team.",
    },
  ];

  return <div className="px-10 py-8">
    {/* Header */}
    <div className="flex items-end gap-5">
      <h1 className="uppercase font-primary text-accent text-[15vh] leading-[15vh] font-bold whitespace-nowrap">Experience</h1>
      <div className="h-px w-full bg-accent" />
    </div>

    {/* Page Content */}
    <section className="mt-12 grid grid-cols-1 gap-10">
      {experience.map((doc, index) => (
        <section key={index} className={`neu-card rounded-4xl p-7 flex gap-7 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
          {/* image section */}
          <img src={doc.image} alt={doc.title} className="rounded-4xl h-[70vh] min-w-[35vw] object-cover" />
          {/* description section */}
          <div className="flex flex-col gap-6 w-full">

            <div className="relative overflow-hidden flex gap-4 neu-card rounded-4xl py-5 pb-7 px-7 w-full">
              <div className="bg-accent h-full w-2 rounded-full neu-accent" />
              <div>
                <h1 className="text-accent font-primary text-2xl font-semibold uppercase">{doc.title}</h1>
                <p className="font-secondary text-sm opacity-60 uppercase">{doc.organization}</p>
              </div>
              <div className="bg-secondary-two absolute right-0 bottom-0 rounded-tl-4xl px-5 py-2 font-secondary text-accent text-sm">{doc.from} - {doc.until}</div>
            </div>

            <div className="rounded-4xl neu-card-inverse p-6 h-full">
              <p
                className="font-secondary opacity-60 text-sm whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: doc.description }}
              />
            </div>

          </div>
        </section>
      ))}
    </section>

  </div>;
}
