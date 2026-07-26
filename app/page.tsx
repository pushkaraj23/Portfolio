import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="py-10 px-5 flex flex-col justify-center h-full">
      <h1 className="uppercase text-[15vw] leading-[15vw] font-primary text-accent-two">Pushkaraj</h1>
      <div className="flex flex-col items-end w-fit relative z-0">
        <h1 className="uppercase text-[10vw] leading-[10vw] font-primary text-secondary-two">Suryawanshi</h1>
        <h2 className="font-kalam text-6xl absolute -right-10 bottom-0 bg-linear-to-t from-transparent via-accent-two/60 to-accent-two py-3 px-3 bg-clip-text text-transparent">
          पुष्कराज सूर्यवंशी
        </h2>
      </div>
      <div className="neu-card mt-6 rounded-[30px] h-fit bg-primary flex gap-6 p-8 w-[40vw]">
        <div className="bg-accent neu-accent h-full rounded-full w-10" />
        <div>
          <p className="font-secondary opacity-70">Co-Founder and Lead Developer - Fibonce Tech Solutions | Building custom ERP, CRM, VMS & E-commerce Platforms | Former Tech Lead GDSC MIT-ADT | Former Design Lead - MLSC MIT-ADT | Winner Codex Hackathon, Capgemini</p>
          <div className="mt-4 flex gap-3">
            <button className="neu-button p-3 rounded-full hover:cursor-pointer"><MdEmail className="w-7 h-7 text-accent" /></button>
            <button className="neu-button p-3 rounded-full hover:cursor-pointer"><FaLinkedinIn className="w-7 h-7 text-accent" /></button>
            <button className="neu-button p-3 rounded-full hover:cursor-pointer"><FaInstagram className="w-7 h-7 text-accent" /></button>
          </div>
        </div>
      </div>
      <div className="absolute h-full right-0 top-0 -z-10">
        <img src="/hero-img.jpg" className="h-full" alt="hero image" />
        <div className="absolute h-full w-full inset-0 bg-linear-to-r from-primary to-primary/50" />
      </div>
    </div>
  );
}
