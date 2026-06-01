import Image from 'next/image'
import Link from 'next/link'
import MenuButton from './MenuButton'

export default function Navbar() {
  return (
    <nav className="wrapper">
      <div className="flex items-center justify-between py-6">
        <Link href="/" aria-label="Unfold Creative Studio — početna" className="cursor-pointer">
          <Image
            src="/unfold-logo-un.svg"
            alt="Unfold Creative Studio"
            width={100}
            height={100}
            className="transition-opacity duration-300 hover:opacity-60"
          />
        </Link>
        <MenuButton />
      </div>
    </nav>
  )
}
