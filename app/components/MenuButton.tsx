'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'

const links = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'STUDIO', href: '#' },
  { label: 'SERVICES', href: '#' },
  { label: 'CONTACT', href: '#' },
]

export default function MenuButton() {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden'
      return !prev
    })
  }

  return (
    <>
      {/* Full-screen overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          backgroundColor: 'black',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '10vw',
        }}
      >
        <nav>
          {links.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={toggle}
              style={{
                display: 'block',
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 600,
                fontSize: 'clamp(36px, 9vw, 120px)',
                color: 'white',
                textDecoration: 'none',
                lineHeight: 1.15,
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(24px)',
                transition: open
                  ? `opacity 0.45s ease ${0.1 + i * 0.07}s, transform 0.45s ease ${0.1 + i * 0.07}s`
                  : 'opacity 0.35s ease 0s, transform 0.35s ease 0s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.4')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Button stays on top */}
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => toggle()}
        className="cursor-pointer relative z-50 w-22.5 h-22.5 flex items-center justify-center"
        style={{ color: open ? 'white' : 'black' }}
      >
        <span
          style={{
            position: 'absolute',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            opacity: open ? 0 : 1,
            transform: open ? 'scale(0.6)' : 'scale(1)',
          }}
        >
          <Plus size={90} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" />
        </span>
        <span
          style={{
            position: 'absolute',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            opacity: open ? 1 : 0,
            transform: open ? 'scale(1)' : 'scale(0.6)',
          }}
        >
          <Minus size={90} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" />
        </span>
      </button>
    </>
  )
}
