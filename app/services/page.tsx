import Image from 'next/image'
import Contact from '../components/Contact'
import SectionHeading from '../components/SectionHeading'
import HowWeWork from '../components/HowWeWork'

/* ─── Service columns ─── */
const services = [
  {
    title: 'BRANDING',
    subtitle: 'Für Marken, die professionell auftreten wollen.',
    items: [
      'Logo Design',
      'Corporate Design',
      'Brand Strategy',
      'Farb- & Typkonzept',
      'Brand Guidelines',
      'Packaging Design',
      'Print Design',
      'Art Direction',
    ],
  },
  {
    title: 'WEB & DIGITAL',
    subtitle: 'Digitale Auftritte mit Strategie und Nutzerführung.',
    items: [
      'Webdesign',
      'Landingpages',
      'UI / UX Design',
      'Responsive Design',
      'Onepager & Websites',
      'E-Commerce Lösungen',
      'Development',
      'SEO Basics & Launch Support',
    ],
  },
  {
    title: 'CONTENT & SOCIAL MEDIA',
    subtitle: 'Content, der Marken sichtbar macht.',
    items: [
      'Content Strategie',
      'Social Structure Content',
      'Feed Design',
      'Social Media Assets',
      'Foto- & Videoproduktion',
      'Creative Direction',
      'Kampagnenvisuals',
      'Editing & Postproduktion',
    ],
  },
  {
    title: 'PRODUCTION & SIGNAGE',
    subtitle: 'Physische Markenauftritte & Werbetechnik.',
    items: [
      'Fahrzeugbeschriftungen',
      'Schaufensterbeschriftungen',
      'Beschriftungen',
      'Textildruck',
      'Sticker & Folierungen',
      'Messe- & Eventbranding',
      '3D-Druck & Spezialanfertigungen',
    ],
  },
  {
    title: 'MARKETING & AUTOMATION',
    subtitle: 'Digitale Sichtbarkeit & Performance.',
    items: [
      'Meta Ads',
      'Landingpage Funnels',
      'Marketing Strategie',
      'Copywriting',
      'Conversion Optimierung',
      'KI-Workflows',
      'Automatisierung',
      'CRM- & Lead-Prozesse',
    ],
  },
]

/* ─── Creative Network partners ─── */
const network = [
  {
    category: 'DEVELOPMENT',
    name: 'DIGANTIX',
    description: 'Webentwicklung, Apps & digitale Systeme',
    image: '/0f732c64a9cfdfa936752c8929f7cefd33ec9f1b.png',
  },
  {
    category: 'VIDEOGRAPHY',
    name: 'NEUROSOLUTIONS',
    description: 'Video-Produktionen, Ads & Performance Marketing',
    image: '/f02d98ac19e54cc3ef94453c3ebb67954c4afaa3.png',
  },
  {
    category: 'PHOTOGRAPHY',
    name: 'LUCA TOUVET',
    description: 'Fotografie, Campaign Visuals & Creative Shoots',
    image: '/18f975afcf425ab29cf66d6ae49627109cd0faef.png',
  },
  {
    category: 'WERBETECHNIK',
    name: 'LEVELZ',
    description: 'Beschriftungen, Druck, Signaletik & Produktion',
    image: '/e531e8c57a510162d87e7e8b9d17666f96d803cd.png',
  },
]

/* ─── Packages ─── */
const packages = [
  {
    number: '01',
    name: 'FOUNDATION',
    tagline: 'Die Marke, von Grund auf.',
    intro:
      'Für neue Marken, Rebrandings und Unternehmen, die ein visuelles Fundament brauchen, das trägt. Wir entwickeln Identität, Tonalität und System – nicht nur ein Logo.',
    includes: [
      'Brand Strategy Workshop',
      'Logo-Entwicklung',
      'Farb- & Typkonzept',
      'Visual Identity System',
      'Brand Guidelines',
      'Basis Anwendungen (z.B. Visitenkarte, Print)',
    ],
    ideal: 'Start-ups, Personal Brands, Rebrandings',
  },
  {
    number: '02',
    name: 'PRESENCE',
    tagline: 'Marke trifft Web.',
    intro:
      'Ein konsistenter Markenauftritt kombiniert mit einer durchdachten digitalen Präsenz.',
    includes: [
      'Branding oder Brand Refresh',
      'Webdesign (Onepage / Website)',
      'UI / UX Konzept',
      'Development mit Partnernetzwerk',
      'Domain, SEO Basics & Launch Support',
    ],
    ideal: 'Brands, die professionell online auftreten wollen.',
  },
  {
    number: '03',
    name: 'MOMENTUM',
    tagline: 'Sichtbarkeit. mit System.',
    intro:
      'Content und Social Media für Sichtbarkeit, Community und Markenwirkung.',
    includes: [
      'Content Strategie',
      'Foto- & Videoproduktion',
      'Reels & Social Media Assets',
      'Feed Ästhetik & Templates',
      'Creative Direction & Shooting Konzepte',
      'Postproduktion / Editing',
    ],
    ideal: 'Brands mit Fokus auf Wachstum und Sichtbarkeit',
  },
  {
    number: '04',
    name: 'PARTNERSHIP',
    tagline: 'Langfristig. Ganzheitlich.',
    intro:
      'Ganzheitliche kreative Begleitung über Design, Content und Produktion hinweg.',
    includes: [
      'Branding',
      'Web',
      'Content',
      'Kampagnen & Creative Direction',
      'Produktion mit Netzwerk',
      'Laufende kreative Betreuung',
    ],
    ideal: 'Marken mit langfristigem Support-Bedarf',
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <div className="wrapper py-32 sm:py-80 flex justify-center">
        <h1
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 600,
            fontSize: 'clamp(64px, 18vw, 140px)',
            lineHeight: '1',
            letterSpacing: '-0.02em',
            color: '#111',
            textTransform: 'uppercase',
          }}
        >
          SERVICES
        </h1>
      </div>

      {/* ── Design, Content & Digital Experiences ── */}
      <div className="bg-black">
        <div className="wrapper py-16 sm:py-24">
          <h2
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 600,
              fontSize: 'clamp(38px, 9vw, 100px)',
              lineHeight: '1.05',
              color: '#fff',
              textTransform: 'uppercase',
              maxWidth: '1200px',
            }}
          >
            DESIGN, CONTENT &amp; DIGITAL EXPERIENCES.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-roboto)',
              fontWeight: 400,
              fontSize: 'clamp(18px, 3.5vw, 32px)',
              color: '#ffffff',
              marginTop: '20px',
            }}
          >
            Alles aus einer Hand – durch ein kreatives Netzwerk aus Spezialist:innen.
          </p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="w-full py-10 pl-3 pr-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="flex flex-col gap-6"
              style={{ backgroundColor: '#F6F6F6', paddingTop: '64px', paddingBottom: '72px', paddingLeft: '20px', paddingRight: '10px' }}
            >
              <div style={{ minHeight: '90px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-pp-mori)',
                    fontWeight: 600,
                    fontSize: 'clamp(22px, 2vw, 32px)',
                    color: '#111',
                    textTransform: 'uppercase',
                    lineHeight: '1.1',
                  }}
                >
                  {svc.title}
                </p>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-roboto)',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '1.6',
                  color: '#111',
                }}
              >
                {svc.subtitle}
              </p>
              <ul className="flex flex-col gap-2">
                {svc.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                    style={{
                      fontFamily: 'var(--font-pp-mori)',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '1.2',
                      color: '#111',
                    }}
                  >
                    <span style={{ marginTop: '1px', flexShrink: 0 }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Built Through a Creative Network ── */}
      <div className="bg-[#1B1B1B]">
        <div className="w-full flex flex-col lg:flex-row lg:items-center">

          {/* Left: heading */}
          <div className="flex flex-col justify-center px-8 py-16 lg:py-26 lg:w-[520px] lg:shrink-0">
            <h2
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 600,
                fontSize: 'clamp(32px, 5vw, 52px)',
                lineHeight: '1.1',
                color: '#fff',
                textTransform: 'uppercase',
              }}
            >
              BUILT THROUGH A CREATIVE NETWORK.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#ffffff',
                marginTop: '20px',
                maxWidth: '400px',
              }}
            >
              Für jedes Projekt stellen wir das passende Team zusammen – flexibel, spezialisiert
              und ohne klassische Agenturstrukturen.
            </p>
          </div>

          {/* Right: partner cards */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3 p-2 pr-6">
            {network.map((p) => (
              <div key={p.name} className="flex flex-col">
                {/* Image */}
                <div className="relative w-full bg-[#222]" style={{ aspectRatio: '4/3' }}>
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="bg-white flex flex-col gap-1 p-4">
                  <p
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 300,
                      fontSize: '16px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#555',
                    }}
                  >
                    {p.category}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-pp-mori)',
                      fontWeight: 600,
                      fontSize: 'clamp(18px, 2.4vw, 26px)',
                      color: '#111',
                      textTransform: 'uppercase',
                      lineHeight: '1.1',
                      paddingBottom: '20px',
                      paddingTop: '10px',
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-pp-mori)',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#444',
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Packages ── */}
      <div className="wrapper py-16 sm:py-24 relative overflow-hidden">
        <SectionHeading>PACKAGES</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 relative z-10 items-stretch">
          {packages.map((pkg) => (
            <div key={pkg.number} className="flex flex-col gap-5 h-full">
              <p
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 400,
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  lineHeight: '1',
                  color: '#111',
                }}
              >
                {pkg.number}
              </p>

              <div className="flex flex-col gap-2">
                <p
                  style={{
                    fontFamily: 'var(--font-pp-mori)',
                    fontWeight: 600,
                    fontSize: '26px',
                    color: '#111',
                    textTransform: 'uppercase',
                    lineHeight: '1.1',
                  }}
                >
                  {pkg.name}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-pp-mori)',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#111',
                  }}
                >
                  {pkg.tagline}
                </p>
              </div>

              <div style={{ borderTop: '1px solid #111', width: '100%' }} />

              <p
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#111',
                  minHeight: '100px',
                }}
              >
                {pkg.intro}
              </p>

              <ul className="flex flex-col gap-1" style={{ minHeight: '200px' }}>
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-pp-mori)',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#111',
                    }}
                  >
                    + {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#111',
                  paddingTop: '16px',
                }}
              >
                <div>Ideal for:</div>
                <div>{pkg.ideal}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative large logo */}
        <div
          className="hidden lg:block absolute bottom-0 right-0 select-none pointer-events-none"
          style={{ opacity: 0.06 }}
        >
          <Image
            src="/unfold-logo-final.svg"
            alt=""
            width={500}
            height={300}
            className="w-auto h-auto"
          />
        </div>
      </div>

      {/* ── How We Work + Contact (relative wrapper for logo overlay) ── */}
      <div className="relative overflow-hidden">

        {/* Decorative logo */}
        <div
          style={{
            position: 'absolute',
            right: 'clamp(-90px, -6vw, -24px)',
            bottom: '30%',
            width: 'clamp(130px, 26vw, 500px)',
            opacity: 1,
            transform: 'rotate(12deg)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <Image
            src="/black-logo.png"
            alt=""
            width={560}
            height={560}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* ── How We Work ── */}
        <HowWeWork />

        <Contact />
      </div>
    </main>
  )
}
