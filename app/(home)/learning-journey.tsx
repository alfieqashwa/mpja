import DottedCard from "@/components/DottedCard";
import { ArrowRightIcon } from "@/components/icons/arrows";
import { BooksIcon } from "@/components/icons/books";
import { ArrowRight, BookOpen, CheckCircle2, FileText } from 'lucide-react';
import { SectionDescription, SectionTitle, SectionTitle2 } from './section-title';

export function LearningJourney() {
  return (
    <section id="works" className="container mx-auto px-4 py-20">
      <div className="text-center">
        <SectionTitle title="learning journey" />
        <SectionTitle2 title="Your Learning Journey" />
        <SectionDescription description="Simple steps to start your learning experience." />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 p-6">
        {/* Card 1: Browse Courses */}
        <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-7">
          <div>
            <h4 className="text-2xl font-bold text-primary">Browse Courses</h4>
            <p className="mt-2 text-secondary font-medium">
              Explore courses built to support your personal and professional development.
            </p>
          </div>
          <DottedCard className="mt-10 flex-1 min-h-[320px]">
            <CourseCompleteCard />
          </DottedCard>
        </div>

        {/* Card 2: Enroll & Pay */}
        <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-5">
          <div>
            <h4 className="text-2xl font-bold text-primary">Enroll & Pay</h4>
            <p className="mt-2 text-secondary font-medium">
              Secure enrollment with flexible payment options. (kalau belum ada payment: "Enroll in seconds—no hassle.")
            </p>
          </div>
          <DottedCard className="mt-10 flex-1 min-h-[320px]">
            <EnrollCard />
          </DottedCard>
        </div>

        {/* Card 3: Learn & Progress */}
        <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:col-span-5">
          <div>
            <h4 className="text-2xl font-bold text-primary">Learn & Progress</h4>
            <p className="mt-2 text-secondary font-medium">
              Access course materials, track progress, and learn at your own pace.
            </p>
          </div>
          <DottedCard className="mt-10 flex-1 min-h-[320px]">
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
          <DottedCard className="mt-10 flex-1 min-h-[320px]">
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
    <div className="relative w-full max-w-sm rounded-[2rem] bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center text-center">
        {/* Icon placeholder - matching purple folder */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-50">
          <div className="relative flex h-14 w-16 items-center justify-center rounded-md bg-purple-600 shadow-lg after:absolute after:top-[-6px] after:left-[4px] after:content-[''] after:h-4 after:w-6 after:bg-purple-600 after:rounded-t-sm">
            <div className="absolute top-[8px] h-10 w-12 bg-purple-400/30 rounded-sm"></div>
            <div className="absolute top-[12px] h-1 w-8 bg-white/50 rounded-full"></div>
          </div>
        </div>

        <h3 className="text-xl font-medium text-secondary">Course Complete</h3>
        <div className="mt-2 text-6xl font-bold text-primary">3</div>
      </div>

      <div className="my-8 w-full border-t-2 border-dashed border-slate-100"></div>

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
           <BooksIcon className="text-danger"/>
        </div>
        <div className="flex-1 space-y-1 min-w-0">
          <h5 className="font-bold text-primary truncate">Halal Supervisor</h5>
          <p className="text-xs text-secondary">19 December 2025 19:10</p>
          <p className="text-xl font-bold text-danger">¥7,000</p>
        </div>
        <div className="shrink-0 text-sm font-bold text-[#E11D48]">See All Detail</div>
      </div>

       {/* Item 2 */}
      <div className="flex w-full items-center gap-4 border rounded-b-lg bg-white p-4 shadow-sm">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#FFF1F2] text-rose-500">
           <BooksIcon className="text-danger"/>
        </div>
        <div className="flex-1 space-y-1 min-w-0">
          <h5 className="font-bold text-primary truncate">Halal Supervisor</h5>
          <p className="text-xs text-secondary">19 December 2025 19:10</p>
          <p className="text-xl font-bold text-danger">¥7,000</p>
        </div>
        <div className="shrink-0 text-sm font-bold text-[#E11D48]">See All Detail</div>
      </div>
    </div>
  );
}

// Visual for Card 3
function LearningProgressCard() {
  return (
    <div className="w-full max-w-lg rounded-2xl bg-white p-4 shadow-sm text-[0.65rem] sm:text-xs">
        <div className="mb-4 flex items-center justify-between">
            <h5 className="font-bold text-slate-900">Courses you&apos;re enrolled in.</h5>
            <span className="font-bold text-rose-500 cursor-pointer">View all courses</span>
        </div>
        <p className="mb-4 text-slate-400 text-[10px]">See your active courses, progress, and what to learn next</p>

        <div className="flex flex-col gap-3">
            {/* Row 1 */}
            <div className="flex items-center gap-2 rounded-lg border border-slate-50 p-2 sm:gap-4">
                 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-rose-50 text-rose-500">
                    <BookOpen size={16} />
                 </div>
                 <div className="flex-1 min-w-0 sm:max-w-[100px]">
                    <span className="mb-1 block w-fit rounded bg-pink-100 px-1 py-0.5 text-[8px] font-medium text-pink-600">Course</span>
                    <p className="truncate font-bold text-slate-900">Halal Japan Biginner Course</p>
                 </div>
                 
                 <div className="hidden sm:block flex-1 border-l border-slate-100 pl-2">
                    <p className="text-[10px] text-slate-400">Content</p>
                    <div className="flex items-center gap-1 font-medium text-slate-700">
                        <FileText size={12} /> 5 Material
                    </div>
                 </div>

                 <div className="flex-1 border-l border-slate-100 pl-2">
                    <p className="text-[10px] text-slate-400">Completion</p>
                    <div className="flex items-center gap-1 font-medium text-slate-700">
                        <CheckCircle2 size={12} /> 64/100%
                    </div>
                 </div>

                 <div className="hidden sm:block flex-1 border-l border-slate-100 pl-2">
                    <p className="text-[10px] text-slate-400">Assignment</p>
                    <div className="flex items-center gap-1 font-medium text-slate-700">
                        <FileText size={12} /> 6/10
                    </div>
                 </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-2 rounded-lg border border-slate-50 p-2 sm:gap-4">
                 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-rose-50 text-rose-500">
                    <BookOpen size={16} />
                 </div>
                 <div className="flex-1 min-w-0 sm:max-w-[100px]">
                    <span className="mb-1 block w-fit rounded bg-pink-100 px-1 py-0.5 text-[8px] font-medium text-pink-600">Course</span>
                    <p className="truncate font-bold text-slate-900">Halal supervision</p>
                 </div>
                 
                 <div className="hidden sm:block flex-1 border-l border-slate-100 pl-2">
                    <p className="text-[10px] text-slate-400">Content</p>
                    <div className="flex items-center gap-1 font-medium text-slate-700">
                        <FileText size={12} /> 5 Material
                    </div>
                 </div>

                 <div className="flex-1 border-l border-slate-100 pl-2">
                    <p className="text-[10px] text-slate-400">Completion</p>
                    <div className="flex items-center gap-1 font-medium text-slate-700">
                        <CheckCircle2 size={12} /> 64/100%
                    </div>
                 </div>

                 <div className="hidden sm:block flex-1 border-l border-slate-100 pl-2">
                    <p className="text-[10px] text-slate-400">Assignment</p>
                    <div className="flex items-center gap-1 font-medium text-slate-700">
                       <FileText size={12} /> 6/10
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
    <div className="relative w-full max-w-sm rounded-[2rem] bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center text-center">
        {/* Certificate Icon - Blue */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-500">
           <FileText size={48} className="fill-blue-200" /> {/* Abstract representation */}
           {/* Custom SVG or simpler representation for the certificate icon */}
           <div className="absolute">
             <div className="h-14 w-12 rounded-sm bg-blue-500 shadow-lg relative flex items-center justify-center">
                <div className="h-2 w-8 bg-blue-200/50 rounded-full mb-2"></div>
                <div className="h-2 w-8 bg-blue-200/50 rounded-full mt-2"></div>
                {/* Badge */}
                <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-red-400 border-2 border-white"></div>
             </div>
           </div>
        </div>

        <h3 className="text-xl font-medium text-slate-500">Total Certificate</h3>
        <div className="mt-2 text-6xl font-bold text-slate-900">3</div>
      </div>

      <div className="my-8 w-full border-t-2 border-dashed border-slate-100"></div>

      <div className="flex justify-between items-center w-full">
        <button className="flex items-center gap-2 text-lg font-bold text-rose-500 hover:text-rose-600 transition-colors cursor-pointer">
          See All Detail
          <ArrowRight strokeWidth={2.5} size={20} />
        </button>
      </div>
    </div>
  );
}
