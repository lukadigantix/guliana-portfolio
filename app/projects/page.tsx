import Image from 'next/image'
import Link from 'next/link'
import Contact from '../components/Contact'
import Reveal from '../components/Reveal'

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
  { title: 'LOGO\nDESIGN', subtitle: 'Restaurant Kaos', image: '/kaoscover.png', slug: 'kaos' },
  { title: 'BRANDING', subtitle: 'The Pour Class', image: '/thepourcover.png', slug: 'the-pour-class' },
  { title: 'LOGO\nDESIGN', subtitle: 'Zytgeischt Gwafför', image: '/gwafforcover.png', slug: 'zytgeischt' },
  { title: 'REBRANDING', subtitle: 'SK-CNC Solutions', image: '/skcnccover.png', slug: 'sk-cnc-solutions' },
  { title: 'WELTFORMAT\nPLAKAT', subtitle: 'SFGB 2024', image: '/weltcover.png', slug: 'weltformat' },
  { title: 'LORRAINECHILBI\nPLAKAT', subtitle: 'SFGB 2025', image: '/lobrainecover.png', slug: 'lorrainechilbi' },
  { title: 'PACKAGING\nDESIGN', subtitle: 'BUBULINO', image: '/bubulinocover.png', slug: 'bubulino' },
  { title: 'WEBREDESIGN', subtitle: 'Kramer', image: '/weberdesign.png', slug: 'kramer' },
]

export default function ProjectsPage() {
  return (
    <>
      <div className="wrapper py-12 sm:py-16">
        <h2
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 600,
            fontSize: 'clamp(44px, 9vw, 84px)',
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
            fontSize: 'clamp(18px, 3.5vw, 36px)',
            lineHeight: '1.4',
            color: '#111',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            maxWidth: 'min(100%, 1000px)',
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
              className="flex flex-col justify-end p-8 sm:p-12 w-full md:w-[clamp(180px,30%,550px)] md:flex-shrink-0"
              style={{
       
                backgroundColor: '#F3F3F3',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 600,
                  fontSize: 'clamp(20px, 4vw, 42px)',
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
                  fontSize: 'clamp(16px, 3vw, 36px)',
                  textTransform: 'none',
                  color: '#111',
                }}
              >
                {project.subtitle}
              </p>
            </div>
          )
          const imagePanel = (
            <div className="relative w-full aspect-[4/3] md:aspect-auto md:flex-1 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          )
          return (
            <Reveal key={project.title} delay={(i % 2) * 80}>
              <Link
                href={(project as { slug?: string }).slug ? `/projects/${(project as { slug?: string }).slug}` : '#'}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div className="group flex flex-col md:flex-row overflow-hidden md:h-[clamp(300px,42vw,600px)]">
                  {isEven ? <>{infoPanel}{imagePanel}</> : <>{imagePanel}{infoPanel}</>}
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>

      {/* Contact + logo overlay */}
      <div className="relative overflow-hidden">
        <div
          style={{
            position: 'absolute',
            right: 'clamp(-90px, -6vw, -24px)',
            top: '5%',
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

        <div className='mt-30'>
          <Contact />
        </div>
      </div>
    </>
  )
}
