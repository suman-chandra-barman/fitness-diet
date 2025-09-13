import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import workout from "@/assets/svg/dashboard/workout light.svg";

type TWorkoutPlanCardProps = {
  className?: string;
};

function WorkoutPlanCard({ className }: TWorkoutPlanCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6 text-center space-y-2">
        <div className="flex justify-center">
          <div className="w-14 h-14  flex items-center justify-center">
            <Image src={workout} alt="Workout Icon" width={40} height={40} />
          </div>
        </div>
        <div className="text-lg md:text-xl">
          <p className="text-gray-600">Create Your Personalize</p>
          <h4 className="font-bold text-purple-600">Workout Plan</h4>
        </div>
        <Button className=" text-white w-full">Create Plan</Button>
      </CardContent>
    </Card>
  );
}

export default WorkoutPlanCard;
