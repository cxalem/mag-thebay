import Link from "next/link";
import Button from "../Button/Button";
import Image from "next/image";
import heroImg from "../../public/images/hero-placeholder.png";
import acnur from "../../public/images/acnur-logo.svg";
import oim from "../../public/images/oim.svg";
import planInternacional from "../../public/images/plan-international.svg";
import styles from "../../styles/Hero.module.css";

type Props = {};

const Hero: React.FC<Props> = ({}) => {
  return (
    <div className={`${styles.heroContainer} flex flex-col w-full items-center lg:items-start max-w-7xl gap-10 relative my-10`}>
      <div
        className={`flex flex-col w-full gap-2 items-center px-10 py-16 lg:items-start ${styles.infoContainer} rounded-xl md:px-20 md:py-28 `}
      >
        <h1 className="text-white text-center text-5xl md:text-left lg:text-7xl font-black">Mag-Thebay</h1>
        <p className="text-white text-center md:text-left text-2xl">Construyendo un mundo sin limites</p>
        <div className="grid grid-cols-1 gap-4 justify-items-center md:gap-0 md:grid-cols-2 w-max">
          <Button type="inverted-secondary">Contáctanos</Button>
          <Button type="inverted-primary" href="/nosotros">Sobre Nosotros</Button>
        </div>
      </div>
      <div className={`${styles.heroImg} hidden lg:block `}>
        <Image
          src={heroImg}
          width={376}
          height={476}
          alt="Mag-Thebay"
          className="rounded-lg"
        />
      </div>
      <div className={`${styles.logoContainer} grid justify-items-center min-w-fit gap-6 md:gap-0 md:grid-rows-1 md:grid-cols-3`}>
        <Image
          src={acnur}
          width={211}
          height={50}
          alt="Mag-Thebay"
        />
        <Image
          src={oim}
          width={132}
          height={50}
          alt="Mag-Thebay"
        />
        <Image
          src={planInternacional}
          width={176}
          height={50}
          alt="Mag-Thebay"
        />
      </div>
    </div>
  );
};

export default Hero;
