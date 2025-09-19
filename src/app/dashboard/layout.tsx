"use client";

import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarWidth, setSidebarWidth] = useState("14rem");

  useEffect(() => {
    const updateSidebarWidth = () => {
      const width = window.innerWidth;

      if (width >= 1536) {
        setSidebarWidth("16rem");
      } else if (width >= 1280) {
        setSidebarWidth("14rem");
      } else if (width >= 1024) {
        setSidebarWidth("12rem");
      } else if (width >= 768) {
        setSidebarWidth("10rem");
      } else {
        setSidebarWidth("8rem");
      }
    };

    // Set initial width
    updateSidebarWidth();

    // Add event listener
    window.addEventListener("resize", updateSidebarWidth);

    // Cleanup
    return () => window.removeEventListener("resize", updateSidebarWidth);
  }, []);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": sidebarWidth,
        } as React.CSSProperties
      }
    >
      <DashboardSidebar />
      <main className="relative w-full bg-gray-100 px-4 lg:px-6">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout;
