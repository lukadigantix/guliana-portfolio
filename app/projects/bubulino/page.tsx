import ProjectDetail from '../../components/ProjectDetail'

export default function BubulinoPage() {
  return (
    <ProjectDetail
      category="Packaging"
      client="Bubulino"
      year="2026"
      categoryLabel="Packaging"
      description="Für Bubulino wurde im Rahmen eines Packaging-Projekts eine eigenständige Verpackungsserie mit zehn unterschiedlichen Designs entwickelt. Ziel war es, eine spielerische und moderne visuelle Identität zu gestalten, die die Natürlichkeit der Produkte widerspiegelt und gleichzeitig eine klare Wiedererkennbarkeit innerhalb der gesamten Produktlinie schafft."
      role="Konzept, Packaging Design, Layout & Mockup-Gestaltung"
      conditions="Schulprojekt / Eigenständige Umsetzung"
      heroImage="/bubulinocover.png"
      heroAlt="Bubulino Packaging Design"
      gallery={[
        { src: '/bubulino-2.jpg', alt: 'Bubulino Packaging – Lino der Rochen', width: 1600, height: 1317 },
        { src: '/bubulino-3.png', alt: 'Bubulino Packaging – Puff der Kugelfisch', width: 1600, height: 1298 },
      ]}
    />
  )
}
