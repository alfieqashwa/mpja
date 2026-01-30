"use client"

import {
  AvgScoreIcon,
  CertificateIcon,
  ChatIcon,
  ProductDocumentsIcon,
} from "@/components/custom-icons"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { DashboardCard } from "../_components/dashboard-card"
import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardTitle } from "../_components/dashboard-title"
import { DashboardWrapper } from "../_components/dashboard-wrapper"
import { CourseList } from "./course-list"
import { NoCourseYetCard, NoCourseYetCTA } from "./no-course-yet"

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
  const [showCourses, setShowCourses] = useState(true)

  return (
    <div>
      <DashboardHeader title="dashboard" />
      <DashboardWrapper className="relative">
        <TemporarySwitch
          showCourses={showCourses}
          setShowCourses={setShowCourses}
        />

        <DashboardTitle
          title="Welcome back, Daenar"
          subTitle="Pick up where you left off—your progress is saved automatically."
        />
        {/* if there's no data */}
        {!showCourses && <NoCourseYetCTA />}

        <section className="flex gap-4">
          {CARDS.map((card, idx) => (
            <DashboardCard
              name={card.name}
              value={showCourses ? card.value : "0"}
              bgIconColor={card.bgIconColor}
              key={`${idx}-${card.name}`}
            >
              {card.icon}
            </DashboardCard>
          ))}
        </section>

        {!showCourses && <NoCourseYetCard />}

        {/* if there's data */}
        {showCourses && <CourseList />}
      </DashboardWrapper>
    </div>
  )
}

const TemporarySwitch = ({
  showCourses,
  setShowCourses,
}: {
  showCourses: boolean
  setShowCourses: React.Dispatch<React.SetStateAction<boolean>>
}) => (
  <div className="fixed right-1/5 items-center space-y-2">
    <Switch
      id="view-mode"
      checked={showCourses}
      onCheckedChange={setShowCourses}
      className="data-[state=checked]:bg-rose-500 data-[state=unchecked]:bg-secondary cursor-pointer"
    />
  </div>
)
