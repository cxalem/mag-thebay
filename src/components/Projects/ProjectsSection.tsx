import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../../types";
import { useGetItems } from "../../hooks/useGetItems";

type Props = {
  projects: any;
};

const ProjectsSection: React.FC<Props> = ({ projects }) => {

  return (
    <div className="grid grid-cols-1 justify-items-center my-10 md:mb-32 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-20">
      {projects.map((project: Project) => {
        return <ProjectCard key={project.title} {...project} />;
      })}
    </div>
  );
};

export default ProjectsSection;
