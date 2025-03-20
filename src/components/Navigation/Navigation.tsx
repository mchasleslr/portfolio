import { IconType } from "react-icons";
import "./Navigation.css";
import "./Navigation.desktop.css";
import { PropsWithChildren } from "react";
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
  return (
    <nav className="navigation">
      {homeBtn && (
        <>
          <div className="navigation__home">
            <Touchable icon={FaHome} to="/"></Touchable>
          </div>

          <div className="navigation__wrapper">
            <ul className="navigation__links">
              {links.map((link, index) => (
                <li className="navigation__item" key={index + 1}>
                  <Touchable
                    to={link.url}
                    className="navigation__link"
                    text={link.title}
                    icon={link.icon}
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
