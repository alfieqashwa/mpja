import { CopyrightMpja } from "@/components/copyright"
import Image from "next/image"
import { LoginForm } from "./login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative">
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
        <div className="mx-auto w-full max-w-md mt-68">
          <article className="text-center space-y-3">
            <h1 className="text-5xl font-bold text-primary">Welcome back</h1>
            <p className="text-2xl font-semibold text-secondary">
              Sign in to continue your learning journey.
            </p>
          </article>
          <LoginForm />
          <p className="pt-8 text-lg space-x-2 text-center">
            <span className="text-secondary font-semibold">New to MPJA?</span>
            <span className="text-[#E11D48] font-bold">Create an account</span>
          </p>
          <footer>{/* make reusable footer */}</footer>
        </div>
        <footer className="absolute w-full bottom-0 px-10">
          <CopyrightMpja />
        </footer>
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
    </div>
  )
}
