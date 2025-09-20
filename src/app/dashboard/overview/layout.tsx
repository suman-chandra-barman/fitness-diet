import { Button } from "@/components/ui/button";
import { Bell, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

function OverviewLaybout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="pt-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Overview
        </h1>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/overview/create-plan">
            <Button className="flex items-center font-medium space-x-2 px-4 py-2 cursor-pointer">
              <div className="border border-white rounded p-0.5">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span>Add New Plan</span>
            </Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="border-0 rounded-full text-black"
          >
            <Bell className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {children}
    </section>
  );
}

export default OverviewLaybout;
