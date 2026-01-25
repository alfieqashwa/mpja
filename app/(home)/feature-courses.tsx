import { BookIcon, BookOpenIcon, BooksIcon } from "@/components/icons/books";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, Link } from "lucide-react";
import {
  SectionDescription,
  SectionTitle,
  SectionTitle2,
} from "./section-title";

export function FeatureCourses() {
  return (
    <section
      id="course"
      className="pt-24 pb-39 rounded-2xl px-44 mx-auto bg-linear-to-b from-[#FFF1F2] to-[#FECDD3]"
    >
      <div className="text-center pt-24">
        <SectionTitle title="course" />
        <SectionTitle2 title="Featured Courses" />
        <SectionDescription description="Find the right course to match your learning goals." />
      </div>

      {/* Card List */}
      <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Card */}
        {[
          {
            id: "card_1",
            title: "Halal Indonesian",
            description: "177 Student | Certification",
            lessonCount: 7,
            lessonCourse: "open-book",
            price: 7_000,
            isLove: false,
          },
          {
            id: "card_2",
            title: "Halal Supervisor",
            description: "177 Student | Certification",
            lessonCount: 9,
            lessonCourse: "books",
            price: 8_000,
            isLove: true,
          },
          {
            id: "card_3",
            title: "Halal Japan Biginner Course",
            description: "177 Student | Certification",
            lessonCount: 5,
            lessonCourse: "book",
            price: 12_000,
            isLove: false,
          },
        ].map((card, idx) => {
          const featureIcon =
            card.lessonCourse === "open-book" ? (
              <BookOpenIcon className="text-danger size-36" />
            ) : card.lessonCourse === "books" ? (
              <BooksIcon className="text-danger size-36" />
            ) : (
              <BookIcon className="text-danger size-36" />
            );
          return (
            <div
              className="bg-white p-4 rounded-4xl max-w-lg"
              key={`${idx}-${card.id}`}
            >
              {/* Image Frame */}
              <div className="bg-[#FFF1F2] relative rounded-3xl flex h-85 justify-center items-center">
                <div className="absolute top-0 left-0 bg-[#FECDD3] p-2 rounded-br-md rounded-tl-md">
                  <p className="flex space-x-1 text-[#E11D48] font-semibold">
                    <Link size={20} />
                    <span>{card.lessonCount} Lesson</span>
                  </p>
                </div>
                {featureIcon}
              </div>
              {/* CTA */}
              <div className="flex mt-5 justify-between items-start">
                <article className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary whitespace-nowrap">
                    {card.title}
                  </h3>
                  <p className="text-secondary text-lg font-medium whitespace-nowrap">
                    {card.description}
                  </p>
                </article>
                <Heart
                  className={cn(
                    card.isLove
                      ? "text-[#E11D48] fill-[#E11D48]"
                      : "text-primary bg-transparent",
                  )}
                />
              </div>
              {/* Price + Button */}
              <div className="mt-10 flex justify-between items-center">
                <p className="text-2xl text-danger font-bold">
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  }).format(card.price)}
                </p>
                <Button size={"default"}>Join Course Now</Button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
