"use client";

import { BooksIcon } from "@/components/icons/books";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BookOpenIcon } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 rounded-3xl">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg-image.svg')] bg-cover bg-center bg-no-repeat">
        {/* fade to white */}
        <div className="absolute bottom-0 h-48 w-full bg-linear-to-t from-white to-transparent" />
      </div>

      <div className="relative">
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Empower Your
            <span className="inline-flex size-15 mx-3 items-center justify-center rounded-2xl bg-rose-600 shadow-lg shadow-rose-200">
              <BooksIcon className="size-8 text-white" />
            </span>
            <span className="text-[#E11D48]">Professional Skills</span>
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.1]">
            at your own pace
            <span className="ml-3 inline-flex size-15 items-center justify-center rounded-2xl bg-rose-600 shadow-lg shadow-rose-200">
              <BookOpenIcon className="size-8 text-white fill-white" />
            </span>
          </h1>

          <p className="py-6 text-2xl text-secondary text-center leading-relaxed font-semibold">
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

        {/* Dashboard Preview Image */}
        <div className="kurt mt-20">
          <Image
            src="/images/dashboard-preview.png"
            alt="Dashboard Preview"
            width={1200}
            height={856}
            priority
            className="h-auto w-11/12 drop-shadow-3xl"
          />
        </div>
      </div>
    </section>
  );
}
