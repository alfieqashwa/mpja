"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import confetti from "canvas-confetti"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { DashboardHeader } from "../../../_components/dashboard-header"
import { DashboardWrapper } from "../../../_components/dashboard-wrapper"
import { CompletedQuiz } from "./completed-quiz"
import { IncompletedQuiz } from "./incompleted-quiz"

export default function AssignmentPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)

  const triggerRealisticConfetti = useCallback(() => {
    const count = 200
    const defaults = { origin: { y: 0.7 } }

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fire(0.25, { spread: 26, startVelocity: 55 })
    fire(0.2, { spread: 60 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1, { spread: 120, startVelocity: 45 })
  }, [])

  // Trigger Confetti when Switch is toggled
  useEffect(() => {
    if (isCompleted) {
      triggerRealisticConfetti()
    }
  }, [isCompleted, triggerRealisticConfetti])

  const router = useRouter()

  return (
    <div>
      <DashboardHeader title="Course" left="left-100" />
      <DashboardWrapper className="relative">
        <TemporaryCompletedSwitch
          isCorrect={selected === "B"}
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
        />
        {isCompleted ? (
          <CompletedQuiz />
        ) : (
          <IncompletedQuiz selected={selected} setSelected={setSelected} />
        )}
      </DashboardWrapper>
      <footer className="bg-white h-15 fixed z-99 border bottom-0 px-4 flex items-center justify-between w-full max-w-7xl">
        <p
          className={cn(
            "text-lg font-bold text-primary",
            isCompleted ? "invisible" : "",
          )}
        >
          Assigment 1/3
        </p>
        <section className="space-x-5">
          {isCompleted ? (
            <Button
              variant={"ghost"}
              onClick={() => setIsCompleted(false)}
              className="cursor-pointer bg-[#E2E8F0] text-secondary hover:bg-slate-300"
            >
              Retake Quiz
            </Button>
          ) : (
            <Button
              variant={"ghost"}
              onClick={() => router.back()}
              className="cursor-pointer bg-[#E2E8F0] text-secondary hover:bg-slate-300"
            >
              Back
            </Button>
          )}
          <Button className="cursor-pointer">Continue</Button>
        </section>
      </footer>
    </div>
  )
}

const TemporaryCompletedSwitch = ({
  isCorrect,
  isCompleted,
  setIsCompleted,
}: {
  isCorrect: boolean
  isCompleted: boolean
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
}) => (
  <div
    className={cn(
      "right-1/8 items-center mt-4",
      isCorrect ? "fixed" : "hidden",
    )}
  >
    <Switch
      id="debug-mode"
      checked={isCompleted}
      onCheckedChange={setIsCompleted}
      className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-secondary cursor-pointer"
    />
  </div>
)
