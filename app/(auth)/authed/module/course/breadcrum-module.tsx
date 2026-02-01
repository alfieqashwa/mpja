"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useSearchParams } from "next/navigation"

export const BreadcrumbModule = () => {
  const searchParams = useSearchParams()

  const category = searchParams.get("category")
  // console.log({ category })

  return (
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
  )
}
