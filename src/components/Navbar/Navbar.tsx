import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className="">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="hidden md:flex items-center">
              <Image src="/" alt="Mag-Thebay" width="100" height="100" />
              <ul className="flex">
                <li>
                  <Link href="#">
                    <a>Inicio</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Nosotros</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Proyectos</a>
                  </Link>
                </li>
              </ul>
              <button>Sé voluntario</button>
              <button>Contáctanos</button>
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
