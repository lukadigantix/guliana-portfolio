import Image from 'next/image'
import SectionHeading from './SectionHeading'

const items = [
  { icon: '/icons/brand.png', title: 'Brand Identity', desc: 'Für Marken, die professionell auftreten wollen.' },
  { icon: '/icons/web.png', title: 'Web & Digital', desc: 'Digitale Auftritte mit Strategie und Nutzerführung.' },
  { icon: '/icons/content.png', title: 'Content & Social Media', desc: 'Content, der Marken sichtbar macht.' },
  { icon: '/icons/production.png', title: 'Production & Signage', desc: 'Physische Markenauftritte & Werbetechnik.' },
  { icon: '/icons/marketing.png', title: 'Marketing & Automation', desc: 'Digitale Sichtbarkeit & Performance.' },
]

export default function WhatWeDesign() {
  return (
    <>
      <div className="wrapper py-20">
        <SectionHeading>What we design</SectionHeading>
      </div>

      <div className="wrapper pb-10 sm:pb-20">
        {/* Mobile/tablet: item-by-item */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:hidden">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <Image src={item.icon} alt={item.title} width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
              <h3 style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: 'clamp(22px, 3vw, 38px)', lineHeight: '1.2' }}>{item.title}</h3>
              <p style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 400, fontSize: '16px', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Desktop: 3-row separated layout */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'auto auto auto',
            columnGap: '2rem',
            rowGap: '1.5rem',
          }}
        >
          {items.map((item) => (
            <Image key={`icon-${item.title}`} src={item.icon} alt={item.title} width={56} height={56} sizes="56px" className="w-14 h-14 object-contain" />
          ))}
          {items.map((item) => (
            <h3 key={`title-${item.title}`} style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: '38px', lineHeight: '1.2' }}>
              {item.title}
            </h3>
          ))}
          {items.map((item) => (
            <p key={`desc-${item.title}`} style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 400, fontSize: '18px', lineHeight: '1.5' }}>
              {item.desc}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
