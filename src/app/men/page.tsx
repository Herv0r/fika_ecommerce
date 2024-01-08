import Link from "next/link";

const MensPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Men's Apparel</h1>

      <nav>
        <ul>
          <li><Link href="/menTops">Tops</Link></li>
          <li><Link href="/menBottoms">Bottoms</Link></li>
          <li><Link href="/menJackets">Jackets</Link></li>
        </ul>
      </nav>  
    </div>
  )
}

export default MensPage