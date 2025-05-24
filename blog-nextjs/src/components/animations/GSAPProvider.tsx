'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPProviderProps {
  children: React.ReactNode
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Initialize GSAP settings
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    })

    // Kill all existing ScrollTrigger instances first
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // Small delay to ensure DOM is ready
    const initAnimations = () => {
      // Set up default animations for elements with GSAP classes
      const fadeInElements = document.querySelectorAll('.gsap-fade-in')
      const slideUpElements = document.querySelectorAll('.gsap-slide-up')
      const slideDownElements = document.querySelectorAll('.gsap-slide-down')
      const scaleElements = document.querySelectorAll('.gsap-scale')

      // Reset all elements to their initial state
      gsap.set([...fadeInElements, ...slideUpElements, ...slideDownElements, ...scaleElements], {
        clearProps: "all"
      })

      // Fade in animations
      fadeInElements.forEach((element) => {
        gsap.fromTo(element, 
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
              refreshPriority: -1
            }
          }
        )
      })

      // Slide up animations
      slideUpElements.forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
              refreshPriority: -1
            }
          }
        )
      })

      // Slide down animations
      slideDownElements.forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
              refreshPriority: -1
            }
          }
        )
      })

      // Scale animations
      scaleElements.forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
              refreshPriority: -1
            }
          }
        )
      })

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh()
    }

    // Initialize animations with a small delay
    const timeoutId = setTimeout(initAnimations, 100)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [pathname]) // Re-run when pathname changes

  return (
    <div ref={containerRef} className="gsap-container">
      {children}
    </div>
  )
} 