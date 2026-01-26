import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none outline-none focus-visible:shadow-[0px_0px_0px_4px_rgba(251,113,133,0.25)] active:scale-[0.98] active:shadow-inner",
  {
    variants: {
      variant: {
        // default:
        //   "bg-gradient-to-b from-rose-500 to-rose-600 text-white shadow-[0_0_0_1px_rgba(251,113,133,1),0_1px_3px_-1px_rgba(251,113,133,1),inset_0_1px_0_0_rgba(251,113,133,1)] hover:opacity-90",
        default:
          "text-white bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.16)_100%),linear-gradient(180deg,#F43F5E_0%,#E11D48_100%)] shadow-[0px_1px_3px_-1px_#FB7185,0px_0px_0px_1px_#FB7185,inset_0px_1px_0px_#FB7185] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.16)_100%),linear-gradient(180deg,#FECDD3_0%,#E11D48_100%)] transition-all ease-in-out",
        secondary:
          "bg-[#FDF2F8] text-rose-600 shadow-[0px_1px_3px_-1px_#FB7185,0px_0px_0px_1px_#FB7185,inset_0px_1px_0px_#FB7185]  transition-all ease-in-out hover:shadow-none",
        outline:
          "bg-white text-rose-600 border border-[#E11D48] shadow-none hover:bg-[#FDF2F8] transition-all ease-in-out",
        ghost:
          "bg-transparent text-rose-600 p-0 h-auto shadow-none hover:bg-[#FDF2F8] transition-all ease-in-out",
        link: "text-rose-500 underline-offset-4 hover:underline",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        xs: "h-6 w-24 gap-1.5 px-2.5 py-1 rounded-xl",
        sm: "h-9 rounded-lg gap-1.5 px-4",
        lg: "h-12 rounded-xl px-6 text-base",
        xl: "h-14 rounded-xl px-8 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
