"use client"

import { useState } from "react"
import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardTitle } from "../_components/dashboard-title"
import { DashboardWrapper } from "../_components/dashboard-wrapper"
import { type CategoryCourse, type Course, CourseCard } from "./course-card"
import { CourseCategoryButton } from "./course-category-button"

/*
 * === Button Title ===
 * Not Started: Start Learning,
 * On Going: Continue
 * Completed: View
 * Whishlist: Join Course Now
 */

const COURSES = [
  {
    courseId: 1,
    category: "not-started",
    title: "halal indonesian",
    completedLessons: 0,
    totalLessons: 13,
    currentProgress: 0,
    maxProgress: 100,
    completedAssignments: 0,
    totalAssignments: 13,
    buttonTitle: "Start Learning",
  },
  {
    courseId: 2,
    category: "on-going",
    title: "halal indonesian",
    completedLessons: 10,
    totalLessons: 13,
    currentProgress: 90,
    maxProgress: 100,
    completedAssignments: 10,
    totalAssignments: 13,
    buttonTitle: "Continue",
    dueDate: "24 Dec 2026",
  },
  {
    courseId: 3,
    category: "completed",
    title: "halal indonesian",
    completedLessons: 13,
    totalLessons: 13,
    currentProgress: 100,
    maxProgress: 100,
    completedAssignments: 13,
    totalAssignments: 13,
    buttonTitle: "View",
    dueDate: "24 Dec 2026",
  },
  {
    courseId: 4,
    category: "wishlist",
    title: "halal indonesian",
    completedLessons: 0,
    totalLessons: 13,
    currentProgress: 0,
    maxProgress: 100,
    completedAssignments: 0,
    totalAssignments: 13,
    buttonTitle: "Join Course Now",
    price: 7_000,
    isLiked: true,
  },
  {
    courseId: 5,
    category: "completed",
    title: "halal indonesian",
    completedLessons: 13,
    totalLessons: 13,
    currentProgress: 100,
    maxProgress: 100,
    completedAssignments: 13,
    totalAssignments: 13,
    buttonTitle: "View",
    dueDate: "24 Dec 2026",
  },
  {
    courseId: 6,
    category: "on-going",
    title: "halal indonesian",
    completedLessons: 10,
    totalLessons: 13,
    currentProgress: 90,
    maxProgress: 100,
    completedAssignments: 10,
    totalAssignments: 13,
    buttonTitle: "Continue",
    dueDate: "24 Dec 2026",
  },
  {
    courseId: 7,
    category: "wishlist",
    title: "halal indonesian",
    completedLessons: 0,
    totalLessons: 13,
    currentProgress: 0,
    maxProgress: 100,
    completedAssignments: 0,
    totalAssignments: 13,
    buttonTitle: "Join Course Now",
    price: 7_000,
    isLiked: true,
  },
  {
    courseId: 8,
    category: "not-started",
    title: "halal indonesian",
    completedLessons: 0,
    totalLessons: 13,
    currentProgress: 0,
    maxProgress: 100,
    completedAssignments: 0,
    totalAssignments: 13,
    buttonTitle: "Start Learning",
  },
] satisfies Course[]

export default function CoursePage() {
  const [categoryCourse, setCategoryCourse] = useState<CategoryCourse | "all">(
    "all",
  )

  return (
    <div>
      <DashboardHeader title="course" />
      <DashboardWrapper>
        <div className="flex justify-between items-center">
          <DashboardTitle
            title="Courses you’re enrolled in."
            subTitle="See your active courses, progress, and what to learn next"
          />
          <CourseCategoryButton
            categoryCourse={categoryCourse}
            setCategoryCourse={setCategoryCourse}
          />
        </div>

        {/* Course List */}
        <div className="pt-3.5 grid grid-cols-3 gap-x-4 gap-y-5">
          {COURSES.filter((c) =>
            categoryCourse === "all" ? true : categoryCourse === c.category,
          ).map((c, idx) => (
            <CourseCard
              courseId={c.courseId}
              category={c.category}
              title={c.title}
              completedLessons={c.completedLessons}
              totalLessons={c.totalLessons}
              currentProgress={c.currentProgress}
              maxProgress={c.maxProgress}
              completedAssignments={c.completedAssignments}
              totalAssignments={c.totalAssignments}
              buttonTitle={c.buttonTitle}
              dueDate={c.dueDate}
              price={c.price}
              isLiked={c.isLiked}
              key={`${idx}-${c.courseId}`}
            />
          ))}
        </div>
      </DashboardWrapper>
    </div>
  )
}
