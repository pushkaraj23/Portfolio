import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* Mobile: fit visible browser viewport (svh). Desktop: normal flow. */}
      <div className="relative flex min-h-svh flex-col overflow-visible px-5 pt-[max(5.5rem,calc(env(safe-area-inset-top)+4.5rem))] pb-[env(safe-area-inset-bottom)] sm:px-8 md:min-h-full md:px-6 md:pt-6 md:pb-5 lg:px-10">
        {/* Name block — behind hero photo on desktop */}
        <div className="relative z-10 max-w-full overflow-visible pb-1 md:z-[2] md:pb-10">
          <h1 className="font-primary text-accent-two text-[clamp(3rem,15vw,25vh)] leading-[0.92] font-bold uppercase sm:text-[clamp(3.5rem,15vw,25vh)]">
            Pushkaraj
          </h1>
          <div className="relative mt-0.5 flex w-fit max-w-full flex-col items-end overflow-visible md:mt-0 md:pb-10">
            <h1 className="font-primary text-secondary-two text-[clamp(2rem,10vw,15vh)] leading-[0.92] font-bold uppercase sm:text-[clamp(2.35rem,10vw,15vh)]">
              Suryawanshi
            </h1>
            {/* Mobile: in-flow below last name · Desktop: absolute overlay accent */}
            <h2 className="font-kalam via-accent-two/60 to-accent-two relative mt-1 bg-linear-to-t from-transparent bg-clip-text px-1 py-1 text-[clamp(1.65rem,7vw,3.75rem)] leading-normal text-transparent sm:mt-2 md:absolute md:-right-8 md:bottom-0 md:mt-0 md:px-3 md:py-2 md:text-5xl lg:-right-10 lg:text-6xl">
              पुष्कराज सूर्यवंशी
            </h2>
          </div>
        </div>

        {/* Description Block */}
        <div className="relative z-20 mt-3 flex h-fit w-full max-w-xl gap-3 pl-1 sm:mt-5 sm:gap-4 md:mt-8 md:max-w-[min(100%,28rem)] md:gap-4 lg:mt-6 lg:max-w-[40vw] lg:gap-5 lg:pl-2">
          <div className="bg-accent neu-accent h-auto min-h-full w-1.5 shrink-0 rounded-full sm:w-2 md:w-2.5 lg:w-3" />
          <div className="py-1 opacity-60 sm:py-3 md:py-5">
            <h1 className="font-italic mb-1.5 text-[clamp(1.85rem,5.5vw,8vh)] leading-none sm:mb-3">
              Hello There
            </h1>
            <p className="font-secondary text-base font-light sm:text-lg md:text-base lg:text-[clamp(0.95rem,2.5vh,1.25rem)]">
              Software Development Engineer &amp; Co-Founder — full stack (MERN) with 20+ products
              shipped end-to-end, from UI/UX and architecture to production.
            </p>
          </div>
        </div>

        {/* Buttons — Desktop / Tablet */}
        <div className="relative z-20 mt-8 hidden gap-5 md:flex">
          <button
            className="bg-primary neu-button rounded-full p-4 hover:cursor-pointer"
            aria-label="Email"
          >
            <MdEmail className="text-accent h-9 w-9" />
          </button>
          <button
            className="bg-primary neu-button rounded-full p-4 hover:cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-accent h-9 w-9" />
          </button>
          <button
            className="bg-primary neu-button rounded-full p-4 hover:cursor-pointer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-accent h-9 w-9" />
          </button>
        </div>

        {/* Buttons — Mobile: vertical stack, right-aligned */}
        <div className="relative z-20 mt-5 mr-2 ml-auto flex flex-col gap-4 md:hidden">
          <button
            className="bg-primary neu-button rounded-full p-3.5 hover:cursor-pointer"
            aria-label="Email"
          >
            <MdEmail className="text-accent h-7 w-7" />
          </button>
          <button
            className="bg-primary neu-button rounded-full p-3.5 hover:cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-accent h-7 w-7" />
          </button>
          <button
            className="bg-primary neu-button rounded-full p-3.5 hover:cursor-pointer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-accent h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Wave + photo — bottom aligned to visible viewport (svh/dvh + safe area) */}
      <img
        src="/graphics/home-bg-wave.svg"
        alt=""
        aria-hidden
        className="pointer-events-none fixed right-0 bottom-[env(safe-area-inset-bottom)] z-0 h-auto w-full md:w-[62vw]"
      />
      <img
        src="/graphics/hero-image.png"
        className="pointer-events-none fixed right-20 bottom-[env(safe-area-inset-bottom)] z-[8] h-[min(58svh,52dvh)] w-auto object-contain object-bottom md:right-12 md:h-[75vh] md:max-w-[50vw] lg:h-[85vh]"
        alt="Pushkaraj"
      />
    </>
  );
}
