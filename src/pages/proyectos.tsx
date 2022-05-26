import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import InfoSection from "../components/InfoSection/InfoSection";
import aboutUsImage from "../public/images/about-us.jpg";
import ProjectsSection from "../components/Projects/ProjectsSection";
import JoinUs from "../components/JoinUs/JoinUs";

const Proyectos: NextPage = () => {
  return (
    <div
      className={`${styles.container} flex flex-col justify-center items-center`}
    >
      <div>
        <InfoSection src={aboutUsImage} alt="About Us">
          <h3 className="text-5xl text-center md:text-left font-extrabold text-primary">
            Qué es Mag-Thebay y qué hacemos
          </h3>
          <p className="text-primary text-center md:text-left opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
            laoreet mattis fermentum aliquam nunc parturient.
          </p>
        </InfoSection>
      </div>
      <ProjectsSection />
      <JoinUs />
    </div>
  );
};

export default Proyectos;
