import { IconType } from "react-icons";
import "./Touchable.css";
import React from "react";
import { NavLink } from "react-router-dom";

type TouchableProps = {
  active?: boolean;
  to?: string;
  href?: string;
  className?: string;
  icon?: IconType;
  text?: string;
  onClick?: () => void;
  download?: boolean;
};

export default function Touchable({
  active = false,
  href,
  to,
  className,
  icon,
  text,
  onClick,
  download,
}: TouchableProps) {
  return href ? (
    <a
      onClick={onClick}
      href={href}
      className={`touchable ${className ? className : ""} ${
        active ? "touchable--active" : ""
      }`}
      download={download}
    >
      {icon && React.createElement(icon, { className: "touchable__icon" })}
      {text && <span className="touchable__text">{text}</span>}
    </a>
  ) : to ? (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) =>
        `touchable ${className ? className : ""} ${
          isActive ? "touchable--active" : ""
        }`
      }
    >
      {icon && React.createElement(icon, { className: "touchable__icon" })}
      {text && <span className="touchable__text">{text}</span>}
    </NavLink>
  ) : (
    <button
      onClick={onClick}
      className={`touchable ${className ? className : ""} ${
        active ? "touchable--active" : ""
      }`}
    >
      {icon && React.createElement(icon, { className: "touchable__icon" })}
      {text && <span className="touchable__text">{text}</span>}
    </button>
  );
}
