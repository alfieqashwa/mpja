"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About Us", href: "/about" },
  { name: "Course", href: "/courses" },
  { name: "Testimoni", href: "/testimonials" },
  { name: "Works", href: "/works" },
  { name: "Help", href: "/help" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-6 px-4">
      <div className="container mx-auto">
        {/* Floating Pill Navbar */}
        <nav className="flex items-center justify-between gap-4 rounded-full bg-white px-4 py-3 shadow-sm border border-slate-100">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="size-10 rounded-full bg-linear-to-b from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-full",
                  link.active
                    ? "text-rose-500"
                    : "text-[#64748B] hover:text-slate-900",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button size="sm">Login</Button>
            <Button
              variant="outline"
              size="sm"
              className="border-rose-500 text-rose-500 hover:bg-rose-50"
            >
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-white p-4 shadow-lg border border-slate-100 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    link.active
                      ? "text-rose-500 bg-rose-50"
                      : "text-slate-600 hover:bg-slate-50",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-slate-100" />
              <div className="flex flex-col gap-2 mt-2">
                <Button className="w-full">Login</Button>
                <Button
                  variant="outline"
                  className="w-full border-rose-500 text-rose-500 hover:bg-rose-50"
                >
                  Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
