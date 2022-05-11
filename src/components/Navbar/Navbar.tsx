import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Button from "../Button/Button";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className="">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="hidden md:flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <Image src="/" alt="Mag-Thebay" width="100" height="100" />
                <ul className="flex gap-5">
                  <li>
                    <Link href="#">
                      <a className="text-primary font-semibold">Inicio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="text-primary font-semibold">Nosotros</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="text-primary font-semibold">Proyectos</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4">
                <Button href="#" type="secondary">
                  Sé voluntario
                </Button>
                <Button href="#" type="primary">
                  Contáctanos
                </Button>
              </div>
            </div>

            <div className="flex justify-between md:hidden">
              <Image src="/" alt="Mag-Thebay" width="100" height="100" />
              <Disclosure.Button>{!open ? "Menu" : "Cerrar"}</Disclosure.Button>
            </div>
            <Disclosure.Panel className="flex flex-col md:hidden">
              <div className="flex flex-col">
                <Disclosure.Button>
                  <Link href="#">
                    <a>Inicio</a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="#">
                    <a>Nosotros</a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="#">
                    <a>Proyectos</a>
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
