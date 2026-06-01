import Image from 'next/image'
import Link from 'next/link'
import Contact from '../components/Contact'
import SectionHeading from '../components/SectionHeading'
import Parallax from '../components/Parallax'

const partners = [
  {
    category: 'DEVELOPMENT',
    name: 'DIGANTIX',
    description: 'Web-Development und digitale Produkte',
    link: 'DIGANTIX.COM →',
    href: 'https://digantix.com',
  },
  {
    category: 'PRODUCTION & SIGNAGE',
    name: 'LEVELZ',
    description: 'Werbetechnik, Signaletik und Produktion.',
    link: '@LEVELZ.CH →',
    href: 'https://www.instagram.com/levelz.ch/',
  },
  {
    category: 'PHOTOGRAPHY',
    name: 'LUCA TOUVET',
    description: 'Fotografie für Marken, Editorials und Portraits.',
    link: 'LUCATOUVET.COM →',
    href: 'https://lucatouvet.com',
  },
  {
    category: 'MOTION & FILM',
    name: 'NEURO SOLUTIONS',
    description: 'Bewegtbild, Content-Produktion und Filmkonzepte.',
    link: 'NEUROSOLUTIONS.CH →',
    href: 'https://neurosolutions.ch',
  },
]

export default function StudioPage() {
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
          STUDIO
        </h1>
      </div>

      {/* ── Design mit Persönlichkeit ── */}
      <div className="bg-black">
        <div className="wrapper py-16 sm:py-24">
          <h2
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 600,
              fontSize: 'clamp(36px, 6vw, 90px)',
              lineHeight: '1.05',
              color: '#fff',
              textTransform: 'uppercase',
              maxWidth: '900px',
            }}
          >
            DESIGN MIT PERSÖNLICHKEIT.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-roboto)',
              fontWeight: 400,
              fontSize: 'clamp(17px, 2.5vw, 24px)',
              lineHeight: '1.75',
              color: '#fff',
              marginTop: '28px',
              maxWidth: '950px',
            }}
          >
            Mit Strategie, Kreativität und einem präzisen Blick begleite ich Marken durch
            Transformation – von der ersten Idee bis zum fertigen System. Unfold steht für
            visuelle Identitäten, die strategisch durchdacht, ästhetisch klar und emotional
            wirksam sind.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              className="uppercase border border-white text-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-black transition-colors"
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      </div>

      {/* ── About Me ── */}
      <div className="wrapper py-16 sm:py-24">
        <SectionHeading>ABOUT ME</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          {/* Photo */}
          <div className="relative w-full aspect-[3/4] bg-[#e8e4de] overflow-hidden">
            <Parallax speed={0.08} className="absolute inset-0">
              <Image
                src="/IMG_6576-1.jpg"
                alt="Giuliana Civelli"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-110"
              />
            </Parallax>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-5 lg:pt-48">
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#111',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                GIULIANA CIVELLI
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-roboto)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#555',
                  marginTop: '4px',
                }}
              >
                Founder &amp; Creative Direction
              </p>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-roboto)',
                fontWeight: 400,
                fontSize: '19px',
                lineHeight: '1.75',
                color: '#111',
              }}
            >
              Ich bin Giuliana Civelli, angehende Grafikerin EFZ im 4. Lehrjahr und Gründerin von
              Unfold Creative Studio. Aktuell arbeite ich bei Welter GmbH und entwickle parallel
              mein eigenes Studio mit Fokus auf Branding, Webdesign und digitale Markenauftritte.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-roboto)',
                fontWeight: 400,
                fontSize: '19px',
                lineHeight: '1.75',
                color: '#111',
              }}
            >
              Unfold entstand aus dem Anspruch, Gestaltung ganzheitlich zu denken – von der ersten
              Idee bis zur finalen Umsetzung. Ich verbinde strategisches Denken mit klarer visueller
              Gestaltung und entwickle Lösungen, die nicht nur gut aussehen, sondern Marken
              nachhaltig stärken.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-roboto)',
                fontWeight: 400,
                fontSize: '19px',
                lineHeight: '1.75',
                color: '#111',
              }}
            >
              Je nach Projekt arbeite ich mit einem Netzwerk aus unabhängigen Spezialist:innen in
              den Bereichen Development, Foto, Video und Produktion zusammen. So entstehen flexible
              Teams, die individuell auf jedes Projekt abgestimmt sind – ohne klassische
              Agenturstrukturen.
            </p>

            <Link
              href="/projects"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                fontSize: '20px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#111',
                textDecoration: 'none',
                marginTop: '8px',
              }}
              className="hover:opacity-50 transition-opacity w-fit"
            >
              VIEW SELECTED WORK →
            </Link>
          </div>
        </div>
      </div>


      {/* ── A Studio That Thinks Beyond Design ── */}
      <div style={{ backgroundColor: '#F6F6F6' }} className="flex items-center min-h-[60vh]">
      <div className="wrapper py-16 sm:py-24">
        <h2
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 600,
            fontSize: 'clamp(40px, 10vw, 100px)',
            lineHeight: '1.05',
            color: '#111',
            textTransform: 'uppercase',
            maxWidth: '1200px',
          }}
        >
          A STUDIO THAT THINKS BEYOND DESIGN.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-roboto)',
            fontWeight: 400,
            fontSize: 'clamp(18px, 3vw, 28px)',
            lineHeight: '1.75',
            color: '#111',
            marginTop: '28px',
            maxWidth: '90%',
          }}
        >
          Unfold arbeitet im Kern als Soloprojekt – aber selten allein. Für jede Disziplin, die
          über reines Grafikdesign hinausgeht, kollaboriere ich mit einem festen Netzwerk
          unabhängiger Kreativer. Engaged on a per-project basis, integrated into the creative
          direction.
        </p>
      </div>
      </div>

      {/* ── Creative Network Grid + Contact ── */}
      <div className="relative overflow-hidden">

      {/* ── Creative Network Grid ── */}
      <div className="wrapper pb-20 sm:py-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-5 pt-10 pb-10 pr-10"
            >
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '18px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#111',
                }}
              >
                {p.category}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 600,
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  color: '#111',
                  textTransform: 'uppercase',
                  lineHeight: '1.0',
                }}
              >
                {p.name}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#111',
                  maxWidth: '280px',
                }}
              >
                {p.description}
              </p>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '18px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#111',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
                className="hover:opacity-50 transition-opacity w-fit"
              >
                {p.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact + logo (beside contact on desktop) ── */}
      <div className="relative overflow-hidden">
        <Contact />
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            right: 'clamp(24px, 6vw, 110px)',
            top: '50%',
            width: 'clamp(180px, 22vw, 340px)',
            transform: 'translateY(-50%) rotate(12deg)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <Image
            src="/unfold-logo-black.svg"
            alt=""
            width={340}
            height={340}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      </div>
    </main>
  )
}
