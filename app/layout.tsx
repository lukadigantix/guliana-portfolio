import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Roboto, Poppins } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const ppMori = localFont({
  src: [
    { path: '../fonts/PPMori-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/PPMori-SemiBold.otf', weight: '600', style: 'normal' },
  ],
  variable: '--font-pp-mori',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Unfold Creative Studio',
  description: 'Unfold Creative Studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ppMori.variable} ${roboto.variable} ${poppins.variable}`}>
      <body><Navbar />{children}<Footer /></body>
    </html>
  )
}
