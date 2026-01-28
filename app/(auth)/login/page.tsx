import { CopyrightMpja } from "@/components/copyright"
import Image from "next/image"
import Link from "next/link"
import { LoginForm } from "./login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="h-screen grid lg:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col h-full relative overflow-y-auto">
          <div className="flex justify-center pt-10">
            <Image
              src="/img/logo.png"
              alt="MPJA Logo"
              width={112}
              height={92}
              priority
            />
          </div>

          {/* Form Content */}
          <div className="grow flex items-center justify-center px-10 py-12">
            <div className="w-full max-w-xl">
              <article className="text-center space-y-3 mb-10">
                <h1 className="text-5xl font-bold text-primary leading-tight">
                  Welcome back
                </h1>
                <p className="text-2xl font-semibold text-secondary">
                  Sign in to continue your learning journey.
                </p>
              </article>
              <LoginForm />
              <p className="pt-8 text-lg space-x-2 text-center">
                <span className="text-secondary font-semibold">
                  New to MPJA?
                </span>
                <Link href="/register" className="text-[#E11D48] font-bold">
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          <footer className="pb-10 px-10 text-center">
            <CopyrightMpja />
          </footer>
        </div>

        {/* Right Column */}
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
    </div>
  )
}
