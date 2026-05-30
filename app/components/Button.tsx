import { ButtonHTMLAttributes } from 'react'

type Variant = 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: React.ReactNode
}

export default function Button({ variant = 'outline', children, className = '', ...props }: ButtonProps) {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 300,
    fontSize: '20px',
  }

  if (variant === 'outline') {
    return (
      <button
        style={base}
        className={`uppercase border border-black rounded-full px-6 py-2 cursor-pointer hover:bg-black hover:text-white transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      style={base}
      className={`uppercase cursor-pointer hover:opacity-50 transition-opacity ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
