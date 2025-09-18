import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import circle from "@/assets/svg/dashboard/record-circle.svg";

const workoutPlan = {
  title: "Workout Plan",
  price: 5,
  features: [
    "Personalized AI Responses",
    "Extended Plan Duration",
    "Detailed Progress Tracking",
    "Premium Workout Routines",
    "Exclusive Expert Tips",
  ],
  active: true,
};

type TUpgradeWorkoutPlanProps = {
  className: string;
};

function UpgradeWorkoutPlanCard({ className }: TUpgradeWorkoutPlanProps) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2 bg-gray-200 p-3 rounded-lg">
          <Image src={circle} alt="circle" />
          <CardTitle className="text-lg md:text-xl font-bold text-gray-800">
            {workoutPlan.title}
          </CardTitle>
        </div>
        <div className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
          ${workoutPlan.price}
        </div>
      </CardHeader>

      <CardContent className="space-y-3 max-w-sm mx-auto">
        {workoutPlan.features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
            {feature}
          </div>
        ))}

        <div className="pt-4 text-center">
          <Button className={`px-10 bg-[#252525] text-white hover:bg-black`}>
            Bye Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UpgradeWorkoutPlanCard;
