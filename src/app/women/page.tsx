import Link from "next/link";

const WomenPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Women's Apparel</h1>

      <nav>
        <ul>
          <li><Link href="/WomenTops">Tops</Link></li>
          <li><Link href="/WomenBottoms">Bottoms</Link></li>
          <li><Link href="/WomenJackets">Jackets</Link></li>
        </ul>
      </nav>  
    </div>
  )
}

export default WomenPage