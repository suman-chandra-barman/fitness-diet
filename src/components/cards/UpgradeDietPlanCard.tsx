import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import circle from "@/assets/svg/dashboard/record-circle.svg";

const dietPlan = {
  title: "Diet Plan",
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

type TUpgradeDietPlanProps = {
  className: string;
};

function UpgradeDietPlanCard({ className }: TUpgradeDietPlanProps) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2 bg-gray-200 p-3 rounded-lg">
          <Image src={circle} alt="circle" />
          <CardTitle className="text-lg md:text-xl font-bold text-gray-800">
            {dietPlan.title}
          </CardTitle>
        </div>
        <div className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
          ${dietPlan.price}
        </div>
      </CardHeader>

      <CardContent className="space-y-3 max-w-sm mx-auto">
        {dietPlan.features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
            {feature}
          </div>
        ))}

        <div className="pt-4 text-center">
          <Button
            className={`px-10 ${
              dietPlan.active
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            {dietPlan.active ? "Active" : "Choose"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UpgradeDietPlanCard;
