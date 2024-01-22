import Image from "next/image"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "700"
})


import {
  ropa1,
  ropa2,
  ropa3,
  ropa4,
  ropa5,
  ropa6,
  ropa7,
  ropa8,
  ropa9,
  ropa10,
  ropa11,
} from "../images/index"

const data = [
  {
    id: 1,
    imageUrl: ropa8,
    title: 'Buzo Khea',
    description: '$24.36',
  },
  {
    id: 2,
    imageUrl: ropa2,
    title: 'Buzo Khea 2',
    description: '$30.36',
  },
  {
    id: 3,
    imageUrl: ropa3,
    title: 'Buzo Khea 3',
    description: '$24.36',
  },
  {
    id: 4,
    imageUrl: ropa4,
    title: 'Buzo Khea 4',
    description: '$24.36',
  },
]

const Producs = () => {
  return (
    <main className="w-5/6 mx-auto"> {/* DIV CONTENEDOR */}
      <h1 className={`text-center text-2xl py-12 ${montserrat.className}`}>Pagina principal</h1>
      <div className="w-full"> {/* 1er DIV CON DISPLAY GRID*/}
        <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-2">
          {data.map((card) => (
            <div key={card.id} className="card hover:outline hover:outline-metal-100">
              <Image src={card.imageUrl} alt={card.title} className="" />
              <h2 className="font-bold pt-4 pl-2">{card.title}</h2>
              <p className="text-[#676666] pb-4 pl-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[650px] overflow-hidden flex gap-5 max-lg:flex-col max-lg:overflow-visible max-lg:h-full"> {/* Ajusta la altura según tus necesidades */}
        {/* Primera imagen, ocupa dos filas en la primera columna */}
        <div className="w-full max-lg:w-full max-lg:mx-auto">
          <Image src={ropa4} alt="grid rows" className="" />
        </div>

        <div className="w-[60%] flex flex-col gap-5 max-lg:w-full max-lg:mx-auto">
          {/* Segunda imagen, ocupa dos columnas en la primera fila */}
          <div className="h-1/2 overflow-hidden">
            <Image src={ropa9} alt="grid rows" className="" />
          </div>

          {/* Tercera imagen, ocupa dos columnas en la segunda fila */}
          <div className=" h-1/2 overflow-hidden">
            <Image src={ropa6} alt="grid rows" className="" />
          </div>
        </div>
      </div>

    </main>
  )
}

export default Producs
