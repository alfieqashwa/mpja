import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BookOpenIcon, BooksIcon } from "./Books";

export function HeroSection1() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-pink-50 to-pink-100 rounded-b-3xl">
      <div className="container relative mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-center mt-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Empower Your{" "}
            <span className="space-x-2">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-rose-600 shadow-lg shadow-rose-200">
                <BooksIcon className="size-6 text-white" />
              </span>
              <span className="text-rose-600">Professional Skills</span>
            </span>
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.1]">
            at your own pace
            <span className="ml-2 inline-flex size-10 items-center justify-center rounded-lg bg-rose-600 shadow-lg shadow-rose-200">
              <BookOpenIcon className="size-6 text-white" />
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 text-center leading-relaxed font-semibold">
            A modern learning platform for students and professionals to build
            practical knowledge at their
            <br />
            <span> own pace.</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="xl"
              className="gap-2 shadow-xl shadow-rose-200/50 transition-all hover:scale-105 active:scale-95"
            >
              Explore courses <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-rose-200 text-slate-700 hover:bg-white hover:text-rose-600 hover:border-rose-300 transition-all hover:scale-105 active:scale-95 bg-white/50 backdrop-blur-sm"
            >
              Sign up free
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block perspective-1000">
          <div className="relative w-full aspect-4/3 transform rotate-y-[-5deg] rotate-x-[5deg] -top-50 transition-transform duration-500 ease-out">
            <Image
              src="/images/Frame.svg"
              alt="Dashboard Preview"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Decorative elements behind dashboard */}
          <div className="absolute -z-10 top-10 -right-10 size-40 bg-rose-300/20 rounded-full blur-3xl" />
          <div className="absolute -z-10 -bottom-10 -left-10 size-40 bg-blue-300/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
