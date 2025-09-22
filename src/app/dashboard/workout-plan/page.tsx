import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import AIChatbot from "@/components/dashboard/AIChatbot";
import WorkoutProgressChart from "@/components/charts/WorkoutProgressChart";
import WorkoutPlanReport from "@/components/dashboard/workout-plan/WorkoutPlanReport";

export default function WorkoutPlanPage() {
  return (
    <div className="min-h-screen pt-6 pb-12 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Workout Plan Report
        </h3>
        <Link href="/dashboard/workout-plan/create-workout-plan">
          <Button
            variant="outline"
            className="flex items-center font-medium space-x-2 px-4 py-2 bg-orange-50 hover:bg-orange-100  cursor-pointer"
          >
            <div className="border border-orange-500 hover:border-orange-600 rounded p-0.5">
              <Plus className="w-4 h-4 text-orange-500 hover:text-orange-600" />
            </div>
            <span>New Workout Plan</span>
          </Button>
        </Link>
      </div>

      {/* Workout Progress Chart */}
      <WorkoutProgressChart className="w-full bg-white p-4 gap-4" />

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 flex items-center justify-between">
          {/* Empty State */}
          {/* <WorkoutPlanCard className="max-w-md mx-auto border-0 shadow-none" /> */}
          <WorkoutPlanReport />
        </div>
        <AIChatbot />
      </div>
    </div>
  );
}
