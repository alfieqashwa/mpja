import { LockSolidIcon, SmallBookIcon } from "@/components/custom-icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CircleCheck } from "lucide-react"

const COURSE_OVERVIEW = [
  {
    value: "question-1",
    question: "What courses are available on MPJA?",
    chapter: 3,
    answer: [
      { id: 1, title: "Define Halal, Haram, and Mashbooh" },
      { id: 2, title: "Explain why intention and process matter" },
      { id: 3, title: "Identify examples of halal-friendly decisions" },
      { id: 4, title: "Explain why intention and process matter" },
      { id: 5, title: "Identify examples of halal-friendly decisions" },
      { id: 6, title: "Assignment" },
    ],
  },
  {
    value: "question-2",
    question: "Halal in Daily Life and Business",
    chapter: 4,
    answer: [
      { id: 1, title: "Define Halal, Haram, and Mashbooh" },
      { id: 2, title: "Explain why intention and process matter" },
      { id: 3, title: "Identify examples of halal-friendly decisions" },
      { id: 4, title: "Explain why intention and process matter" },
      { id: 5, title: "Identify examples of halal-friendly decisions" },
      { id: 6, title: "Assignment" },
    ],
  },
  {
    value: "question-3",
    question: "Halal Standards & Certification Basics",
    chapter: 3,
    answer: [
      { id: 1, title: "Define Halal, Haram, and Mashbooh" },
      { id: 2, title: "Explain why intention and process matter" },
      { id: 3, title: "Identify examples of halal-friendly decisions" },
      { id: 4, title: "Explain why intention and process matter" },
      { id: 5, title: "Identify examples of halal-friendly decisions" },
      { id: 6, title: "Assignment" },
    ],
  },
]

export const AccordionCourseOverview = ({
  isWishlist = false,
}: {
  isWishlist?: boolean
}) => (
  <div className="p-5 border shadow-sm bg-white rounded-2xl">
    <h3 className="text-2xl font-bold text-primary">Course Overview</h3>
    <Accordion type="multiple" className="pt-5" defaultValue={["question-1"]}>
      {COURSE_OVERVIEW.map((q, idx) => (
        <AccordionItem
          value={q.value}
          key={`${idx}-${q.value}`}
          className="space-y-1"
        >
          <AccordionTrigger className="bg-[#F8FAFC] px-5">
            <article className="flex justify-between items-center w-full text-primary font-bold">
              <p>{q.question}</p>
              <p>{q.chapter} Chapter</p>
            </article>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {q.answer.map((a, idx) => (
                <li
                  className="flex justify-between items-center px-4 py-3.5"
                  key={`${idx}-${a.id}`}
                >
                  <article className="space-x-1">
                    <SmallBookIcon className="size-5 inline text-secondary" />
                    <span className="text-secondary font-semibold text-sm">
                      {a.title}
                    </span>
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
  </div>
)
