"use client";

export default function About() {
  const whatido = [
    {
      title: "Brainstorming",
      description: "Turning fuzzy ideas into a clear plan worth building",
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces that feel effortless to use",
    },
    {
      title: "Web Development",
      description: "Building fast, responsive websites with modern frameworks",
    },
    {
      title: "Mobile Apps",
      description: "Shipping smooth cross-platform apps for iOS and Android",
    },
    {
      title: "Branding",
      description: "Shaping a memorable identity that tells your story",
    },
    {
      title: "API Development",
      description: "Designing reliable, well-documented backends and integrations",
    },
    {
      title: "SEO Optimization",
      description: "Improving visibility so the right people find your work",
    },
    {
      title: "Performance Tuning",
      description: "Cutting load times and polishing every interaction",
    },
    {
      title: "Maintenance & Support",
      description: "Keeping products healthy, secure, and up to date",
    },
  ];

  const beyondWork = [
    {
      title: "capturing photos and videos",
      image: "https://i.pinimg.com/736x/c7/f6/b7/c7f6b79326a322b0a14ca4e9a94ee4da.jpg",
    },
    {
      title: "sketching or painting",
      image: "https://i.pinimg.com/1200x/7f/0c/74/7f0c74a7f371125fe560131377104cca.jpg",
    },
    {
      title: "at the gym",
      image: "https://i.pinimg.com/736x/66/2c/72/662c72ba85b1fb8f4d039acc33587a17.jpg",
    },
    {
      title: "trekking maybe",
      image: "https://i.pinimg.com/736x/10/3a/50/103a50ce90de9d71bd40cfeaf80fb36f.jpg",
    },
    {
      title: "reading something",
      image: "https://i.pinimg.com/736x/a9/a6/f3/a9a6f3c554d9fc2114217cdcdffb65f0.jpg",
    },
    {
      title: "or bingewatching comfort shows",
      image: "https://i.pinimg.com/1200x/fd/3b/61/fd3b613cd496c5b0d76787b286a7ee62.jpg",
    },
  ];

  return (
    <div className="page-shell">
      {/* Header — matches other pages: title + horizontal rule */}
      <div className="flex items-end gap-3 sm:gap-5">
        <div className="flex shrink-0 items-end gap-1">
          <h1 className="type-page-title text-accent-two">About</h1>
          <h1 className="type-page-title-sm text-secondary-two">Me</h1>
        </div>
        <div className="bg-accent h-px w-full" />
      </div>
      <p className="type-body-muted mt-4 max-w-3xl">
        Full stack software engineer (MERN) based in Pune — I&apos;ve shipped 20+ end-to-end
        products from UI/UX and architecture through frontend, backend and deployment.
      </p>

      {/* Introduction Section */}
      <section className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:gap-8">
        <img
          src="https://i.pinimg.com/1200x/31/ed/49/31ed4903abeb0ff49e313a764cf2e751.jpg"
          className="h-[45vh] w-full rounded-3xl object-cover sm:rounded-4xl md:h-[70vh] md:min-w-[35vw] md:w-[35vw]"
          alt="about-me-photo"
        />
        <div className="bg-accent neu-accent rounded-3xl p-5 sm:rounded-4xl sm:p-6">
          <div className="bg-accent neu-card-dynamic flex w-fit items-center gap-3 rounded-full px-5 py-2.5 sm:px-6 sm:py-3">
            <div className="bg-primary m h-6 w-2 rounded-full sm:h-8" />
            <h2 className="font-primary text-primary text-lg font-bold sm:text-2xl">How I Got Here</h2>
          </div>
          <p className="type-body text-secondary mt-4 px-1 text-justify sm:mt-5 sm:px-3">
            I&apos;ve always been the kind of person who sees a problem and thinks, &quot;I could
            build something for that.&quot; That habit started with side projects during my B.Tech
            in Computer Science at MIT ADT University, Pune (CGPA 8.22).
            <br />
            <br />
            I care about the whole journey — concept, UI/UX, architecture, code, deployment and
            scale — not just the happy path in a demo. That ownership mindset is what pulled me into
            founding and shipping real products for clients.
            <br />
            <br />
            Today I&apos;m a Software Development Engineer and Co-Founder at Fibonce Tech Solutions,
            where we&apos;ve launched an e-commerce platform that made ₹50,000+ on day one, an ERP
            serving 50,000+ requests/day, and 20+ production systems for clients across India,
            Australia and the UK.
          </p>
        </div>
      </section>

      {/* What I do.section */}
      <div className="mt-12 flex items-end gap-3 sm:gap-5 md:mt-16">
        <h1 className="type-section-title text-accent shrink-0 whitespace-nowrap md:text-6xl">
          What I do?
        </h1>
        <div className="bg-accent h-px w-full" />
      </div>
      <section className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 md:mt-10 md:gap-7 lg:grid-cols-3">
        {whatido.map((doc, index) => (
          <div key={index} className="neu-card-dynamic bg-primary rounded-3xl px-5 py-5 sm:rounded-4xl sm:px-7 sm:py-6">
            <h1 className="type-card-title text-accent normal-case">{doc.title}</h1>
            <p className="type-body-muted mt-2">{doc.description}</p>
          </div>
        ))}
      </section>

      {/* Beyond Work Section */}
      <div className="mt-12 flex items-end gap-3 sm:gap-5 md:mt-16">
        <h1 className="type-section-title text-accent shrink-0 whitespace-nowrap md:text-6xl">
          Beyond Work?
        </h1>
        <div className="bg-accent h-px w-full" />
      </div>
      <h2 className="font-italic mt-2 text-xl opacity-60 sm:text-2xl">
        you&apos;ll probably find me....
      </h2>
      <section className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 md:mt-10 md:grid-cols-4 md:gap-7">
        {beyondWork.map((doc, index) => (
          <div
            key={index}
            className={`group relative h-[28vh] overflow-hidden rounded-3xl sm:h-[35vh] sm:rounded-4xl md:h-[40vh] ${
              index === 0 || index === 5 ? "col-span-2" : "col-span-1"
            }`}
          >
            <img src={doc.image} alt={doc.title} className="h-full w-full object-cover" />
            <div className="bg-primary/30 absolute inset-0 opacity-0 backdrop-blur-lg transition-all duration-300 group-hover:opacity-100 group-active:opacity-100" />
            <h2 className="font-secondary absolute right-3 bottom-3 text-sm opacity-0 transition-all duration-1000 group-hover:opacity-80 group-active:opacity-80 sm:right-5 sm:bottom-5 sm:text-base">
              ..... {doc.title}
            </h2>
          </div>
        ))}
      </section>

      {/* Contact Line */}
      <h3 className="type-body text-accent mt-12 opacity-100 md:mt-16">
        Got an idea, a project, or just want to say hi?
      </h3>
      <div className="flex items-end gap-2">
        <button className="font-primary neu-accent text-primary bg-accent mt-4 rounded-full px-5 py-3 text-base font-bold whitespace-nowrap uppercase hover:cursor-pointer sm:text-xl">
          Contact Me
        </button>
        <div className="bg-accent h-px w-full" />
      </div>
    </div>
  );
}
