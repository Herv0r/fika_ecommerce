import Link from "next/link";
import HeroSection from "@/components/Hero";
import Producs from "@/components/Producs";
import Brands from '@/components/Brands'

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <Producs />
      <Brands />




      {/* <nav>
        <ul>
          <li><Link href="/men">Men's Apparel</Link></li>
          <li><Link href="/women">Women's Apparel</Link></li>
          <li><Link href="/accessories">Accessories</Link></li>
          <li><Link href="/brand">Brands</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/account">Sign Up / Sign In</Link></li>
          <li><Link href="/cart">Cart</Link></li>
        </ul>
      </nav>

      <div className="grid grid-cols-3 gap-10"> 
          <div className="text-center">Featured Products</div>
          <div className="text-center">New Arrivals</div>
          <div className="text-center">Special Offers</div>
      </div> */}
    </main>
  )
}
