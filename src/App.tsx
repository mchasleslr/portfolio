import { useEffect } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton/CustomButton";
import CustomCard from "./components/CustomCard/CustomCard";

function App() {
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

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.05; // vitesse d'interpolation (plus petit = plus lent)

    const update = () => {
      // interpolation linéaire vers la cible
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      // on met à jour les variables CSS
      document.documentElement.style.setProperty("--mouse-x", `${currentX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${currentY}px`);

      requestAnimationFrame(update);
    };

    const handleMouseMove = (e: { pageX: number; pageY: number }) => {
      targetX = e.pageX;
      targetY = e.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    update(); // démarre la boucle d’animation

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <header>
        <div className="header__hero">
          <h1 className="header_title">Développeur Web en devenir</h1>
          <p className="header_description">
            Moi c’est <em>Maxime</em>, étudiant en informatique à La Rochelle
            Université. Ancien barman passionné par l’art du service, je me
            réinvente aujourd’hui dans le développement Web.
          </p>
          <div className="header__cta-container">
            <CustomButton
              className="header__cta"
              text="À propos"
              thumbnail="portrait.jpeg"
            />
            <p className="header__tag">
              <span className="circle-sonar"></span>
              #opentowork
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className="showcase">
          <div className="showcase__header">
            <h2 className="showcase__title">Showcase</h2>
            <p className="showcase__description">
              Une sélection parmi mes projets personnels et académiques.
            </p>
            <div className="separator" />
          </div>
          <div className="showcase__projects">
            {projects.map((project, index) => (
              <CustomCard
                key={index}
                title={project.title}
                description={project.description}
                // thumbnail={project.thumbnail}
                date={project.date}
                tags={project.tags}
                status={project.status}
                source={project.source}
              />
            ))}
          </div>
        </section>
        <section className="timeline">
          <h2></h2>
          <div className="separator" />
        </section>
      </main>
    </>
  );
}

export default App;
