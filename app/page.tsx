import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex h-full flex-col px-8 md:p-5">
      {/* Name block */}
      <h1 className="font-primary text-accent-two uppercase font-bold text-[25vh] leading-[25vh]">
        Pushkaraj
      </h1>
      <div className="relative z-0 flex w-fit flex-col items-end">
        <h1 className="font-primary text-secondary-two text-[15vh] font-bold leading-[15vh] uppercase">
          Suryawanshi
        </h1>
        <h2 className="font-kalam via-accent-two/60 to-accent-two absolute -right-6 -bottom-12 bg-linear-to-t from-transparent bg-clip-text px-3 py-3 text-[10vw] text-transparent md:-right-10 md:-bottom-3 md:text-6xl">
          पुष्कराज सूर्यवंशी
        </h2>
      </div>

      {/* Description Block */}
      <div className="flex h-fit w-full gap-8 md:mt-10 md:w-[40vw] pl-2">
        <div className="bg-accent neu-accent h-full w-10 rounded-full" />
        <div className="py-5 opacity-60">
          <h1 className="font-italic text-[8vh] leading-[8vh] mb-3">Hello There</h1>
          <p className="font-secondary font-light text-[2.5vh]">
            Hey, I&apos;m Pushkaraj. I love building products and figuring out how to turn ideas into real businesses. Right now I&apos;m doing exactly that as a developer and co-founder.
          </p>
        </div>
      </div>

      {/* Buttons Block - Desktop */}
      <div className="mt-10 hidden gap-5 md:flex">
        <button className="neu-button rounded-full p-4 hover:cursor-pointer">
          <MdEmail className="text-accent h-9 w-9" />
        </button>
        <button className="neu-button rounded-full p-4 hover:cursor-pointer">
          <FaLinkedinIn className="text-accent h-9 w-9" />
        </button>
        <button className="neu-button rounded-full p-4 hover:cursor-pointer">
          <FaInstagram className="text-accent h-9 w-9" />
        </button>
      </div>

      {/* Buttons Block */}
      <div className="mt-10 flex w-fit flex-col gap-5 md:hidden">
        <button className="neu-button ml-24 w-fit rounded-full p-4 hover:cursor-pointer">
          <MdEmail className="text-accent h-8 w-8" />
        </button>
        <button className="neu-button ml-16 w-fit rounded-full p-4 hover:cursor-pointer">
          <FaLinkedinIn className="text-accent h-8 w-8" />
        </button>
        <button className="neu-button ml-2 w-fit rounded-full p-4 hover:cursor-pointer">
          <FaInstagram className="text-accent h-8 w-8" />
        </button>
      </div>

      {/* Background Image block */}
      <img src="/graphics/home-bg-wave.svg" alt="background-bg" className="h-auto w-[62vw] fixed right-0 bottom-0" />
      <img src="/graphics/hero-image.png" className="h-[85vh] fixed right-12 bottom-0" alt="my-photo" />
    </div>
  );
}
