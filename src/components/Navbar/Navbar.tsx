import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className=''>
        <nav className='flex items-center'>
            <Image 
                src="/"
                alt="Mag-Thebay"
                width="100"
                height="100"
            />
            <ul className='flex'>
                <li><Link href="#"><a>Inicio</a></Link></li>
                <li><Link href="#"><a>Nosotros</a></Link></li>
                <li><Link href="#"><a>Proyectos</a></Link></li>
            </ul>
            <button>Sé voluntario</button>
            <button>Contáctanos</button>
        </nav>
    </header>
  )
}

export default Navbar