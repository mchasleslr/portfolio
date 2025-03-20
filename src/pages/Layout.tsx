import { Navigation } from "@/components";
import { FaFileAlt } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { Outlet } from "react-router-dom";

const menu = [
  {
    title: "Projets",
    url: "/projects",
    icon: FaFileAlt,
  },
  {
    title: "À propos",
    url: "/about",
    icon: IoPersonCircleSharp,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: RiContactsBook2Line,
  },
];

export default function Layout() {
  return (
    <>
      <Navigation homeBtn links={menu} />
      <Outlet /> {/* C'est ici que les pages s'affichent */}
    </>
  );
}
