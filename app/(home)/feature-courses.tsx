import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChevronRight, GraduationCap, Star } from "lucide-react";

export function FeatureCourses() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-rose-500 font-semibold mb-2 uppercase tracking-wide text-sm">
            Featured Courses
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Discover Our Popular Courses
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Explore a diverse range of courses designed to help you achieve your
            goals and advance your career.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Japanese for Beginners",
              description:
                "Start your journey into the Japanese language with basic grammar and vocabulary.",
              lessons: 24,
              duration: "12 hours",
              icon: <BookOpen className="size-6" />,
            },
            {
              title: "Business Japanese",
              description:
                "Master formal Japanese for professional environments and corporate communication.",
              lessons: 18,
              duration: "8 hours",
              icon: <GraduationCap className="size-6" />,
            },
            {
              title: "JLPT N3 Preparation",
              description:
                "Focused training for N3 JLPT level with mock exams and practice.",
              lessons: 32,
              duration: "16 hours",
              icon: <Star className="size-6" />,
            },
          ].map((course, idx) => (
            <Card
              key={idx}
              className="group border border-slate-200 shadow-sm hover:shadow-lg transition-all rounded-2xl overflow-hidden"
            >
              <div className="aspect-video bg-linear-to-br from-rose-50 to-pink-100 flex items-center justify-center">
                <div className="size-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-rose-500">
                  {course.icon}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">
                    {course.lessons} lessons
                  </span>
                  <span className="text-slate-400">{course.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Courses <ChevronRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
