"use client"

import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 kurt">
      <div className="relative thom">
        <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <Image
            src="/img/logo.png"
            alt="MPJA Logo"
            width={112}
            height={92}
            priority
          />
        </div>

        {/* Login form */}
        <div className="mx-auto w-full max-w-md kurt mt-68">
          <article className="text-center space-y-3">
            <h1 className="text-5xl font-bold text-primary">Welcome back</h1>
            <p className="text-2xl font-semibold text-secondary">
              Sign in to continue your learning journey.
            </p>
          </article>
          <form className="pt-8">
            {/*
              - Email & Password
              - Remember me & Forgot password link 
              - Sign in Button
              - New to MPJA? Create an account link
            */}
          </form>
          <footer>{/* make reusable footer */}</footer>
        </div>
      </div>

      <div className="relative hidden lg:block h-full w-full">
        <Image
          src="/img/auth-img.png"
          alt="Preview"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Overlay */}
    </div>
  )
}
