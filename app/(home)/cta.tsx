import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Cta() {
  return (
    <section className="bg-linear-to-b from-rose-50 from-10% via-rose-100 via-40% to-85% to-rose-50/50 relative">
      <div className="pl-19 pt-26 w-1/2 space-y-6 pb-30">
        <h2 className="text-6xl font-bold text-primary">
          Ready to Start Your <br />
          <span className="text-danger">Learning Journey?</span>
        </h2>
        <p className="text-secondary text-2xl font-semibold">
          Join learners advancing their careers through <br /> structured,
          self-paced online courses.
        </p>
        <div className="flex flex-wrap justify-start gap-3">
          <Button size="xl">Explore courses</Button>
          <Button variant="secondary" size="xl">
            Sign up free
          </Button>
        </div>
      </div>

      <div className="bottom-0 right-0 absolute">
        <Image
          src="/img/cta-image.png"
          alt="Dashboard preview"
          width={720}
          height={800}
          priority
        />
      </div>
    </section>
  )
}
