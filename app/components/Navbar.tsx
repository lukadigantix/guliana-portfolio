import Image from 'next/image'
import MenuButton from './MenuButton'

export default function Navbar() {
  return (
    <nav className="wrapper">
      <div className="flex items-center justify-between pt-6">
        <Image
          src="/unfold-logo-final.svg"
          alt="Unfold Creative Studio"
          width={100}
          height={100}
        />
        <MenuButton />
      </div>
    </nav>
  )
}
