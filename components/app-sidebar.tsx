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
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Link from "next/link"

const group1 = [
  {
    title: "Dashboard",
    url: "/authed/dashboard",
    icon: Home,
  },
  {
    title: "Course",
    url: "/authed/course",
    icon: Inbox,
  },
  {
    title: "Certificate",
    url: "/authed/certificate",
    icon: Calendar,
  },
  {
    title: "Transaction",
    url: "/authed/transaction",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/authed/settings",
    icon: Settings,
  },
]

const group2 = [
  {
    title: "Preferences",
    url: "/authed/settings",
    icon: Home,
  },
  {
    title: "Help & Support",
    url: "/authed/support",
    icon: Inbox,
  },
  {
    title: "User",
    url: "/authed/profile",
    icon: Calendar,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <h2>
          <span>LOGO</span>
          <span>MPJA Learning</span>
        </h2>
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
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Footer / User</SidebarFooter>
    </Sidebar>
  )
}
