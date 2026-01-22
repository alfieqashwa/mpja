import { Header } from "@/components/Header";
import { HeroSection1 } from "@/components/HeroSection1";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  ChevronRight,
  GraduationCap,
  PlayCircle,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section 1 */}
        <HeroSection1 />

        {/* Hero Section 2 - Course Cards */}
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
                Explore a diverse range of courses designed to help you achieve
                your goals and advance your career.
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

        {/* About Us Section */}
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
                Join learners advancing their knowledge through clear,
                structured online learning.
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
                  MPJA Learning is dedicated to providing accessible,
                  high-quality Japanese language education.
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our platform offers structured courses for students and
                  professionals seeking practical, flexible, and accessible
                  education. Whether you're preparing for JLPT or mastering
                  business Japanese, we have the right course for you.
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

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="text-rose-500 font-semibold mb-2 uppercase tracking-wide text-sm">
                TESTIMONIALS
              </p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                What Our Students Say
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "JLPT N2 Student",
                  quote:
                    "The courses here helped me pass my JLPT N2 exam on the first try. Highly recommended!",
                },
                {
                  name: "Michael Chen",
                  role: "Business Professional",
                  quote:
                    "I now use Japanese daily in my job thanks to the business Japanese course. Excellent instructors!",
                },
                {
                  name: "Emma Williams",
                  role: "Beginner Student",
                  quote:
                    "As a complete beginner, I found the courses easy to follow and incredibly engaging.",
                },
              ].map((testimonial, idx) => (
                <Card
                  key={idx}
                  className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm"
                >
                  <CardContent className="pt-0">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="size-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-full bg-slate-200" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-linear-to-b from-rose-500 to-pink-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="max-w-xl mx-auto text-slate-600 mb-8">
              Join thousands of students who have transformed their careers with
              our courses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl">Get Started Today</Button>
              <Button variant="secondary" size="xl">
                Browse Courses
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                MPJA Learning
              </h3>
              <p className="text-sm text-slate-500">
                MPJA Learning is an online learning platform offering structured
                courses for students and professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
            © 2025 MPJA Learning. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
