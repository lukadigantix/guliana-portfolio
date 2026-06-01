import ProjectDetail from '../../components/ProjectDetail'

export default function KaosPage() {
  return (
    <ProjectDetail
      category="Branding"
      client="Kaos"
      year="2026"
      categoryLabel="Branding"
      description="Für das Restaurant- und Barkonzept Kaos wurde eine visuelle Identität entwickelt, die den Charakter des Namens aufgreift und in ein eigenständiges Erscheinungsbild übersetzt. Ziel war es, eine Marke zu gestalten, die Spannung und Eleganz vereint – zwischen Energie und Klarheit, Chaos und Ordnung."
      role="Brand Strategy, Logo Design & Visuelle Identität"
      conditions="Kundenprojekt / Eigenständige Umsetzung"
      heroImage="/kaoscover.png"
      heroAlt="Kaos Bar & Restaurant Branding"
      gallery={[
        { src: '/kaos-2.png', alt: 'Kaos Brand Board – Logo, Farben, Typografie & Food Photography', width: 1920, height: 3240 },
      ]}
    />
  )
}
