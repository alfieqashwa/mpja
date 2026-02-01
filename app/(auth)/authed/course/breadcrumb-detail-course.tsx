import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const BreadcrumbDetailCourse = () => (
  <Breadcrumb>
    <BreadcrumbList className="text-rose-600 font-bold">
      <BreadcrumbItem>
        <BreadcrumbLink href="/authed/course" className="hover:text-danger">
          Course
        </BreadcrumbLink>
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
