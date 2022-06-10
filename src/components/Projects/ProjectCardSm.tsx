import Image from "next/image";
import Link from "next/link";
import style from "./ProjectsStyles/ProjectCard.module.css";

type Props = {
  title: string;
  description: string;
  src: string;
  slug?: string;
};

const ProjectCardSm: React.FC<Props> = ({ title, description, src, slug }) => {
  return (
    <Link href={slug}>
      <a>
        <div className="bg-white flex justify-center ease-in-out duration-200 hover:shadow-lg rounded-2xl">
          <div className="flex rounded-xl">
            <Image
              alt={title}
              src={src}
              objectFit="cover"
              width={400}
              height={400}
              className={style.cardImgSm}
            />
          </div>
          <div className="flex flex-col gap-2 px-6 py-2 justify-center">
            <h2 className="font-bold text-primary max-w-40 truncate">{title}</h2>
            <p className="text-primary text-sm opacity-70 max-w-40 truncate">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCardSm;
