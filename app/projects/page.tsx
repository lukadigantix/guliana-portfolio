import Image from 'next/image'
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
  { title: 'PROJEKT\nPLAYLIST', subtitle: 'SFGB 2026', image: '/sw-1.png' },
  { title: 'BRAND\nIDENTITY', subtitle: 'ARTLUXE 2025', image: '/sw-2.png' },
  { title: 'WEB\nDESIGN', subtitle: 'BLWRK 2025', image: '/sw-3.png' },
  { title: 'SOCIAL\nMEDIA', subtitle: 'KAOS 2024', image: '/sw-4.png' },
  { title: 'PACKAGING\nDESIGN', subtitle: 'BUBULINO 2024', image: '/sw-5.png' },
  { title: 'PRINT\nEDITORIAL', subtitle: 'SK-CNC 2024', image: '/sw-6.png' },
]

export default function ProjectsPage() {
  return (
    <>
      <div className="wrapper py-12 sm:py-16">
        <h2
          style={{
            fontFamily: 'var(--font-pp-mori)',
            fontWeight: 600,
            fontSize: 'clamp(28px, 4vw, 60px)',
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
            fontSize: 'clamp(12px, 1.2vw, 18px)',
            lineHeight: '1.8',
            color: '#111',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
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
                width: 'clamp(180px, 30%, 420px)',
       
                backgroundColor: '#F3F3F3',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-pp-mori)',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 1.8vw, 28px)',
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
                  fontSize: 'clamp(12px, 1vw, 16px)',
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
            <div
              key={project.title}
              className="flex overflow-hidden"
              style={{ height: 'clamp(300px, 42vw, 600px)' }}
            >
              {isEven ? <>{infoPanel}{imagePanel}</> : <>{imagePanel}{infoPanel}</>}
            </div>
          )
        })}
      </div>

      <div className='mt-30'>
        <Contact />
      </div>
    </>
  )
}
