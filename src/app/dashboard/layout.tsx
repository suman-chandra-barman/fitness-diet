import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="relative">
        <div className="absolute top-[30px] md:left-[-13px] z-10">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout;
