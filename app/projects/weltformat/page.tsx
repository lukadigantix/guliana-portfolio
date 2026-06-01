import ProjectDetail from '../../components/ProjectDetail'

export default function WeltformatPage() {
  return (
    <ProjectDetail
      category="School Project"
      client="SFGB"
      year="2025"
      categoryLabel="School Project"
      description="Im Rahmen eines Schulprojekts für das Weltformat Graphic Design Festival Luzern wurde ein Plakat sowie eine begleitende Animation entwickelt. Ziel war es, das Thema des Festivals visuell stark und experimentell umzusetzen und dabei Typografie, Bildsprache und Bewegung zu einer eigenständigen visuellen Identität zu verbinden."
      role="Konzept, Plakatgestaltung, Animation & Art Direction"
      conditions="Schulprojekt für das Weltformat Graphic Design Festival Luzern / Eigenständige Umsetzung"
      heroImage="/weltcover.png"
      heroAlt="Weltformat Graphic Design Festival Plakat"
      gallery={[
        { src: '/weltformat-2.png', alt: 'Weltformat Plakat – Graphic Design Festival Luzern', width: 2867, height: 4096 },
      ]}
    />
  )
}
