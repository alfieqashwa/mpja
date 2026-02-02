"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import confetti from "canvas-confetti"
import { useCallback, useEffect, useState } from "react"
import { DashboardHeader } from "../../../_components/dashboard-header"
import { DashboardWrapper } from "../../../_components/dashboard-wrapper"
import { useRouter } from "next/navigation"

type MultipleChoice = {
  id: string
  choice: string
  answer: boolean
}

const MULTIPLE_CHOICE = [
  {
    id: "A",
    choice: "A. Anything that is uncertain and should be avoided",
    answer: false,
  },
  {
    id: "B",
    choice: "B. Anything that is permissible under Islamic law",
    answer: true,
  },
  {
    id: "C",
    choice: "C. Anything that is forbidden under Islamic law",
    answer: false,
  },
  {
    id: "D",
    choice: "D. Anything that is only allowed in emergencies",
    answer: false,
  },
] satisfies MultipleChoice[]

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
  const userChoice = MULTIPLE_CHOICE.find((c) => c.id === selected)

  return (
    <div>
      <DashboardHeader title="Course" left="left-100" />
      <DashboardWrapper className="relative">
        <TemporaryCompletedQuiz
          isCorrect={userChoice?.answer}
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
        />

        <div className="rounded-2xl border bg-white shado-sm p-6">
          <h2 className="text-primary font-bold text-2xl">Quiz 1 (25 Score)</h2>
          <section className="pt-8">
            <h3 className="text-primary font-semibold text-xl">
              Which statement best describes Halal?
            </h3>
            <RadioGroup
              defaultValue="none"
              onValueChange={(val) => setSelected(val)}
              className="pt-3"
            >
              {MULTIPLE_CHOICE.map((c, i) => (
                <FieldLabel
                  htmlFor={`${c.id}-plan`}
                  className={cn(
                    "transition-colors",
                    c.answer
                      ? "has-data-[state=checked]:bg-[#BBF7D0] has-data-[state=checked]:border-[#22C55E]"
                      : "has-data-[state=checked]:bg-[#FECDD3] has-data-[state=checked]:border-danger",
                  )}
                  key={`${i}-${c.id}`}
                >
                  <Field orientation="horizontal">
                    <RadioGroupItem
                      value={c.id}
                      id={`${c.id}-plan`}
                      isCorrect={c.answer}
                    />
                    <FieldContent>
                      <FieldTitle className="sr-only">{c.id}</FieldTitle>
                      <FieldDescription
                        className={cn(
                          "text-secondary font-medium",
                          selected === c.id &&
                            (c.answer ? "text-[#22C55E]" : "text-danger"),
                        )}
                      >
                        {c.choice}
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldLabel>
              ))}
              {userChoice?.id && !userChoice?.answer && (
                <p className="text-lg font-semibold text-primary pt-5">
                  Not quite. Halal means permissible/allowed. Option A describes
                  Mashbooh—things that are uncertain and should be verified.
                </p>
              )}
            </RadioGroup>
          </section>
        </div>
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

const TemporaryCompletedQuiz = ({
  isCorrect,
  isCompleted,
  setIsCompleted,
}: {
  isCorrect: boolean | undefined
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
