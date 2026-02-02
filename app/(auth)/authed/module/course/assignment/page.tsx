"use client"

import { useState } from "react"
import { DashboardHeader } from "../../../_components/dashboard-header"
import { DashboardWrapper } from "../../../_components/dashboard-wrapper"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

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
  useState<"default" | "correct" | "wrong" | "celebrate">("default")
  return (
    <div>
      <DashboardHeader title="Course" left="left-100" />
      <DashboardWrapper>
        <div className="rounded-2xl border bg-white shado-sm p-6">
          <h2 className="text-primary font-bold text-2xl">Quiz 1 (25 Score)</h2>
          <article className="pt-8">
            <h3 className="text-primary font-semibold text-xl">
              Which statement best describes Halal?
            </h3>
            <RadioGroup
              defaultValue="none"
              onValueChange={(val) => setSelected(val)}
              className="py-3"
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
            </RadioGroup>
            <p className="text-lg font-semibold text-primary pt-5">
              Not quite. Halal means permissible/allowed. Option A describes
              Mashbooh—things that are uncertain and should be verified.
            </p>
          </article>
        </div>
      </DashboardWrapper>
    </div>
  )
}
