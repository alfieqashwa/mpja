import {
  BooksIcon,
  CalendarIcon,
  SmallBookIcon,
} from "@/components/custom-icons"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowDown, CheckCircle2 } from "lucide-react"
import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardTitle } from "../_components/dashboard-title"
import { DashboardWrapper } from "../_components/dashboard-wrapper"

type Completion = { completed: number; total: number }
type CertificateTable = {
  course: string
  content: number
  completion: Completion
  date: string // for simplicity for now
}

const CERTIFICATE_COURSE_LIST = [
  {
    course: "halal japan beginner course",
    content: 5,
    completion: { completed: 64, total: 100 },
    date: "6 Sept 2025",
  },
  {
    course: "halal japan beginner course",
    content: 5,
    completion: { completed: 64, total: 100 },
    date: "6 Sept 2025",
  },
] satisfies CertificateTable[]

export default function CertificatePage() {
  return (
    <div>
      <DashboardHeader title="certificate" />
      <DashboardWrapper>
        <DashboardTitle
          title="Certificate"
          subTitle="Track payments for your enrolled courses and access receipts anytime."
        />

        <CertificateList certificate={CERTIFICATE_COURSE_LIST} />
      </DashboardWrapper>
    </div>
  )
}

type CertificateListProps = {
  certificate: CertificateTable[]
}

function CertificateList({ certificate }: CertificateListProps) {
  return (
    <div className="flex flex-col mt-5 border rounded-xl bg-white shadow-sm">
      {certificate.map((c, i) => (
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
                <p className="truncate capitalize text-lg font-bold text-primary">
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
              <p className="font-medium text-secondary">Date</p>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <CalendarIcon className="text-secondary size-6" />
                <span className="font-bold text-primary">{c.date}</span>
              </div>
            </div>
            <div className="space-y-3 flex-1 p-5">
              <Button className="rounded-md">
                <ArrowDown size={28} /> Download
              </Button>
            </div>
          </div>
          {i !== CERTIFICATE_COURSE_LIST.length - 1 && (
            <div>
              <Separator orientation="horizontal" />
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
