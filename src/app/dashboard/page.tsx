import React from "react";
import { Bell, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import calorie from "@/assets/svg/dashboard/calorie.svg";
import protine from "@/assets/svg/dashboard/protien.svg";
import fat from "@/assets/svg/dashboard/fat.svg";
import carb from "@/assets/svg/dashboard/carb.svg";
import Image from "next/image";
import diet from "@/assets/svg/dashboard/Diet Plan.svg";
import workout from "@/assets/svg/dashboard/Workout Plan.svg";
import DietProgressChart from "@/components/charts/DietProgressChart";
import WorkoutProgressChart from "@/components/charts/WorkoutProgressChart";
import YourGoal from "@/components/dashboard/overview/YourGoal";
import PlanAnalytics from "@/components/charts/PlanAnalytics";

const OverviewPage = () => {
  const analyticsData = [
    { day: "Jan", diet: 40, workout: 30, monthly: 25 },
    { day: "Feb", diet: 45, workout: 35, monthly: 30 },
    { day: "Mar", diet: 50, workout: 40, monthly: 35 },
    { day: "Apr", diet: 55, workout: 45, monthly: 40 },
    { day: "May", diet: 60, workout: 50, monthly: 45 },
    { day: "Jun", diet: 65, workout: 55, monthly: 50 },
  ];

  const nutritionStats = [
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
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
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
              <Card key={index} className="p-4 border-0 shadow-none">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center text-white text-lg`}
                  >
                    <Image
                      src={stat.icon}
                      alt={stat.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      {stat.name}
                    </p>
                    <p className="text-xl font-bold text-gray-400">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <YourGoal />
          <PlanAnalytics hasData={false} />
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
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  <svg
                    className="w-32 h-32 transform -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="rgb(229 231 235)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="rgb(249 115 22)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${0 * 3.14159} ${100 * 3.14159}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">
                      00<span className="text-lg">%</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Start Plan */}
              <div className="text-center space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-purple-600">
                  Start Your First Plan
                </h3>
                <p className=" text-gray-600">
                  Create a plan for see your progress
                </p>
              </div>

              {/* Diet Plan Card */}
              <Card className="border-2 border-gray-100">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <Image
                        src={diet}
                        alt="Diet Plan Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  <div className="text-lg md:text-xl">
                    <p className="text-gray-600">Create Your Personalize</p>
                    <h4 className="font-bold text-purple-600">Diet Plan</h4>
                  </div>
                  <Button className=" text-white w-full">Create Plan</Button>
                </CardContent>
              </Card>

              {/* Workout Plan Card */}
              <Card className="border-2 border-gray-100">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="w-14 h-14  flex items-center justify-center">
                      <Image
                        src={workout}
                        alt="Workout Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  <div className="text-lg md:text-xl">
                    <p className="text-gray-600">Create Your Personalize</p>
                    <h4 className="font-bold text-purple-600">Workout Plan</h4>
                  </div>
                  <Button className=" text-white w-full">Create Plan</Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
