"use client"
import { Roboto } from "next/font/google"
import { useState } from "react"
import { ModalComponent } from "./ModalNavbar"
import Image from "next/image"
import Link from "next/link.js"
import logo from "/public/L_Logotipo-Blue.svg"
import user from "/public/user.svg"
import bag from "/public/bag.svg"

const roboto = Roboto({ subsets: ['latin'], weight: '300'})

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleSidebar = () => {
    setOpenModal(!openModal);
  }

  return (
    <nav className={`${roboto.className}` }>
      <div className="relative ">
        <div className="absolute inset-x-0 flex justify-between py-5 md:px-8 items-center z-50 bg-gradient-to-b from-f">
          <div className="w-1/3 hidden md:block">
            <ul className="flex space-x-5 list-none ">
              <li>Inicio</li>
              <li>Tienda</li>
              <li>Acerca</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className="w-1/3 hidden max-md:block pl-0">
            <ModalComponent />
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

          <div className="flex md:space-x-5 w-1/3 justify-end max-md:pr-5">
            <div className="hidden md:flex">
              <Image 
                src={user} 
                width={24}
                alt="user icon"/>
              <h3 className="hidden md:block pl-1">Log In</h3>
              <h3 className="hidden max-md:block px-2">|</h3>
            </div>
            <Image 
              src={bag} 
              width={24}
              alt="cart icon"
              />
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar