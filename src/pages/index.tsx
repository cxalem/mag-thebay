import { NextPage } from "next";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";
import styles from "../styles/Home.module.css";
import Button from "../components/Button/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button href="#" type="inverted-primary">
        Contáctanos
      </Button>
    </div>
  );
};

export default Home;
