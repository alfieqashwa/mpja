import { DashboardHeader } from "../../_components/dashboard-header"
import { DashboardWrapper } from "../../_components/dashboard-wrapper"
import { AccordionCourseOverview } from "../accordion-course-overview"
import { BreadcrumbDetailCourse } from "../breadcrumb-detail-course"
import { CategoryCourse } from "../course-card"
import { CourseHorizontalCard } from "../course-horizontal-card"
import { DetailInfo } from "../detail-info"
import { Overview } from "../overview"

export default async function DetailContinuePage({
  searchParams,
}: {
  searchParams: Promise<{ category: CategoryCourse }>
}) {
  const { category } = await searchParams
  // console.log({ category })

  return (
    <div>
      <DashboardHeader title="Course" />
      <DashboardWrapper>
        {/* Breadcumb */}
        <BreadcrumbDetailCourse />
        {/* Course Card */}
        <CourseHorizontalCard category={category} />
        <div className="flex justify-between gap-6">
          <section className="space-y-6 w-3/4">
            {/* Overview */}
            <Overview />
            {/* Accordion Course Overview */}
            <div className="p-5 border shadow-sm bg-white rounded-2xl">
              <h3 className="text-2xl font-bold text-primary">
                Course Overview
              </h3>
              <AccordionCourseOverview />
            </div>
          </section>
          {/* Detail Information */}
          <DetailInfo />
        </div>
      </DashboardWrapper>
    </div>
  )
}
