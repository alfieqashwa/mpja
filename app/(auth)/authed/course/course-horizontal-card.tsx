import {
  BookOpenIcon,
  CertificateSmallIcon,
  ChartBarIcon,
  CrownIcon,
} from "@/components/custom-icons"
import { Separator } from "@/components/ui/separator"
import { BookOpen, ScrollText } from "lucide-react"

export const CourseHorizontalCard = ({
  button,
}: {
  button: React.ReactNode
}) => (
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
      <h3 className="text-primary font-bold text-2xl">Halal Indonesian</h3>
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
          <h4 className="text-xs text-secondary text-center">Assignment</h4>
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
              Reyhan Kuswara
            </p>
          </section>
        </article>
        <article className="space-y-1 py-2.5 px-5 flex-1 justify-center items-center">
          <h4 className="text-xs text-secondary text-center">Certification</h4>
          <section className="flex items-center gap-1 justify-center">
            <CertificateSmallIcon className="text-secondary size-4" />
            <p className="text-primary text-sm font-bold whitespace-nowrap">
              <span>10</span>/<span>13</span>
            </p>
          </section>
        </article>
      </div>
      {button}
    </div>
  </div>
)
