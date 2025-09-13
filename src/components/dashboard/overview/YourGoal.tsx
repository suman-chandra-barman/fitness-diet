"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface Goal {
  id: string;
  title: string;
  currentWeight: number;
  targetWeight: number;
  unit: string;
}

const YourGoal = () => {
  const router = useRouter();
  // Simulate having a goal - set to null to show "Add Goal" button
  const [goal, setGoal] = useState<Goal | null>({
    id: "1",
    title: "My fat loss goal",
    currentWeight: 92,
    targetWeight: 70,
    unit: "KG",
  });

  const handleAddGoal = () => {
    router.push("/dashboard/create-goal");
  };

  const calculateProgress = () => {
    if (!goal) return 0;
    const totalLoss = goal.currentWeight - goal.targetWeight;
    const currentLoss = goal.currentWeight - goal.targetWeight; // This would be dynamic in real app
    return Math.min((currentLoss / totalLoss) * 100, 100);
  };

  if (!goal) {
    return (
      <Card className="border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl font-semibold">
            Your Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-10 bg-gray-100 rounded-2xl">
            <button className="flex items-center font-medium space-x-2 hover:bg-gray-200 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600">
              <div className="border border-gray-600 rounded p-0.5">
                <Plus className="w-4 h-4" />
              </div>
              <span>Create Your Goal</span>
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const progress = calculateProgress();

  return (
    <Card className="w-full bg-white border-0 shadow-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-6 h-6 p-0 rounded border-gray-300 hover:border-gray-400"
            onClick={handleAddGoal}
          >
            <Plus className="w-4 h-4 text-gray-800" />
          </Button>
        </div>

        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex-1 text-left md:flex items-center justify-between bg-gray-100 p-2 rounded-lg">
            <p className="text-sm text-gray-500 mb-1 font-medium">
              Current Weight
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {goal.currentWeight}
              <span className="text-sm text-gray-500">{goal.unit}</span>
            </p>
          </div>
          <div className="text-center px-4">
            <span className="text-gray-400">–</span>
          </div>
          <div className="flex-1 text-right md:flex items-center justify-between bg-gray-100 p-2 rounded-lg">
            <p className="text-sm text-gray-500 mb-1 font-medium">
              Goal Weight
            </p>
            <p className="text-2xl font-bold text-blue-600">
              {goal.targetWeight}
              <span className="text-sm text-gray-500">{goal.unit}</span>
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="flex items-center gap-1 mb-2">
            {/* Progress segments */}
            <div className="flex-1 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
            <div className="flex-1 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-sm"></div>
            <div className="flex-1 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-sm"></div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default YourGoal;
