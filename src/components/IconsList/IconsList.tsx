import "./IconsList.css";
import { IconType } from "react-icons";

type IconsListProps = {
  list: {
    title?: string;
    url: string;
    icon: IconType;
  }[];
  className?: string;
};

export default function IconsList({ list, className }: IconsListProps) {
  return (
    <ul className={`icons-list__container ${className}`}>
      {list.map((icon, index) => (
        <li key={index}>
          <a href={icon.url}>
            <icon.icon className="icons-list__vector" />
            {icon.title ? icon.title : ""}
          </a>
        </li>
      ))}
    </ul>
  );
}
