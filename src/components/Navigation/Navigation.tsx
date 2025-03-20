import { IconType } from "react-icons";
import "./Navigation.css";
import "./Navigation.desktop.css";
import { PropsWithChildren, useState } from "react";
import { FaHome } from "react-icons/fa";
import Touchable from "../Touchable/Touchable";

type NavigationProps = {
  homeBtn: boolean;
  links: {
    title: string;
    url: string;
    icon?: IconType;
  }[];
};

export default function Navigation({
  homeBtn,
  links,
}: NavigationProps & PropsWithChildren) {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className="navigation">
      {homeBtn && (
        <>
          <div className="navigation__home">
            <Touchable
              onClick={() => setActiveLink(0)}
              icon={FaHome}
              active={activeLink == 0 ? true : false}
              to="/"
            ></Touchable>
          </div>

          <div className="navigation__wrapper">
            <ul className="navigation__links">
              {links.map((link, index) => (
                <li className="navigation__item" key={index + 1}>
                  <Touchable
                    onClick={() => setActiveLink(index + 1)}
                    to={link.url}
                    className="navigation__link"
                    text={link.title}
                    icon={link.icon}
                    active={activeLink == index + 1 ? true : false}
                  ></Touchable>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
