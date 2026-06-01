import Image from 'next/image'
import Link from 'next/link'
import Contact from '../../components/Contact'
import Reveal from '../../components/Reveal'
import Parallax from '../../components/Parallax'

export default function ProjektPlaylistPage() {
  return (
    <main>
      {/* ── Header ── */}
      <div className="wrapper py-16 sm:py-32">
        <h1
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 600,
            fontSize: 'clamp(48px, 7vw, 96px)',
            lineHeight: '1.05',
            textTransform: 'uppercase',
            color: '#111',
          }}
        >
          Project Detail
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 600,
            fontSize: 'clamp(20px, 3vw, 32px)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#111',
            marginTop: '8px',
          }}
        >
          Editorial
        </p>
      </div>

      {/* ── Back link ── */}
      <div className="wrapper pb-6">
        <Link
          href="/projects"
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 400,
            fontSize: '22px',
            color: '#111',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          ← back
        </Link>
      </div>

      {/* ── Hero image (subtle parallax) ── */}
      <div className="wrapper">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
          <Parallax speed={0.06} className="absolute inset-0">
            <Image
              src="/projekplaylistcover.jpg"
              alt="Projekt Playlist – B:B Cover"
              fill
              sizes="100vw"
              className="object-cover scale-110"
              priority
            />
          </Parallax>
        </div>
      </div>

      {/* ── Info row ── */}
      <div className="wrapper py-12">
        <div className="flex justify-end gap-10 sm:gap-16 lg:gap-24">
          <div className="flex flex-col gap-2">
            <p
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 600,
                fontSize: 'clamp(20px, 3vw, 32px)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Client
            </p>
            <p
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 400,
                fontSize: '18px',
                color: '#111',
              }}
            >
              SFGB
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 600,
                fontSize: 'clamp(20px, 3vw, 32px)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Year
            </p>
            <p
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 400,
                fontSize: '18px',
                color: '#111',
              }}
            >
              2025
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 600,
                fontSize: 'clamp(20px, 3vw, 32px)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Category
            </p>
            <p
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 400,
                fontSize: '18px',
                color: '#111',
              }}
            >
              Editorial
            </p>
          </div>
        </div>
      </div>

      {/* ── Description ── */}
      <div className="wrapper py-16 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 600,
              fontSize: 'clamp(28px, 4vw, 40px)',
              textTransform: 'uppercase',
              color: '#111',
              lineHeight: '1.1',
            }}
          >
            Projektbeschreibung
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#333',
              maxWidth: '100%',
            }}
          >
            Im Rahmen eines Schulprojekts wurde eine visuelle Umsetzung zum Thema „Playlist" entwickelt.
            Ziel war es, Musik nicht nur hörbar, sondern visuell erlebbar zu machen und eine gestalterische
            Übersetzung von Klang, Stimmung und Atmosphäre zu schaffen.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 600,
              fontSize: '18px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#111',
            }}
          >
            Meine Rolle
          </p>
          <p
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#333',
            }}
          >
            Editorial Design, Konzept &amp; Gestaltung
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 600,
              fontSize: '18px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#111',
            }}
          >
            Rahmenbedingungen
          </p>
          <p
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#333',
            }}
          >
            Schulprojekt / Eigenständige Umsetzung
          </p>
        </div>
      </div>

      {/* ── Gallery ── */}
      

      {/* ── Contact + logo overlay ── */}
      <div className="relative" style={{ overflowX: 'hidden' }}>
        <div className="wrapper flex flex-col gap-4 pb-50">
        <Reveal>
          <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
            <Image
              src="/playlist-2.jpg"
              alt="Projekt Playlist – Wizardry Editorial Spread"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
            <Image
              src="/playlist-3.jpg"
              alt="Projekt Playlist – B:B Vinyl"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
        <Contact />
        <div
          style={{
            position: 'absolute',
            right: 'clamp(-90px, -6vw, -24px)',
            top: '69%',
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
            width={500}
            height={500}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </main>
  )
}
