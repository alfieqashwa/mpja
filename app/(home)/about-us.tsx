import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, PlayCircle } from "lucide-react";

export function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-rose-500 font-semibold mb-2 uppercase tracking-wide text-sm">
            ABOUT US
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Our Growing Impact
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Join learners advancing their knowledge through clear, structured
            online learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { stat: "2,000+", label: "Active Students" },
            { stat: "50+", label: "Expert Instructors" },
            { stat: "100+", label: "Courses Available" },
            { stat: "95%", label: "Success Rate" },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="text-center p-6 border border-slate-200 rounded-2xl bg-white shadow-sm"
            >
              <CardContent className="pt-4">
                <p className="text-4xl font-bold text-rose-500 mb-2">
                  {item.stat}
                </p>
                <p className="text-slate-600">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-3xl bg-linear-to-br from-rose-50 to-pink-100 aspect-video flex items-center justify-center">
            <PlayCircle className="size-20 text-rose-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              MPJA Learning is dedicated to providing accessible, high-quality
              Japanese language education.
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our platform offers structured courses for students and
              professionals seeking practical, flexible, and accessible
              education. Whether you're preparing for JLPT or mastering business
              Japanese, we have the right course for you.
            </p>
            <div className="space-y-4">
              {[
                "Live sessions with native Japanese speakers",
                "AI-powered pronunciation feedback",
                "Personalized learning paths",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-rose-100 flex items-center justify-center">
                    <ChevronRight className="size-4 text-rose-500" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
