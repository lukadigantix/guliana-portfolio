'use client'

import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'STUDIO', href: '/studio' },
  { label: 'SERVICES', href: '/services' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', minHeight: '890px' }}>
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:items-end lg:gap-16" style={{ minHeight: 'calc(890px - 10rem)' }}>

          {/* Left — Logo */}
          <div className="self-start">
            <Image
              src="/unfold-logo-footer.png"
              alt="Unfold Creative Studio"
              width={300}
              height={140}
              className="w-auto h-auto"
            />
          </div>

          {/* Middle — Contact info */}
          <div className="flex flex-col gap-5">
            <p style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: '40px', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: '78px' }}>
              GET IN TOUCH
            </p>
            <div style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 400, fontSize: '28px', lineHeight: '78px', color: '#fff' }}>
              <p style={{ fontWeight: 600 }}>Unfold Creative Studio</p>
              <p>+41 79 888 09 60</p>
              <a href="mailto:info@unfoldcreativestudio.ch" style={{ color: '#fff', textDecoration: 'none' }} className="hover:opacity-60 transition-opacity">info@unfoldcreativestudio.ch</a>
              <p>@unfoldcreativestudio</p>
            </div>
            <div className="flex items-center gap-6 mt-1">
              <a href="https://www.instagram.com/unfoldcreativestudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 26 26" fill="none"><rect x="1" y="1" width="24" height="24" rx="6" stroke="white" strokeWidth="1.5"/><circle cx="13" cy="13" r="5" stroke="white" strokeWidth="1.5"/><circle cx="19.5" cy="6.5" r="1.2" fill="white"/></svg>
              </a>
              <a href="mailto:info@unfoldcreativestudio.ch" className="hover:opacity-50 transition-opacity">
                <svg width="30" height="24" viewBox="0 0 28 22" fill="none"><rect x="1" y="1" width="26" height="20" rx="2" stroke="white" strokeWidth="1.5"/><path d="M1 3L14 12.5L27 3" stroke="white" strokeWidth="1.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/unfoldcreativestudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 26 26" fill="none"><rect x="1" y="1" width="24" height="24" rx="4" stroke="white" strokeWidth="1.5"/><path d="M7 10.5V19" stroke="white" strokeWidth="1.5" strokeLinecap="square"/><circle cx="7" cy="7.5" r="1.2" fill="white"/><path d="M12 19V14.5C12 12.567 13.567 11 15.5 11C17.433 11 19 12.567 19 14.5V19" stroke="white" strokeWidth="1.5" strokeLinecap="square"/><path d="M12 10.5V19" stroke="white" strokeWidth="1.5" strokeLinecap="square"/></svg>
              </a>
            </div>
          </div>

          {/* Right — Nav links */}
          <div className="flex flex-col gap-[64px] lg:justify-self-end">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: '36px', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', lineHeight: '1.1' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
