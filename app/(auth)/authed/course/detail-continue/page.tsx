"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DashboardHeader } from "../../_components/dashboard-header"
import { DashboardWrapper } from "../../_components/dashboard-wrapper"
import { AccordionCourseOverview } from "../accordion-course-overview"
import { BreadcumbDetailCourse } from "../breadcumb-detail-course"
import { CourseHorizontalCard } from "../course-horizontal-card"
import { DetailInfo } from "../detail-info"
import { Overview } from "../overview"

export default function DetailContinuePage() {
  return (
    <div>
      <DashboardHeader title="Course" />
      <DashboardWrapper>
        {/* Breadcumb */}
        <BreadcumbDetailCourse />
        {/* Course Card */}
        <CourseHorizontalCard
          button={
            <Link href="/authed/course/halal">
              <Button className="cursor-pointer">Continue</Button>
            </Link>
          }
        />
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
