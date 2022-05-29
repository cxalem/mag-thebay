import Image from "next/image";
import Button from "../Button/Button";
import style from "./ProjectsStyles/ProjectCard.module.css";

type Props = {
  title: string;
  description: string;
  src: string;
  slug?: string;
};

const ProjectCard: React.FC<Props> = ({ title, description, src, slug }) => {
  return (
    <div className="flex flex-col max-w-sm justify-center shadow-xl rounded-2xl">
      <Image
        alt={title}
        src={src}
        objectFit="cover"
        width={300}
        height={100}
        className={style.cardHeader}
      />
      <div className="flex flex-col gap-4 px-6 py-10 justify-center">
        <h2 className="text-center font-bold text-primary">{title}</h2>
        <p className="text-center text-primary text-sm opacity-70">
          {description}
        </p>
        <div className="flex justify-center">
          <Button href={`${slug}`} type="primary">
            Más Información
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
