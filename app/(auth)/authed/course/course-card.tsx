import { BookOpenIcon, ChartBarIcon } from "@/components/custom-icons"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { BookOpen, Heart, Medal, ScrollText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export type CategoryCourse =
  | "not-started"
  | "on-going"
  | "completed"
  | "wishlist"

export type Course = {
  courseId: number
  category: CategoryCourse
  title: string
  completedLessons: number
  totalLessons: number
  currentProgress: number
  maxProgress: number
  completedAssignments: number
  totalAssignments: number
  buttonTitle: string
  dueDate?: string
  price?: number
  isLiked?: boolean
}

export function CourseCard({
  courseId,
  category,
  title,
  completedLessons,
  totalLessons,
  currentProgress,
  maxProgress,
  completedAssignments,
  totalAssignments,
  buttonTitle,
  dueDate,
  price,
  isLiked,
}: Course) {
  const [likedCard, setLikedCard] = useState(isLiked)

  return (
    <div
      id={courseId.toString()}
      className="bg-white p-4 rounded-2xl w-full shadow-sm"
    >
      {/* Image Frame */}
      <div
        className="relative flex aspect-video items-center justify-center rounded-xl bg-[#FFF1F2]"
        style={{
          backgroundImage: `
                    radial-gradient(circle, rgba(255, 255, 255, 0.8) 1.5px, transparent 1.5px),
                    radial-gradient(circle, rgba(255, 255, 255, 0.35) 1px, transparent 1px),
                    radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
  `,
          backgroundSize: "14px 14px, 18px 18px, 24px 24px",
          backgroundPosition: "0 0, 11px 16px, 7px 9px",
        }}
      >
        <BookOpenIcon className="text-danger size-28" />
      </div>
      {/* CTA */}
      <div className={cn("pt-3", "flex mt-5 justify-between items-start")}>
        <article className="text-left space-y-2">
          <h3 className="text-2xl capitalize font-bold text-primary whitespace-nowrap">
            {title}
          </h3>
          {category === "wishlist" && (
            <p className="text-secondary text-lg font-medium">
              177 Student | Certification
            </p>
          )}
        </article>
        {category === "wishlist" && (
          <Heart
            size={32}
            onClick={() => setLikedCard((toggle) => !toggle)}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:scale-110",
              likedCard
                ? "text-rose-600 fill-rose-600"
                : "text-rose-600 bg-transparent",
            )}
          />
        )}
      </div>
      <div className="my-3 bg-[#F8FAFC] rounded-sm px-2 py-1 flex justify-between">
        <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
          <h4 className="text-xs text-secondary text-center">Lesson</h4>
          <section className="flex items-center gap-1 justify-center">
            <BookOpen size={16} className="text-secondary" />
            <p className="text-primary text-sm font-bold  whitespace-nowrap">
              <span>{completedLessons}</span>/<span>{totalLessons}</span>
            </p>
          </section>
        </article>
        <div>
          <Separator orientation="vertical" />
        </div>
        <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
          <h4 className="text-xs text-secondary text-center">Progress</h4>
          <section className="flex items-center justify-center gap-x-1">
            <ChartBarIcon className="text-secondary size-4" />
            <p className="text-primary text-sm font-bold whitespace-nowrap">
              <span>{currentProgress}</span>/<span>{maxProgress}</span>
            </p>
          </section>
        </article>
        <div>
          <Separator orientation="vertical" />
        </div>
        <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
          <h4 className="text-xs text-secondary text-center">Assignment</h4>
          <section className="flex items-center gap-1 justify-center">
            <ScrollText size={16} className="text-secondary" />
            <p className="text-primary text-sm font-bold whitespace-nowrap">
              <span>{completedAssignments}</span>/
              <span>{totalAssignments}</span>
            </p>
          </section>
        </article>
      </div>

      <div className="my-3 h-0.5 w-full bg-[linear-gradient(to_right,#e2e8f0_50%,transparent_50%)] bg-size-[24px_2px] bg-repeat-x"></div>

      {/* Footer + Button */}
      <div className="flex justify-between items-center">
        <CourseCategoryInfo
          category={category}
          dueDate={dueDate as string}
          price={price as number}
        />
        <Link
          href={{
            pathname: "/authed/course/detail-course",
            query: { category },
          }}
        >
          <Button size={"default"} className="cursor-pointer">
            {buttonTitle}
          </Button>
        </Link>
      </div>
    </div>
  )
}

type CourseCategoryInfoProps = {
  category: CategoryCourse
  dueDate: string
  price: number
}

const CourseCategoryInfo = ({
  category,
  dueDate,
  price,
}: CourseCategoryInfoProps) => {
  if (category === "wishlist")
    return (
      <p className="text-2xl text-danger font-bold">
        {new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
        }).format(price as number)}
      </p>
    )
  if (category === "on-going")
    return <p className="text-secondary text-xs">Due Date {dueDate}</p>

  if (category === "completed")
    return (
      <div className="space-y-1">
        <p className="text-sm text-[#D97706] font-bold">
          <Medal size={24} className="inline" />{" "}
          <span>Completed Certificated</span>
        </p>
        <p className="text-secondary text-xs">Due Date {dueDate}</p>
      </div>
    )

  return <p className="text-secondary text-xs">Not Started</p>
}
