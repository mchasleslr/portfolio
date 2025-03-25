import { CustomButton, CustomCard, Pill } from "@/components";
import "./Home.css";
import "./Home.desktop.css";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Home() {
  const projects = [
    {
      title: "portfolio",
      description:
        "Mon portfolio personnel, un site Web pour présenter mes projets, mes compétences et mon parcours.",
      date: "2025",
      tags: ["typescript", "react"],
      status: "wip",
      source: [
        {
          origin: "github",
          url: "https://github.com/mchasleslr/portfolio",
        },
      ],
    },

    {
      title: "triomino-lib",
      description:
        "Un projet dans le cadre de mes études, une bibliothèque pour manipuler des triominos en C.",
      date: "2024-2025",
      tags: ["c", "cmake"],
      status: "wip",
      source: [
        {
          origin: "github",
          url: "https://github.com/mchasleslr/triomino-lib",
        },
      ],
    },
    {
      title: "mydeliciousdinner",
      description:
        "SPA pour parcourir des recettes de cuisine et les consulter en détail.",
      date: "2024",
      tags: ["javascript", "react", "tailwindcss"],
      status: "completed",
      source: [
        {
          origin: "gitlab",
          url: "https://gitlab.univ-lr.fr/mchasles/mydeliciousdinner",
        },
      ],
    },
    {
      title: "ecovoit",
      description:
        "Projet réalisé en groupe dans le cadre de mes études, une application mobile de covoiturage.",
      date: "2024",
      tags: ["typescript", "react", "tailwindcss"],
      status: "completed",
      source: [
        {
          origin: "gitlab",
          url: "https://gitlab.univ-lr.fr/projets-l2-2024/quantum-quartet/covoiturage-la-rochelle/ecovoit",
        },
      ],
    },
  ];
  const events = [
    {
      year: "2016",
      title: "Australie",
      description:
        "Un voyage qui m’a permis de découvrir une nouvelle culture, de m’ouvrir aux autres et de développer mon sens de l’adaptation.",
      icon: "🦘",
      thumbnail: "australia.jpg",
    },
    {
      year: "2019",
      title: "2500 km à vélo",
      description:
        "Défi sportif en solitaire. Un voyage de plusieurs semaines qui m’a appris la persévérance, la discipline et la gestion de l'imprévu.",
      icon: "🚴‍♂️",
      thumbnail: "biketrip.jpg",
    },
    {
      year: "2021–2022",
      title: "Marathon de La Rochelle",
      description:
        "Un challenge personnel qui m’a permis de repousser mes limites, de me dépasser et de renforcer ma détermination.",
      icon: "🏃",
      thumbnail: "marathon.jpg",
    },
    {
      year: "2023",
      title: "Retour aux études",
      description:
        "Après plusieurs années d’expérience professionnelle, j’ai décidé de reprendre mes études pour me former à un nouveau métier.",
      icon: "🎓",
      thumbnail: "university.jpg",
    },
  ];

  return (
    <>
      <header className="header">
        <Pill
          icon={FaRegFilePdf}
          buttonIcon={MdOutlineFileDownload}
          text="Télécharger CV"
          href="/maxime-chasles-2025.pdf"
          download
        ></Pill>
        <div className="header__hero">
          <h1 className="header_title">Développeur Web en devenir</h1>
          <p className="header_description">
            Moi c’est <em>Maxime</em>, étudiant en informatique à La Rochelle
            Université. Ancien barman passionné par l’art du service, je me
            réinvente aujourd’hui dans le développement Web.
          </p>
          <div className="header__cta-container">
            <CustomButton
              to="/about"
              className="header__cta"
              text="À propos"
              thumbnail="portrait.jpeg"
            />
          </div>
        </div>
      </header>
      <main>
        <section className="showcase">
          <div className="showcase__header-container">
            <h2 className="showcase__header">Showcase</h2>
            <p className="showcase__description">
              Une sélection parmi mes projets personnels et académiques.
            </p>
          </div>
          <div className="showcase__projects">
            {projects.map((project, index) => (
              <CustomCard
                key={index}
                title={project.title}
                description={project.description}
                date={project.date}
                tags={project.tags}
                status={project.status}
                source={project.source}
              />
            ))}
          </div>
        </section>
        <section className="madskills">
          <h2 className="madskills__header">
            Beyond the <code className="madskills__code">code</code>
          </h2>
          <p className="madskills__description">
            Certaines expériences personnelles ont fortement contribué à
            façonner mes qualités humaines et professionnelles. Voici quelques
            exemples significatifs.
          </p>

          <div className="madskills__events">
            {events.map((event, index) => (
              <CustomCard
                key={index}
                title={event.title}
                description={event.description}
                thumbnail={event.thumbnail}
                date={event.year}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
