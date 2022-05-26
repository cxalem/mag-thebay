import { NextPage } from "next";
import InfoSection from "../components/InfoSection/InfoSection";
import styles from "../styles/Home.module.css";
import aboutUsImage from "../public/images/about-us.jpg";
import TextBox from "../components/TextBox/TextBox";
import GoalsSection from "../components/GoalsSection/GoalSection";
import { Carousel } from "../components/Carousel/Carousel";

const Nosotros: NextPage = () => {
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
      <TextBox>
        <h1 className="text-center text-white font-bold text-4xl">
          Nuestra Misión
        </h1>
        <p className="text-center text-white text-lg opacity-80">
          Contribuir al desarrollo, inclusión y mejoramiento de las condiciones
          de vida de los migrantes y refugiados, trabajando desde una visión
          integral, apuntando a la promoción de sus derechos, la defensa, el
          apoyo social, legal y educación de éstos, promoviendo programas que
          permitan avanzar en la creación de condiciones sociales, culturales,
          económicas y educativas, en especial a aquellos con alguna
          discapacidad; propiciando su participación protagónica y el ejercicio
          pleno de sus derechos humanos.
        </p>
      </TextBox>
      <GoalsSection />
      <Carousel />
    </div>
  );
};

export default Nosotros;
