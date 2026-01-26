"use client"

import { useEffect, useState } from "react"

export function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return active
}
