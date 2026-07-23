import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiAcademicCap,
  HiFolder,
  HiEnvelope,
} from "react-icons/hi2";
import { FaBrain } from "react-icons/fa6";

export const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    icon: HiHome,
  },
  {
    name: "About",
    href: "/about",
    icon: HiUser,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: HiBriefcase,
  },
  {
    name: "Education",
    href: "/education",
    icon: HiAcademicCap,
  },
  {
    name: "Skills",
    href: "/skills",
    icon: FaBrain,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: HiFolder,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: HiEnvelope,
  },
];