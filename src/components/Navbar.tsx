import Image from "next/image"
import { User, Bag } from "../images/index.js"
import logo from "/public/L_Logotipo-Blue.svg"
import Link from "next/link.js"
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ['latin'], weight: '300'})

const Navbar = () => {
  return (
    <nav className={`${roboto.className}`}>
      <div className="flex justify-between py-5 px-10 items-center ">
        <div className="w-1/3">
          <ul className="flex space-x-5 list-none ">
            <li>Inicio</li>
            <li>Tienda</li>
            <li>Acerca</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div className="w-1/3">
          <Link href="/">
            <Image 
              src={logo} 
              alt="Logo"
              width={130}
              className="mx-auto"
              />
          </Link>
        </div>

        <div className="flex space-x-5 w-1/3 justify-end">
          <div className="flex space-x-2">
            <Image 
              src={User} 
              width={24}
              alt="user icon"/>
            <h3>Log In</h3>
          </div>
          <Image 
            src={Bag} 
            width={24}
            alt="cart icon"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar