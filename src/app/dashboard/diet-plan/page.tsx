import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DietPlanCard from "@/components/cards/DietPlanCard";
import Link from "next/link";
import DietProgressChart from "@/components/charts/DietProgressChart";
import DietPlanReport from "@/components/dashboard/diet-plan/DietPlanReport";
import AIChatbot from "@/components/dashboard/AIChatbot";

export default function DietPlanPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 ">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
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
      <div className="mb-4">
        <DietProgressChart />
      </div>

      <div className="max-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 flex items-center justify-between">
            {/* Empty State */}
            {/* <DietPlanCard className="max-w-md mx-auto border-0 shadow-none" /> */}
            <DietPlanReport />
          </div>
          <div className="relative col-span-1">
            <AIChatbot />
          </div>
        </div>
      </div>
    </div>
  );
}
