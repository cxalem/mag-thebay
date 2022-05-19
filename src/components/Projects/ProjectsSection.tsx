import React from "react";
import ProjectCard from "./ProjectCard";
import meta from "../../data/projectsMetadata.json";

interface Proyect {
  id: string;
  title: string;
  description: string;
  url: string;
}

type Props = {};

const getItems = () => {
  return [
    ...Object.entries(meta).map(([id, key]) => {
      return {
        id,
        title: key.title,
        description: key.description,
        url: key.url,
      };
    }),
  ];
};

const ProjectsSection: React.FC<Props> = ({}) => {
  const projects: Proyect[] = getItems();

  return (
    <div className="grid grid-cols-1 justify-items-center my-10 md:mb-32 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-20">
      {projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </div>
  );
};

export default ProjectsSection;
