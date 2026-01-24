import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimony() {
  return (
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
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
