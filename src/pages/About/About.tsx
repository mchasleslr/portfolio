import "./About.css";
import "./About.desktop.css";
import { Tag, Touchable } from "@/components";
import IconsList, { IconsListItem } from "@/components/IconsList/IconsList";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  FaCss3,
  FaDocker,
  FaGit,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedin,
  FaMailBulk,
  FaPhp,
  FaPython,
  FaReact,
  FaSymfony,
  FaVuejs,
} from "react-icons/fa";
import { FaC, FaEarthEurope } from "react-icons/fa6";

export default function About() {
  const iconsWeb: IconsListItem[] = [
    {
      icon: FaHtml5,
    },
    {
      icon: FaCss3,
    },
    {
      icon: FaJs,
    },
    {
      icon: FaPhp,
    },
    {
      icon: FaSymfony,
    },
    {
      icon: FaVuejs,
    },
    {
      icon: FaReact,
    },
  ];

  const iconsSoftware: IconsListItem[] = [
    {
      icon: FaC,
    },
    {
      icon: FaJava,
    },
    {
      icon: FaPython,
    },
  ];

  const iconsTools: IconsListItem[] = [
    {
      icon: FaGit,
    },
    {
      icon: FaGithub,
    },

    {
      icon: FaGitlab,
    },
    {
      icon: FaDocker,
    },
  ];

  const [webIconsRef, isWebVisible] = useIntersectionObserver<HTMLDivElement>();
  const [softwareIconsRef, isSoftwareVisible] =
    useIntersectionObserver<HTMLDivElement>();
  const [toolsIconsRef, isToolsVisible] =
    useIntersectionObserver<HTMLDivElement>();

  return (
    <div className="about">
      <aside className="about__aside">
        <img src="/portrait.jpeg" className="about__portrait" alt="" />
        <p className="header__tag">
          <span className="circle-sonar"></span>
          #opentowork
        </p>
        <p className="about__location">
          <FaEarthEurope className="about__location-icon" />
          La Rochelle / France
        </p>
        <div className="about__tags">
          <Tag className="about__tag" name="Français" />
          <Tag className="about__tag" name="Anglais" />
        </div>
      </aside>
      <section className="about__section">
        <article className="about__me">
          <h1 className="about__name">Maxime Chasles </h1>
          <h2 className="about__role">Développeur</h2>
          <div className="about__links">
            <Touchable
              icon={FaGithub}
              text="GitHub"
              className="about__link"
              href="https://github.com/mchasleslr"
            />
            <Touchable
              icon={FaLinkedin}
              text="LinkedIn"
              className="about__link"
              href="https://www.linkedin.com/in/maxime-chasles-bb102328a/"
            />
            <Touchable
              icon={FaMailBulk}
              text="Email"
              className="about__link"
              href="mailto:mchasles@etudiant.univ-lr.fr"
            />
          </div>
          <div className="about__description">
            <p className="about__description-intro">
              Ancien professionnel expérimenté de l’hôtellerie-restauration,
              aujourd’hui étudiant en 2ᵉ année de Licence Informatique, j’ai
              fait le choix volontaire et réfléchi d’une reconversion
              ambitieuse.
            </p>
          </div>
        </article>
      </section>
      <section className="skills">
        <h3 className="skills__header">Compétences techniques</h3>
        <article className="skill">
          <h4 className="skill__header">Développement Web</h4>
          <p className="skill__description">
            Conception d’interfaces web et mobiles, responsives, interactives,
            centrées sur l’expérience utilisateur (UX/UI), avec une maîtrise du
            front-end et du back-end.
          </p>
          <div ref={webIconsRef}>
            <IconsList
              list={iconsWeb}
              className={`skill__icons ${isWebVisible ? "visible" : ""}`}
            />
          </div>
        </article>
        <article className="skill">
          <h4 className="skill__header">Génie Logiciel</h4>
          <p className="skill__description">
            Maîtrise des langages de programmation, solide base en développement
            orienté objet et algorithmie, avec un fort intérêt pour les bonnes
            pratiques de développement.
          </p>
          <div ref={softwareIconsRef}>
            <IconsList
              list={iconsSoftware}
              className={`skill__icons ${isSoftwareVisible ? "visible" : ""}`}
            />
          </div>
        </article>
        <article className="skill">
          <h4 className="skill__header">Outils de développement</h4>
          <p className="skill__description">
            Utilisation des standards de l’industrie pour la gestion du code, le
            versionnement, et le développement dans des environnements isolés.
          </p>
          <div ref={toolsIconsRef}>
            <IconsList
              list={iconsTools}
              className={`skill__icons ${isToolsVisible ? "visible" : ""}`}
            />
          </div>
        </article>
      </section>
      <section className="soft-skills">
        <h3 className="soft-skills__header">Atouts clés</h3>
        <div className="soft-skills__container">
          <Tag className="soft-skills__tag" name="Curiosité" />
          <Tag className="soft-skills__tag" name="Adaptabilité" />
          <Tag className="soft-skills__tag" name="Créativité" />
          <Tag className="soft-skills__tag" name="Esprit d'équipe" />
          <Tag className="soft-skills__tag" name="Autonomie" />
          <Tag className="soft-skills__tag" name="Rigueur" />
          <Tag className="soft-skills__tag" name="Organisation" />
          <Tag className="soft-skills__tag" name="Communication" />
        </div>
      </section>
    </div>
  );
}
