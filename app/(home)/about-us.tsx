import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export function AboutUs() {
  return (
    <section className="mt-24 container mx-auto px-4">
      <div className="text-center w-lg mx-auto">
        <p className="text-rose-500 font-bold uppercase tracking-wide text-lg">
          ABOUT US
        </p>
        <h2 className="text-6xl mt-6 font-bold sm:text-4xl text-primary">
          Our Growing Impact
        </h2>
        <p className="max-w-2xl mt-6 mx-auto font-semibold text-2xl text-secondary">
          Join learners advancing their knowledge through clear, structured
          online learning.
        </p>
      </div>

      <div className="mt-12 items-center grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        <section className="space-y-6 h-full">
          <article className="px-6 py-9 space-y-6 flex flex-col items-start border rounded-2xl relative border-slate-200 shadow-xs bg-white overflow-hidden bg-[linear-gradient(to_right,rgba(244,63,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,63,94,0.15)_1px,transparent_1px)] bg-size-[45px_45px]">
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
          <div className="relative rounded-2xl border border-slate-200 shadow-xs bg-white overflow-hidden bg-[linear-gradient(to_right,rgba(244,63,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,63,94,0.15)_1px,transparent_1px)] bg-size-[45px_45px]">
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
        <div>
          <Image
            alt="About Us Section"
            src="/images/about-us.png"
            width={500}
            height={500}
            priority
            className=""
          />
        </div>
      </div>
    </section>
  );
}
