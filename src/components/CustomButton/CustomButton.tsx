import React from "react";
import "./CustomButton.css";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type CustomButtonProps = {
  text?: string;
  icon?: IconType;
  thumbnail?: string;
  className?: string;
  to?: string;
};

export default function CustomButton({
  className,
  thumbnail,
  text,
  icon,
  to,
}: CustomButtonProps) {
  return to ? (
    <Link to={to} className={`custom-btn ${className}`}>
      <div className="custom-btn__wrapper">
        {thumbnail ? (
          <img
            className="custom-btn__thumbnail"
            src={thumbnail}
            alt="btn-thumbnail"
          />
        ) : null}
        {text ? <span className="custom-btn__text">{text}</span> : null}
        {icon ? <span>{React.createElement(icon)}</span> : null}
      </div>
    </Link>
  ) : (
    <button className={`custom-btn ${className}`}>
      <div className="custom-btn__wrapper">
        {thumbnail ? (
          <img
            className="custom-btn__thumbnail"
            src={thumbnail}
            alt="btn-thumbnail"
          />
        ) : null}
        {text ? <span className="custom-btn__text">{text}</span> : null}
        {icon ? <span>{React.createElement(icon)}</span> : null}
      </div>
    </button>
  );
}
