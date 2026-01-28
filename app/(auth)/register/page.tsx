import { CopyrightMpja } from "@/components/copyright"
import Image from "next/image"
import { RegisterForm } from "./register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="h-screen grid lg:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col h-full relative overflow-y-auto">
          {/* Logo - Centered at top */}
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
                  Create your MPJA account
                </h1>
                <p className="text-2xl font-semibold text-secondary">
                  Save your progress, access quizzes, and earn certificates.
                </p>
              </article>
              <RegisterForm />
            </div>
          </div>

          <footer className="pb-10 px-10 text-center">
            <CopyrightMpja />
          </footer>
        </div>

        {/* Right Column */}
        <div className="relative hidden lg:block h-full">
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
