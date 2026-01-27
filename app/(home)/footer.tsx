import { CopyrightMpja } from "@/components/copyright"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const QUICK_ACCESS = [
  {
    title: "quick links",
    access: [
      { link: "Courses" },
      { link: "Programs" },
      { link: "Certificates" },
    ],
  },
  {
    title: "learning",
    access: [
      { link: "How It Works" },
      { link: "Learning Pathways" },
      { link: "Assessment & Grading" },
    ],
  },
  {
    title: "company",
    access: [{ link: "About MPJA" }, { link: "Contact" }],
  },
  {
    title: "resources",
    access: [
      { link: "FAQ" },
      { link: "Help Center" },
      { link: "Terms & Privacy" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="pt-24 px-20">
      <div className="flex justify-between">
        <div className="w-1/2 max-w-md">
          <div className="flex items-center space-x-3">
            <Image
              src="/img/logo.png"
              alt="MPJA"
              width={76}
              height={83}
              priority
            />
            <h3 className="text-3xl font-bold text-primary">MPJA Learning</h3>
          </div>
          <p className="text-lg text-secondary font-medium pt-4">
            MPJA Learning is an online learning platform offering structured
            courses for students and professionals seeking practical, flexible,
            and accessible education.
          </p>
        </div>
        <div className="w-1/2 grid grid-cols-4 gap-16">
          {QUICK_ACCESS.map((q, i) => (
            <section key={`${i}-${q.title}`}>
              <h4 className="font-bold text-primary text-lg capitalize">
                {q.title}
              </h4>
              <ul className="space-y-4 text-secondary pt-4">
                {q.access.map((l, i) => (
                  <li key={`${i}-${l.link}`}>
                    <a href="#" className="whitespace-nowrap">
                      {l.link}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <Separator className="mt-16" />
      <CopyrightMpja />
    </footer>
  )
}
