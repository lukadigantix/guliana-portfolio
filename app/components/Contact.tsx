import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <div className="bg-[#F6F6F6] py-20">
      <div className="wrapper flex flex-col gap-10">
        <SectionHeading>Contact</SectionHeading>

        <div className="flex flex-col gap-6">
          <p
            style={{
              fontFamily: 'var(--font-pp-mori)',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '1.3',
              color: '#111',
              paddingBottom: '16px',
            }}
          >
            Lets Create Something Unique Together
          </p>

          <p
            style={{
              fontFamily: 'var(--font-roboto)',
              fontWeight: 400,
              fontSize: '28px',
              lineHeight: '1.7',
              color: '#111',
            }}
          >
            Lass uns gemeinsam kreative Ideen entfalten.<br />
            Egal ob du eine starke visuelle Identität,<br />
            Content für Social Media oder ein frisches Webdesign suchst –<br />
            ich freue mich, deine Vision kennenzulernen.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <a
            href="mailto:info@unfoldcreativestudio.ch"
            className="flex items-center gap-3 hover:opacity-60 transition-opacity"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 300,
              fontSize: '24px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#111',
              textDecoration: 'none',
            }}
          >
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="20" height="15" rx="1" stroke="#111" strokeWidth="1.5"/>
              <path d="M1 2L11 9.5L21 2" stroke="#111" strokeWidth="1.5"/>
            </svg>
            GET IN TOUCH
          </a>

          <a
            href="https://www.instagram.com/unfoldcreativestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-60 transition-opacity"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 300,
              fontSize: '24px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#111',
              textDecoration: 'none',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="20" height="20" rx="5" stroke="#111" strokeWidth="1.5"/>
              <circle cx="11" cy="11" r="4" stroke="#111" strokeWidth="1.5"/>
              <circle cx="16.5" cy="5.5" r="1" fill="#111"/>
            </svg>
            FOLLOW THE JOURNEY
          </a>
        </div>
      </div>
    </div>
  )
}
