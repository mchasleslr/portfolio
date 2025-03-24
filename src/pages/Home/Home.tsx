import { CustomButton, CustomCard, Pill } from "@/components";
import "./Home.css";
import "./Home.desktop.css";
import { FaRegFilePdf } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  const projects = [
    {
      title: "portfolio",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
      title: "Australia",
      description:
        "Immersion dans un nouvel environnement culturel. Cette expérience a renforcé mon adaptabilité, mon ouverture d'esprit et mon autonomie.",
      icon: "🦘",
      thumbnail: "australia.jpg",
    },
    {
      year: "2019",
      title: "From LR to Corsica",
      description:
        "Défi sportif en. Un voyage de plusieurs semaines qui m’a appris la persévérance, la discipline et la gestion de l'imprévu.",
      icon: "🚴‍♂️",
      thumbnail: "biketrip.jpg",
    },
    {
      year: "2021–2022",
      title: "42.195 Km",
      description:
        "Objectifs atteints grâce à une préparation rigoureuse. Ces épreuves ont consolidé ma rigueur, ma constance et ma capacité mentale à aller jusqu’au bout.",
      icon: "🏃",
      thumbnail: "marathon.jpg",
    },
    {
      year: "2023",
      title: "Back to school",
      description:
        "Un engagement fort vers une nouvelle voie professionnelle. Ce choix témoigne de ma motivation, de ma capacité à me réinventer et de ma volonté d'apprendre.",
      icon: "🎓",
      thumbnail: "university.jpg",
    },
  ];

  return (
    <>
      <header className="header">
        <Pill
          icon={FaRegFilePdf}
          buttonIcon={MdKeyboardArrowDown}
          text="Télécharger CV"
          href="/maxime-chasles-cv-2025.pdf"
          download
        ></Pill>
        <div className="header__hero">
          <div className="header__hero-blur" />

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
            {/* <div className="separator" /> */}
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
          {/* <div className="separator" /> */}

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
