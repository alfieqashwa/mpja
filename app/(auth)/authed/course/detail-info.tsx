import { CertificateSmallIcon } from "@/components/custom-icons"
import { SeparatorDash } from "@/components/separator-dash"
import { CalendarDays, Clock3, Keyboard, Laptop } from "lucide-react"
import Image from "next/image"

const DETAIL_INFO = [
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
    icon: <CertificateSmallIcon className="text-secondary size-6" />,
    info: "Certificate of Completion",
  },
  {
    icon: <CalendarDays className="text-secondary" />,
    info: "No Due date for this content",
  },
]

export const DetailInfo = () => (
  <section className="px-4 py-5 border shadow-sm bg-white w-1/4 rounded-2xl">
    <h3 className="text-2xl font-bold text-primary">Detail Information</h3>
    <ul className="space-y-3 pt-5">
      {DETAIL_INFO.map((detail, idx) => (
        <li className="flex items-center gap-1" key={`${idx}-${detail.info}`}>
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
)
