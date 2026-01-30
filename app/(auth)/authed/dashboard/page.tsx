import {
  AvgScoreIcon,
  CertificateIcon,
  ChatIcon,
  ProductDocumentsIcon,
} from "@/components/custom-icons"
import { DashboardCard } from "../_components/dashboard-card"
import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardTitle } from "../_components/dashboard-title"
import { DashboardWrapper } from "../_components/dashboard-wrapper"
import { CourseList } from "./course-list"
import Image from "next/image"

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
        {/* if there's no data */}
        <section className="space-y-2 px-5 py-6 border border-[#F59E0B] bg-[#FEF3C7] rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-[#D97706]">
            Your profile is almost ready
          </h2>
          <p className="text-primary font-medium">
            Complete the remaining steps to speed up verification and receive
            your certificate without delays.
          </p>
        </section>

        <section className="space-y-2 px-5 py-6 border bg-white rounded-2xl shadow-md">
          <article className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary">
                Courses you’re enrolled in.
              </h2>
              <p className="text-secondary font-medium">
                See your active courses, progress, and what to learn next
              </p>
            </div>
            <p className="text-rose-600 font-bold">View all courses</p>
          </article>
          <div className="p-5 flex flex-col items-center">
            <Image
              src="/img/no-data-course.png"
              alt="No Data"
              width={364}
              height={310}
              priority
              className="object-cover"
            />
            <article className="space-y-2 text-center w-1/2">
              <h3 className="text-2xl text-primary font-bold">
                No courses yet
              </h3>
              <p className="text-secondary font-medium">
                Explore halal-certified courses and enroll to start learning.{" "}
                <br />
                Your progress will be saved automatically.
              </p>
            </article>
          </div>
        </section>

        {/* if there's data */}
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
        <CourseList />
      </DashboardWrapper>
    </div>
  )
}
