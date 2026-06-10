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
    <footer className="lg:min-h-[890px]" style={{ backgroundColor: '#000' }}>
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:items-start lg:gap-16 lg:min-h-[calc(890px-10rem)]">

          {/* Left — Logo */}
          <div>
            <Image
              src="/unfold-logo-footer.svg"
              alt="Unfold Creative Studio"
              width={420}
              height={300}
              className="w-48 sm:w-80 h-auto"
            />
          </div>

          {/* Middle — Contact info */}
          <div className="flex flex-col gap-5 lg:self-end">
            <p style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: 'clamp(44px, 8vw, 78px)' }}>
              GET IN TOUCH
            </p>
            <div style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 400, fontSize: 'clamp(18px, 3vw, 28px)', lineHeight: 'clamp(36px, 6vw, 78px)', color: '#fff' }}>
              <p style={{ fontWeight: 600 }}>Unfold Creative Studio</p>
              <p>+41 79 888 09 60</p>
              <a href="mailto:info@unfoldcreativestudio.ch" style={{ color: '#fff', textDecoration: 'none' }} className="hover:opacity-60 transition-opacity">info@unfoldcreativestudio.ch</a>
              <p>@unfoldcreativestudio</p>
            </div>
            <div className="flex items-center gap-6 mt-1">
              <a href="https://www.instagram.com/unfoldcreativestudio" target="_blank" rel="noopener noreferrer" aria-label="Unfold Creative Studio on Instagram" className="hover:opacity-50 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 26 26" fill="none" aria-hidden="true"><rect x="1" y="1" width="24" height="24" rx="6" stroke="white" strokeWidth="1.5"/><circle cx="13" cy="13" r="5" stroke="white" strokeWidth="1.5"/><circle cx="19.5" cy="6.5" r="1.2" fill="white"/></svg>
              </a>
              <a href="mailto:info@unfoldcreativestudio.ch" aria-label="Send email to Unfold Creative Studio" className="hover:opacity-50 transition-opacity">
                <svg width="30" height="24" viewBox="0 0 28 22" fill="none" aria-hidden="true"><rect x="1" y="1" width="26" height="20" rx="2" stroke="white" strokeWidth="1.5"/><path d="M1 3L14 12.5L27 3" stroke="white" strokeWidth="1.5"/></svg>
              </a>
            </div>
          </div>

          {/* Right — Nav links */}
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[64px] lg:justify-self-end lg:self-end">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ fontFamily: 'var(--font-pp-mori)', fontWeight: 600, fontSize: 'clamp(26px, 4vw, 36px)', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', lineHeight: '1.1' }}
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
