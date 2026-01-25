import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="kurt bg-linear-to-b from-rose-500 to-pink-100">
      <div className="">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="max-w-xl mx-auto text-slate-600 mb-8">
          Join thousands of students who have transformed their careers with our
          courses.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="xl">Get Started Today</Button>
          <Button variant="secondary" size="xl">
            Browse Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
