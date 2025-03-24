import React from "react";
import { IconType } from "react-icons";

import "./Pill.css";
import "./Pill.desktop.css";

type PillProps = {
  text?: string;
  icon?: IconType;
  buttonIcon?: IconType;
  href?: string;
  download?: boolean;
};

export default function Pill({
  text,
  icon,
  buttonIcon,
  href,
  download,
}: PillProps) {
  return (
    <>
      <div className="pill">
        {icon && (
          <span className="pill__icon-container">
            {React.createElement(icon, { className: "pill__icon" })}
          </span>
        )}
        {text && (
          <span
            className="pill__text
        "
          >
            {text}
          </span>
        )}

        {buttonIcon && (
          <a className="pill__btn" href={href} download={download}>
            {React.createElement(buttonIcon, { className: "pill__btn-icon" })}
          </a>
        )}
      </div>
    </>
  );
}
