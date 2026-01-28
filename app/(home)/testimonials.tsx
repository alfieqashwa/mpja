import Image from "next/image"
import {
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from "./section-title"

export function Testimonials() {
  return (
    <section id="testimony">
      <article className="text-center">
        <SectionTitle title="testimony" />
        <SectionSubTitle title="Success Stories" />
        <SectionDescription description="Hear from learners who study with MPJA." />
      </article>
      <div className="pt-12 flex flex-col md:flex-row gap-10">
        {[
          {
            picture: "/img/testimony-1.png",
            name: "Aina M. • Graduate Student • Tokyo",
            testimony: `
              “Clear structure and practical examples made it easy to stay
              consistent. I could study after work without feeling overwhelmed.”
            `,
          },
          {
            picture: "/img/testimony-2.png",
            name: "Faris R. • Quality Assurance Associate • Osaka",
            testimony: `“The lessons are concise and well-organized. I especially appreciated how the content stays halal-compliant while remaining industry-focused.”`,
          },
          {
            picture: "/img/testimony-3.png",
            name: "Nadia S. • Marketing Specialist • Yokohama",
            testimony: `“MPJA helped me understand halal standards in a professional context. The learning flow—from modules to quizzes—kept me on track.”`,
          },
        ].map((t, idx) => (
          <section
            className="border px-5 pb-6 pt-50 shadow rounded-xl relative"
            key={`${idx}-${t.name}`}
          >
            <div className="absolute right-0 top-0">
              <Image
                src="/img/quote.png"
                alt="Quote"
                width={174}
                height={142}
                priority
                className="rounded-tr-xl"
              />
            </div>
            <div className="relative size-24 ring-16 ring-[#E11D48]/50 border-8 border-[#E11D48]/70 ml-4 rounded-full">
              <div className="absolute size-20.5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <Image src={t.picture} alt="Member Pic" fill priority />
              </div>
            </div>

            <article className="pt-8">
              <h3 className="text-2xl text-primary font-bold">{t.name}</h3>
              <p className="text-secondary pt-4 font-medium text-2xl">
                {t.testimony}
              </p>
            </article>
          </section>
        ))}
      </div>
    </section>
  )
}
