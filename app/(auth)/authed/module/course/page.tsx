import { DashboardHeader } from "@/app/(auth)/authed/_components/dashboard-header"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Suspense } from "react"
import { DashboardWrapper } from "../../_components/dashboard-wrapper"
import { BreadcrumbModule } from "./breadcrum-module"

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
      </DashboardWrapper>
    </div>
  )
}
