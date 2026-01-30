import { cn } from "@/lib/utils"

export const DashboardWrapper = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => (
  <div className={cn("px-6 py-7 space-y-6 max-w-7xl pt-24.25", className)}>
    {children}
  </div>
)
