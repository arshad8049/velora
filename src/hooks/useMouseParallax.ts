import { useEffect } from 'react'
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

export interface ParallaxResult {
  x: MotionValue<number>
  y: MotionValue<number>
}

/**
 * Tracks mouse position and returns spring-smoothed offset values in pixels.
 * `strength` = max pixel offset when the mouse is at the viewport edge.
 * Automatically returns still (0) values when the user prefers reduced motion.
 */
export function useMouseParallax(strength = 20): ParallaxResult {
  const shouldReduce = useReducedMotion()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springCfg = { stiffness: 70, damping: 18, mass: 0.6 }
  const x = useSpring(rawX, springCfg)
  const y = useSpring(rawY, springCfg)

  useEffect(() => {
    if (shouldReduce) return

    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth  / 2
      const cy = window.innerHeight / 2
      rawX.set(((e.clientX - cx) / cx) * strength)
      rawY.set(((e.clientY - cy) / cy) * strength)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [rawX, rawY, strength, shouldReduce])

  return { x, y }
}
