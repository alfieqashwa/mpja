"use client";

import { BooksIcon } from "@/components/icons/books";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BookOpenIcon } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 from-[#FFF1F2] to-pink-50 rounded-3xl bg-linear-to-b kurt"
    >
      <div className="relative">
        <div className="flex flex-col items-center mt-20">
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

          <p className="py-6 text-lg text-slate-500 text-center leading-relaxed font-semibold">
            A modern learning platform for students and professionals to build
            practical knowledge at their
            <br />
            <span> own pace.</span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="xl">
              Explore courses{" "}
              <ArrowRightIcon className="hover:cursor-pointer" />
            </Button>

            <Button
              variant="secondary"
              size="xl"
              className="hover:cursor-pointer"
            >
              Sign up free
            </Button>
          </div>
        </div>

        {/* Starts Dashboard Preview Image */}
        <div className="hidden lg:block perspective-1000 kurt">
          <div className="relative w-full aspect-4/3 transform rotate-y-[-5deg] rotate-x-[5deg] -top-60">
            <Image
              src="/images/dashboard-preview.png"
              alt="Dashboard Preview"
              fill
              priority
              className="object-contain drop-shadow-3xl mask-fade-half"
              // className="object-contain z-10"
            />
            {/* <Image
              src="/images/white-cloud-left.png"
              alt="White Cloud Left"
              width={420}
              height={280}
              priority
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 z-20"
            />
            <Image
              src="/images/white-cloud-right.png"
              alt="White Cloud Right"
              width={420}
              height={280}
              priority
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-30 z-20"
            /> */}
          </div>
        </div>
        {/* Ends Dashboard Preview Image */}
      </div>
    </section>
  );
}
