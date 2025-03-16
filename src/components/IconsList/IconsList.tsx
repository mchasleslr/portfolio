import "./IconsList.css";
import { IconType } from "react-icons";

type IconsListProps = {
  list: {
    title?: string;
    url: string;
    icon: IconType;
    id?: string;
  }[];
  className?: string;
  onClick?: (e: any) => void;
  clickables?: number[];
};

export default function IconsList({
  list,
  className,
  onClick,
  clickables,
}: IconsListProps) {
  return (
    <ul className={`icons-list__container ${className}`}>
      {list.map((icon, index) => (
        <li
          id={icon.id ? icon.id : ""}
          key={index}
          onClick={clickables?.find((i) => i === index) ? onClick : undefined}
        >
          <a id={icon.id ? icon.id : ""} href={icon.url} target="_blank">
            <icon.icon
              id={icon.id ? icon.id : ""}
              className="icons-list__vector"
            />
            {icon.title ? icon.title : ""}
          </a>
        </li>
      ))}
    </ul>
  );
}
