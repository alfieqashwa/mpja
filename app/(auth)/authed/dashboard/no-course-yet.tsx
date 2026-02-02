import { ArrowRightIcon } from "@/components/custom-icons"
import Image from "next/image"
import Link from "next/link"

export const NoCourseYetCTA = () => (
  <section className="space-y-2 px-5 py-6 border border-[#F59E0B] bg-[#FEF3C7] rounded-2xl shadow-md flex justify-between items-center">
    <article>
      <h2 className="text-2xl font-bold text-[#D97706]">
        Your profile is almost ready
      </h2>
      <p className="text-primary font-medium">
        Complete the remaining steps to speed up verification and receive your
        certificate without delays.
      </p>
    </article>
    <Link
      href="#"
      className="flex space-x-2.5 items-center font-bold text-[#D97706]"
    >
      <span>Complete profile</span>
      <ArrowRightIcon />
    </Link>
  </section>
)

export const NoCourseYetCard = () => (
  <section className="space-y-2 px-5 py-6 border bg-white rounded-2xl shadow-md">
    <article className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-primary">
          Courses you’re enrolled in.
        </h2>
        <p className="text-secondary font-medium">
          See your active courses, progress, and what to learn next
        </p>
      </div>
      <p className="text-rose-600 font-bold">View all courses</p>
    </article>
    <div className="p-5 flex flex-col items-center">
      <Image
        src="/img/no-data-course.png"
        alt="No Data"
        width={364}
        height={310}
        priority
        className="object-cover"
      />
      <article className="space-y-2 text-center w-1/2">
        <h3 className="text-2xl text-primary font-bold">No courses yet</h3>
        <p className="text-secondary font-medium">
          Explore halal-certified courses and enroll to start learning. <br />
          Your progress will be saved automatically.
        </p>
      </article>
    </div>
  </section>
)
