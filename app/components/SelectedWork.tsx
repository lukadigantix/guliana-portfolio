import Image from 'next/image'
import SectionHeading from './SectionHeading'
import Button from './Button'

const works = [
  { src: '/sw-1.png', alt: 'Selected work 1', width: 800, height: 600 },
  { src: '/sw-2.png', alt: 'Selected work 2', width: 800, height: 600 },
  { src: '/sw-3.png', alt: 'Selected work 3', width: 600, height: 600 },
  { src: '/sw-4.png', alt: 'Selected work 4', width: 600, height: 600 },
  { src: '/sw-5.png', alt: 'Selected work 5', width: 600, height: 600 },
  { src: '/sw-6.png', alt: 'Selected work 6', width: 600, height: 600 },
]

export default function SelectedWork() {
  return (
    <div className="bg-black py-20">
      <div className="wrapper">
        <SectionHeading color="#fff">Selected work</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 sm:mt-20">
          {works.slice(0, 2).map((w) => (
            <div key={w.src} className="overflow-hidden group relative">
              <Image src={w.src} alt={w.alt} width={w.width} height={w.height} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {works.slice(2).map((w) => (
            <div key={w.src} className="overflow-hidden group relative">
              <Image src={w.src} alt={w.alt} width={w.width} height={w.height} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
