import Image from 'next/image'
import Link from 'next/link'
import Contact from '../components/Contact'

const categories = [
  'PRINT',
  'WEBDESIGN',
  'SOCIAL MEDIA',
  'DESIGN',
  'EDITORIAL',
  'UI/UX',
  'BRANDING',
  'PACKAGING',
  'SCHOOL PROJECTS',
]

const projects = [
  { title: 'PROJEKT\nPLAYLIST', subtitle: 'SFGB 2026', image: '/projekplaylistcover.jpg', slug: 'projekt-playlist' },
  { title: 'LOGO\nDESIGN', subtitle: 'Restaurant Kaos', image: '/kaoscover.png' },
  { title: 'BRANDING', subtitle: 'The Pour Class', image: '/thepourcover.png' },
  { title: 'LOGO\nDESIGN', subtitle: 'Zytgeischt Gwafför', image: '/gwafforcover.png' },
  { title: 'REBRANDING', subtitle: 'SK-CNC Solutions', image: '/skcnccover.png' },
  { title: 'WELTFORMAT\nPLAKAT', subtitle: 'SFGB 2024', image: '/weltcover.png' },
  { title: 'LORRAINECHILBI\nPLAKAT', subtitle: 'SFGB 2025', image: '/lobrainecover.png' },
  { title: 'PACKAGING\nDESIGN', subtitle: 'BUBULINO', image: '/bubulinocover.png' },
  { title: 'WEBREDESIGN', subtitle: 'Kramer', image: '/weberdesign.png' },
]

export default function ProjectsPage() {
  return (
    <>
      <div className="wrapper py-12 sm:py-16">
        <h2
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 600,
            fontSize: '84px',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            color: '#111',
          }}
        >
          PROJECTS
        </h2>

        <p
          className="mt-6"
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '1.4',
            color: '#111',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            maxWidth: '70%',
          }}
        >
          {categories.map((cat, i) => (
            <span key={cat}>
              {i > 0 && ' / '}
              <span style={{ fontWeight: cat === 'SCHOOL PROJECTS' ? 700 : 400 }}>
                {cat}
              </span>
            </span>
          ))}
        </p>
      </div>

      <div className="wrapper pb-20 flex flex-col gap-24">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0
          const infoPanel = (
            <div
              className="flex flex-col justify-end p-8 sm:p-12 flex-shrink-0"
              style={{
                width: 'clamp(180px, 30%, 550px)',
       
                backgroundColor: '#F3F3F3',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 600,
                  fontSize: '42px',
                  lineHeight: '1.1',
                  textTransform: 'uppercase',
                  color: '#111',
                  whiteSpace: 'pre-line',
                }}
              >
                {project.title}
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 400,
                  fontSize: '36px',
                  textTransform: 'none',
                  color: '#111',
                }}
              >
                {project.subtitle}
              </p>
            </div>
          )
          const imagePanel = (
            <div className="relative flex-1">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )
          return (
            <Link
              key={project.title}
              href={(project as { slug?: string }).slug ? `/projects/${(project as { slug?: string }).slug}` : '#'}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div
                className="flex overflow-hidden"
                style={{ height: 'clamp(300px, 42vw, 600px)' }}
              >
                {isEven ? <>{infoPanel}{imagePanel}</> : <>{imagePanel}{infoPanel}</>}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Contact + logo overlay */}
      <div className="relative overflow-hidden">
        <div
          style={{
            position: 'absolute',
            right: '-100px',
            top: '5%',
            width: 'clamp(300px, 35vw, 500px)',
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

        <div className='mt-30'>
          <Contact />
        </div>
      </div>
    </>
  )
}
