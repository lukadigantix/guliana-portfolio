import ProjectDetail from '../../components/ProjectDetail'

export default function KramerPage() {
  return (
    <ProjectDetail
      category="Webdesign / Development"
      client="Kramer"
      year="2026"
      categoryLabel={'Webdesign /\nDevelopment'}
      description="Für das Restaurant Kramer wurde ein moderner Webauftritt entwickelt, der die urbane und hochwertige Atmosphäre des Restaurants digital widerspiegelt. Ziel war es, Genuss, Regionalität und die visuelle Qualität der Gerichte durch ein klares Design, starke Bildwelten und eine benutzerfreundliche Struktur erlebbar zu machen."
      role="Webdesign, UI-Konzept & Creative Direction"
      conditions="Kundenprojekt / Eigenständige Umsetzung"
      heroImage="/weberdesign.png"
      heroAlt="Kramer Restaurant Webdesign"
      gallery={[
        { src: '/kramer-2.png', alt: 'Kramer Webdesign – Mobile Ansicht', width: 1122, height: 1402 },
      ]}
    />
  )
}
