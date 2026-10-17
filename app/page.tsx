import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex h-full flex-col px-8 py-20 md:justify-center md:px-5 md:py-10">
      {/* Name block */}
      <h1 className="font-primary text-accent-two text-[20vw] leading-[20vw] uppercase max-sm:mt-10 md:text-[15vw] md:leading-[15vw]">
        Pushkaraj
      </h1>
      <div className="relative z-0 flex w-fit flex-col items-end">
        <h1 className="font-primary text-secondary-two text-[16vw] leading-[17vw] uppercase md:text-[10vw] md:leading-[10vw]">
          Suryawanshi
        </h1>
        <h2 className="font-kalam via-accent-two/60 to-accent-two absolute -right-6 -bottom-12 bg-linear-to-t from-transparent bg-clip-text px-3 py-3 text-[10vw] text-transparent md:-right-10 md:bottom-0 md:text-6xl">
          पुष्कराज सूर्यवंशी
        </h2>
      </div>

      {/* Description Block */}
      <div className="md:neu-card md:bg-primary mt-16 flex h-fit w-full gap-6 rounded-[30px] md:mt-6 md:w-[40vw] md:p-8">
        <div className="bg-accent neu-accent h-full w-10 rounded-full" />
        <div>
          <p className="font-secondary opacity-60">
            Co-Founder and Product Engineer - Fibonce Tech Solutions | Building custom ERP, CRM, VMS
            & E-commerce Platforms | Former Tech Lead GDSC MIT-ADT | Former Design Lead - MLSC
            MIT-ADT | Winner Codex Hackathon, Capgemini
          </p>
          <div className="mt-4 hidden gap-3 md:flex">
            <button className="neu-button rounded-full p-3 hover:cursor-pointer">
              <MdEmail className="text-accent h-7 w-7" />
            </button>
            <button className="neu-button rounded-full p-3 hover:cursor-pointer">
              <FaLinkedinIn className="text-accent h-7 w-7" />
            </button>
            <button className="neu-button rounded-full p-3 hover:cursor-pointer">
              <FaInstagram className="text-accent h-7 w-7" />
            </button>
          </div>
        </div>
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
      <div className="fixed right-0 bottom-0 -z-10">
        <img src="/graphics/home-bg-wave.svg" alt="background-bg" className="h-auto w-[62vw]" />
      </div>
    </div>
  );
}
