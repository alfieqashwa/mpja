import DottedCard from "@/components/DottedCard";
import {
  CertificateIcon,
  ProductDocumentsIcon,
  SmallCertificateIcon,
} from "@/components/icons/about";
import { ArrowRightIcon } from "@/components/icons/arrows";
import { BooksIcon, SmallBookIcon } from "@/components/icons/books";
import { CheckCircle2 } from "lucide-react";
import {
  SectionDescription,
  SectionTitle,
  SectionTitle2,
} from "./section-title";

export function LearningJourney() {
  return (
    <section id="works" className="kurt">
      <article className="text-center">
        <SectionTitle title="how we work" />
        <SectionTitle2 title="Your Learning Journey" />
        <SectionDescription description="Simple steps to start your learning experience." />
      </article>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 p-6">
        {/* Card 1: Browse Courses */}
        <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-7">
          <div>
            <h4 className="text-2xl font-bold text-primary">Browse Courses</h4>
            <p className="mt-2 text-secondary font-medium">
              Explore courses built to support your personal and professional
              development.
            </p>
          </div>
          <DottedCard className="mt-10 pr-20 pt-6 flex-1 min-h-80">
            <CourseCompleteCard />
          </DottedCard>
        </div>

        {/* Card 2: Enroll & Pay */}
        <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-5">
          <div>
            <h4 className="text-2xl font-bold text-primary">Enroll & Pay</h4>
            <p className="mt-2 text-secondary font-medium">
              Secure enrollment with flexible payment options. (kalau belum ada
              payment: "Enroll in seconds—no hassle.")
            </p>
          </div>
          <DottedCard className="mt-10 flex-1 min-h-80">
            <EnrollCard />
          </DottedCard>
        </div>

        {/* Card 3: Learn & Progress */}
        <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-5">
          <div>
            <h4 className="text-2xl font-bold text-primary">
              Learn & Progress
            </h4>
            <p className="mt-2 text-secondary font-medium">
              Access course materials, track progress, and learn at your own
              pace.
            </p>
          </div>
          <DottedCard padding="p-3" className="mt-10 flex-1 min-h-80">
            <LearningProgressCard />
          </DottedCard>
        </div>

        {/* Card 4: Get Certified */}
        <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-7">
          <div>
            <h4 className="text-2xl font-bold text-primary">Get Certified</h4>
            <p className="mt-2 text-secondary font-medium">
              Complete assessments and earn your course certificates.
            </p>
          </div>
          <DottedCard className="mt-10 flex-1 min-h-80">
            <CertificationCard />
          </DottedCard>
        </div>
      </div>
    </section>
  );
}

// Visual for Card 1
function CourseCompleteCard() {
  return (
    <div className="relative w-full max-w-sm rounded-[2rem] border bg-white p-6 shadow-sm">
      <div className="flex justify-start space-x-8">
        {/* Icon placeholder - matching purple folder */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-50">
          <ProductDocumentsIcon />
        </div>
        <article className="flex flex-col items-start space-y-8">
          <h3 className="text-2xl font-medium text-secondary">
            Course Complete
          </h3>
          <p className="text-[56px] font-bold text-primary">3</p>
        </article>
      </div>

      <div className="my-6 h-0.5 w-full bg-[linear-gradient(to_right,#e2e8f0_50%,transparent_50%)] bg-size-[24px_2px] bg-repeat-x"></div>

      <div className="flex justify-between items-center w-full">
        <button className="flex items-center gap-2 text-lg font-bold text-[#E11D48] transition-colors cursor-pointer">
          See All Detail
          <ArrowRightIcon className="text-[#E11D48]" />
        </button>
      </div>
    </div>
  );
}

// Visual for Card 2
function EnrollCard() {
  return (
    <div className="flex w-full max-w-sm flex-col">
      {/* Item 1 */}
      <div className="flex w-full items-center gap-4 border rounded-t-lg bg-white p-4 shadow-sm">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-[#FFF1F2] text-rose-500">
          <BooksIcon className="text-danger" />
        </div>
        <div className="flex-1 space-y-1 min-w-0">
          <h5 className="font-bold text-primary truncate">Halal Supervisor</h5>
          <p className="text-xs text-secondary">19 December 2025 19:10</p>
          <p className="text-xl font-bold text-danger">¥7,000</p>
        </div>
        <div className="shrink-0 text-sm font-bold text-[#E11D48]">
          See All Detail
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex w-full items-center gap-4 border border-t-0 rounded-b-lg bg-white p-4 shadow-sm">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#FFF1F2] text-rose-500">
          <BooksIcon className="text-danger" />
        </div>
        <div className="flex-1 space-y-1 min-w-0">
          <h5 className="font-bold text-primary truncate">Halal Supervisor</h5>
          <p className="text-xs text-secondary">19 December 2025 19:10</p>
          <p className="text-xl font-bold text-danger">¥7,000</p>
        </div>
        <div className="shrink-0 text-sm font-bold text-[#E11D48]">
          See All Detail
        </div>
      </div>
    </div>
  );
}

// Visual for Card 3
function LearningProgressCard() {
  return (
    <div className="w-full max-w-lg rounded-2xl bg-white p-2.5 shadow-sm text-[0.65rem] sm:text-xs">
      <div className="mb-4 flex items-center justify-between">
        <article className="space-y-1">
          <h5 className="font-bold text-slate-900">
            Courses you&apos;re enrolled in.
          </h5>
          <p className="text-secondary text-[8px]">
            See your active courses, progress, and what to learn next
          </p>
        </article>
        <span className="font-bold text-[#E11D48] cursor-pointer">
          View all courses
        </span>
      </div>

      <div className="flex flex-col">
        {/* Row 1 */}
        <div className="flex items-center rounded-t-sm border p-2 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-rose-50 text-rose-500">
            <BooksIcon className="text-danger size-6" />
          </div>
          <div className="flex-1 min-w-0 sm:max-w-25">
            <span className="mb-1 block w-fit rounded bg-[#FBCFE8] px-1 py-0.5 text-[8px] font-semibold text-[#DB2777]">
              Course
            </span>
            <p className="truncate text-[10px] font-bold text-slate-900">
              Halal Japan Beginner Course
            </p>
          </div>

          <div className="hidden sm:block flex-1 border-l pl-2">
            <p className="text-[10px] text-secondary">Content</p>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <SmallBookIcon />{" "}
              <span className="text-[10px] font-bold text-primary">
                5 Material
              </span>
            </div>
          </div>

          <div className="flex-1 border-l pl-2">
            <p className="text-[10px] text-secondary">Completion</p>
            <div className="flex items-center gap-1 text-[10px] font-medium text-primary whitespace-nowrap">
              <CheckCircle2 size={12} className="text-secondary font-bold" />{" "}
              <span className="text-[10px] font-bold text-primary">
                64/100%
              </span>
            </div>
          </div>

          <div className="hidden sm:block flex-1 border-l pl-2">
            <p className="text-[10px] text-secondary">Assignment</p>
            <div className="flex items-center gap-1 text-[10px] font-medium text-primary whitespace-nowrap">
              <SmallCertificateIcon />
              <span className="text-[10px] font-bold text-primary">6/10</span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center rounded-b-sm border border-t-0 p-2 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-rose-50 text-rose-500">
            <BooksIcon className="text-danger size-6" />
          </div>
          <div className="flex-1 min-w-0 sm:max-w-25">
            <span className="mb-1 block w-fit rounded bg-[#FBCFE8] px-1 py-0.5 text-[8px] font-semibold text-[#DB2777]">
              Course
            </span>
            <p className="truncate text-[10px] font-bold text-slate-900">
              Halal Supervision
            </p>
          </div>

          <div className="hidden sm:block flex-1 border-l pl-2">
            <p className="text-[10px] text-secondary">Content</p>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <SmallBookIcon />{" "}
              <span className="text-[10px] font-bold text-primary">
                5 Material
              </span>
            </div>
          </div>

          <div className="flex-1 border-l pl-2">
            <p className="text-[10px] text-secondary">Completion</p>
            <div className="flex items-center gap-1 text-[10px] font-medium text-primary whitespace-nowrap">
              <CheckCircle2 size={12} className="text-secondary font-bold" />{" "}
              <span className="text-[10px] font-bold text-primary">
                64/100%
              </span>
            </div>
          </div>

          <div className="hidden sm:block flex-1 border-l pl-2">
            <p className="text-[10px] text-secondary">Assignment</p>
            <div className="flex items-center gap-1 text-[10px] font-medium text-primary whitespace-nowrap">
              <SmallCertificateIcon />
              <span className="text-[10px] font-bold text-primary">6/10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Visual for Card 4
function CertificationCard() {
  return (
    <div className="relative w-full max-w-sm rounded-[2rem] border bg-white p-6 shadow-sm">
      <div className="flex justify-start space-x-8">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-50">
          <CertificateIcon />
        </div>
        <article className="flex flex-col items-start space-y-8">
          <h3 className="text-2xl font-medium text-secondary">
            Total Certificate
          </h3>
          <p className="text-[56px] font-bold text-primary">3</p>
        </article>
      </div>

      <div className="my-6 h-0.5 w-full bg-[linear-gradient(to_right,#e2e8f0_50%,transparent_50%)] bg-size-[24px_2px] bg-repeat-x"></div>

      <div className="flex justify-between items-center w-full">
        <button className="flex items-center gap-2 text-lg font-bold text-[#E11D48] transition-colors cursor-pointer">
          See All Detail
          <ArrowRightIcon className="text-[#E11D48]" />
        </button>
      </div>
    </div>
  );
}
