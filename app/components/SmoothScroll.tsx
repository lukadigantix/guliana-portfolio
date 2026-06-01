'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

/**
 * Momentum / "heavy" smooth scrolling across the whole site.
 * Uses Lenis, which animates the real scroll position — so
 * getBoundingClientRect, IntersectionObserver (<Reveal/>) and the
 * scroll-based <Parallax/> keep working unchanged.
 * Fully disabled when the user prefers reduced motion.
 */
export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      // higher duration + gentle easing = the "heavier", weightier scroll feel
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // a touch under 1 so each wheel notch travels a little less — adds weight
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return null
}
