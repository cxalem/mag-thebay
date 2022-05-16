import { NextPage } from "next";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";
import styles from "../styles/Home.module.css";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import ProjectsSection from "../components/Proyects/ProjectsSection";
import JoinUs from "../components/JoinUs/JoinUs";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} flex flex-col justify-center items-center`}>
      <Hero />
      <InfoSection />
      <ProjectsSection />
      <JoinUs />
    </div>
  );
};

export default Home;
