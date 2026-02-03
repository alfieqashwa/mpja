"use client"

import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardTitle } from "../_components/dashboard-title"
import { DashboardWrapper } from "../_components/dashboard-wrapper"
import { Course, CourseCard } from "../course/course-card"

const RECEIPTS = [
  {
    courseId: 1,
    category: "receipt",
    title: "halal indonesian",
    completedLessons: 0,
    totalLessons: 13,
    currentProgress: 0,
    maxProgress: 100,
    completedAssignments: 0,
    totalAssignments: 13,
    buttonTitle: "View Receipt",
    price: 7_000,
    dueDate: "24 Dec 2026",
    isLiked: true,
  },
  {
    courseId: 2,
    category: "receipt",
    title: "halal indonesian",
    completedLessons: 0,
    totalLessons: 13,
    currentProgress: 0,
    maxProgress: 100,
    completedAssignments: 0,
    totalAssignments: 13,
    buttonTitle: "View Receipt",
    price: 7_000,
    dueDate: "24 Dec 2026",
    isLiked: true,
  },
] satisfies Course[]

export default function TransactionPage() {
  return (
    <div>
      <DashboardHeader title="transaction" />
      <DashboardWrapper>
        <DashboardTitle
          title="Transaction history"
          subTitle="Track payments for your enrolled courses and access receipts anytime."
        />
        <div className="pt-3.5 grid grid-cols-3 gap-x-4 gap-y-5">
          {RECEIPTS.map((r, idx) => (
            <CourseCard
              courseId={r.courseId}
              category={r.category}
              title={r.title}
              completedLessons={r.completedLessons}
              totalLessons={r.totalLessons}
              currentProgress={r.currentProgress}
              maxProgress={r.maxProgress}
              completedAssignments={r.completedAssignments}
              totalAssignments={r.totalAssignments}
              buttonTitle={r.buttonTitle}
              price={r.price}
              dueDate={r.dueDate}
              isLiked={r.isLiked}
              key={`${idx}-${r.courseId}`}
            />
          ))}
        </div>
      </DashboardWrapper>
    </div>
  )
}
