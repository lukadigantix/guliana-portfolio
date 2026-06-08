import Image from 'next/image'

const clients = [
  { src: '/kaos.png', alt: 'Käos Bar & Restaurant', width: 120, className: 'h-8 sm:h-12 w-auto object-contain' },
  { src: '/bubulino.png', alt: 'Bubulino', width: 160, className: 'h-8 sm:h-12 w-auto object-contain' },
  { src: '/artluxe.png', alt: "Art d'Luxe", width: 120, className: 'h-16 sm:h-24 w-auto object-contain' },
  { src: '/sk-cnc.png', alt: 'SK-CNC Solutions', width: 160, className: 'h-8 sm:h-12 w-auto object-contain' },
  { src: '/blwrk.png', alt: 'BLWRK', width: 140, className: 'h-8 sm:h-12 w-auto object-contain' },
  { src: '/logo-client-text.svg', alt: 'Client', width: 160, className: 'h-8 sm:h-12 w-auto object-contain' },
  { src: '/thepour-logo.svg', alt: 'The Pour Class', width: 120, className: 'h-14 sm:h-20 w-auto object-contain' },
]

export default function ClientLogos() {
  const repeated = [...clients, ...clients, ...clients, ...clients]

  return (
    <div className="overflow-hidden mt-10 sm:mt-20 mb-10 sm:mb-20 py-6 sm:py-8">
      <div className="animate-marquee flex items-center gap-16 w-max">
        {repeated.map((client, i) => (
          <Image
            key={i}
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
