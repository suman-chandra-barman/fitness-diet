"use client";

import React from "react";
import { Bell, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import calorie from "@/assets/svg/dashboard/calorie.svg";
import protine from "@/assets/svg/dashboard/protien.svg";
import fat from "@/assets/svg/dashboard/fat.svg";
import carb from "@/assets/svg/dashboard/carb.svg";
import DietProgressChart from "@/components/charts/DietProgressChart";
import WorkoutProgressChart from "@/components/charts/WorkoutProgressChart";
import YourGoal from "@/components/dashboard/overview/YourGoal";
import PlanAnalytics from "@/components/charts/PlanAnalytics";
import { useRouter } from "next/navigation";
import DietPlanCard from "@/components/cards/DietPlanCard";
import WorkoutPlanCard from "@/components/cards/WorkoutPlanCard";
import TodayProgressCircleCard from "@/components/cards/TodayProgressCircleCard";
import NutritionCard from "@/components/cards/NutritionCard";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TNutritionStat = {
  name: string;
  value: string;
  color: string;
  icon: string | StaticImport;
};

const OverviewPage = () => {
  const router = useRouter();

  const nutritionStats: TNutritionStat[] = [
    { name: "Calorie", value: "00", color: "bg-green-500", icon: calorie },
    { name: "Protein", value: "00g", color: "bg-blue-500", icon: protine },
    { name: "Fat", value: "00g", color: "bg-orange-500", icon: fat },
    { name: "Carb", value: "00g", color: "bg-purple-500", icon: carb },
  ];

  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Overview
        </h1>
        <div className="flex items-center gap-3">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => router.push("/dashboard/create-plan")}
          >
            <div className="border border-white rounded p-0.5">
              <Plus className="w-4 h-4" />
            </div>
            New Add Plan
          </Button>
          <Button variant="outline" size="icon">
            <Bell className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Charts Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <DietProgressChart />
            <WorkoutProgressChart />
          </div>

          {/* Nutrition Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nutritionStats.map((stat, index) => (
              <NutritionCard key={index} stat={stat} />
            ))}
          </div>
          <YourGoal />
          <PlanAnalytics hasData={true} />
        </div>

        {/* Right Column - Today's Plan */}
        <div className="space-y-6">
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl font-bold">
                Today&apos;s Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Circle */}
              <TodayProgressCircleCard />
              {/* Diet Plan Card */}
              <DietPlanCard className="border-1 shadow-sm" />
              {/* Workout Plan Card */}
              <WorkoutPlanCard className="border-1 shadow-sm" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
