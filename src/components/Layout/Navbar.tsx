import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Button from "../Button/Button";
import logo from "../../public/images/logo-magthebay-oscuro.png";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className="relative py-5 z-50">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="hidden md:flex items-center justify-between">
              <div className="flex md:gap-4 lg:gap-8 items-center">
                <div className="flex md:max-w-56 lg:max-w-64 ">
                  <Image src={logo} alt="Mag-Thebay" objectFit="cover" width="255" height="60" />
                </div>
                <ul className="flex md:gap-2 lg:gap-5">
                  <li>
                    <Link href="/">
                      <a className="text-primary font-semibold">Inicio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nosotros">
                      <a className="text-primary font-semibold">Nosotros</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/proyectos">
                      <a className="text-primary font-semibold">Proyectos</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex md:gap-2 lg:gap-4">
                <Button href="#" type="secondary">
                  Sé voluntario
                </Button>
                <Button href="/contactanos" type="primary">
                  Contáctanos
                </Button>
              </div>
            </div>

            <div className="flex justify-between md:hidden z-50">
              <Image src={logo} alt="Mag-Thebay" width="255" height="60" />
              <Disclosure.Button>{!open ? "Menu" : "Cerrar"}</Disclosure.Button>
            </div>
            <Disclosure.Panel className="absolute flex flex-col w-full rounded-xl shadow-md mt-2 bg-white md:hidden">
              <div className="flex flex-col gap-2">
                <Disclosure.Button className={`border-b-2 border-blue-650 border-opacity-10`}>
                  <Link href="/">
                    <a className="text-primary font-semibold">Inicio</a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button className={`border-b-2 border-blue-650 border-opacity-10`}>
                  <Link href="/nosotros">
                    <a className="text-primary font-semibold">Nosotros</a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button className={`border-b-2 border-blue-650 border-opacity-10`}>
                  <Link href="/proyectos">
                    <a className="text-primary font-semibold">Proyectos</a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button className={`border-b-2 border-blue-650 border-opacity-10`}>
                  <Link href="/contactanos">
                    <a className="text-primary font-semibold">Contáctanos</a>
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Navbar;
