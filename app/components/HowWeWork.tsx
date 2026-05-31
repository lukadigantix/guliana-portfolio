const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Wir tauchen in deine Marke ein und gewinnen ein tiefes Verständnis für dein Business, deine Ziele und deine Zielgruppe.",
  },
  {
    number: "02",
    title: "CONCEIVE",
    description:
      "Wir entwickeln eine klare Strategie und ein durchdachtes Konzept, das deine Marke stärkt und in die richtige Richtung führt.",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Wir gestalten mit System und Sorgfalt – visuell stark, funktional durchdacht und auf allen Ebenen konsistent.",
  },
  {
    number: "04",
    title: "DELIVER",
    description:
      "Wir bringen deine Marke auf den Punkt – professionell umgesetzt und bereit für einen erfolgreichen Auftritt.",
  },
];

import SectionHeading from './SectionHeading'

export default function HowWeWork() {
  return (
    <div className="wrapper py-12 lg:py-20 mb-10 lg:mb-40">
      <SectionHeading>How we work</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start mt-10 lg:mt-20">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="flex flex-col gap-6 pr-6 lg:pr-10 pb-10 lg:pb-40"
            style={{
              borderLeft: i !== 0 ? '1px solid #000' : 'none',
              paddingLeft: i !== 0 ? '2rem' : '0',
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-pp-mori)",
                fontWeight: 400,
                fontSize: 'clamp(36px, 5vw, 65px)',
                lineHeight: "1",
                color: "#111",
                marginBottom: "20px",
              }}
            >
              {step.number}
            </p>

            <h3
              style={{
                fontFamily: "var(--font-pp-mori)",
                fontWeight: 600,
                fontSize: 'clamp(26px, 4vw, 55px)',
                lineHeight: "1.1",
                textTransform: "uppercase" as const,
                color: "#111",
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-pp-mori)",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#222",
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
