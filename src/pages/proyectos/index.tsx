import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import InfoSection from "../../components/InfoSection/InfoSection";
import aboutUsImage from "../../public/images/about-us.jpg";
import ProjectsSection from "../../components/Projects/ProjectsSection";
import JoinUs from "../../components/JoinUs/JoinUs";
import { getProjectsMetadata } from "../../utils/serverSidePost";

type Props = {
  projectsMetadata: any;
};

const Proyectos: NextPage<Props> = ({ projectsMetadata }) => {

  return (
    <div
      className={`${styles.container} flex flex-col justify-center items-center`}
    >
      <div>
        <InfoSection src={aboutUsImage} alt="About Us">
          <h3 className="text-3xl text-center md:text-5xl md:text-left font-extrabold text-primary">
            Proyectos en los que estamos trabajando
          </h3>
          <p className="text-primary text-center md:text-left opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
            laoreet mattis fermentum aliquam nunc parturient.
          </p>
        </InfoSection>
      </div>
      <ProjectsSection projects={projectsMetadata} />
      <JoinUs />
    </div>
  );
};

export default Proyectos;

export const getStaticProps = async () => {
  const projectsMetadata = await getProjectsMetadata();
  const projectData = projectsMetadata.map((project) => project);
  return {
    props: { projectsMetadata: projectData },
  };
};
