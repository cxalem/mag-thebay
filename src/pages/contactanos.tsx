import { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button/Button";
import styles from "../styles/Contact.module.css";

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
        <p className="text-center text-primary opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis laoreet
          mattis fermentum aliquam nunc parturient.
        </p>
      </div>

      <div className=" bg-white rounded-xl mt-56 z-10 shadow-xl pb-5 w-full">
        <div className={` ${styles.infoBackground} flex flex-col gap-2 py-4 rounded-t-xl`}>
            <h4 className="text-center text-xl text-white font-bold">Información de contacto</h4>
            <p className="hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              laoreet mattis fermentum aliquam nunc parturient.
            </p>

          <div className="grid grid-cols-1 gap-2 text-center">
            <div>
              <Image src="/" width={20} height={20} alt="Contactanos" />
              <span className="text-white opacity-70">+51 999 999 999</span>
            </div>

            <div>
              <Image src="/" width={20} height={20} alt="Contactanos" />
              <span className="text-white opacity-70">support@magtebya.org</span>
            </div>

            <div>
              <Image src="/" width={20} height={20} alt="Contactanos" />
              <span className="text-white opacity-70">Los Olivos, Lima - Perú</span>
            </div>
          </div>
        </div>

        <form action="" className="flex flex-col gap-6 px-4 mt-4">
          <div className="flex flex-col gap-6">
            <label className="hidden" htmlFor="name">Tu nombre</label>
            <input type="text" name="name" id="name" placeholder="Ramón José Martínez" className="border-b-2 h-8 border-blue-650" />
            <label className="hidden" htmlFor="email">Tu correo electrónico</label>
            <input type="email" name="email" id="email" placeholder="ramonjose@gmail.com" className="border-b-2 h-8 border-blue-650" />
          </div>
          <label className="hidden" htmlFor="message">Tu mensaje...</label>
          <textarea name="message" id="message" placeholder="Escribe tu mensaje..." className="border-b-2 h-8 border-blue-650 resize-none h-20" ></textarea>
          <Button type="primary">Enviar mensaje</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
