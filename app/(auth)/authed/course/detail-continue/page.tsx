"use client"

import {
  BookIcon,
  BookOpenIcon,
  CertificateSmallIcon,
  ChartBarIcon,
  CrownIcon,
  SmallBookIcon,
} from "@/components/custom-icons"
import { SeparatorDash } from "@/components/separator-dash"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  BookOpen,
  CalendarDays,
  CircleCheck,
  Clock3,
  Keyboard,
  Laptop,
  ScrollText,
} from "lucide-react"
import Image from "next/image"
import { DashboardHeader } from "../../_components/dashboard-header"
import { DashboardWrapper } from "../../_components/dashboard-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

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

export default function DetailContinuePage() {
  return (
    <div>
      <DashboardHeader title="Course" />
      <DashboardWrapper>
        <Breadcrumb>
          <BreadcrumbList className="text-rose-600 font-bold">
            <BreadcrumbItem>
              <BreadcrumbLink href="/course">Course</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-rose-600">
                Detail Course
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="bg-white px-4 py-6 rounded-2xl flex space-x-5 border shadow-sm">
          <div
            className="relative flex aspect-video items-center w-1/4 justify-center rounded-xl bg-[#FFF1F2]"
            style={{
              backgroundImage: `
                    radial-gradient(circle, rgba(255, 255, 255, 0.8) 1.5px, transparent 1.5px),
                    radial-gradient(circle, rgba(255, 255, 255, 0.35) 1px, transparent 1px),
                    radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
  `,
              backgroundSize: "14px 14px, 18px 18px, 24px 24px",
              backgroundPosition: "0 0, 11px 16px, 7px 9px",
            }}
          >
            <BookOpenIcon className="text-danger size-28" />
          </div>
          <div className="space-y-4 w-3/4">
            <h3 className="text-primary font-bold text-2xl">
              Halal Indonesian
            </h3>
            <div className="my-3 bg-[#F8FAFC] rounded-sm px-2 py-1 flex justify-between">
              <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
                <h4 className="text-xs text-secondary text-center">Lesson</h4>
                <section className="flex items-center gap-1 justify-center">
                  <BookOpen size={16} className="text-secondary" />
                  <p className="text-primary text-sm font-bold whitespace-nowrap">
                    <span>10</span>/<span>13</span>
                  </p>
                </section>
              </article>
              <div>
                <Separator orientation="vertical" />
              </div>
              <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
                <h4 className="text-xs text-secondary text-center">Progress</h4>
                <section className="flex items-center justify-center gap-x-1">
                  <ChartBarIcon className="text-secondary size-4" />
                  <p className="text-primary text-sm font-bold whitespace-nowrap">
                    <span>90</span>/<span>100</span>
                  </p>
                </section>
              </article>
              <div>
                <Separator orientation="vertical" />
              </div>
              <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
                <h4 className="text-xs text-secondary text-center">
                  Assignment
                </h4>
                <section className="flex items-center gap-1 justify-center">
                  <ScrollText size={16} className="text-secondary" />
                  <p className="text-primary text-sm font-bold whitespace-nowrap">
                    <span>10</span>/<span>13</span>
                  </p>
                </section>
              </article>
              <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
                <h4 className="text-xs text-secondary text-center">Trainer</h4>
                <section className="flex items-center gap-1 justify-center">
                  <CrownIcon className="text-secondary size-4" />
                  <p className="text-primary text-sm font-bold whitespace-nowrap">
                    <span>10</span>/<span>13</span>
                  </p>
                </section>
              </article>
              <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
                <h4 className="text-xs text-secondary text-center">
                  Certification
                </h4>
                <section className="flex items-center gap-1 justify-center">
                  <CertificateSmallIcon className="text-secondary size-4" />
                  <p className="text-primary text-sm font-bold whitespace-nowrap">
                    <span>10</span>/<span>13</span>
                  </p>
                </section>
              </article>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <section className="space-y-6 w-3/4">
            <article className="space-y-3 p-5 bg-white border shadow-sm rounded-2xl">
              <h3 className="text-2xl font-bold text-primary">Overview</h3>
              <p className="text-secondary font-medium">
                MPJA Learning supports Muslim professionals and halal industry
                participants through accessible, high-quality education. Our
                platform offers structured online courses designed for long
                study sessions, with clear learning pathways, assessments, and
                certification outcomes.
              </p>
            </article>
            <div className="p-5 border shadow-sm bg-white rounded-2xl">
              <h3 className="text-2xl font-bold text-primary">
                Course Overview
              </h3>
              <Accordion
                type="multiple"
                className=""
                defaultValue={["question-1"]}
              >
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
                            <CircleCheck
                              size={24}
                              className="text-white fill-[#22C55E]"
                            />
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          <section className="px-4 py-5 border shadow-sm bg-white w-1/4 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary">
              Detail Information
            </h3>
            <ul className="space-y-3 pt-5">
              {[
                {
                  icon: <Clock3 className="text-secondary" />,
                  info: "3 Hours Estimation",
                },
                {
                  icon: <Laptop className="text-secondary" />,
                  info: "70 Point to get Certificated",
                },
                {
                  icon: <Keyboard className="text-secondary" />,
                  info: "English, Japan",
                },
                {
                  icon: (
                    <CertificateSmallIcon className="text-secondary size-6" />
                  ),
                  info: "Certificate of Completion",
                },
                {
                  icon: <CalendarDays className="text-secondary" />,
                  info: "No Due date for this content",
                },
              ].map((detail, idx) => (
                <li
                  className="flex items-center gap-1"
                  key={`${idx}-${detail.info}`}
                >
                  {detail.icon}
                  <p className="font-semibold text-primary">{detail.info}</p>
                </li>
              ))}
            </ul>
            <SeparatorDash className="my-5" />
            <h4 className="font-semibold text-primary">Trainer</h4>
            <div className="flex space-x-2 pt-5">
              <Image
                src="/img/avatar.png"
                alt="Trainer"
                width={52}
                height={52}
                priority
                className="object-cover rounded-sm"
              />
              <article className="space-y-1">
                <h4 className="text-[#0F172A] font-semibold">Rayhan Kuswara</h4>
                <p className="text-[#64748B] text-[10px]">
                  Quality Assurance Associate
                </p>
              </article>
            </div>
          </section>
        </div>
      </DashboardWrapper>
    </div>
  )
}
