"use client"

import { Input } from "@/components/ui/input"
import { BellRing, Search } from "lucide-react"
import Image from "next/image"

export const DashboardHeader = ({ title }: { title: string }) => (
  <div className="bg-white h-14.25 px-4 flex justify-between items-center border-b-2">
    {/* Title */}
    <h2 className="text-primary capitalize font-bold text-lg">{title}</h2>
    <div className="gap-5 flex items-center">
      {/* Search Input */}
      <div className="relative">
        <div>
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <Input
          className="w-116 text-secondary text-sm pl-10 pr-4"
          placeholder={`Search your course`}
        />
      </div>
      {/* Notification  */}
      <div className="border rounded-sm relative size-8">
        <BellRing
          size={16}
          className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-1/2"
        />
      </div>
      {/* Avatar */}
      <UserAvatar />
    </div>
  </div>
)

const UserAvatar = () => (
  <div className="flex gap-2 flex-row items-center">
    <Image
      src="/img/avatar.png"
      alt="User Avatar"
      width={32}
      height={32}
      priority
      className="object-cover"
    />
    <article className="w-30">
      <p className="font-semibold text-xs text-[#0F172A] whitespace-nowrap truncate">
        Daenar Kurniawan
      </p>
      <p className="text-[#64748B] text-[10px] whitespace-nowrap truncate">
        daenaraji@gmail.com
      </p>
    </article>
  </div>
)
