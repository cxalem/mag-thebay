import React from "react";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "../../styles/Footer.module.css";
import logo from "../../public/images/logo-magthebay-oscuro.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col px-0 justify-center items-center md:px-0 py-16 h-full">
      <div
        className={`grid grid-cols-1 w-full justify-items-center gap-4 max-w-screen-lg py-24 lg:grid-cols-4 ${styles.borderBottom}`}
      >
        <div className="h-full">
          <Image src={logo} alt="Mag-Thebay" width="255" height="60" />
        </div>
        <div>
          <ul className="flex flex-col gap-2 justify-around h-full">
            <Link href="/nosotros" passHref>
              <li className="text-center md:text-left">
                <span className="text-primary opacity-90 text-xxs cursor-pointer">
                  Nosotros
                </span>
              </li>
            </Link>
            <Link href="/proyectos" passHref>
              <li className="text-center md:text-left">
                <span className="text-primary opacity-90 text-xxs cursor-pointer">
                  Nuestro Proyectos
                </span>
              </li>
            </Link>
            <Link href="/" passHref>
              <li className="text-center md:text-left">
                <span className="text-primary opacity-90 text-xxs cursor-pointer">
                  Contáctanos
                </span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="h-full flex flex-col justify-around gap-4 md:col-start-4 md:gap-0">
          <h4 className="text-primary text-center grid font-bold">¡Quiero ser parte!</h4>
          <Button type="primary">Sé voluntario</Button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-between w-full max-w-4xl lg:max-w-screen-lg my-8 ">
        <span className="text-primary text-xs">
          Copyright © 2022 Mag-Thebay. Todos los derechos reservados.
        </span>

        {/* <div className="flex gap-8">
          <Link href="/" passHref>
            <EMail className="cursor-pointer" />
          </Link>
          <Link href="/" passHref>
            <Twitter className="cursor-pointer" />
          </Link>
          <Link href="/" passHref>
            <Discord className="cursor-pointer" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
