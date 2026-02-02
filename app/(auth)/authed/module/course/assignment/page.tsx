"use client"

import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import confetti from "canvas-confetti"
import { useCallback, useEffect, useState } from "react"
import { DashboardHeader } from "../../../_components/dashboard-header"
import { DashboardWrapper } from "../../../_components/dashboard-wrapper"
import { CompletedQuiz } from "./completed-quiz"
import { FooterAssignment } from "./footer-assignment"
import { IncompletedQuiz } from "./incompleted-quiz"

export default function AssignmentPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)

  const triggerRealisticConfetti = useCallback(() => {
    const count = 2000
    const defaults = {
      origin: {
        x: 0.56,
        y: 0.25,
      },
    }

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
    if (isQuizCompleted) {
      triggerRealisticConfetti()
      setSelected(null) // set selected to default value
    }
  }, [isQuizCompleted, triggerRealisticConfetti])

  return (
    <div>
      <DashboardHeader title="Course" left="left-100" />
      <DashboardWrapper className="relative">
        <TemporaryCompletedSwitch
          /*
           * if the user answer is correct OR if the isQuizCompleted is true AND selected is null,
           * then display this temporary toggle switch.
           * The aim is to make start over the quiz from the beginning when the toggling back to false
           */
          isCorrect={selected === "B" || (selected === null && isQuizCompleted)}
          isQuizCompleted={isQuizCompleted}
          setIsQuizCompleted={setIsQuizCompleted}
        />
        {isQuizCompleted ? (
          <CompletedQuiz />
        ) : (
          <IncompletedQuiz selected={selected} setSelected={setSelected} />
        )}
      </DashboardWrapper>
      <FooterAssignment
        isQuizCompleted={isQuizCompleted}
        setIsQuizCompleted={setIsQuizCompleted}
      />
    </div>
  )
}

const TemporaryCompletedSwitch = ({
  isCorrect,
  isQuizCompleted,
  setIsQuizCompleted,
}: {
  isCorrect: boolean
  isQuizCompleted: boolean
  setIsQuizCompleted: React.Dispatch<React.SetStateAction<boolean>>
}) => (
  <div
    className={cn(
      "right-1/8 items-center mt-4",
      isCorrect ? "fixed" : "hidden",
    )}
  >
    <Switch
      id="debug-mode"
      checked={isQuizCompleted}
      onCheckedChange={setIsQuizCompleted}
      className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-secondary cursor-pointer"
    />
  </div>
)
