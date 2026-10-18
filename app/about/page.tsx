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
      image: "https://i.pinimg.com/736x/c7/f6/b7/c7f6b79326a322b0a14ca4e9a94ee4da.jpg"
    },
    {
      title: "sketching or painting",
      image: "https://i.pinimg.com/1200x/7f/0c/74/7f0c74a7f371125fe560131377104cca.jpg"
    },
    {
      title: "at the gym",
      image: "https://i.pinimg.com/736x/66/2c/72/662c72ba85b1fb8f4d039acc33587a17.jpg"
    },
    {
      title: "trekking maybe",
      image: "https://i.pinimg.com/736x/10/3a/50/103a50ce90de9d71bd40cfeaf80fb36f.jpg"
    },
    {
      title: "reading something",
      image: "https://i.pinimg.com/736x/a9/a6/f3/a9a6f3c554d9fc2114217cdcdffb65f0.jpg"
    },
    {
      title: "or bingewatching comfort shows",
      image: "https://i.pinimg.com/1200x/fd/3b/61/fd3b613cd496c5b0d76787b286a7ee62.jpg"
    },
  ]

  return (
    <div className="w-full px-10 py-10">

      {/* Header Section */}
      <section className="flex items-end gap-10">
        <div className="flex items-end">
          <h1 className="uppercase font-primary text-accent-two text-[15vh] leading-[15vh] font-bold">About</h1>
          <h1 className="uppercase font-primary text-secondary-two text-[10vh] leading-[10vh] font-bold">Me</h1>
        </div>
        <p className="text-lg font-secondary opacity-60">Hey, I&apos;m Pushkaraj. I love building products and figuring out how to turn ideas into real businesses. Right now I&apos;m doing exactly that as a developer and co-founder.</p>
      </section>

      {/* Introduction Section */}
      <section className="flex mt-10 gap-8">
        <img src="https://i.pinimg.com/1200x/31/ed/49/31ed4903abeb0ff49e313a764cf2e751.jpg" className="rounded-4xl min-w-[35vw] h-[70vh] object-cover" alt="about-me-photo" />
        <div className="bg-accent rounded-4xl neu-accent p-6">
          <div className="bg-accent rounded-full neu-card-dynamic py-3 px-6 flex gap-3 w-fit items-center">
            <div className="rounded-full bg-primary w-2 h-8 m" />
            <h2 className="text-primary font-primary font-bold text-2xl">How I Got Here</h2>
          </div>
          <p className="mt-5 text-secondary font-secondary px-3 text-justify">
            I&apos;ve always been the kind of person who sees a problem and thinks, &quot;I could build something for that.&quot; That habit started with small side projects during college, where I was studying Computer Science with a focus on AI.
            <br /><br />
            Somewhere along the way, I realized I enjoyed the whole journey more than just the code: the idea, the late-night building, the first user, the feedback that stings a little. That&apos;s what pulled me toward entrepreneurship.
            <br /><br />
            Today, I&apos;m a software engineer and co-founder at Fibonce Tech Solutions, building products for clients across the globe and learning something new every week.
          </p>
        </div>
      </section>

      {/* What I do.section */}
      <div className="flex items-end gap-5 mt-16">
        <h1 className="uppercase font-primary text-accent text-6xl font-bold whitespace-nowrap">What I do?</h1>
        <div className="h-px w-full bg-accent" />
      </div>
      <section className="grid grid-cols-3 gap-7 mt-10">
        {whatido.map((doc, index) => (
          <div key={index} className="neu-card-dynamic bg-primary rounded-4xl py-6 px-7">
            <h1 className="text-accent font-primary font-bold text-xl">{doc.title}</h1>
            <p className="opacity-60 font-secondary mt-2">{doc.description}</p>
          </div>
        ))}
      </section>

      {/* Beyond Work Section */}
      <div className="flex items-end gap-5 mt-16">
        <h1 className="uppercase font-primary text-accent text-6xl font-bold whitespace-nowrap">Beyond Work?</h1>
        <div className="h-px w-full bg-accent" />
      </div>
      <h2 className="font-italic opacity-60 mt-2 text-2xl">you&apos;ll probably find me....</h2>
      <section className="grid grid-cols-4 gap-7 mt-10">
        {beyondWork.map((doc, index) => (
          <div key={index} className={`rounded-4xl relative h-[40vh] group overflow-hidden ${(index === 0 || index === 5) ? "col-span-2" : "col-span-1"}`}>
            <img src={doc.image} alt={doc.title} className="w-full h-full object-cover" />
            <div className={`bg-primary/30 backdrop-blur-lg absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100`} />
            <h2 className={`absolute bottom-5 right-5 font-secondary opacity-0 transition-all duration-1000 group-hover:opacity-80`}>..... {doc.title}</h2>
          </div>
        ))}
      </section>

      {/* Contact Line */}
      <h3 className="text-accent font-secondary text-xl mt-16">Got an idea, a project, or just want to say hi?</h3>
      <div className="flex items-end gap-2">
        <button className="uppercase font-primary neu-accent mt-4 text-primary bg-accent rounded-full font-bold px-5 py-3 whitespace-nowrap text-xl hover:cursor-pointer">Contact Me</button>
        <div className="h-[1px] w-full bg-accent" />
      </div>
    </div>
  );
}