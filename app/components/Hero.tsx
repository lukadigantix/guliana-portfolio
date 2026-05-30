import Button from './Button'

export default function Hero() {
  return (
    <div className="wrapper mt-6 sm:mt-12">
      <h1
        style={{
          fontFamily: 'var(--font-pp-mori)',
          fontWeight: 600,
          fontSize: 'clamp(40px, 9vw, 130px)',
          lineHeight: '1.1',
        }}
      >
        BRANDS,
        <br />
        UNFOLDED.
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-roboto)',
          fontWeight: 400,
          fontSize: 'clamp(16px, 2vw, 27px)',
          marginTop: 'clamp(12px, 2vw, 24px)',
        }}
      >
        Strategisches Design, starke Marken und digitale Auftritte -<br />
        entwickelt durch Unfold Creative Studio und einem kurierten Netzwerk.
      </p>

      <div className="flex items-center gap-8 mt-10">
        <Button variant="outline">Start a project</Button>
        <Button variant="ghost">Selected work ↓</Button>
      </div>
    </div>
  )
}
