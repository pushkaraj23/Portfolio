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

  return (
    <div className="px-5 pt-24 pb-10 sm:px-8 md:px-10 md:py-8">
      {/* Header */}
      <div className="flex items-end gap-3 sm:gap-5">
        <h1 className="font-primary text-accent shrink-0 text-[clamp(2.25rem,9vw,15vh)] leading-none font-bold uppercase">
          Experience
        </h1>
        <div className="bg-accent h-px w-full" />
      </div>

      {/* Page Content */}
      <section className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:gap-8 md:mt-12 md:gap-10">
        {experience.map((doc, index) => (
          <section
            key={index}
            className={`neu-card flex flex-col gap-5 rounded-3xl p-4 sm:gap-6 sm:rounded-4xl sm:p-6 md:gap-7 md:p-7 lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* image section */}
            <img
              src={doc.image}
              alt={doc.title}
              className="h-[32vh] w-full rounded-3xl object-cover sm:h-[40vh] sm:rounded-4xl md:h-[50vh] lg:h-[70vh] lg:min-w-[35vw] lg:w-[35vw]"
            />
            {/* description section */}
            <div className="flex w-full flex-col gap-4 sm:gap-6">
              <div className="neu-card relative flex w-full gap-3 overflow-hidden rounded-3xl px-4 py-4 pb-10 sm:gap-4 sm:rounded-4xl sm:px-7 sm:py-5 sm:pb-7">
                <div className="bg-accent neu-accent h-auto min-h-full w-1.5 shrink-0 rounded-full sm:w-2" />
                <div className="min-w-0 pr-2">
                  <h1 className="font-primary text-accent text-lg font-semibold uppercase sm:text-2xl">
                    {doc.title}
                  </h1>
                  <p className="font-secondary text-xs uppercase opacity-60 sm:text-sm">
                    {doc.organization}
                  </p>
                </div>
                <div className="bg-secondary-two text-accent font-secondary absolute right-0 bottom-0 rounded-tl-3xl px-3 py-1.5 text-xs sm:rounded-tl-4xl sm:px-5 sm:py-2 sm:text-sm">
                  {doc.from} - {doc.until}
                </div>
              </div>

              <div className="neu-card-inverse h-full rounded-3xl p-4 sm:rounded-4xl sm:p-6">
                <p
                  className="font-secondary text-xs whitespace-pre-wrap opacity-60 sm:text-sm"
                  dangerouslySetInnerHTML={{ __html: doc.description }}
                />
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
