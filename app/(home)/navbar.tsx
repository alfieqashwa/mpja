"use client"

import { Button } from "@/components/ui/button"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type NavLinks = {
  name: string
  href: string
}

const navLinks: NavLinks[] = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Course", href: "#course" },
  { name: "Testimony", href: "#testimonials" },
  { name: "Works", href: "#works" },
  { name: "Help", href: "#help" },
]

export function Navbar() {
  const active = useActiveSection()

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-355 z-99 backdrop-blur-lg">
      <div className="mt-9 mx-18">
        {/* Floating Pill Navbar */}
        <nav className="flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-3 shadow-sm border border-slate-100">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="size-16 rounded-full flex items-center justify-center text-white font-bold text-sm">
              <Image
                src="/images/logo.png"
                alt="MPJA"
                width={60}
                height={60}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-lg font-medium transition-colors rounded-full whitespace-nowrap",
                  link.name.toLowerCase() === active
                    ? "text-[#E11D48] font-semibold"
                    : "text-secondary hover:text-[#E11D48] hover:font-semibold",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link href="/login">
              <Button size="lg" className="hover:cursor-pointer">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="secondary"
                size="lg"
                className="border-rose-500 text-rose-500 hover:bg-rose-50 hover:cursor-pointer"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
