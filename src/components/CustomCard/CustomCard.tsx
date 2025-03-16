import Tag from "../Tag/Tag";
import "./CustomCard.css";
import { FaCalendar, FaGithub, FaGitlab, FaCircle } from "react-icons/fa";

import { IoCheckmarkOutline } from "react-icons/io5";

type CustomCardProps = {
  title?: string;
  description?: string;
  thumbnail?: string;
  date?: string;
  tags?: string[];
  status?: string;
  source?: {
    origin: string;
    url: string;
  }[];
};

export default function CustomCard({
  title,
  description,
  thumbnail,
  date,
  tags,
  status,
  source,
}: CustomCardProps) {
  const renderStatus = (status: string) => {
    if (status === "completed") {
      return (
        <span className="card__status ">
          Terminé
          <IoCheckmarkOutline className="card__status--completed" />
        </span>
      );
    } else if (status === "wip") {
      return (
        <span className="card__status ">
          En cours
          <FaCircle className="card__status--wip" />
        </span>
      );
    } else {
      return null;
    }
  };

  const renderSource = (source: { origin: string; url: string }[]) => {
    return source.map((source, index) => {
      if (source.origin === "github") {
        return (
          <a
            key={index}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="card__link"
          >
            <FaGithub className="card__link-icon" />
          </a>
        );
      }
      if (source.origin === "gitlab") {
        return (
          <a
            key={index}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="card__link"
          >
            <FaGitlab className="card__link-icon" />
          </a>
        );
      }
      return null;
    });
  };

  return (
    <article className="card">
      {thumbnail && (
        <img className="card__thumbnail" src={thumbnail} alt={title} />
      )}
      <div className="card__meta">
        {date && (
          <p className="card__date">
            <FaCalendar />
            {date}
          </p>
        )}
        {status && renderStatus(status)}
      </div>

      <div className="card__content">
        <h3 className="card__title">
          {title}
          {source && renderSource(source)}
        </h3>
        <p className="card__description">{description}</p>
        {tags && (
          <div className="card__tags">
            {tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
