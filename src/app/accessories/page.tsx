import Link from "next/link";

const Accessories = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Accessories</h1>

      <nav>
        <ul>
          <li><Link href="/hats">Hats</Link></li>
          <li><Link href="/socks">Socks</Link></li>
          <li><Link href="/bags">Bags</Link></li>
          <li><Link href="/gloves">Gloves</Link></li>
          <li><Link href="/water Bottles">Water Bottles</Link></li>
        </ul>
      </nav>  
    </div>
  )
}

export default Accessories