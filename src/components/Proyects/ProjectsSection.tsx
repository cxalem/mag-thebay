import React from "react";
import ProjectCard from "./ProjectCard"

interface Proyect {
  title: string;
  description: string;
  url: string;
}

const projects: Proyect[] = [
  {
    title: "Creciendo sin límites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi ornare ornare tellus pretium, sed.",
    url: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F14d731f3-b77c-4bcc-bb52-035353396703%2Fproject-card-header.jpg?table=block&id=a6e7d5a9-4575-4269-b9cb-66eadd558fb6&spaceId=f4b39258-8c2f-46b2-bf6e-5ed2bbe98d93&width=2000&userId=b5d9e56c-d386-48d8-bfda-deb6eaf84065&cache=v2",
  },
  {
    title: "Panas con Causas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi ornare ornare tellus pretium, sed.",
    url: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F14d731f3-b77c-4bcc-bb52-035353396703%2Fproject-card-header.jpg?table=block&id=a6e7d5a9-4575-4269-b9cb-66eadd558fb6&spaceId=f4b39258-8c2f-46b2-bf6e-5ed2bbe98d93&width=2000&userId=b5d9e56c-d386-48d8-bfda-deb6eaf84065&cache=v2",
  },
  {
    title: "Unidad móvil de desarrollo infantil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi ornare ornare tellus pretium, sed.",
    url: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F14d731f3-b77c-4bcc-bb52-035353396703%2Fproject-card-header.jpg?table=block&id=a6e7d5a9-4575-4269-b9cb-66eadd558fb6&spaceId=f4b39258-8c2f-46b2-bf6e-5ed2bbe98d93&width=2000&userId=b5d9e56c-d386-48d8-bfda-deb6eaf84065&cache=v2",
  },
];

type Props = {};

const ProjectsSection: React.FC<Props> = ({}) => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-20">
      {projects.map((project) => {
        return <ProjectCard key={project.title} {...project} />;
      })}
    </div>
  );
};

export default ProjectsSection;
