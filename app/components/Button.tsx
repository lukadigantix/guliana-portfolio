import { ButtonHTMLAttributes, CSSProperties } from 'react'
import Link from 'next/link'

type Variant = 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: React.ReactNode
  /** when set, the button renders as a navigation link */
  href?: string
}

export default function Button({ variant = 'outline', children, className = '', href, style, ...props }: ButtonProps) {
  const base: CSSProperties = {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 300,
    fontSize: 'clamp(13px, 3.5vw, 20px)',
    ...style,
  }

  const cls =
    variant === 'outline'
      ? `inline-block uppercase border border-black rounded-full px-3 py-1.5 sm:px-6 sm:py-2 cursor-pointer text-black hover:bg-black hover:text-white transition-colors no-underline ${className}`
      : `inline-block uppercase cursor-pointer text-black hover:opacity-50 transition-opacity no-underline ${className}`

  if (href) {
    return (
      <Link href={href} style={base} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button style={base} className={cls} {...props}>
      {children}
    </button>
  )
}
