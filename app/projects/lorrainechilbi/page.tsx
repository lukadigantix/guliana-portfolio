import ProjectDetail from '../../components/ProjectDetail'

export default function LorrainechilbiPage() {
  return (
    <ProjectDetail
      category="School Project"
      client={'SFGB /\nLorrainechilbi'}
      year="2025"
      categoryLabel="School Project"
      description="Im Rahmen eines Schulprojekts in Zusammenarbeit mit der Lorrainechilbi Bern entwickelte die Klasse je zwei eigenständige Plakatentwürfe für die Kommunikation des Events. Ziel war es, ein aufmerksamkeitsstarkes und identitätsstiftendes Plakat zu gestalten, das die lebendige, verspielte und quartiernahe Atmosphäre der Lorrainechilbi visuell transportiert. Mein Entwurf mit dem illustrierten Bären wurde in einer Auswahlrunde gewählt und anschliessend für die offizielle Werbekampagne eingesetzt."
      role="Illustration, Plakatgestaltung & Kampagnenvisual"
      conditions="Schulprojekt in Zusammenarbeit mit der Lorrainechilbi Bern / Eigenständige Umsetzung"
      heroImage="/lobrainecover.png"
      heroAlt="Lorrainechilbi Plakat"
      gallery={[
        { src: '/lorraine-2.jpg', alt: 'Lorrainechilbi – Enten Plakat', width: 2000, height: 3000 },
        { src: '/lorraine-3.png', alt: 'Lorrainechilbi – Plakat Mockup', width: 1573, height: 1000 },
        { src: '/lorraine-4.jpg', alt: 'Lorrainechilbi – Plakat im Strassenraum', width: 1200, height: 1600 },
      ]}
    />
  )
}
