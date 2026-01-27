import { CopyrightMpja } from "@/components/copyright"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { WrapperContainer } from "@/components/wrapper-container"
import { Link as LinkIcon } from "lucide-react"
import Image from "next/image"

export default function ForgotPasswordPage() {
  return (
    <WrapperContainer>
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

          <div className="mx-auto w-full max-w-xl mt-88">
            <article className="text-center space-y-3">
              <h1 className="text-5xl font-bold text-primary">
                Verify your email
              </h1>
              <p className="text-2xl font-semibold text-secondary">
                We’ve sent a verification link to [user@email.com]. Please
                verify to activate your account.
              </p>
            </article>
            <div className="w-full pt-8 max-w-md">
              {/* Email Form */}
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
                <div className="pt-5">
                  <Button type="submit" className="w-full">
                    Resend email
                  </Button>
                </div>
              </form>
            </div>
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
    </WrapperContainer>
  )
}
