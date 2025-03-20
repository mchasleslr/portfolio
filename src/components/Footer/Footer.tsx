import IconsList, { IconsListItem } from "../IconsList/IconsList";
import "./Footer.css";
import "./Footer.desktop.css";

type FooterProps = {
  socials?: IconsListItem[];
};

export default function Footer({ socials }: FooterProps) {
  return (
    <footer className="footer">
      <IconsList list={socials} className="footer__socials" />

      <p className="footer__text">
        © {new Date().getFullYear()} Maxime CHASLES. Tous droits réservés.
      </p>
    </footer>
  );
}
