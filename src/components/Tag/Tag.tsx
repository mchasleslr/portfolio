import "./Tag.css";

type TagProps = {
  name: string;
  className?: string;
};

export default function Tag({ name, className }: TagProps) {
  return <span className={`tag ${className}`}>{name}</span>;
}
