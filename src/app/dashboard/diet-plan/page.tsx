import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import DietProgressChart from "@/components/charts/DietProgressChart";
import DietPlanReport from "@/components/dashboard/diet-plan/DietPlanReport";
import AIChatbot from "@/components/dashboard/AIChatbot";

export default function DietPlanPage() {
  return (
    <div className="min-h-screen pt-6 pb-12 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Diet Plan Report
        </h3>
        <Link href="/dashboard/create-goal">
          <Button
            variant="outline"
            className="flex items-center font-medium space-x-2 px-4 py-2 bg-orange-50 hover:bg-orange-100  cursor-pointer"
          >
            <div className="border border-orange-500 hover:border-orange-600 rounded p-0.5">
              <Plus className="w-4 h-4 text-orange-500 hover:text-orange-600" />
            </div>
            <span>New Diet Plan</span>
          </Button>
        </Link>
      </div>

      {/* Diet Progress Chart */}
      <DietProgressChart className="w-full bg-white p-4 gap-4" />

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 flex items-center justify-between">
          {/* Empty State */}
          {/* <DietPlanCard className="max-w-md mx-auto border-0 shadow-none" /> */}
          <DietPlanReport />
        </div>
        <AIChatbot />
      </div>
    </div>
  );
}
