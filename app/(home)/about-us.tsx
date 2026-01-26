import { FileIcon, PackageIcon, SecureIcon } from "@/components/icons/about"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from "./section-title"

export function AboutUs() {
  return (
    <section id="about" className="px-16">
      <div className="text-center w-full">
        <SectionTitle title="about us" />
        <SectionSubTitle title="Our Growing Impact" />
        <SectionDescription description="Join learners advancing their knowledge through clear, structured online learning." />
      </div>

      <div className="mt-12 items-center flex flex-col w-full gap-8 md:flex-row md:items-start">
        <section className="space-y-6 h-full w-7/12">
          <article className="py-9 px-6 space-y-6 flex flex-col items-start border rounded-2xl relative border-slate-200 shadow-sm bg-white overflow-hidden bg-[linear-gradient(to_right,rgba(244,63,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,63,94,0.15)_1px,transparent_1px)] bg-size-[45px_45px]">
            <p className="text-3xl font-semibold text-primary">
              MPJA Learning is dedicated to empowering individuals through
              education, community, and accessible learning resources.
            </p>
            <p className="text-3xl font-semibold text-primary">
              Our platform supports personal and <br /> professional growth{" "}
              <span className="text-secondary">
                through structured <br />
                courses designed to be practical, relevant, and easy to follow.
              </span>
            </p>
          </article>
          <div className="relative rounded-2xl border border-slate-200 shadow-sm bg-white overflow-hidden bg-[linear-gradient(to_right,rgba(244,63,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,63,94,0.15)_1px,transparent_1px)] bg-size-[45px_45px]">
            <div className="grid grid-cols-3 py-12">
              {[
                { title: "Professional Course", count: "6+" },
                { title: "HAppy User", count: "3+" },
                { title: "Structured Learning", count: "100%" },
              ].map((impact, idx) => (
                <div className="text-center" key={`${impact}-${idx}`}>
                  <p className="text-6xl font-semibold text-[#E11D48]">
                    {impact.count}
                  </p>
                  <p className="text-secondary">{impact.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="relative">
          <Image
            alt="About Us Section"
            src="/images/about-us.png"
            width={666}
            height={500}
            // fill
            priority
            className=""
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: "Expert-Led Instruction",
            description:
              "Learn from experienced professionals and educators with real-world insights.",
            icon: <SecureIcon />,
          },
          {
            title: "Flexible Online Learning",
            description:
              "Access your courses anytime and progress at your own pace.",
            icon: <PackageIcon />,
          },
          {
            title: "Quality-Assured Content",
            description:
              "Every course is designed to be clear, structured, and purpose-driven.",
            icon: <FileIcon />,
          },
        ].map((item, idx) => (
          <div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            key={`${idx}-${item.title}`}
          >
            {/* icon */}
            <div
              className={cn(
                "flex items-center justify-center rounded-full bg-[#FFF1F2] text-rose-500",
                idx === 0 ? "size-16" : "size-14.5",
              )}
            >
              {item.icon}
            </div>

            {/* content */}
            <div className="flex flex-col space-y-3 mt-10">
              <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
              <p className="text-base leading-relaxed text-secondary font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
