import { IconType } from "react-icons";
import "./Touchable.css";
import React from "react";

type TouchableProps = {
  active?: boolean;
  href?: string;
  className?: string;
  icon?: IconType;
  text?: string;
  onClick?: () => void;
};

export default function Touchable({
  active = false,
  href,
  className,
  icon,
  text,
  onClick,
}: TouchableProps) {
  return href ? (
    <a
      onClick={onClick}
      href={href}
      className={`touchable ${className ? className : ""} ${
        active ? "touchable--active" : ""
      }`}
    >
      {icon && React.createElement(icon, { className: "touchable__icon" })}
      {text && <span className="touchable__text">{text}</span>}
    </a>
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
