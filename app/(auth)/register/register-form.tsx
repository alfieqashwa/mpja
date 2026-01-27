"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Keyboard, Link as LinkIcon, Lock } from "lucide-react"
import { useState } from "react"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const toggleCreatePasswordButton = (
    <button
      type="button"
      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground cursor-pointer"
      onClick={() => setShowPassword((toggle) => !toggle)}
    >
      {showPassword ? (
        <Eye size={20} className="text-secondary" />
      ) : (
        <EyeOff size={20} className="text-[#CBD5E1]" />
      )}
    </button>
  )

  const toggleConfirmPasswordButton = (
    <button
      type="button"
      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground cursor-pointer"
      onClick={() => setShowConfirmPassword((toggle) => !toggle)}
    >
      {showConfirmPassword ? (
        <Eye size={20} className="text-secondary" />
      ) : (
        <EyeOff size={20} className="text-[#CBD5E1]" />
      )}
    </button>
  )

  return (
    <div className="w-full pt-8 max-w-md">
      <form>
        <p className="font-bold text-sm text-primary uppercase">Account Type</p>
        <div className="pt-2 flex space-x-2 justify-between">
          <section className="flex w-full space-x-2 border rounded-lg shadow-xs px-3 py-2">
            <Checkbox
              id="individual"
              defaultChecked
              className="hover:cursor-pointer"
            />
            <Label
              htmlFor="individual"
              className="font-bold text-sm text-primary capitalize"
            >
              individual
            </Label>
          </section>
          <section className="flex w-full space-x-2 border rounded-lg shadow-xs px-3 py-2">
            <Checkbox id="company" className="hover:cursor-pointer" />
            <Label
              htmlFor="company"
              className="font-bold text-sm text-primary capitalize"
            >
              company
            </Label>
          </section>
        </div>
        <section className="space-y-2 pt-5">
          <Label
            htmlFor="fullname"
            className="font-bold text-sm text-primary uppercase"
          >
            Full name
          </Label>
          <div className="relative">
            <Keyboard
              size={20}
              strokeWidth={2.5}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary"
            />
            <Input
              id="fullname"
              placeholder="Your full name"
              required
              className="pl-10 text-xl font-medium placeholder:font-normal text-secondary"
            />
          </div>
        </section>
        <section className="space-y-2 pt-5">
          <Label
            htmlFor="email"
            className="font-bold text-sm text-primary uppercase"
          >
            Email Address
          </Label>
          <div className="relative">
            <LinkIcon
              size={20}
              strokeWidth={2.5}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary"
            />
            <Input
              id="email"
              placeholder="you@example.com"
              required
              className="pl-10 text-xl font-medium placeholder:font-normal text-secondary"
            />
          </div>
        </section>
        <section className="space-y-2 pt-5">
          <Label
            htmlFor="create-password"
            className="font-bold text-sm text-primary uppercase"
          >
            Password
          </Label>
          <div className="relative">
            <Lock
              size={20}
              strokeWidth={2.5}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary"
            />
            <Input
              id="create-password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              required
              className="pl-10 text-lg font-medium tracking-widest placeholder:font-normal placeholder:tracking-normal text-secondary"
            />
            {toggleCreatePasswordButton}
          </div>
        </section>
        <section className="space-y-2 pt-5">
          <Label
            htmlFor="confirm-password"
            className="font-bold text-sm text-primary uppercase"
          >
            Confirm Password
          </Label>
          <div className="relative">
            <Lock
              size={20}
              strokeWidth={2.5}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary"
            />
            <Input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              required
              className="pl-10 text-lg font-medium tracking-widest placeholder:font-normal placeholder:tracking-normal text-secondary"
            />
            {toggleConfirmPasswordButton}
          </div>
        </section>
        <div className="pt-5">
          <Button type="submit" className="w-full capitalize">
            sign up
          </Button>
        </div>
      </form>
    </div>
  )
}
