import "./About.css";
import { Pill } from "@/components";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function About() {
  return (
    <div className="about">
      <aside className="about__aside">
        <img src="/portrait.jpeg" className="about__portrait" alt="" />
      </aside>
      <section className="about__section">
        <Pill
          icon={FaRegFilePdf}
          buttonIcon={MdKeyboardArrowDown}
          text="Télécharger CV"
          href="/maxime-chasles-cv-2025.pdf"
          download
        ></Pill>
        <h1>Maxime Chasles</h1>
        <h2>Développeur</h2>
      </section>
    </div>
  );
}
