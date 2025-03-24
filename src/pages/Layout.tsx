import { Footer, Navigation } from "@/components";
import { Outlet } from "react-router-dom";

import { FaFileAlt, FaGithub, FaGitlab, FaLinkedinIn } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

import "./Layout.css";
import "./Layout.desktop.css";

const menu = [
  {
    title: "À propos",
    url: "/about",
    icon: IoPersonCircleSharp,
  },
  {
    title: "Projets",
    url: "/projects",
    icon: FaFileAlt,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: RiContactsBook2Line,
  },
];
const socials = [
  {
    url: "https://www.linkedin.com/in/maxime-chasles-bb102328a/",
    icon: FaLinkedinIn,
  },

  {
    url: "https://gitlab.univ-lr.fr/mchasles",
    icon: FaGitlab,
  },
  {
    url: "mailto:mchasles@etudiant.univ-lr.fr",
    icon: IoMdMail,
  },
  {
    id: "9a96933",
    url: "https://github.com/mchasleslr",
    icon: FaGithub,
  },
];

export default function Layout() {
  return (
    <>
      <div className="background-reveal">
        <div className="body-wrapper">
          <Navigation homeBtn links={menu} />
          <Outlet />
          <Footer socials={socials} />
        </div>
      </div>
    </>
  );
}
