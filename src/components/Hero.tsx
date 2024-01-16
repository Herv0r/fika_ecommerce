import { Montserrat } from "next/font/google"
import banner1 from "../images/banner1.jpg"
import Image from "next/image"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "700"
})

const HeroSection = () => {
  return (
    <>
      <div className="relative ">
        <div className="absolute -z-50 w-full h-full opacity-50">
          <Image
            src={banner1}
            alt="background image"
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className={`text-center text-4xl px-12 md:text-5xl md:px-40 lg:text-6xl lg:px-60 ${montserrat.className}`}>Write a title here. Click to add and edit title text</h1>
          <div className="py-12">
            <button className="border border-black rounded-lg py-2 px-4 bg-[#000000] text-f">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection