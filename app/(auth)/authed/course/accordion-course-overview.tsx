"use client"

import { LockSolidIcon, SmallBookIcon } from "@/components/custom-icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { CircleCheck } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Answer = {
  id: number
  title: string
  href: string
}

export type CourseOverview = {
  value: string
  question: string
  chapter: number
  answer: Answer[]
}

const CUSTOM_ANSWERS = [
  { id: 1, title: "Define Halal, Haram, and Mashbooh", href: "#" },
  { id: 2, title: "Explain why intention and process matter", href: "#" },
  { id: 3, title: "Identify examples of halal-friendly decisions", href: "#" },
  { id: 4, title: "Explain why intention and process matter", href: "#" },
  { id: 5, title: "Identify examples of halal-friendly decisions", href: "#" },
  { id: 6, title: "Assignment", href: "assignment" },
] satisfies Answer[]

const COURSE_OVERVIEW = [
  {
    value: "question-1",
    question: "What courses are available on MPJA?",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-2",
    question: "Halal in Daily Life and Business",
    chapter: 4,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-3",
    question: "Halal Standards & Certification Basics",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
] satisfies CourseOverview[]

export const AccordionCourseOverview = ({
  data = COURSE_OVERVIEW,
  isWishlist = false,
}: {
  data?: CourseOverview[]
  isWishlist?: boolean
}) => {
  const pathname = usePathname()
  return (
    <Accordion type="multiple" className="pt-5" defaultValue={["question-1"]}>
      {data.map((q, idx) => (
        <AccordionItem
          value={q.value}
          key={`${idx}-${q.value}`}
          className="space-y-1"
        >
          <AccordionTrigger className="bg-[#F8FAFC] px-5 flex items-center text-primary font-bold">
            <article className="flex justify-between items-center w-full">
              <p className="">{q.question}</p>
              <p className="whitespace-nowrap">{q.chapter} Chapter</p>
            </article>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {q.answer.map((a, idx) => (
                <li
                  className="flex justify-between items-center px-4 py-3.5"
                  key={`${idx}-${a.id}`}
                >
                  <article
                    className={cn(
                      "space-x-1",
                      pathname.includes(a.href)
                        ? "text-primary"
                        : "text-secondary",
                    )}
                  >
                    <SmallBookIcon className="size-5 inline" />
                    <Link
                      href={`/authed/module/course/${a.href}`}
                      className={cn(
                        "font-semibold text-sm",
                        a.href === "assignment" && !pathname.includes(a.href)
                          ? "animate-pulse"
                          : "",
                      )}
                    >
                      {a.title}
                    </Link>
                  </article>
                  {isWishlist ? (
                    <LockSolidIcon className="size-6 text-[#64748B]" />
                  ) : (
                    <CircleCheck
                      size={24}
                      className="text-white fill-[#22C55E]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export const COURSE_OVERVIEW_FOR_MODULE = [
  {
    value: "question-1",
    question: "What courses are available on MPJA?",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-2",
    question: "Halal in Daily Life and Business",
    chapter: 4,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-3",
    question: "Halal Standards & Certification Basics",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-4",
    question: "Halal Standards & Certification Basics",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-5",
    question: "Halal Standards & Certification Basics",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-6",
    question: "Halal Standards & Certification Basics",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-7",
    question: "Documents & Evidence in Halal Compliance",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-8",
    question: "Halal Standards & Certification Basics",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-9",
    question: "Documents & Evidence in Halal Compliance",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
  {
    value: "question-10",
    question: "Documents & Evidence in Halal Compliance",
    chapter: 3,
    answer: CUSTOM_ANSWERS,
  },
] satisfies CourseOverview[]
