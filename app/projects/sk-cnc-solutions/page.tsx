import ProjectDetail from '../../components/ProjectDetail'

export default function SkCncSolutionsPage() {
  return (
    <ProjectDetail
      category="Rebranding / Corporate Design"
      client="SK-CNC Solutions"
      year="2024"
      categoryLabel={'Rebranding /\nCorporate Design'}
      description="Für SK-CNC Solutions wurde ein Rebranding entwickelt mit dem Ziel, den bestehenden Auftritt visuell zu modernisieren und die technische Kompetenz des Unternehmens in eine präzise, professionelle Markenidentität zu übersetzen. Neben dem Redesign des Logos umfasste das Projekt auch die Gestaltung zentraler Kommunikationsmittel wie Imagebroschüre und Visitenkarten."
      role="Rebranding, Corporate Design, Brochure & Gestaltung der Kommunikationsmittel"
      conditions="Kundenprojekt / Eigenständige Umsetzung"
      heroImage="/skcnccover.png"
      heroAlt="SK-CNC Solutions Rebranding"
      gallery={[
        { src: '/skcnc-2.png', alt: 'SK-CNC Solutions Visitenkarten', width: 1080, height: 1350 },
        { src: '/skcnc-3.png', alt: 'SK-CNC Solutions Imagebroschüre', width: 1080, height: 1350 },
      ]}
    />
  )
}
