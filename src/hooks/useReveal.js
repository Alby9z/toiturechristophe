import { useEffect, useRef } from 'react'

/**
 * Adds IntersectionObserver to trigger .reveal → .visible CSS animation.
 * Usage: const ref = useReveal(); <div ref={ref} className="reveal">...</div>
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.reveal')
    if (targets.length === 0) {
      // If the element itself is the reveal target
      if (el.classList.contains('reveal')) {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('visible')
              obs.disconnect()
            }
          },
          { threshold }
        )
        obs.observe(el)
        return () => obs.disconnect()
      }
      return
    }
    const observers = []
    targets.forEach((target) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            target.classList.add('visible')
            obs.disconnect()
          }
        },
        { threshold }
      )
      obs.observe(target)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [threshold])

  return ref
}
