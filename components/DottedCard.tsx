import React from 'react';
import { cn } from "@/lib/utils";

export default function DottedCard({ 
  children, 
  className,
  padding="p-8"
}: { 
  children?: React.ReactNode;
  className?: string; 
  padding?: string;
}) {
  return (
    <div className={cn("relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-pink-50", className)}>
      <div className="absolute inset-0 h-full w-full pointer-events-none bg-[radial-gradient(circle,#fda4af_2px,transparent_2px)] bg-size-[16px_16px] opacity-40"></div>
      <div className={cn("relative z-10 w-full flex items-center justify-center", padding)}>
        {children}
      </div>
    </div>
  );
}
