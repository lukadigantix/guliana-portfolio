import Image from 'next/image'

const clients = [
  { src: '/kaos.png', alt: 'Käos Bar & Restaurant', width: 120, className: 'h-12 w-auto object-contain' },
  { src: '/bubulino.png', alt: 'Bubulino', width: 160, className: 'h-12 w-auto object-contain' },
  { src: '/artluxe.png', alt: "Art d'Luxe", width: 120, className: 'h-24 w-auto object-contain' },
  { src: '/sk-cnc.png', alt: 'SK-CNC Solutions', width: 160, className: 'h-12 w-auto object-contain' },
  { src: '/blwrk.png', alt: 'BLWRK', width: 140, className: 'h-12 w-auto object-contain' },
]

export default function ClientLogos() {
  return (
    <div className="wrapper mb-10 sm:mb-20">
      <div className="grid grid-cols-3 sm:grid-cols-5  gap-6 sm:gap-4 mt-10 sm:mt-20 py-6 sm:py-8">
        {clients.map((client) => (
          <Image
            key={client.alt}
            src={client.src}
            alt={client.alt}
            width={client.width}
            height={60}
            className={client.className}
          />
        ))}
      </div>
    </div>
  )
}
