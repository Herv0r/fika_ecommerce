import Image from "next/image"
import { product1, product2 } from "../images/index"

const data = [
  {
    id: 1,
    imageUrl: product1,
    title: 'Buzo Khea',
    description: '$24.36',
  },
  {
    id: 2,
    imageUrl: product1,
    title: 'Buzo Khea 2',
    description: '$30.36',
  },
  {
    id: 3,
    imageUrl: product1,
    title: 'Buzo Khea 3',
    description: '$24.36',
  },
  {
    id: 4,
    imageUrl: product1,
    title: 'Buzo Khea 4',
    description: '$24.36',
  },
]

const dataGrid = [
  {
    id: 1,
    imageUrl: product1,
    title: 'Buzo Khea',
    description: '$24.36',
  },
  {
    id: 2,
    imageUrl: product1,
    title: 'Buzo Khea 2',
    description: '$30.36',
  },
  {
    id: 3,
    imageUrl: product1,
    title: 'Buzo Khea 3',
    description: '$24.36',
  },
]

const Producs = () => {
  return (
    <main className="w-5/6 mx-auto py-12"> {/* DIV CONTENEDOR */}

      <div className="w-full"> {/* 1er DIV CON DISPLAY GRID*/}
        <div className="grid grid-cols-4 gap-5">
          {data.map((card) => (
            <div key={card.id} className="card hover:outline hover:outline-metal-100">
              <Image src={card.imageUrl} alt={card.title} className="" />
              <h2 className="font-bold pt-4 pl-2">{card.title}</h2>
              <p className="text-[#676666] pb-4 pl-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 gap-5">
          <div className="row-span-2">
            <Image src={product2} alt="grid rows" className="" />
          </div>
          <div className="col-span-1">
            <Image src={product2} alt="grid rows" width={200} className="" />
          </div>
          <div className="col-span-1">
            <Image src={product2} alt="grid rows" width={200} className="" />
          </div>
        </div>  
      </div>

    </main>
  )
}

export default Producs



{/* <div className="w-1/2 flex justify-end"> {/* 2do DIV CON IMAGEN COMPLETA*
  <Image 
    src={product2} 
    alt="imagen en grande"
    objectFit="cover"
    className="w-full"
    />
</div> */}