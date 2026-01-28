import { cn } from "@/lib/utils"

export const CopyrightMpja = ({ className }: { className?: string }) => (
  <div className={cn("text-secondary flex justify-between", className)}>
    <p className="whitespace-nowrap">
      © {new Date().getFullYear()} MPJA Learning. All rights reserved.
    </p>
    <p className="whitespace-nowrap">Privacy Policy • Terms of Service</p>
  </div>
)
