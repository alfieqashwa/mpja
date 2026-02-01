"use client"

import { DashboardHeader } from "@/app/(auth)/authed/_components/dashboard-header"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DashboardWrapper } from "../../_components/dashboard-wrapper"
import { usePathname, useSearchParams } from "next/navigation"

// custom sidebar
export default function ModulePage() {
  const searchParams = useSearchParams()

  const category = searchParams.get("category")
  console.log({ category })

  return (
    <div>
      <DashboardHeader title="Course" />
      <DashboardWrapper>
        {/* Breadcumb */}
        <Breadcrumb>
          <BreadcrumbList className="text-rose-600 font-bold">
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/authed/course/detail-course?category=${category}`}
                className="hover:text-danger"
              >
                Course
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-rose-600">
                Halal
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-rose-600">
                Define Halal, Haram, and Mashbooh
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DashboardWrapper>
    </div>
  )
}
