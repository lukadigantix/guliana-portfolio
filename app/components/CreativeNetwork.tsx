import Image from 'next/image'
import Button from './Button'

const partners = [
  { icon: '/icons/development.png', name: 'DIGANTIX', specialty: 'Web Development' },
  { icon: '/icons/neuro.png', name: 'NEUROSOLUTIONS', specialty: 'Videography' },
  { icon: '/icons/luca.png', name: 'LUCA TOUVET', specialty: 'Photography' },
  { icon: '/icons/levelz.png', name: 'LEVELZ', specialty: 'Werbetechnik & Signaletik' },
]

export default function CreativeNetwork() {
  return (
    <div className="bg-black">
      <div className="wrapper py-16 lg:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 600,
                  fontSize: '46px',
                  lineHeight: '1.1',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Creative Network.
              </h3>
              <p style={{ fontFamily: 'var(--font-roboto)', fontWeight: 400, fontSize: '18px', color: '#fff', marginTop: '8px' }}>
                Ein Ansprechpartner. Ein Prozess. Ein Ergebnis.
              </p>
            </div>

            <p style={{ fontFamily: 'var(--font-roboto)', fontWeight: 400, fontSize: '18px', lineHeight: '1.6', color: '#fff', maxWidth: '78%' }}>
              Für jedes Projekt stellen wir das passende Team zusammen – flexibel,
              spezialisiert und ohne klassische Agenturstrukturen.
            </p>

            <Button
              variant="ghost"
              className="text-white! w-fit"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '16px', letterSpacing: '0.05em' } as React.CSSProperties}
            >
              MEET THE NETWORK →
            </Button>
          </div>

          {/* Right — partners */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:-ml-24">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2 text-center">
                {/* Icon placeholder — replace with <Image> when icons are ready */}
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                  <Image src={p.icon!} alt={p.name} width={82} height={82} className="w-full h-full object-cover" />
                </div>
                <p className="pt-4" style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: '18px', color: '#fff', letterSpacing: '0.05em' }}>
                  {p.name}
                </p>
                <p style={{ fontFamily: 'var(--font-roboto)', fontWeight: 400, fontSize: '17px', color: '#fff', lineHeight: '1.4' }}>
                  {p.specialty}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
