import {
  ArrowRightIcon,
  BooksIcon,
  SmallBookIcon,
  SmallCertificateIcon,
} from "@/components/custom-icons"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2 } from "lucide-react"

type Completion = { completed: number; total: number }

type CourseTable = {
  course: string
  content: number
  completion: Completion
  assignment: Completion
}

type CourseListProps = {
  courses: CourseTable[]
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <div className="flex flex-col mt-5 border rounded-xl bg-white shadow-sm">
      {courses.map((c, i) => (
        <section key={i}>
          <div className="flex py-4">
            <div className="flex space-x-4 px-5">
              <div className="flex size-20 shrink-0 items-center justify-center rounded bg-rose-50 text-rose-500">
                <BooksIcon className="text-danger size-11" />
              </div>
              <div className="mt-3 space-y-2">
                <p className="block w-fit px-2 py-1 rounded-sm bg-[#FBCFE8] text-xs font-semibold text-[#DB2777]">
                  Course
                </p>
                <p className="truncate text-lg font-bold text-primary capitalize">
                  {c.course}
                </p>
              </div>
            </div>

            <div>
              <Separator orientation="vertical" />
            </div>

            <div className="px-5 flex-1 space-y-3 mt-3">
              <p className="font-medium text-secondary">Content</p>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <SmallBookIcon className="size-6 text-secondary" />
                <span className="font-bold text-primary">
                  {c.content} Material
                </span>
              </div>
            </div>

            <div>
              <Separator orientation="vertical" />
            </div>

            <div className="space-y-3 flex-1 mt-3 px-5">
              <p className="font-medium text-secondary">Completion</p>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <CheckCircle2 className="text-secondary size-5" />
                <span className="font-bold text-primary">
                  {c.completion.completed}/{c.completion.total}%
                </span>
              </div>
            </div>

            <div>
              <Separator orientation="vertical" />
            </div>

            <div className="space-y-3 flex-1 mt-3 px-5">
              <p className="font-medium text-secondary">Assignment</p>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <SmallCertificateIcon className="text-secondary size-6" />
                <span className="font-bold text-primary">
                  {c.assignment.completed}/{c.assignment.total}
                </span>
              </div>
            </div>
            <div className="space-y-3 flex-1 p-5">
              <Button className="rounded-md">
                Resume Now <ArrowRightIcon />
              </Button>
            </div>
          </div>
          {i !== courses.length - 1 && (
            <div>
              <Separator orientation="horizontal" />
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
