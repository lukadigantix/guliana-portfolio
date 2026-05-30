'use client'

import Image from 'next/image'

const navLinks = ['HOME', 'PROJECTS', 'STUDIO', 'SERVICES', 'CONTACT']

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000' }}>
      <div className="wrapper py-10 sm:py-12">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:items-end lg:gap-10">

          <div className="self-start">
            <Image
              src="/unfold-logo-footer.png"
              alt="Unfold Creative Studio"
              width={260}
              height={120}
              className="w-auto h-auto"
            />
          </div>

          {/* Middle — Contact info */}
          <div className="flex flex-col gap-3">
            <p style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: '20px', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              GET IN TOUCH
            </p>
            <div style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 400, fontSize: '16px', lineHeight: '2', color: '#fff' }}>
              <p style={{ fontWeight: 600 }}>Unfold Creative Studio</p>
              <p>+41 79 888 09 60</p>
              <a href="mailto:info@unfoldcreativestudio.ch" style={{ color: '#fff', textDecoration: 'none' }}>info@unfoldcreativestudio.ch</a>
              <p>@unfoldcreativestudio</p>
            </div>
            <div className="flex items-center gap-5 mt-1">
              <a href="https://www.instagram.com/unfoldcreativestudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="1" y="1" width="24" height="24" rx="6" stroke="white" strokeWidth="1.5"/><circle cx="13" cy="13" r="5" stroke="white" strokeWidth="1.5"/><circle cx="19.5" cy="6.5" r="1.2" fill="white"/></svg>
              </a>
              <a href="mailto:info@unfoldcreativestudio.ch" className="hover:opacity-50 transition-opacity">
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none"><rect x="1" y="1" width="26" height="20" rx="2" stroke="white" strokeWidth="1.5"/><path d="M1 3L14 12.5L27 3" stroke="white" strokeWidth="1.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/unfoldcreativestudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="1" y="1" width="24" height="24" rx="4" stroke="white" strokeWidth="1.5"/><path d="M7 10.5V19" stroke="white" strokeWidth="1.5" strokeLinecap="square"/><circle cx="7" cy="7.5" r="1.2" fill="white"/><path d="M12 19V14.5C12 12.567 13.567 11 15.5 11C17.433 11 19 12.567 19 14.5V19" stroke="white" strokeWidth="1.5" strokeLinecap="square"/><path d="M12 10.5V19" stroke="white" strokeWidth="1.5" strokeLinecap="square"/></svg>
              </a>
            </div>
          </div>

          {/* Right — Nav links */}
          <div className="flex flex-col gap-1 lg:items-end">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: '36px', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', lineHeight: '1.4' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
