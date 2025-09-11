"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import overview from "@/assets/svg/dashboard/Widget 5.svg";
import workout from "@/assets/svg/dashboard/Workout Plan.svg";
import diet from "@/assets/svg/dashboard/Diet Plan.svg";
import upgrade from "@/assets/svg/dashboard/Crown Line.svg";
import { LogOut, MoveUpRight, User } from "lucide-react";
import { Progress } from "../ui/progress";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: overview,
  },
  {
    title: "Diet Plan",
    url: "/dashboard/diet-plan",
    icon: diet,
  },
  {
    title: "Workout Plan",
    url: "/dashboard/workout-plan",
    icon: workout,
  },
  {
    title: "Upgrade",
    url: "/dashboard/upgrade",
    icon: upgrade,
  },
];
const footerItems = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: <User />,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: <LogOut />,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-20">
        <Link href="/dashboard" className="text-lg font-bold">
          <Image src={logo} alt="Logo" width={100} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={
                      pathname === item.url
                        ? "bg-orange-500 hover:bg-orange-500 text-white hover:text-white"
                        : ""
                    }
                  >
                    <Link href={item.url}>
                      <span
                        className={`relative w-6 h-6 flex-shrink-0 transition-all duration-200 ${
                          pathname === item.url ? "brightness-0 invert" : ""
                        }`}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          sizes="24px"
                          className="object-contain"
                        />
                      </span>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="py-10">
        {state === "expanded" && (
          <div className="bg-orange-100 p-4 rounded-xl border border-orange-500">
            <div className="flex items-center justify-between">
              <p>Profile Set-up</p>
              <span>
                <MoveUpRight className="text-orange-500" />
              </span>
            </div>
            <div className="text-orange-500">
              <span className="text-2xl font-semibold">33% </span>
              <Progress value={33} className="bg-gray-300 h-4 rounded-full" />
            </div>
          </div>
        )}
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={
                  pathname === item.url
                    ? "bg-orange-500 text-white hover:text-white"
                    : ""
                }
              >
                <Link href={item.url}>
                  <span
                    className={`relative w-6 h-6 flex-shrink-0 transition-all duration-200 ${
                      pathname === item.url ? "text-white" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
