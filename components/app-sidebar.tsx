"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarCertificateIcon,
  SidebarCertificateSolidIcon,
  SidebarCourseIcon,
  SidebarCourseSolidIcon,
  SidebarDashboardIcon,
  SidebarDashboardSolidIcon,
  SidebarPreferencesIcon,
  SidebarPreferencesSolidIcon,
  SidebarSupportIcon,
  SidebarSupportSolidIcon,
  SidebarTransactionIcon,
  SidebarTransactionSolidIcon,
  SidebarUserIcon,
  SidebarUserSolidIcon,
} from "./custom-icons"
import { LogOut } from "lucide-react"

const group1 = [
  {
    title: "Dashboard",
    url: "/authed/dashboard",
    icon: <SidebarDashboardIcon />,
    iconSolid: <SidebarDashboardSolidIcon />,
  },
  {
    title: "Course",
    url: "/authed/course",
    icon: <SidebarCourseIcon />,
    iconSolid: <SidebarCourseSolidIcon />,
  },
  {
    title: "Certificate",
    url: "/authed/certificate",
    icon: <SidebarCertificateIcon />,
    iconSolid: <SidebarCertificateSolidIcon />,
  },
  {
    title: "Transaction",
    url: "/authed/transaction",
    icon: <SidebarTransactionIcon />,
    iconSolid: <SidebarTransactionSolidIcon />,
  },
]

const group2 = [
  {
    title: "Preferences",
    url: "/authed/preferences",
    icon: <SidebarPreferencesIcon />,
    iconSolid: <SidebarPreferencesSolidIcon />,
  },
  {
    title: "Help & Support",
    url: "/authed/support",
    icon: <SidebarSupportIcon />,
    iconSolid: <SidebarSupportSolidIcon />,
  },
  {
    title: "User",
    url: "/authed/user",
    icon: <SidebarUserIcon />,
    iconSolid: <SidebarUserSolidIcon />,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar collapsible="none">
      <SidebarHeader className="bg-white h-14 p-3">
        <div className="flex items-center gap-1">
          <Image
            src="/img/logo.png"
            alt="MPJA"
            width={41}
            height={33}
            priority
          />
          <span className="font-bold text-lg">MPJA Learning</span>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        pathname === item.url
                          ? "text-rose-600"
                          : "text-secondary",
                      )}
                    >
                      {pathname === item.url ? item.iconSolid : item.icon}
                      <span className="font-semibold text-sm">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Setting</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        pathname === item.url
                          ? "text-rose-600"
                          : "text-secondary",
                      )}
                    >
                      {pathname === item.url ? item.iconSolid : item.icon}
                      <span className="font-semibold text-sm">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bottom-6 absolute">
        <div className="bg-[#F8FAFC] flex w-full gap-2 flex-row justify-between items-center">
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
          <LogOut size={16} className="text[#64748B]" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
