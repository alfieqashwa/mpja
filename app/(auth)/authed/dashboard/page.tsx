import {
  ArrowRightIcon,
  AvgScoreIcon,
  BooksIcon,
  CertificateIcon,
  ChatIcon,
  ProductDocumentsIcon,
  SmallBookIcon,
  SmallCertificateIcon,
} from "@/components/custom-icons"
import { DashboardCard } from "../_components/dashboard-card"
import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardTitle } from "../_components/dashboard-title"
import { DashboardWrapper } from "../_components/dashboard-wrapper"
import { CheckCircle2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const CARDS = [
  {
    name: "assignment",
    value: "3",
    icon: <ChatIcon className="size-10" />,
    bgIconColor: "bg-[#FFF1F2]",
  },
  {
    name: "course complete",
    value: "3",
    icon: <ProductDocumentsIcon className="size-10" />,
    bgIconColor: "bg-[#FAF5FF]",
  },
  {
    name: "total certificate",
    value: "3",
    icon: <CertificateIcon className="size-10" />,
    bgIconColor: "bg-[#EFF6FF]",
  },
  {
    name: "avg score",
    value: "8/10",
    icon: <AvgScoreIcon className="size-10" />,
    bgIconColor: "bg-[#FFFBEB]",
  },
]

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader title="dashboard" />
      <DashboardWrapper>
        <DashboardTitle
          title="Welcome back, Daenar"
          subTitle="Pick up where you left off—your progress is saved automatically."
        />
        <section className="flex gap-4">
          {CARDS.map((card, idx) => (
            <DashboardCard
              name={card.name}
              value={card.value}
              bgIconColor={card.bgIconColor}
              key={`${idx}-${card.name}`}
            >
              {card.icon}
            </DashboardCard>
          ))}
        </section>
        <LearningProgressCard />
      </DashboardWrapper>
    </div>
  )
}

function LearningProgressCard() {
  return (
    <div className="rounded-4xl bg-white py-6 px-5 shadow-sm">
      <div className="flex items-center justify-between">
        <article className="space-y-2">
          <h5 className="font-bold text-2xl text-slate-900 ">
            Courses you&apos;re enrolled in.
          </h5>
          <p className="text-secondary font-medium">
            See your active courses, progress, and what to learn next
          </p>
        </article>
        <span className="font-bold text-rose-600 cursor-pointer">
          View all courses
        </span>
      </div>

      <div className="flex flex-col mt-5 border rounded-lg">
        {/* Row 1 */}
        <div className="flex py-4">
          <div className="flex space-x-4 px-5">
            <div className="flex size-20 shrink-0 items-center justify-center rounded bg-rose-50 text-rose-500">
              <BooksIcon className="text-danger size-11" />
            </div>
            <div className="mt-3 space-y-2">
              <p className="block w-fit px-2 py-1 rounded-sm bg-[#FBCFE8] text-xs font-semibold text-[#DB2777]">
                Course
              </p>
              <p className="truncate text-lg font-bold text-primary">
                Halal Japan Beginner Course
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
              <span className="font-bold text-primary">5 Material</span>
            </div>
          </div>

          <div>
            <Separator orientation="vertical" />
          </div>

          <div className="space-y-3 flex-1 mt-3 px-5">
            <p className="font-medium text-secondary">Completion</p>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <CheckCircle2 className="text-secondary size-5" />
              <span className="font-bold text-primary">64/100%</span>
            </div>
          </div>

          <div>
            <Separator orientation="vertical" />
          </div>

          <div className="space-y-3 flex-1 mt-3 px-5">
            <p className="font-medium text-secondary">Assignment</p>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <SmallCertificateIcon className="text-secondary size-6" />
              <span className="font-bold text-primary">6/10</span>
            </div>
          </div>

          <div className="space-y-3 flex-1 p-5">
            <Button className="rounded-md">
              Resume Now <ArrowRightIcon />
            </Button>
          </div>
        </div>

        <div>
          <Separator orientation="horizontal" />
        </div>

        {/* Row 2 */}
        <div className="flex py-4">
          <div className="flex space-x-4 px-5">
            <div className="flex size-20 shrink-0 items-center justify-center rounded bg-rose-50 text-rose-500">
              <BooksIcon className="text-danger size-11" />
            </div>
            <div className="mt-3 space-y-2">
              <p className="block w-fit px-2 py-1 rounded-sm bg-[#FBCFE8] text-xs font-semibold text-[#DB2777]">
                Course
              </p>
              <p className="truncate text-lg font-bold text-primary">
                Halal Japan Beginner Course
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
              <span className="font-bold text-primary">5 Material</span>
            </div>
          </div>

          <div>
            <Separator orientation="vertical" />
          </div>

          <div className="space-y-3 flex-1 mt-3 px-5">
            <p className="font-medium text-secondary">Completion</p>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <CheckCircle2 className="text-secondary size-5" />
              <span className="font-bold text-primary">64/100%</span>
            </div>
          </div>

          <div>
            <Separator orientation="vertical" />
          </div>

          <div className="space-y-3 flex-1 mt-3 px-5">
            <p className="font-medium text-secondary">Assignment</p>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <SmallCertificateIcon className="text-secondary size-6" />
              <span className="font-bold text-primary">6/10</span>
            </div>
          </div>

          <div className="space-y-3 flex-1 p-5">
            <Button className="rounded-md">
              Resume Now <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
