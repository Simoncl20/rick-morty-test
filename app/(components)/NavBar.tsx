import Image from "next/image"
import Link from "next/link"


const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white flex justify-between py-1 font-bold shadow-md px-50">
      <Link href="/">
      <Image src="/rick_morty_logo.svg" width={60} height={50} alt="Rick &Morty Logo"/>
      </Link>
      <div className="flex items-center gap-6 text-lg">
        <Link href="/" className="transition-colors duration-300 hover:text-green-400 hover:scale-105">
          Characters
        </Link>
        <Link href="/locations" className="transition-colors duration-300 hover:text-green-400 hover:scale-105">
          Locations
        </Link>
        <Link href="/episodes" className="transition-colors duration-300 hover:text-green-400 hover:scale-105">
          Episodes
        </Link>
      </div>
    </nav>
  )
}

export default NavBar