import { Footer, Navigation } from "@/components";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { FaFileAlt, FaGithub, FaGitlab, FaLinkedinIn } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

import "./Layout.css";
import "./Layout.desktop.css";

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
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.05;

    const update = () => {
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      document.documentElement.style.setProperty("--mouse-x", `${currentX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${currentY}px`);

      requestAnimationFrame(update);
    };

    const handleMouseMove = (e: { pageX: number; pageY: number }) => {
      targetX = e.pageX;
      targetY = e.pageY;
    };

    if (true) {
      document.addEventListener("mousemove", handleMouseMove);
      update();
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="body-wrapper">
        <Navigation homeBtn links={menu} />
        <Outlet />
        <Footer socials={socials} />
      </div>
    </>
  );
}
