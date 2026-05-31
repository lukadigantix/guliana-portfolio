interface SectionHeadingProps {
  children: React.ReactNode
  color?: string
}

export default function SectionHeading({ children, color = '#111' }: SectionHeadingProps) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-pp-mori)',
        fontWeight: 600,
        fontSize: 'clamp(36px, 6vw, 100px)',
        lineHeight: '1.1',
        textTransform: 'uppercase',
        color,
      }}
    >
      {children}
    </h2>
  )
}
