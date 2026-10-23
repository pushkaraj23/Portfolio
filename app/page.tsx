import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-full flex-col px-5 pt-24 pb-10 sm:px-8 md:px-6 md:pt-6 md:pb-5 lg:px-10">
        {/* Name block */}
        <div className="relative z-10 max-w-full">
          <h1 className="font-primary text-accent-two text-[clamp(2.75rem,14vw,25vh)] leading-[0.95] font-bold uppercase">
            Pushkaraj
          </h1>
          <div className="relative z-0 mt-1 flex w-fit max-w-full flex-col items-end sm:mt-0">
            <h1 className="font-primary text-secondary-two text-[clamp(1.75rem,9vw,15vh)] leading-[0.95] font-bold uppercase">
              Suryawanshi
            </h1>
            <h2 className="font-kalam via-accent-two/60 to-accent-two absolute -right-1 -bottom-7 bg-linear-to-t from-transparent bg-clip-text px-2 py-1 text-[clamp(1.5rem,6vw,3.75rem)] text-transparent sm:-right-4 sm:-bottom-8 md:-right-8 md:-bottom-2 md:text-5xl lg:-right-10 lg:-bottom-3 lg:text-6xl">
              पुष्कराज सूर्यवंशी
            </h2>
          </div>
        </div>

        {/* Description Block */}
        <div className="relative z-10 mt-14 flex h-fit w-full max-w-xl gap-4 pl-1 sm:mt-16 sm:gap-6 md:mt-12 md:max-w-[min(100%,28rem)] md:gap-6 lg:mt-10 lg:max-w-[40vw] lg:gap-8 lg:pl-2">
          <div className="bg-accent neu-accent h-auto min-h-full w-3 shrink-0 rounded-full sm:w-6 md:w-8 lg:w-10" />
          <div className="py-2 opacity-60 sm:py-5">
            <h1 className="font-italic mb-2 text-[clamp(2rem,6vw,8vh)] leading-none sm:mb-3">
              Hello There
            </h1>
            <p className="font-secondary text-base font-light sm:text-lg md:text-base lg:text-[clamp(0.95rem,2.5vh,1.25rem)]">
              Hey, I&apos;m Pushkaraj. I love building products and figuring out how to turn ideas into
              real businesses. Right now I&apos;m doing exactly that as a developer and co-founder.
            </p>
          </div>
        </div>

        {/* Buttons Block - Desktop / Tablet */}
        <div className="relative z-10 mt-8 hidden gap-5 md:flex">
          <button className="neu-button rounded-full p-4 hover:cursor-pointer" aria-label="Email">
            <MdEmail className="text-accent h-9 w-9" />
          </button>
          <button className="neu-button rounded-full p-4 hover:cursor-pointer" aria-label="LinkedIn">
            <FaLinkedinIn className="text-accent h-9 w-9" />
          </button>
          <button className="neu-button rounded-full p-4 hover:cursor-pointer" aria-label="Instagram">
            <FaInstagram className="text-accent h-9 w-9" />
          </button>
        </div>

        {/* Buttons Block - Mobile */}
        <div className="relative z-10 mt-8 flex w-fit flex-col gap-4 md:hidden">
          <button
            className="neu-button ml-16 w-fit rounded-full p-3.5 hover:cursor-pointer"
            aria-label="Email"
          >
            <MdEmail className="text-accent h-7 w-7" />
          </button>
          <button
            className="neu-button ml-10 w-fit rounded-full p-3.5 hover:cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-accent h-7 w-7" />
          </button>
          <button
            className="neu-button ml-2 w-fit rounded-full p-3.5 hover:cursor-pointer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-accent h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Background graphics — siblings so they aren't covered by the content stack */}
      <img
        src="/graphics/home-bg-wave.svg"
        alt=""
        aria-hidden
        className="pointer-events-none fixed right-0 bottom-0 z-0 h-auto w-[100vw] opacity-40 sm:w-[85vw] md:w-[62vw] md:opacity-100"
      />
      <img
        src="/graphics/hero-image.png"
        className="pointer-events-none fixed right-14 bottom-0 z-[5] h-[70vh] w-[min(78vw,22rem)] object-cover object-top sm:right-16 sm:h-[72vh] sm:w-[24rem] md:right-16 md:h-[75vh] md:w-auto md:max-w-[50vw] md:object-contain md:object-bottom lg:right-12 lg:h-[85vh]"
        alt="Pushkaraj"
      />
    </>
  );
}
