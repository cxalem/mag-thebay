import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import InfoSection from "../components/InfoSection/InfoSection";
import aboutUsImage from "../public/images/about-us.jpg";
import TextBox from "../components/TextBox/TextBox";
import GoalsSection from "../components/GoalsSection/GoalSection";
import { useGetItems } from "../hooks/useGetItems";
import imgData from "../data/ImagesData.json";
import Layout from "../components/Layout/Layout";
import { Carousel } from "../components/Carousel/Carousel";

const Nosotros: NextPage = () => {
  return (
    <Layout title="Mag-Thebay" description="Construyendo un mundo sin límites">
      <div
        className={`${styles.container} flex flex-col justify-center items-center`}
      >
        <div>
          <InfoSection src={aboutUsImage} alt="About Us">
            <h3 className="text-3xl text-center md:text-5xl md:text-left font-extrabold text-primary">
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
            Contribuir al desarrollo, inclusión y mejoramiento de las
            condiciones de vida de los migrantes y refugiados, trabajando desde
            una visión integral, apuntando a la promoción de sus derechos, la
            defensa, el apoyo social, legal y educación de éstos, promoviendo
            programas que permitan avanzar en la creación de condiciones
            sociales, culturales, económicas y educativas, en especial a
            aquellos con alguna discapacidad; propiciando su participación
            protagónica y el ejercicio pleno de sus derechos humanos.
          </p>
        </TextBox>
        <GoalsSection />
        <div className="flex flex-col md:flex-row md:max-w-screen-lg justify-center gap-12">
          <Carousel />
          <div className="flex flex-col justify-center gap-3 md:max-w-md">
            <h3 className="text-primary text-3xl text-center font-extrabold md:text-left md:text-5xl">
              Descubre más sobre nosotros
            </h3>
            <p className="text-primary text-center opacity-70 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              laoreet mattis fermentum aliquam nunc parturient.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full my-10 md:my-32">
          <TextBox>
            <h1 className="text-center text-white font-bold text-4xl">
              Cuál es nuestra visión
            </h1>
            <p className="text-center text-white text-lg opacity-80">
              Ser reconocidos como una institución líder y referente en
              servicios que favorezcan la plena inclusión social de las personas
              migrantes y refugiadas con discapacidad con la comunidad de
              acogida, así como en la promoción de acciones que influyan en el
              cambio social para el cumplimiento de los derechos humanos en las
              poblaciones desfavorecidas. También ponemos especial atención en
              la sensibilización local, que propicien el entendimiento sobre las
              circunstancias que rodean al inmigrante y refugiado a migrar.
              Apostamos por el trabajo en red ya que la interrelación con otras
              instituciones permite una mejor consecución de los objetivos
            </p>
          </TextBox>
        </div>
      </div>
    </Layout>
  );
};

export default Nosotros;
