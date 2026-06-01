import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from './SectionHeading'
import Button from './Button'

const works = [
  { src: '/sw-1.png', alt: 'Kramer Webredesign', width: 800, height: 600, href: '/projects/kramer' },
  { src: '/sw-2.png', alt: 'Lorrainechilbi Plakat', width: 800, height: 600, href: '/projects/lorrainechilbi' },
  { src: '/sw-3.png', alt: 'The Pour Class', width: 600, height: 600, href: '/projects/the-pour-class' },
  { src: '/sw-4.png', alt: 'Kaos Logo Design', width: 600, height: 600, href: '/projects/kaos' },
  { src: '/sw-5.png', alt: 'Bubulino Packaging', width: 600, height: 600, href: '/projects/bubulino' },
  { src: '/sw-6.png', alt: 'Projekt Playlist', width: 600, height: 600, href: '/projects/projekt-playlist' },
]

export default function SelectedWork() {
  return (
    <div className="bg-black py-20">
      <div className="wrapper">
        <SectionHeading color="#fff">Selected work</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 sm:mt-20">
          {works.slice(0, 2).map((w) => (
            <Link key={w.src} href={w.href} className="overflow-hidden group relative block">
              <Image src={w.src} alt={w.alt} width={w.width} height={w.height} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {works.slice(2).map((w) => (
            <Link key={w.src} href={w.href} className="overflow-hidden group relative block">
              <Image src={w.src} alt={w.alt} width={w.width} height={w.height} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
