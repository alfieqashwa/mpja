import {
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from "./section-title"

export function Faq() {
  return (
    <section id="help" className="mx-16">
      <article className="text-center">
        <SectionTitle title="help" />
        <SectionSubTitle title="Frequently Asked Questions" />
        <SectionDescription description="Join learners advancing their knowledge through clear, structured learning." />
      </article>
      <div className="mt-12 border-2 rounded-2xl p-8">
        <FaqList />
      </div>
    </section>
  )
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    value: "question-1",
    question: "What courses are available on MPJA?",
    answer:
      "MPJA Learning offers structured online courses for students and professionals across various fields. Courses are organized into modules and lessons for easy, step-by-step learning.",
  },
  {
    value: "question-2",
    question: "Do I get a certificate after completing a course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius omnis laborum, dolores rerum aliquam quam debitis iste porro dolor velit. Corrupti ipsam adipisci quisquam modi veritatis ea velit est aut.",
  },
  {
    value: "question-3",
    question: "Who are these courses for?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius omnis laborum, dolores rerum aliquam quam debitis iste porro dolor velit. Corrupti ipsam adipisci quisquam modi veritatis ea velit est aut.",
  },
  {
    value: "question-4",
    question: "Can I learn at my own pace?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius omnis laborum, dolores rerum aliquam quam debitis iste porro dolor velit. Corrupti ipsam adipisci quisquam modi veritatis ea velit est aut.",
  },
]

export function FaqList() {
  return (
    <Accordion
      type="multiple"
      className="space-y-3"
      defaultValue={["question-1"]}
    >
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} value={faq.value} className="space-y-1">
          <AccordionTrigger className="text-primary text-2xl font-bold border p-6 rounded-xl shadow">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-secondary text-base font-medium border p-6 rounded-xl shadow">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
