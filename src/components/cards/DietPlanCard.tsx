import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import diet from "@/assets/svg/dashboard/diet light.svg";
import { useRouter } from "next/navigation";

type TDietPlanCardProps = {
  className?: string;
};

function DietPlanCard({ className }: TDietPlanCardProps) {
  const router = useRouter();

  return (
    <Card className={className}>
      <CardContent className="p-6 text-center space-y-2">
        <div className="flex justify-center">
          <div className="w-14 h-14 flex items-center justify-center">
            <Image src={diet} alt="Diet Plan Icon" width={40} height={40} />
          </div>
        </div>
        <div className="text-lg md:text-xl">
          <p className="text-gray-600">Create Your Personalize</p>
          <h4 className="font-bold text-purple-600">Diet Plan</h4>
        </div>
        <Button
          className="text-white mt-6"
          onClick={() => router.push("/dashboard/create-diet-plan")}
        >
          Create Plan
        </Button>
      </CardContent>
    </Card>
  );
}

export default DietPlanCard;
