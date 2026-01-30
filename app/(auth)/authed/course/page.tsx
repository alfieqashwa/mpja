import { Button } from "@/components/ui/button"
import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardTitle } from "../_components/dashboard-title"
import { DashboardWrapper } from "../_components/dashboard-wrapper"
import { Course, CourseCard } from "./course-card"

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
    href: "detail-continue",
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
    href: "detail-continue",
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
    href: "detail-completed",
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
    href: "detail-completed",
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
    href: "detail-completed",
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
    href: "detail-continue",
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
    href: "detail-completed",
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
    href: "detail-continue",
  },
] satisfies Course[]

export default function CoursePage() {
  return (
    <div>
      <DashboardHeader title="course" />
      <DashboardWrapper>
        <div className="flex justify-between items-center">
          <DashboardTitle
            title="Courses you’re enrolled in."
            subTitle="See your active courses, progress, and what to learn next"
          />
          <CourseCategoryButton />
        </div>

        {/* Course List */}
        <div className="pt-3.5 grid grid-cols-3 gap-x-4 gap-y-5">
          {COURSES.map((c, idx) => (
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
              href={c.href}
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

const CourseCategoryButton = () => (
  <div className="flex items-center gap-2 border bg-white p-2 rounded-full">
    <Button>All Course</Button>
    <Button variant={"ghost"} className="text-secondary">
      Not Started
    </Button>
    <Button variant={"ghost"} className="text-secondary">
      On Going
    </Button>
    <Button variant={"ghost"} className="text-secondary">
      Completed
    </Button>
    <Button variant={"ghost"} className="text-secondary">
      Wishlist
    </Button>
  </div>
)
