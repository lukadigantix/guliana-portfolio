import Image from 'next/image'
import Link from 'next/link'
import Contact from './Contact'
import Reveal from './Reveal'
import Parallax from './Parallax'

export type GalleryImage = { src: string; alt: string; width?: number; height?: number }
export type PaletteColor = { hex: string; label: string }
export type ProjectFont = { name: string; label: string }

export type ProjectDetailProps = {
  /** Subtitle shown under "PROJECT DETAIL", e.g. "BRANDING" */
  category: string
  client: string
  year: string
  categoryLabel: string
  description: string
  role: string
  conditions: string
  heroImage: string
  heroAlt: string
  gallery?: GalleryImage[]
  palette?: PaletteColor[]
  fonts?: ProjectFont[]
}

export default function ProjectDetail({
  category,
  client,
  year,
  categoryLabel,
  description,
  role,
  conditions,
  heroImage,
  heroAlt,
  gallery = [],
  palette,
  fonts,
}: ProjectDetailProps) {
  return (
    <main>
      {/* ── Header ── */}
      <div className="wrapper py-32">
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
          {category}
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
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <Parallax speed={0.06} className="absolute inset-0">
            <Image src={heroImage} alt={heroAlt} fill sizes="100vw" className="object-cover scale-110" priority />
          </Parallax>
        </div>
      </div>

      {/* ── Info row ── */}
      <div className="wrapper py-12">
        <div className="flex justify-end gap-10 sm:gap-16 lg:gap-24">
          {[
            { label: 'Client', value: client },
            { label: 'Year', value: year },
            { label: 'Category', value: categoryLabel },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
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
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 400,
                  fontSize: '18px',
                  color: '#111',
                  whiteSpace: 'pre-line',
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
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
            {description}
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
            {role}
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
            {conditions}
          </p>
        </div>
      </div>

      {/* ── Gallery ── */}
      {gallery.length > 0 && (
        <div className="wrapper flex flex-col gap-4 pb-16">
          {gallery.map((img, i) => (
            <Reveal key={i} delay={i * 80}>
              {img.width && img.height ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              ) : (
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-cover" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      )}

      {/* ── Color palette ── */}
      {palette && palette.length > 0 && (
        <div className="wrapper flex flex-col items-center gap-8 pb-16">
          <h3
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 600,
              fontSize: '22px',
              color: '#111',
            }}
          >
            Color Palette
          </h3>
          <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
            {palette.map((c) => (
              <div key={c.hex} className="flex flex-col items-center gap-3">
                <div
                  style={{
                    width: 'clamp(80px, 14vw, 120px)',
                    height: 'clamp(80px, 14vw, 120px)',
                    borderRadius: '9999px',
                    backgroundColor: c.hex,
                    border: c.hex.toUpperCase() === '#FFFFFF' ? '1px solid #E5E5E5' : 'none',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-pp-mori)',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#111',
                  }}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Fonts ── */}
      {fonts && fonts.length > 0 && (
        <div className="wrapper pb-16" style={{ backgroundColor: '#AEC0B0' }}>
          <div className="py-12 flex flex-col gap-8">
            <h3
              className="text-center"
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 600,
                fontSize: '22px',
                color: '#111',
              }}
            >
              Font
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {fonts.map((f) => (
                <div key={f.name} className="flex flex-col gap-2">
                  <p
                    style={{
                      fontFamily: 'var(--font-pp-mori)',
                      fontWeight: 600,
                      fontSize: '28px',
                      color: '#111',
                    }}
                  >
                    {f.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-pp-mori)',
                      fontWeight: 400,
                      fontSize: '14px',
                      letterSpacing: '0.04em',
                      color: '#111',
                    }}
                  >
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Contact + logo (sits neatly beside the contact text on desktop) ── */}
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
    </main>
  )
}
