import { DashboardHeader } from "@/app/(auth)/authed/_components/dashboard-header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Suspense } from "react"
import { DashboardWrapper } from "../../_components/dashboard-wrapper"
import { BreadcrumbModule } from "./breadcrum-module"
import { LanguageSelect } from "./language-select"

// custom sidebar
export default function ModulePage() {
  return (
    <div>
      <DashboardHeader title="Course" left="left-100" />
      <DashboardWrapper>
        <Suspense fallback={<p>TEMPORARY LOADING....</p>}>
          {/* Breadcumb */}
          <BreadcrumbModule />
        </Suspense>
        <article className="space-y-4">
          <h1 className="text-primary font-bold text-5xl">
            Define Halal, Haram, and Mashbooh
          </h1>
          <section className="flex justify-between items-center">
            <p className="text-secondary font-medium text-lg">
              1/10 | 45 minutes | Rayhan Kuswara | English
            </p>
            <LanguageSelect />
          </section>
        </article>
        <div className="space-y-4">
          <div className="relative aspect-video">
            <Image
              src="/img/Video.png"
              alt="Video e-learning module"
              fill
              priority
              className="object-cover rounded-4xl"
            />
          </div>
          <p className="text-secondary font-medium">
            MPJA Learning supports Muslim professionals and halal industry
            participants through accessible, high-quality education. Our
            platform offers structured online courses designed for long study
            sessions, with clear learning pathways, assessments, and
            certification outcomes. MPJA Learning supports Muslim professionals
            and halal industry participants through accessible, high-quality
            education. Our platform offers structured online courses designed
            for long study sessions, with clear learning pathways, assessments,
            and certification outcomes.MPJA Learning supports Muslim
            professionals and halal industry participants through accessible,
            high-quality education. Our platform offers structured online
            courses designed for long study sessions, with clear learning
            pathways, assessments, and certification outcomes.
          </p>
        </div>
        {/* Pagination */}
        <footer className="flex justify-between items-center">
          <Button
            variant={"ghost"}
            className="cursor-pointer bg-[#E2E8F0] text-secondary hover:bg-slate-300"
          >
            Back
          </Button>
          <section className="space-x-5">
            <span className="font-bold text-primary">
              Next Topic : Halal in Daily Life and Business
            </span>
            <Button className="cursor-pointer">Continue</Button>
          </section>
        </footer>
      </DashboardWrapper>
    </div>
  )
}
