import Button from "../Button/Button";
import styles from "../../styles/Hero.module.css";

type Props = {};

const JoinUs: React.FC<Props> = ({}) => {
  return (
    <div className={`${styles.infoContainer} flex flex-col gap-4 items-center py-10 px-10 md:py-16 md:px-44 rounded-xl w-full max-w-4xl`}>
      <h2 className="text-center font-bold text-white text-2xl lg:text-4xl">Sé parte de nuestro equipo</h2>
      <p className="text-white text-center max-w-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, ac vitae in magna.</p>
      <Button type="inverted-secondary" href="#">¡Quiero ser voluntario!</Button>
    </div>
  );
};

export default JoinUs;