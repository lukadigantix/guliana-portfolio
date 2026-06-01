import ProjectDetail from '../../components/ProjectDetail'

export default function ThePourClassPage() {
  return (
    <ProjectDetail
      category="Branding"
      client="The Pour Class"
      year="2026"
      categoryLabel="Branding"
      description="Für den Cocktailkurs „The Pour Class by Andrew“ wurde eine eigenständige Markenidentität entwickelt, die sowohl Einsteiger:innen als auch interessierte Cocktail-Liebhaber anspricht. Ziel war es, eine visuelle Sprache zu schaffen, die modern, zugänglich und gleichzeitig charakterstark wirkt."
      role="Branding, Logo Design, Packaging & Art Direction"
      conditions="Kundenprojekt / Eigenständige Umsetzung"
      heroImage="/thepourcover.png"
      heroAlt="The Pour Class Branding"
      gallery={[
        { src: '/thepour-2.png', alt: 'The Pour Class Brand Board – Logo, Merch, Farben & Cocktails', width: 1090, height: 1250 },
      ]}
    />
  )
}
