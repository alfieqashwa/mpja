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
        <CourseList />
      </DashboardWrapper>
    </div>
  )
}
