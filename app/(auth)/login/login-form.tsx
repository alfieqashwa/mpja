"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, Lock } from "lucide-react"

export const LoginForm = () => (
  <div className="w-full pt-8 max-w-md">
    <form>
      <section className="space-y-2">
        <Label
          htmlFor="email"
          className="font-bold text-sm text-primary uppercase"
        >
          Email Address
        </Label>
        <div className="relative">
          <Link
            size={20}
            strokeWidth={2.5}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary"
          />
          <Input
            id="email"
            placeholder="you@example.com"
            required
            className="pl-10 text-lg text-secondary"
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
            type="password"
            placeholder="Enter your password"
            required
            className="pl-10 text-lg text-secondary"
          />
        </div>
      </section>
      <div className="flex items-center justify-between pt-2">
        <section className="flex items-center space-x-2">
          <Checkbox id="remember-me" name="remember-me" />
          <Label htmlFor="remember-me" className="font-semibold to-primary">
            Remember me
          </Label>
        </section>
        <p className="font-bold text-[#E11D48]">Forgot password?</p>
      </div>
      <div className="pt-5">
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  </div>
)
