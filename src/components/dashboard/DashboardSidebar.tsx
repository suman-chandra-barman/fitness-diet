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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
    url: "/dashboard/overview",
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
    isLogout: false,
  },
  {
    title: "Logout",
    url: "",
    icon: <LogOut />,
    isLogout: true,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    // For example:
    // - Clear authentication tokens
    // - Redirect to login page
    // - Clear user session
    // router.push('/login');
    setIsLogoutOpen(false); // Close the dialog
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-20 mt-6">
        <Link href="/dashboard/overview" className="text-lg font-bold">
          <Image src={logo} alt="Logo" width={100} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`
          py-5 transition-all duration-200
          ${
            pathname.startsWith(item.url)
              ? "bg-orange-500 hover:bg-orange-500 text-white hover:text-white"
              : "hover:bg-gray-100"
          }
          ${
            state === "collapsed"
              ? "w-10 h-10 p-0 mx-auto rounded-lg justify-center items-center"
              : ""
          }
        `}
                  >
                    <Link
                      href={item.url}
                      className={`
            ${
              state === "collapsed"
                ? "flex justify-center items-center w-full h-full"
                : "flex items-center"
            }
          `}
                    >
                      <span
                        className={`
              w-6 h-6 flex-shrink-0 transition-all duration-200
              ${pathname.startsWith(item.url) ? "brightness-0 invert" : ""}
              ${state === "collapsed" ? "mx-0" : ""}
            `}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          className="object-contain w-full h-full"
                        />
                      </span>
                      {state === "expanded" && (
                        <span className="lg:ml-3">{item.title}</span>
                      )}
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
          <div className="bg-orange-100 p-4 rounded-xl border border-orange-500 mb-4">
            <div className="flex items-center justify-between">
              <p>Profile Set-up</p>
              <span>
                <MoveUpRight className="text-orange-500" />
              </span>
            </div>
            <div className="text-orange-500">
              <span className="text-2xl font-semibold">33% </span>
              <Progress
                value={33}
                className="bg-gray-300 rounded-full mt-2 h-1.5"
              />
            </div>
          </div>
        )}
        <SidebarMenu className="gap-4">
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              {!item.isLogout && (
                <SidebarMenuButton
                  asChild
                  className={`
            py-5 transition-all duration-200
            ${
              pathname.startsWith(item.url)
                ? "bg-orange-500 hover:bg-orange-500 text-white hover:text-white"
                : "hover:bg-gray-100"
            }
            ${
              state === "collapsed"
                ? "w-10 h-10 p-0 mx-auto rounded-lg justify-center items-center"
                : ""
            }
          `}
                >
                  <Link
                    href={item.url}
                    className={`
              ${
                state === "collapsed"
                  ? "flex justify-center items-center w-full h-full"
                  : "flex items-center"
              }
            `}
                  >
                    <span
                      className={`
                w-6 h-6 flex-shrink-0 transition-all duration-200
                ${pathname.startsWith(item.url) ? "text-white" : ""}
              `}
                    >
                      {item.icon}
                    </span>
                    {state === "expanded" && (
                      <span className="lg:ml-3">{item.title}</span>
                    )}
                  </Link>
                </SidebarMenuButton>
              )}
              {item.isLogout && (
                <AlertDialog open={isLogoutOpen} onOpenChange={setIsLogoutOpen}>
                  <AlertDialogTrigger asChild>
                    <SidebarMenuButton
                      className={`
                py-5 transition-all duration-200 hover:bg-red-50 cursor-pointer
                ${
                  state === "collapsed"
                    ? "w-10 h-10 p-0 mx-auto rounded-lg justify-center items-center"
                    : ""
                }
              `}
                    >
                      <div
                        className={`
                  ${
                    state === "collapsed"
                      ? "flex justify-center items-center w-full h-full"
                      : "flex items-center"
                  }
                `}
                      >
                        <span className="w-6 h-6 flex-shrink-0 transition-all duration-200 text-red-500">
                          {item.icon}
                        </span>
                        {state === "expanded" && (
                          <span className="lg:ml-3 text-red-500">
                            {item.title}
                          </span>
                        )}
                      </div>
                    </SidebarMenuButton>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Logout Confirmation</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to logout? You will need to sign
                        in again to access your account.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600"
                      >
                        Logout
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
