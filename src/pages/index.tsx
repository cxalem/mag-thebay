import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import ProjectsSection from "../components/Projects/ProjectsSection";
import JoinUs from "../components/JoinUs/JoinUs";
import Button from "../components/Button/Button";
import aboutUsImage from "../public/images/about-us.jpg";
import { getProjectsMetadata } from "../utils/serverSidePost";

type Props = {
  projectsMetadata: any;
}

const Home: NextPage<Props> = ({ projectsMetadata }) => {
  return (
    <div
      className={`${styles.container} flex flex-col justify-center items-center`}
    >
      <Hero />
      <InfoSection src={aboutUsImage} alt="Index">
        <h3 className="text-3xl text-center md:text-4xl lg:text-6xl md:text-left font-extrabold text-primary">
          Quiénes somos y qué hacemos
        </h3>
        <p className="text-primary text-center md:text-left opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis laoreet
          mattis fermentum aliquam nunc parturient.
        </p>
        <Button type="primary" href="/nosotros">
          ¡Quiero saber más!
        </Button>
      </InfoSection>
      <ProjectsSection projects={projectsMetadata} />
      <JoinUs />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projectsMetadata = await getProjectsMetadata();
  const projectData = projectsMetadata.map((project) => project);
  return {
    props: { projectsMetadata: projectData },
  };
};
