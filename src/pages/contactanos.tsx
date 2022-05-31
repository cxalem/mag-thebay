import { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button/Button";
import styles from "../styles/Contact.module.css";
import phone from "../public/images/phone.svg";
import mail from "../public/images/mail.svg";
import location from "../public/images/location.svg";

const ContactUs: NextPage = () => {
  return (
    <div
      className={`${styles.container} flex flex-col justify-center items-center`}
    >
      <div
        className={`${styles.contactGradient} -z-10 absolute flex flex-col justify-center items-center top-0 py-44 px-5 w-full`}
      >
        <h3 className="text-center text-primary text-3xl font-extrabold">
          ¡Contáctanos!
        </h3>
        <p className="text-center text-primary opacity-70 max-w-screen-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis laoreet
          mattis fermentum aliquam nunc parturient.
        </p>
      </div>

      <div className="flex flex-col bg-white rounded-xl mt-56 z-10 shadow-xl pb-5 w-full md:flex-row md:p-5 md:justify-between md:max-w-screen-lg md:gap-9">
        <div
          className={`${styles.infoBackground} flex flex-col gap-2 py-4 rounded-t-xl md:rounded-xl md:max-w-sm md:px-7 md:gap-10 md:py-20`}
        >
          <h4 className="text-center text-xl text-white font-bold md:text-left">
            Información de contacto
          </h4>
          <p className="hidden md:block text-white opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
            laoreet mattis fermentum aliquam nunc parturient.
          </p>

          <div className="grid grid-cols-1 gap-2 text-center md:text-left md:gap-6">
            <div className="flex gap-2 justify-center md:justify-start">
              <Image src={phone} width={20} height={20} alt="Contactanos" />
              <span className="text-white opacity-70">+51 999 999 999</span>
            </div>

            <div className="flex gap-2 justify-center md:justify-start">
              <Image src={mail} width={20} height={20} alt="Contactanos" />
              <span className="text-white opacity-70">
                support@magtebya.org
              </span>
            </div>

            <div className="flex gap-2 justify-center md:justify-start">
              <Image src={location} width={20} height={20} alt="Contactanos" />
              <span className="text-white opacity-70">
                Los Olivos, Lima - Perú
              </span>
            </div>
          </div>
        </div>

        <form action="" className="flex flex-col gap-6 px-4 mt-4 md:w-full md:justify-center">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="w-full">
              <label className="hidden md:block text-primary font-semibold opacity-50" htmlFor="name">
                Tu nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ramón José Martínez"
                className="border-b-2 h-8 border-blue-650 w-full md:h-10"
              />
            </div>
            <div className="w-full">
              <label className="hidden md:block text-primary font-semibold opacity-50" htmlFor="email">
                Tu correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ramonjose@gmail.com"
                className="border-b-2 h-8 border-blue-650 w-full md:h-10"
              />
            </div>
          </div>
          <label className="hidden md:block text-primary font-semibold opacity-50" htmlFor="message">
            Tu mensaje...
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Escribe tu mensaje..."
            className="border-b-2 h-8 border-blue-650 resize-none h-20"
          ></textarea>
          <Button type="primary">Enviar mensaje</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
