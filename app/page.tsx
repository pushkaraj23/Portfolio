import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="py-20 md:py-10 px-8 md:px-5 flex flex-col md:justify-center h-full">
      <h1 className="max-sm:mt-10 uppercase text-[20vw] leading-[20vw] md:text-[15vw] md:leading-[15vw] font-primary text-accent-two">Pushkaraj</h1>
      <div className="flex flex-col items-end w-fit relative z-0">
        <h1 className="uppercase text-[16vw] leading-[17vw] md:text-[10vw] md:leading-[10vw] font-primary text-secondary-two">Suryawanshi</h1>
        <h2 className="font-kalam text-[10vw] md:text-6xl absolute -right-6 md:-right-10 -bottom-12 md:bottom-0 bg-linear-to-t from-transparent via-accent-two/60 to-accent-two py-3 px-3 bg-clip-text text-transparent">
          पुष्कराज सूर्यवंशी
        </h2>
      </div>
      <div className="md:neu-card mt-16 md:mt-6 rounded-[30px] h-fit md:bg-primary flex gap-6 md:p-8 w-full md:w-[40vw]">
        <div className="bg-accent neu-accent h-full rounded-full w-10" />
        <div>
          <p className="font-secondary opacity-60">Co-Founder and Product Engineer - Fibonce Tech Solutions | Building custom ERP, CRM, VMS & E-commerce Platforms | Former Tech Lead GDSC MIT-ADT | Former Design Lead - MLSC MIT-ADT | Winner Codex Hackathon, Capgemini</p>
          <div className="hidden md:flex mt-4 gap-3">
            <button className="neu-button p-3 rounded-full hover:cursor-pointer"><MdEmail className="w-7 h-7 text-accent" /></button>
            <button className="neu-button p-3 rounded-full hover:cursor-pointer"><FaLinkedinIn className="w-7 h-7 text-accent" /></button>
            <button className="neu-button p-3 rounded-full hover:cursor-pointer"><FaInstagram className="w-7 h-7 text-accent" /></button>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col w-fit mt-10 gap-5">
        <button className="neu-button p-4 w-fit rounded-full hover:cursor-pointer ml-24"><MdEmail className="w-8 h-8 text-accent" /></button>
        <button className="neu-button p-4 w-fit rounded-full hover:cursor-pointer ml-16"><FaLinkedinIn className="w-8 h-8 text-accent" /></button>
        <button className="neu-button p-4 w-fit rounded-full hover:cursor-pointer ml-2"><FaInstagram className="w-8 h-8 text-accent" /></button>
      </div>

      <div className="absolute md:h-full right-0 bottom-0 -z-10">
        <img src="/hero-img.jpg" className="h-full" alt="hero image" />
        {/* <div className="absolute h-full w-full inset-0 bg-linear-to-r from-primary to-primary/50" /> */}
      </div>
    </div>
  );
}
