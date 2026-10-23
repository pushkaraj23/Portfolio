"use client";

export default function ExperiencePage() {
  const experience = [
    {
      title: "Software Development Engineer & Co-Founder",
      image: "https://i.pinimg.com/736x/bb/47/16/bb4716949f167109ae14e6463cf90e0e.jpg",
      organization: "Fibonce Tech Solutions Pvt. Ltd.",
      from: "Aug 2025",
      until: "Present",
      description:
        "\tDeveloped and architected end-to-end e-commerce applications from scratch (React + Vite, Node.js, MySQL, Azure), created the UI/UX, and earned more than ₹50,000 revenue within 24 hours of launch with zero downtime.<br /><br />\tDesigned and engineered an end-to-end role-based ERP system (ReactJS, Firebase) that automates all internal operations for a client — reliably serving ~50,000 reads and ~20,000 writes per day for a 20-person organisation with 100% uptime since launch.<br /><br />\tTook full ownership of the product lifecycle — discovery, architecture, UI/UX design, development and deployment — shipping 20+ production systems for clients across India, Australia and the UK. Built and trained a small engineering team through hiring and mentoring while remaining the primary hands-on contributor on every product shipped.",
    },
    {
      title: "Website Head",
      image: "https://i.pinimg.com/736x/a4/a4/af/a4a4af1e44204ab92875176027ca2032.jpg",
      organization: "Younoia",
      from: "Jul 2023",
      until: "Dec 2023",
      description:
        "\tRedesigned and rebuilt the organisation's website end-to-end, improving usability, responsiveness and load performance.<br /><br />\tRecruited and mentored intern developers, holding delivery to a consistent quality bar across the team.",
    },
  ];

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="flex items-end gap-3 sm:gap-5">
        <h1 className="type-page-title text-accent shrink-0">Experience</h1>
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
                  <h1 className="type-card-title text-accent">{doc.title}</h1>
                  <p className="type-meta uppercase">{doc.organization}</p>
                </div>
                <div className="bg-secondary-two text-accent-two font-secondary absolute right-0 bottom-0 rounded-tl-3xl px-3 py-1.5 text-xs sm:rounded-tl-4xl sm:px-5 sm:py-2 sm:text-sm">
                  {doc.from} - {doc.until}
                </div>
              </div>

              <div className="neu-card-inverse h-full rounded-3xl p-4 sm:rounded-4xl sm:p-6">
                <p
                  className="type-body-muted whitespace-pre-wrap"
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
