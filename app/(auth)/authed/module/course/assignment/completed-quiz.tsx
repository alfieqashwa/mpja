import {
  ChartBarIcon,
  SealCheckIcon,
  SealWarningIcon,
} from "@/components/custom-icons"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import React from "react"

const SCORE_QUIZ = [
  {
    title: "score",
    icon: <ChartBarIcon className="inline text-secondary size-6" />,
    completed: 90,
    total: 100,
  },
  {
    title: "True",
    icon: <SealCheckIcon className="inline text-secondary size-6" />,
    completed: 2,
    total: 3,
  },
  {
    title: "False",
    icon: <SealWarningIcon className="inline text-secondary size-6" />,
    completed: 1,
    total: 3,
  },
]

export function CompletedQuiz() {
  return (
    <div className="rounded-2xl border bg-white shadow-sm p-6 flex flex-col w-full min-h-[calc(100vh-(--spacing(72)))] justify-center items-center">
      <Image
        src={"/img/completed-quiz-icon.png"}
        alt="Completed Quiz"
        width={179}
        height={179}
        priority
        className="object-cover"
      />
      <article className="space-y-3 mt-14 text-center">
        <h1 className="text-4xl font-bold text-primary">
          Great work—quiz completed
        </h1>
        <p className="text-xl font-medium text-secondary">
          Your score is ready. You can continue to the next lesson whenever
          you’re ready.
        </p>
      </article>
      <div className="flex h-25 items-center mt-10 justify-evenly bg-[#F8FAFC] p-4 w-full max-w-3/4 rounded mx-auto">
        {SCORE_QUIZ.map((q, i) => (
          <React.Fragment key={i}>
            <section className="flex flex-col items-center justify-center space-y-1">
              <h4 className="text-sm capitalize text-secondary">{q.title}</h4>
              <p className="text-lg font-semibold text-primary whitespace-nowrap">
                {q.icon} {q.completed}/{q.total}
              </p>
            </section>

            {/* Logic: Only show if NOT the last item */}
            {i !== SCORE_QUIZ.length - 1 && (
              <Separator orientation="vertical" className="h-8 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
