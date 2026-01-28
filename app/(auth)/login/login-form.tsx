"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Link as LinkIcon, Lock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordButton = (
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

  return (
    <div className="pt-8">
      <form>
        <section className="space-y-2">
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
            htmlFor="password"
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
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              className="pl-10 text-lg font-medium tracking-widest placeholder:font-normal placeholder:tracking-normal text-secondary"
            />
            {togglePasswordButton}
          </div>
        </section>
        <div className="flex items-center justify-between pt-2">
          <section className="flex items-center space-x-2">
            <Checkbox
              id="remember-me"
              name="remember-me"
              defaultChecked
              className="hover:cursor-pointer"
            />
            <Label htmlFor="remember-me" className="font-semibold text-primary">
              Remember me
            </Label>
          </section>
          <Link href="/forgot-password" className="font-bold text-[#E11D48]">
            Forgot password?
          </Link>
        </div>
        <div className="pt-5">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
