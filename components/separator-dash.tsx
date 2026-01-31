import { cn } from "@/lib/utils"

export const SeparatorDash = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "my-3 h-0.5 w-full bg-[linear-gradient(to_right,#e2e8f0_50%,transparent_50%)] bg-size-[24px_2px] bg-repeat-x",
      className,
    )}
  />
)
