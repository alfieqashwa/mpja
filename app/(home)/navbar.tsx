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
  { name: "Testimony", href: "#testimony" },
  { name: "Works", href: "#works" },
  { name: "Help", href: "#help" },
]

export function Navbar() {
  const active = useActiveSection()

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-99 w-full max-w-355">
      <div className="mt-9 mx-18">
        {/* Floating Pill Navbar */}
        <nav className="flex items-center justify-between gap-4 rounded-2xl bg-white px-2 pr-4 py-2 shadow-sm border border-slate-100/60 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="size-16 rounded-full flex items-center justify-center text-white font-bold text-sm">
              <Image
                src="/img/logo.png"
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
                  "px-4 py-2.5 text-base font-medium transition-all rounded-lg whitespace-nowrap",
                  link.name.toLowerCase() === active
                    ? "text-rose-600 font-semibold bg-rose-50"
                    : "text-secondary hover:text-secondary hover:font-semibold hover:bg-slate-50",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link href="/login">
              <Button size="lg" className="cursor-pointer">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant={"secondary"}
                size="lg"
                className="cursor-pointer"
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
