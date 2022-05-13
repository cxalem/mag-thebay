import { NextPage } from "next";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";
import styles from "../styles/Home.module.css";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import ProjectsSection from "../components/Proyects/ProjectsSection";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <InfoSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
