import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type CategoryCourse } from "./course-card"

type CourseCategoryButtonProps = {
  categoryCourse: CategoryCourse | "all"
  setCategoryCourse: React.Dispatch<
    React.SetStateAction<CategoryCourse | "all">
  >
}

export function CourseCategoryButton({
  categoryCourse,
  setCategoryCourse,
}: CourseCategoryButtonProps) {
  const otherwiseClassName = "text-secondary hover:text-rose-600"

  return (
    <div className="flex items-center gap-4 border bg-white p-2 rounded-full">
      <Button
        onClick={() => setCategoryCourse("all")}
        variant={categoryCourse === "all" ? "default" : "ghost"}
        className={cn(
          "cursor-pointer",
          categoryCourse === "all" ? "" : otherwiseClassName,
        )}
      >
        All Course
      </Button>
      <Button
        onClick={() => setCategoryCourse("not-started")}
        variant={categoryCourse === "not-started" ? "default" : "ghost"}
        className={cn(
          "cursor-pointer",
          categoryCourse === "not-started" ? "" : otherwiseClassName,
        )}
      >
        Not Started
      </Button>
      <Button
        variant={categoryCourse === "on-going" ? "default" : "ghost"}
        onClick={() => setCategoryCourse("on-going")}
        className={cn(
          "cursor-pointer",
          categoryCourse === "on-going" ? "" : otherwiseClassName,
        )}
      >
        On Going
      </Button>
      <Button
        onClick={() => setCategoryCourse("completed")}
        variant={categoryCourse === "completed" ? "default" : "ghost"}
        className={cn(
          "cursor-pointer",
          categoryCourse === "completed" ? "" : otherwiseClassName,
        )}
      >
        Completed
      </Button>
      <Button
        onClick={() => setCategoryCourse("wishlist")}
        variant={categoryCourse === "wishlist" ? "default" : "ghost"}
        className={cn(
          "cursor-pointer",
          categoryCourse === "wishlist" ? "" : otherwiseClassName,
        )}
      >
        Wishlist
      </Button>
    </div>
  )
}
