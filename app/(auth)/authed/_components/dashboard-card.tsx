import { ArrowRightIcon } from "@/components/custom-icons"
import { cn } from "@/lib/utils"

type DashboardCard = {
  name: string
  value: string
  bgIconColor: string
  children: React.ReactNode
}

export function DashboardCard({
  name,
  value,
  bgIconColor,
  children,
}: DashboardCard) {
  return (
    <div className="relative w-full max-w-xs rounded-4xl border bg-white p-4 shadow-sm">
      <div className="flex justify-start space-x-5">
        <div
          className={cn(
            "flex size-15 items-center justify-center rounded-full",
            bgIconColor,
          )}
        >
          {children}
        </div>
        <article className="flex flex-col items-start space-y-5">
          <h3 className="font-medium text-secondary capitalize">{name}</h3>
          <p className="text-[36px] font-bold text-primary">{value}</p>
        </article>
      </div>

      <div className="my-4 h-0.5 w-full bg-[linear-gradient(to_right,#e2e8f0_50%,transparent_50%)] bg-size-[24px_2px] bg-repeat-x"></div>

      <div className="flex justify-between items-center w-full">
        <button className="flex items-center gap-2 text-xs font-bold text-rose-600 transition-colors cursor-pointer">
          See All Detail
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </div>
  )
}
