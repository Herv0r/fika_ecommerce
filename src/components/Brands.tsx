import Image from "next/image"
import { Montserrat } from "next/font/google"
import {
  nike,
  puma,
  topper,
  under,
  adidas
} from "@/images"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "700"
})

const Brands = () => {
  return (
    <section>
      <h1 className={`text-center text-2xl mt-20 ${montserrat.className}`}>Brands</h1>
      <hr className="text-[#dddcdc] mt-6 w-11/12 mx-auto" />
      <div className="flex justify-evenly items-center my-10">
        <div>
          <Image src={nike} alt="" width={100} className="" />
        </div>
        <div>
          <Image src={under} alt="" width={100} className="" />
        </div>
        <div>
          <Image src={adidas} alt="" width={100} className="" />
        </div>
        <div>
          <Image src={topper} alt="" width={100} className="" />
        </div>
        <div>
          <Image src={puma} alt="" width={100} className="" />
        </div>
      </div>
      <hr className="text-[#dddcdc] mb-20 w-11/12 mx-auto" />
    </section>
  )
}

export default Brands