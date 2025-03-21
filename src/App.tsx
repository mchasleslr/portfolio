import { useEffect, useState } from "react";
import "./App.css";
import "./Desktop.css";
import CustomButton from "./components/CustomButton/CustomButton";
import CustomCard from "./components/CustomCard/CustomCard";
import { FaFileAlt, FaGithub, FaGitlab, FaLinkedinIn } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import IconsList from "./components/IconsList/IconsList";
import Navigation from "./components/Navigation/Navigation";
import { MdContentCopy } from "react-icons/md";

function App() {
  const initEggs = () => {
    return [false, false, false];
  };

  const [eggFound, setEggFound] = useState(initEggs);
  const [revealBackground, setRevealBackground] = useState(false);
  const [revealCode, setRevealCode] = useState(false);

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
      tags: ["adaptabilité", "autonomie", "anglais"],
    },
    {
      year: "2019",
      title: "From LR to Corsica",
      description:
        "Défi sportif en. Un voyage de plusieurs semaines qui m’a appris la persévérance, la discipline et la gestion de l'imprévu.",
      icon: "🚴‍♂️",
      thumbnail: "biketrip.jpg",
      tags: ["endurance", "persévérance", "adaptabilité"],
    },
    {
      year: "2021–2022",
      title: "42.195 Km",
      description:
        "Objectifs atteints grâce à une préparation rigoureuse. Ces épreuves ont consolidé ma rigueur, ma constance et ma capacité mentale à aller jusqu’au bout.",
      icon: "🏃",
      thumbnail: "marathon.jpg",
      tags: ["rigueur", "constance", "discipline"],
    },
    {
      year: "2023",
      title: "Back to school",
      description:
        "Un engagement fort vers une nouvelle voie professionnelle. Ce choix témoigne de ma motivation, de ma capacité à me réinventer et de ma volonté d'apprendre.",
      icon: "🎓",
      thumbnail: "university.jpg",
      tags: ["motivation", "réinvention", "apprentissage"],
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
  const menu = [
    {
      title: "Projets",
      url: "#",
      icon: FaFileAlt,
    },
    {
      title: "À propos",
      url: "#",
      icon: IoPersonCircleSharp,
    },
    {
      title: "Contact",
      url: "#",
      icon: RiContactsBook2Line,
    },
  ];

  const easterEggs = [
    {
      id: "b513a2c",
      title: "Background",
      message:
        "Bonjour et bienvenue sur mon portfolio !\n\nPour rendre l'expérience plus immersive, j'y ai ajouté quelques easter eggs.\n\nFélicitation vous avez trouvé le premier 🥚 ! Vous devriez remarquer que quelque chose a changé...\n\nLa lumière vous donnera le prochain indice...\n\nÀ vous de jouer !\n\n🔦\n\nPS: si vous êtes sur mobile ou tablette, le tactile est votre ami.",
      action: function () {
        alert(this.message);
        setRevealBackground(true);
        setEggFound([true, false, false]);
      },
    },

    {
      id: "9a96933",
      title: "Octocat",
      message:
        "Bravo, vous avez trouvé le deuxième easter egg ! Vous avez l'oeil 👀.\n\nIl y a un CODE caché quelque part sur cette page, il vous mènera au dernier 🥚 ...\n\nÀ vous de jouer !\n\nUn indice : c'est le moment de faire un petit tour sur Github 😉 !",
      action: function () {
        alert(this.message);
        setEggFound([true, true, false]);
      },
    },
    {
      id: "09aabfd",
      title: "Code",
      action: function () {
        setEggFound([true, true, true]);
        setRevealCode(true);
      },
    },
  ];

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

    if (revealBackground) {
      document.addEventListener("mousemove", handleMouseMove);
      update();
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [revealBackground]);

  const handleEasterEgg = (e: any) => {
    e.preventDefault();
    console.log("Found an easter egg !");
    console.log(e.target.id);
    const easterEgg = easterEggs.find((egg) => egg.id === e.target.id);
    if (easterEgg) {
      easterEgg.action();
    }
  };

  // A extraire dans un composant
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyTooltip = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="body-wrapper">
        <header className="header">
          <Navigation homeBtn links={menu} />
          <div className="header__hero">
            <h1 className="header_title">Développeur Web en devenir</h1>
            <p className="header_description">
              Moi c’est{" "}
              <em id="b513a2c" onClick={handleEasterEgg}>
                Maxime
              </em>
              , étudiant en informatique à La Rochelle Université. Ancien barman
              passionné par l’art du service, je me réinvente aujourd’hui dans
              le développement Web.
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
            <div className="showcase__header-container">
              <h2 className="showcase__header">Showcase</h2>
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
              Beyond the{" "}
              <code
                className="madskills__code"
                id="09aabfd"
                onClick={eggFound[1] ? handleEasterEgg : undefined}
              >
                {revealCode ? "9a96933" : "code"}
              </code>
              {eggFound[2] && (
                <MdContentCopy
                  className="madskills__copy"
                  onClick={() => {
                    navigator.clipboard.writeText("9a96933");
                    handleCopyTooltip();
                  }}
                />
              )}
              {isCopied && <span className="madskills__tooltip">Copié !</span>}
            </h2>
            <p className="madskills__description">
              Certaines expériences personnelles ont fortement contribué à
              façonner mes qualités humaines et professionnelles. Voici quelques
              exemples significatifs.
            </p>
            <div className="separator" />

            <div className="madskills__events">
              {events.map((event, index) => (
                <CustomCard
                  key={index}
                  title={event.title}
                  description={event.description}
                  thumbnail={event.thumbnail}
                  date={event.year}
                  tags={event.tags}
                />
              ))}
            </div>
          </section>
        </main>
        <footer className="footer">
          <div
            className={`octocat ${
              !eggFound[0] || eggFound[1] ? "octocat--invisible" : ""
            }`}
          ></div>

          {!eggFound[0] || eggFound[1] ? (
            <IconsList list={socials} className="footer__socials" />
          ) : (
            <IconsList
              list={socials}
              onClick={handleEasterEgg}
              className="footer__socials"
              clickables={[3]}
            />
          )}
          <p className="footer__text">
            © {new Date().getFullYear()} Maxime CHASLES. Tous droits réservés.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
