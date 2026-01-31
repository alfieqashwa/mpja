"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DashboardHeader } from "../../_components/dashboard-header"
import { DashboardWrapper } from "../../_components/dashboard-wrapper"
import { AccordionCourseOverview } from "./accordion-course-overview"
import { CourseHorizontalCard } from "./course-horizontal-card"
import { DetailInfo } from "./detail-info"
import { Overview } from "./overview"

export default function DetailContinuePage() {
  return (
    <div>
      <DashboardHeader title="Course" />
      <DashboardWrapper>
        <BreadcumbDetailCourse />
        <CourseHorizontalCard />
        <div className="flex justify-between gap-6">
          <section className="space-y-6 w-3/4">
            {/* Overview */}
            <Overview />
            {/* Accordion Course Overview */}
            <AccordionCourseOverview />
          </section>
          {/* Detail Information */}
          <DetailInfo />
        </div>
      </DashboardWrapper>
    </div>
  )
}

const BreadcumbDetailCourse = () => (
  <Breadcrumb>
    <BreadcrumbList className="text-rose-600 font-bold">
      <BreadcrumbItem>
        <BreadcrumbLink href="/course">Course</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage className="font-bold text-rose-600">
          Detail Course
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
)
