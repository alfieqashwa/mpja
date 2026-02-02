import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export function FooterAssignment({
  isQuizCompleted,
  setIsQuizCompleted,
}: {
  isQuizCompleted: boolean
  setIsQuizCompleted: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const router = useRouter()
  return (
    <footer className="bg-white h-15 fixed z-99 border bottom-0 px-4 flex items-center justify-between w-full max-w-7xl">
      <p
        className={cn(
          "text-lg font-bold text-primary",
          isQuizCompleted ? "invisible" : "",
        )}
      >
        Assigment 1/3
      </p>
      <section className="space-x-5">
        {isQuizCompleted ? (
          <Button
            variant={"ghost"}
            onClick={() => setIsQuizCompleted(false)}
            className="cursor-pointer bg-[#E2E8F0] text-secondary hover:bg-slate-300 animate-pulse"
          >
            Retake Quiz
          </Button>
        ) : (
          <Button
            variant={"ghost"}
            onClick={() => router.back()}
            className="cursor-pointer bg-[#E2E8F0] text-secondary hover:bg-slate-300 animate-pulse"
          >
            Back
          </Button>
        )}
        <Button className="cursor-pointer">Continue</Button>
      </section>
    </footer>
  )
}
